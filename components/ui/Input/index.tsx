import classNames from "classnames"
import { forwardRef, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled,
  readOnly,
  className,
  ...props
}, ref) => {
  const classes = classNames(
    "w-lg px-5 py-3 border border-black-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-darker-10 ",
    className
  )

  return (
    <label className="flex flex-col gap-4">
      {label && <span className="text-medium-3 font-black">{label}</span>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        readOnly={readOnly}
        className={classes}
        {...props}
      />
    </label>
  )
})

Input.displayName = "Input"

export default Input