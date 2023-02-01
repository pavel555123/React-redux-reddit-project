import {useState} from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {Dropdown} from "./Dropdown";

interface Props {
    title: string;
}

export const Card = ({title}: Props) => {
    const [visible, setVisible] = useState('flex');
    const [value, setValue] = useState('white');

    const closeItem = () => {
        setVisible('none');
    }

    const changeStyle = () => {
        if (value === 'white') {
            setValue('aliceblue');
        } else {
            setValue('white');
        }
    }

    return (
        <li style={{display: visible, backgroundColor: value}} className={styles.card}>
            <TextContent title={title}/>
            <Preview/>
            <Menu close={closeItem} change={changeStyle}/>
            <Controls/>
            {/*<Dropdown*/}
            {/*    onClose={() => console.log('Closed')}*/}
            {/*    onOpen={() => console.log('Opened')}*/}
            {/*    isOpen={false}*/}
            {/*    button={<button style={{color: 'teal'}}>Change Style</button>}>*/}
            {/*    <h1>!!!</h1>*/}
            {/*</Dropdown>*/}
        </li>
    );
}
