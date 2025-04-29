
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  glowing?: boolean;
}

const CyberButton = forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant = "default", size = "default", glowing = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center text-center font-cyber uppercase tracking-wider transition-all",
          "disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && 
            "bg-cyber-purple text-black hover:bg-cyber-purple/90 border border-cyber-purple/50",
          variant === "outline" && 
            "bg-transparent border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10",
          variant === "ghost" && 
            "bg-transparent text-cyber-purple hover:bg-cyber-purple/10 border-none",
          size === "default" && "h-10 px-6 py-2 text-sm",
          size === "sm" && "h-8 px-4 py-1 text-xs",
          size === "lg" && "h-12 px-8 py-3 text-base",
          glowing && "animate-pulse-glow",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{props.children}</span>
        {variant === "default" && (
          <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple/0 via-cyber-pink/20 to-cyber-blue/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    );
  }
);

CyberButton.displayName = "CyberButton";

export default CyberButton;
