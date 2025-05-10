import { InputHTMLAttributes } from "react";

export enum InputType {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}
export interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  classname?: string;
  icon: string;
  required?: boolean;
  inputType?: InputType;
  iconClassName?: string;
  password?: boolean;
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
}
