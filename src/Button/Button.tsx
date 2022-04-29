import { ReactElement } from "react";
import tw from "twin.macro";

export enum ButtonSize {
  small = "small",
  large = "large",
}

export enum ButtonWidth {
  fill = "fill",
  content = "content",
}

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  secondaryTonal = "secondaryTonal",
  outlined = "outlined",
  link = "link",
}

/* style for buttons */
const getButtonStyles = (variant: ButtonType | string) => [
  tw``,
  variant === ButtonType.primary &&
    tw`text-light bg-primary-40 dark:text-dark dark:bg-light`,
  variant === ButtonType.secondary &&
    tw`text-light bg-secondary-40 dark:bg-secondary-40 dark:text-light`,
];

type ButtonProps = {
  children?: ReactElement;
  className?: string;
  disabled?: boolean;
  href?: string;
  iconRight?: boolean;
  label?: string;
  loading?: boolean;
  onClick?: any;
  size?: ButtonSize | keyof typeof ButtonSize;
  testId?: string;
  variant: ButtonType | keyof typeof ButtonType;
  width?: ButtonWidth | keyof typeof ButtonWidth;
};

export const Button = ({ label, variant }: ButtonProps) => {
  return <div css={getButtonStyles(variant)}>{label}</div>;
};
