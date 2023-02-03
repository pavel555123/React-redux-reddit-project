import {MenuIcon} from "./MenuIcon";

export enum EIcons {
    menu
}

const result = {
    [EIcons.menu]: <MenuIcon/>,
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
