import styles from "../card.css";
import {Title} from "./Title";

interface Props {
    title: string;
}

export function TextContent({title}: Props) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://w-dog.ru/wallpapers/0/18/375126364398665/bugatti-veyron-164-super-sport-bystryj-superkar-giperkar-chernyj-oranzhevyj.jpg"
                        alt="avatar"
                    />
                    <a href="#user-url" className={styles.username}>Pavel Nikiforov</a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>Published </span>
                        4 hours ago
                    </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Info000000
                </a>
            </h2>
            <Title title={title}/>
        </div>
    );
}
