import React from 'react';
import styles from "../card.css";

export function Preview() {

    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src="https://fikiwiki.com/uploads/posts/2022-02/1645058097_26-fikiwiki-com-p-kartinki-s-khoroshim-kachestvom-30.jpg"
                alt="prev"/>
        </div>
    );
}

