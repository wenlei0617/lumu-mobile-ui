import { getClsPrefix } from '@/utils/utils';
import React from 'react';
import { PickerProps } from './interface';
import styles from './style/index.less';

export const pickerPrefix = getClsPrefix('picker');

const Picker: React.FC<PickerProps> = (props) => {
  const { dataSource = [], onChange } = props;
  return (
    <div className={styles[pickerPrefix]}>
      <div className={styles[`${pickerPrefix}-header`]}>
        <span>取消</span>
        <span>确定</span>
      </div>
      <div className={styles[`${pickerPrefix}-content`]}>
        <div className={styles[`${pickerPrefix}-view`]}></div>
        <div className={styles[`${pickerPrefix}-top`]}></div>
        <div className={styles[`${pickerPrefix}-bottom`]}></div>
      </div>
    </div>
  );
};

export default Picker;
