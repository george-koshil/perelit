import { ReactNode, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useClickOutside from "@/app/hooks/useClickOutside";
import cn from "classnames"

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  triggerClassname?: string;
  contentClassName?: string;
  topLeftShadow?: boolean
  positionX?: "left" | "right"
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  onOpen,
  onClose,
  triggerClassname,
  contentClassName,
  topLeftShadow,
  positionX = "left"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useClickOutside([triggerRef, contentRef], () => {
    setIsOpen(false);
    onClose?.()
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
    isOpen ? onClose?.() : onOpen?.();
  };

  useEffect(() => {
    const setPopoverContentPosition = () => {
      if (isOpen && triggerRef.current && contentRef.current) {
        const anchorRect = triggerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect()

        const left = anchorRect.left - contentRect.width + anchorRect.width
        const right = anchorRect.left

        setPosition({
          top: anchorRect.bottom,
          left: positionX === "left" ? left : right
        });
      }
    };

    const resizeObserver = new ResizeObserver(setPopoverContentPosition)
    resizeObserver.observe(window.document.body)
    setPopoverContentPosition()
    window.addEventListener("scroll", setPopoverContentPosition);
    
    return () => {
      window.removeEventListener("scroll", setPopoverContentPosition)
      resizeObserver.unobserve(window.document.body)
    };
  }, [isOpen, triggerRef, positionX]);

  const popoverStyle: React.CSSProperties = {
    position: "fixed",
    top: `${position.top}px`,
    left: `${position.left}px`,
  };

  const renderTopShadow = () => {
    if (contentRef.current && triggerRef.current) {
      const anchorRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect()

    return (
      <div className={cn("shadow-top absolute top-0 left-0", { "block": topLeftShadow, "hidden" : !topLeftShadow })} style={{
        width: contentRect.width - anchorRect.width,
        height: 20
      }}></div>
    )
    }

    return null
  }

  return (
    <>
      <div ref={triggerRef} onClick={handleToggle} className={triggerClassname}>
        {trigger}
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={contentRef}
            style={popoverStyle}
            className={cn("relative", contentClassName)}
          >
            {renderTopShadow()}
            {content}
          </div>,
          document.body
        )}
    </>
  );
};

export default Popover;
