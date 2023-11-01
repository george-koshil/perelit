"use client"

import React, { useState, useRef, InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: 'outlined' | 'standard';
}

const Input: React.FC<InputProps> = ({ label, variant = 'standart', ...restProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClickLabel = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={`relative ${isFocused ? 'focused' : ''}`}>
      <label
        className={`absolute left-3 transition-all duration-200 ${(isFocused || restProps.value) ? '-top-[5px] text-xs text-primary cursor-text' : 'top-2 text-sm text-secondaryText cursor-text'}`}
        onClick={handleClickLabel}
      >
        {label}
      </label>
      <input
        {...restProps}
        type="text"
        className={`w-full px-3 py-2 focus:outline-none ${
          variant === 'outlined'
            ? 'border rounded-md focus:border-blue-500'
            : ''
        } ${isFocused && variant === 'outlined' ? 'border-blue-500' : ''}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
      />
    </div>
  );
};

export default memo(Input);
