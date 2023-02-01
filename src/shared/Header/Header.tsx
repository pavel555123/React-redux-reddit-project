import React from 'react';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import styles from "./header.css";

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock/>
            <ThreadTitle/>
            <SortBlock/>
        </header>
    );
}
