import styles from './text.css';
import classnames from 'classnames';
import {ReactNode} from "react";

export enum EColor {
    black = 'black',
    green = 'green',
    white = 'white',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    children?: ReactNode;
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColor;
    bold?: boolean
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        color = EColor.black,
        bold = false,
        children,
        size,
        mobileSize,
        tabletSize,
        desktopSize
    } = props;
    const classes = classnames(
        styles[`s${size}`],
        styles[color],
        {[styles.bold]: bold},
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
        {[styles[`d${desktopSize}`]]: desktopSize}
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}
