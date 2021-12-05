export interface DataSource {
  label: string;
  value: string | number | boolean;
  children?: DataSource[];
}

export interface PickerProps {
  dataSource?: DataSource[];
  defaultValue?: DataSource['value'][];
  onChange?: (value: DataSource['value'][]) => void;
}
