import React from 'react';
import styles from './title.css';
import {Link} from "react-router-dom";

interface Props {
    title: string;
}

export function Title({title}: Props) {
    return (
        <h2 className={styles.title}>
            <Link to="/posts/1" className={styles.postLink}>
                {title}
            </Link>
        </h2>
    );
}
