import { forwardRef } from "react";
import classNames from "classnames";
import { ButtonProps } from "@/types/props/ButtonProps";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  color = "primary",
  variant = "filled",
  text = "Button",
  className,
  isIconButton = false,
  ...props
}, ref) => {
  const getVariantStyles = () => {
    const baseStyles = classNames(
      className,
      "w-fit flex items-center justify-center text-regular-1 rounded-full transition-colors focus:outline-none hover:cursor-pointer",
      {
        "px-6 py-4": !isIconButton,
        "p-2": isIconButton,
      }
    );

    if (variant === "filled") {
      return classNames(baseStyles, "text-white", {
        "bg-primary-2 hover:bg-primary-4": color === "primary",
      });
    }

    if (variant === "outlined") {
      return classNames(baseStyles, "border-2", {
        "text-primary-2 border-primary-2 hover:bg-primary-2 hover:text-white": color === "primary",
      });
    }

    return baseStyles;
  };

  return (
    <button
      ref={ref}
      className={classNames(getVariantStyles(), className)}
      {...props}
    >
      {text}
    </button>
  );
});

Button.displayName = "Button";

export default Button;