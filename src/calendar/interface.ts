export interface CalendarProps {
  min?: Date;
  max?: Date;
  value?: Date;
  defaultValue?: Date;
  onSelect?: (value: Date) => void;
  onCancel?: () => void;
}
