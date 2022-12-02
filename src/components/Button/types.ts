export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
    href?: string;
}

export interface IButtonStyled {
    variant: string;
}