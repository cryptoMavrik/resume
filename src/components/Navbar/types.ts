import React from "react";

export interface NavMenuProps {
    activeItem?: string;
    children?: React.ReactNode | React.ReactNode[]
}

export type NavItemsType = {
    label: string;
    href: string;
}

export interface NavItemsProps {
    items: NavItemsType[];
    activeItem?: string;
}