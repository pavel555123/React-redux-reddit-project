import {useEffect, useRef} from 'react';
import styles from './post.css';
import {createPortal} from "react-dom";
import {useNavigate} from "react-router-dom";
import {CommentFormContainer} from "../CommentFormContainer";

export function Post() {
    const ref = useRef<HTMLDivElement>(null);
    const history = useNavigate();

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                history('/');
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])

    const node = document.querySelector('#modal__root');
    if (!node) return null;

    return createPortal((
        <div className={styles.modal} ref={ref}>
            <div className={styles.content}>
                <h2>Post</h2>
                <p>43r34ffe</p>
                <p>f345yg4g5</p>
                <p>23er453</p>
                <CommentFormContainer/>
            </div>
        </div>
    ), node);
}
