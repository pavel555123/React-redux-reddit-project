import styles from './cardslist.css';
import {Card} from "./Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";


export function CardsList() {
    const token = useSelector<RootState>(state => state.token);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');

    useEffect(() => {
        if (!token) return;

        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                const {data: {data: {children}}} = await axios.get('https://oauth.reddit.com/rising/',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10
                        }
                    })
                setPosts(children);
            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
        }

        load();
    }, [token])
    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: 'center'}}>No posts</div>
            )}
            {posts.map(post => (
                <Card title={post.data.title} key={post.data.id}/>
            ))}
            {loading && (
                <div style={{textAlign: 'center'}}>Loading...</div>
            )}
            {errorLoading && (
                <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>
            )}
        </ul>
    );
}
