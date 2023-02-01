import React from 'react';
import styles from './userblock.css';
import {EColor, Text} from "../../../Text";
import {IconAnon} from "../../../Icons";

interface IUserBlockProps {
    avatarSrc?: string;
    username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
    return (
        <a
            href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:2000/auth&duration=permanent&scope=read submit identity`}
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <IconAnon/>
                }
            </div>

            <div className={styles.username}>
                <br/>
                <Text size={20} color={username ? EColor.black : EColor.green}>{username || 'Anonim'}</Text>
            </div>
        </a>
    );
}
