import { forwardRef } from "react";
import { cn } from "@/lib/utils";


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type= "button",
    ...props
}, ref) => {
    return(
        <button 
            className={cn(
                `
                `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;