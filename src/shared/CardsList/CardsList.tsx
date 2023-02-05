import styles from './cardslist.css';
import {Card} from "./Card";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";


export function CardsList() {
    const token = useSelector<RootState>(state => state.token);
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');
    const [nextAfter, setNextAfter] = useState();

    const bottomOfList = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setErrorLoading('');
            try {
                const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/new/',
                    {
                        headers: {Authorization: `bearer ${token}`},
                        params: {
                            limit: 10,
                            after: nextAfter
                        }
                    })
                setNextAfter(after);
                setPosts(prevChildren => prevChildren.concat(...children));
            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                load();
            }
        }, {rootMargin: '10px'})

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [nextAfter, token]);

    return (
        <ul className={styles.cardsList}>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign: 'center'}}>No posts</div>
            )}
            {posts.map(post => (
                <Card title={post.data.title} key={post.data.id}/>
            ))}

            <div ref={bottomOfList}/>

            {loading && (
                <div style={{textAlign: 'center'}}>Loading...</div>
            )}
            {errorLoading && (
                <div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>
            )}
        </ul>
    );
}
