import React from 'react';
import {MenuIcon} from "./MenuIcon";

export enum EIcons {
    menu
}

const result = {
    [EIcons.menu]: <MenuIcon/>,
    // [resultKeys.success]: <StyleDiv>success</StyleDiv>,
};

interface IIconProps {
    svg: EIcons;
}

export function Icon({svg = result[EIcons.menu]}: any) {
    return (
        <div>
            {svg}
        </div>
    );
}