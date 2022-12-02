import React from "react";

export interface IInput {
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    type: string;
    placeholder: string;
}