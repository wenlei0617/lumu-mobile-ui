import React, { useMemo, useState, useEffect } from 'react';
import { getClsPrefix } from '@/utils/utils';
import CalendarColumn from './calendar-wrap';
import { CalendarProps } from './interface';
import styles from './style/index.less';

export const calendarPrefix = getClsPrefix('calendar');

const Calendar: React.FC<CalendarProps> = (props) => {
  const {
    min,
    max,
    value,
    defaultValue = new Date(),
    onSelect,
    onCancel,
  } = props;
  const [curTime, setCurTime] = useState<Date>(defaultValue);

  const yearList = useMemo(() => {
    return new Array(10).fill(1).map((_, index) => ({
      label: 2015 + index + '年',
      value: 2015 + index,
    }));
  }, []);

  const monthList = useMemo(() => {
    return new Array(12).fill(1).map((_, index) => ({
      label: index + 1 + '月',
      value: index + 1,
    }));
  }, []);

  const dayList = useMemo(() => {
    const year = curTime.getFullYear();
    const month = curTime.getMonth() + 1;
    const len = new Date(year, month, 0).getDate();
    return new Array(len).fill(1).map((_, index) => ({
      label: `${index + 1}日`,
      value: index + 1,
    }));
  }, [curTime]);

  const curYear = useMemo(() => {
    return curTime.getFullYear();
  }, [curTime]);

  const curMonth = useMemo(() => {
    return curTime.getMonth() + 1;
  }, [curTime]);

  const curDay = useMemo(() => {
    return curTime.getDate();
  }, [curTime]);

  const handleChange = (
    date: string | number | undefined,
    type: 'year' | 'month' | 'day',
  ) => {
    if (!date) return;
    setCurTime((prev) => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      const day = prev.getDate();
      if (type === 'year') {
        return new Date(Number(date), month, day);
      }
      if (type === 'month') {
        const maxDay = new Date(year, Number(date), 0).getDate();
        return new Date(year, Number(date) - 1, Math.min(day, maxDay));
      }
      return new Date(year, month, Number(date));
    });
  };

  useEffect(() => {
    if (!value) return;
    setCurTime(value);
  }, [value]);

  return (
    <div className={styles[calendarPrefix]}>
      <div className={styles[`${calendarPrefix}-header`]}>
        <span onClick={() => onCancel?.()}>取消</span>
        <span onClick={() => onSelect?.(curTime)}>确定</span>
      </div>
      <div className={styles[`${calendarPrefix}-content`]}>
        <div className={styles[`${calendarPrefix}-view`]}>
          <CalendarColumn
            value={curYear}
            onSelect={(value) => {
              handleChange(value, 'year');
            }}
            dataSource={yearList}
          />
          <CalendarColumn
            value={curMonth}
            onSelect={(value) => {
              handleChange(value, 'month');
            }}
            dataSource={monthList}
          />
          <CalendarColumn
            value={curDay}
            onSelect={(value) => {
              handleChange(value, 'day');
            }}
            dataSource={dayList}
          />
        </div>
        <div className={styles[`${calendarPrefix}-top`]}></div>
        <div className={styles[`${calendarPrefix}-bottom`]}></div>
      </div>
    </div>
  );
};

export default Calendar;
