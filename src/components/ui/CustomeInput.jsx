import * as React from "react";

import { cn } from "../../lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { type, name, placeholder, className, handleChange, value } = props;
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      name={name}
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
      value={value}
    />
  );
});
Input.displayName = "Input";

export { Input };

const Textarea = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...restProps}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
