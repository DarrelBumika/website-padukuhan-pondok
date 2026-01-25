import classNames from "classnames"

interface DividerProps {
  className?: string
}

const Divider = (
  {
    className
  }: DividerProps
) => {
  return (
    <div
      className={classNames(
        "w-full h-px bg-darker-10",
        className
      )}
    />
  )
}

export default Divider