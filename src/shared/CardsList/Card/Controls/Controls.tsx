import styles from "../card.css";

export function Controls() {

    return (
        <div className={styles.controls}>
            <div className={styles.karmaCounter}>
                <button className={styles.up}>
                    <svg className={styles.up} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                         viewBox="0 0 12 16">
                        <path fillRule="evenodd" d="M0 5l6 6 6-6H0z"/>
                    </svg>
                </button>
                <span className={styles.karmaValue}>234</span>
                <button className={styles.down}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 16">
                        <path fillRule="evenodd" d="M0 5l6 6 6-6H0z"/>
                    </svg>
                </button>
            </div>
            <button className={styles.commentsButton}>
                <svg className={styles.commentsButtonSvg} xmlns="http://www.w3.org/2000/svg" version="1.1"
                     id="mdi-comment" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"/>
                </svg>
                <span className={styles.commentsNumber}>13</span>
            </button>
            <div className={styles.actions}>
                <button className={styles.shareButton}>
                    <svg className={styles.shareButton} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path
                            d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                </button>
                <button className={styles.saveButton}>
                    <svg className={styles.saveButton} width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <title>save_alt</title>
                        <desc>Created with Sketch.</desc>
                        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Rounded" transform="translate(-443.000000, -1529.000000)">
                                <g id="Content" transform="translate(100.000000, 1428.000000)">
                                    <g id="-Round-/-Content-/-save_alt"
                                       transform="translate(340.000000, 98.000000)">
                                        <g>
                                            <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                            <path
                                                d="M19,13 L19,18 C19,18.55 18.55,19 18,19 L6,19 C5.45,19 5,18.55 5,18 L5,13 C5,12.45 4.55,12 4,12 C3.45,12 3,12.45 3,13 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,12.45 20.55,12 20,12 C19.45,12 19,12.45 19,13 Z M13,12.67 L14.88,10.79 C15.27,10.4 15.9,10.4 16.29,10.79 C16.68,11.18 16.68,11.81 16.29,12.2 L12.7,15.79 C12.31,16.18 11.68,16.18 11.29,15.79 L7.7,12.2 C7.31,11.81 7.31,11.18 7.7,10.79 C8.09,10.4 8.72,10.4 9.11,10.79 L11,12.67 L11,4 C11,3.45 11.45,3 12,3 C12.55,3 13,3.45 13,4 L13,12.67 Z"
                                                id="🔹Icon-Color" fill="#1D1D1D"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
}

