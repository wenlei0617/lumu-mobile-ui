import { useState, useCallback, useMemo } from 'react';

type UseSelectionResult<T = any> = {
  selected: T[];
  isSelected: (value: T) => boolean;
  toggle: (value: T) => void;
  toggleAll: () => void;
  allSelected: boolean;
  setSelect: (value: T[]) => void;
};

const useSelection = <T = any>(
  item: T[],
  defaultSelect: T[] = [],
  isEqual: (value: T, other: T) => boolean = (value: T, other: T) =>
    value === other,
): UseSelectionResult<T> => {
  const [selected, setSelect] = useState<T[]>(defaultSelect);

  const allSelected = useMemo(() => {
    if (!item.length) return false;
    return item.every((i) => selected.some((t) => isEqual(i, t)));
  }, [selected, item]);

  const selectedPosition = useCallback(
    (value: T) => {
      return selected.findIndex((i) => isEqual(i, value));
    },
    [selected],
  );

  const isSelected = useCallback(
    (value: T) => {
      return selectedPosition(value) > -1;
    },
    [selectedPosition],
  );

  const toggle = useCallback(
    (value: T) => {
      const position = selectedPosition(value);
      if (position > -1) {
        setSelect((prev) => {
          const clone = prev.concat();
          const i = clone.findIndex((i) => isEqual(i, value));
          clone.splice(position, 1);
          return clone;
        });
      } else {
        setSelect((prev) => {
          const clone = prev.concat();
          clone.push(value);
          return clone;
        });
      }
    },
    [isSelected],
  );

  const toggleAll = useCallback(() => {
    setSelect(allSelected ? [] : item);
  }, [item, selected, allSelected]);

  return {
    selected,
    isSelected,
    toggle,
    toggleAll,
    allSelected,
    setSelect,
  };
};

export default useSelection;
