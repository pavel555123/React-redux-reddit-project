import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import axios from "axios";
import {useSelector} from "react-redux";


type RootState = {
    token: string;
}

export function CardsList() {
    // const token = useSelector<RootState>(state => state.token);
    // const [posts, setPosts] = useState<any[]>([]);
    // const [loading, setLoading] = useState(false);
    // const [errorLoading, setErrorLoading] = useState('');
    // const [nextAfter, setNextAfter] = useState('');
    //
    // const bottomOfList = useRef<HTMLDivElement>(null);
    //
    // useEffect(() => {
    //     async function load() {
    //         setLoading(true);
    //         setErrorLoading('');
    //
    //         try {
    //             const {data: {data: {after, children}}} = await axios.get('https://oauth.reddit.com/rising/', {
    //                 headers: {Authorization: `bearer ${token}`},
    //                 params: {
    //                     limit: 10,
    //                     after: nextAfter
    //                 }
    //             })
    //
    //             setNextAfter(after);
    //             setPosts(prevChildren => prevChildren.concat(...children));
    //         } catch (error) {
    //             console.log(error);
    //             setErrorLoading(String(error));
    //         }
    //
    //         setLoading(false);
    //     }
    //
    //     const observer = new IntersectionObserver((entries) => {
    //         if (entries[0].isIntersecting) {
    //             load();
    //         }
    //     }, {
    //         rootMargin: '10px'
    //     })
    //
    //     if (bottomOfList.current) {
    //         observer.observe(bottomOfList.current);
    //     }
    //
    //     return () => {
    //         if (bottomOfList.current) {
    //             observer.unobserve(bottomOfList.current);
    //         }
    //     }
    // }, [bottomOfList.current, nextAfter, token])

    return (
        <ul className={styles.cardsList}>
            {/*{posts.length === 0 && !loading && !errorLoading && (*/}
            {/*    <div style={{textAlign: 'center'}}>No posts</div>*/}
            {/*)}*/}

            {/*{posts.map(post => (*/}
            {/*    <Card*/}
            {/*        key={post.data.id}*/}
            {/*        title={post.data.title}/>*/}
            {/*))}*/}

            {/*<div ref={bottomOfList}></div>*/}

            {/*{loading &&*/}
            {/*    <div style={{textAlign: 'center'}}>*/}
            {/*        Loading...*/}
            {/*    </div>}*/}

            {/*{errorLoading && (*/}
            {/*    <div role='alert' style={{textAlign: 'center'}}>*/}
            {/*        {errorLoading}*/}
            {/*    </div>*/}
            {/*)}*/}
            <Card title={'123'}/>
        </ul>
    );
}
