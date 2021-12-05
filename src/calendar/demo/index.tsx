import React, { useState, useMemo } from 'react';
// @ts-ignore
import { Calendar } from 'lumu-mobile-ui';
import './index.css';

export default () => {
  const [value, setValue] = useState<Date>();
  const [visible, setVisible] = useState(true);

  const handleChange = (date: Date) => {
    setValue(date);
    setVisible(false);
  };

  const currTime = useMemo(() => {
    if (!value) return;
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const day = value.getDate();
    return `${year}年${month}月${day}日`;
  }, [value]);

  return (
    <div>
      {currTime}
      <button onClick={() => setVisible(true)}>查看</button>
      {visible && (
        <div className="wrap">
          <Calendar
            defaultValue={new Date(2018, 0, 1)}
            value={value}
            onSelect={handleChange}
            onCancel={() => setVisible(false)}
          />
        </div>
      )}
    </div>
  );
};
