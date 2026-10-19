import { useState } from "react";

export default function FormField({
  label,
  id,
  type = "text",
  className = "",
  passwordToggle = false,
  ...inputProps
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password' && passwordToggle;
  const inputType = isPassword && showPassword ? 'text' : type;

  return (<div className={`flex flex-col gap-[6px] max-sm:w-full ${className}`}>
    <label
      htmlFor={id}
      className="text-body-large-medium text-white max-sm:text-caption-2-medium"
    >{label}</label>
    <div className="relative">
      <input
        id={id}
        type={inputType}
        className="py-[14px] px-[20px] max-sm:py-2 max-sm:px-3 w-[449px] max-sm:w-full rounded-full border border-[var(--color-outline-border)] text-body-medium-regular max-sm:text-[9.24px] text-white placeholder:text-text-light-secondary"
        { ...inputProps }
      />
      {isPassword && (
        <i
          onClick={() => setShowPassword(prev => !prev)}
          className={`ri-${showPassword ? 'eye-line' : 'eye-off-line'} absolute right-[20px] top-1/2 -translate-y-1/2 text-text-light-disabled text-xl max-sm:text-xs cursor-pointer`}
        ></i>
      )}
    </div>
  </div>);
}