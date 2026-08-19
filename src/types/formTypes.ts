import type { Dispatch, SetStateAction } from "react";

export interface FormFieldProps {
    label:string,
    setFunction: Dispatch<SetStateAction<number>>
}