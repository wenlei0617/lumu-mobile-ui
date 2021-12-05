import useTouch from '../hooks/useTouch';
import React, { useMemo, useState, useEffect } from 'react';
import { DataSource } from './interface';
import { pickerPrefix } from './picker';
import styles from './style/index.less';

interface CalendarColumnProps {
  dataSource?: DataSource[];
  value?: DataSource['value'];
  onSelect?: (value: DataSource['value'], allValues: DataSource) => void;
}

const ITEM_HEIGHT = 34;

const DURATION_TIME = 200;

const Picker: React.FC<CalendarColumnProps> = (props) => {
  const { dataSource, value, onSelect } = props;
  const [transform, setTransform] = useState({
    y: 0,
    duration: true,
    property: true,
  });
  const touch = useTouch();

  const currentIndex = useMemo(() => {
    const index = dataSource?.findIndex((n) => n.value === value) || 0;
    return index > -1 ? index : 0;
  }, [value, dataSource]);

  const columnLength = useMemo(() => {
    return dataSource?.length || 0;
  }, [dataSource]);

  const wrapStyle: React.CSSProperties = useMemo(() => {
    return {
      transform: `translateX(0px) translateY(${transform.y}px) translateZ(1px)`,
      transitionDuration: transform.duration ? `${DURATION_TIME}ms` : '0',
      transitionProperty: transform.property ? 'all' : 'none',
    };
  }, [transform]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTransform((prev) => ({
      ...prev,
      duration: false,
      property: false,
    }));
    touch.start(e);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const { diffY } = touch.move(e);
    setTransform((prev) => {
      return {
        ...prev,
        y: Math.min(
          ITEM_HEIGHT,
          Math.max(prev.y + diffY, -(columnLength + 1) * ITEM_HEIGHT),
        ),
      };
    });
  };

  const handleTouchEnd = () => {
    touch.end();
    setTimeout(() => {
      let curIndex = Math.ceil(transform.y / ITEM_HEIGHT);
      curIndex = Math.max(-(columnLength - 1), Math.min(0, curIndex));
      setTransform({
        y: curIndex * ITEM_HEIGHT,
        duration: true,
        property: true,
      });
      if (dataSource && onSelect) {
        const selectData = dataSource[Math.abs(curIndex)];
        onSelect(selectData.value, selectData);
      }
    }, 0);
  };

  useEffect(() => {
    setTransform({
      duration: false,
      property: false,
      y: -currentIndex * ITEM_HEIGHT,
    });
  }, [currentIndex]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={styles[`${pickerPrefix}-column`]}
    >
      <ul style={wrapStyle} className={styles[`${pickerPrefix}-column-wrap`]}>
        {dataSource?.map((column) => (
          <li
            key={`${column.value}`}
            className={styles[`${pickerPrefix}-column-item`]}
          >
            {column.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Picker;
