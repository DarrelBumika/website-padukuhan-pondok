interface ChipProps {
  label: string;
  variant?: 'default' | 'outlined' | 'filled';
  uppercase?: boolean;
}

const Chip = (
  { 
    label,
    variant = 'default',
    uppercase = false 
  }: ChipProps
) => {
  return (
    <div className="w-fit bg-darker-8 text-caption-2 text-lighter-7 px-5 py-2 rounded-full">
      {uppercase ? label.toUpperCase() : label}
    </div>
  );
}

export default Chip;