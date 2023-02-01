import React from 'react';
import styles from "../card.css";
import {MenuIcon} from "../../../Icons";
import {Dropdown} from "../Dropdown";

export const Menu = ({close, change}: any) => {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon/>
                    </button>
                }
            >
                <div className={styles.dropdown}>
                    <button onClick={() => change()}>
                        ChangeStyle
                    </button>
                    <button onClick={() => close()} className={styles.closeButton}>
                        Close
                    </button>
                </div>
            </Dropdown>
        </div>
    );
}

