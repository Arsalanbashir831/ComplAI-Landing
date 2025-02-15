'use client';

import * as React from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIconClassName?: string;
  endIconClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      name,
      startIcon,
      endIcon,
      startIconClassName,
      endIconClassName,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className="relative flex w-full items-center">
        {label && (
          <label
            htmlFor={name}
            className="text-muted-foreground absolute left-3 top-2 text-xs"
          >
            {label}
          </label>
        )}
        {startIcon && (
          <span
            className={cn(
              'absolute left-3 text-muted-foreground',
              label && 'pt-6',
              startIconClassName
            )}
          >
            {startIcon}
          </span>
        )}
        <input
          name={name}
          type={inputType}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            label && 'pt-8 pb-4',
            startIcon && 'pl-10',
            (endIcon || isPassword) && 'pr-10',
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 text-muted-foreground focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          endIcon && (
            <span
              className={cn(
                'absolute right-3 text-muted-foreground',
                endIconClassName
              )}
            >
              {endIcon}
            </span>
          )
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
