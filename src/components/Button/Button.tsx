import { FC, ReactNode } from "react";
interface ButtonProps {
  onClick: () => void;
  classes?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  classes,
}): JSX.Element => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
