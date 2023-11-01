'use client'

import useRippleEffect from "@/app/hooks/useRippleEffect"
import cn from "classnames"

interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  const { createRipple, renderRipples } = useRippleEffect();

  return (
    <button className={cn("ripple-button", className)} onClick={(e) => {
      onClick && onClick()
      createRipple(e)
    }}>
      {children}
      {renderRipples()}
    </button>
  );
};

export default Button;