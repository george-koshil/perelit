'use client'

import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import Typography from '../Typography';
import cn from "classnames";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  contentHeight?: number;
  className?: string;
  triggerClasssName?: string
  chevronSrc?: string
  open?: boolean
  trigger?: React.ReactNode
  chevronSize?: number
  titleClassName?: string
  chevronClassName?: string
  onOpen?: () => void
  onClose?: () => void
}

const Accordion: React.FC<AccordionProps> = ({ onOpen, onClose, title, children, contentHeight = 100, className, triggerClasssName, chevronSrc = "./icons/chevron.svg", open = false, trigger, chevronSize, titleClassName, chevronClassName }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    !isOpen && onOpen?.()
    isOpen && onClose?.()
  };

  const contentSpring = useSpring({
    height: isOpen ? `${contentHeight}px` : '0px',
    opacity: isOpen ? 1 : 0,
  });

  return (
      <div className={cn("overflow-hidden", className)}>
        <div
          className={cn("flex justify-between items-center cursor-pointer", triggerClasssName)}
          onClick={toggleAccordion}
        >
          {trigger ? trigger : <Typography variant="L" semibold className={titleClassName}>{title}</Typography>}
          <div className={cn(`transform ${isOpen ? 'rotate-180' : ''} ease-in duration-200`, chevronClassName)}>
            <Image src={chevronSrc} alt="chevron" width={chevronSize || 16} height={chevronSize || 16} />
          </div>
        </div>
        <animated.div style={contentSpring}>
          <div className="pt-[20px]">{children}</div>
        </animated.div>
    </div>
  );
};

export default Accordion;
