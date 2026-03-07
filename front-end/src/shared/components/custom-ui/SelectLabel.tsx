import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel as SelectInsideLabel,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'

interface Props {
  label: string
  options?: { value: string; label: string }[]
  value?: string | null
  onChange?: (value: string | null) => void
}

export const SelectLabel = ({
  label,
  options = [],
  value,
  onChange
}: Props) => {
  return (
    <Select
      value={value || undefined}
      onValueChange={onChange}
    >
      <SelectTrigger className="w-full pl-9">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectInsideLabel>{label}</SelectInsideLabel>
          {options.map(option => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
