import styles from './commentform.css';
import {ChangeEvent, FormEvent} from "react";

type CommentFormProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (event: FormEvent) => void;
}

export function CommentForm({value, onChange, onSubmit}: CommentFormProps) {

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea className={styles.input} value={value} onChange={onChange}/>
            <button type='submit' className={styles.button}>Comment</button>
        </form>
    );
}
