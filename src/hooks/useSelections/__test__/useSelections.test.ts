import { renderHook, act } from '@testing-library/react-hooks';
import useSelection from '../useSelections';

describe('Test useSelections', () => {
  test('default', () => {
    const { result } = renderHook(() => useSelection([1, 2], [1]));

    expect(result.current.selected).toEqual([1]);
  });

  test('setSelect function', () => {
    const { result } = renderHook(() => useSelection([1, 2], []));

    act(() => {
      result.current.setSelect([1, 2]);
    });

    expect(result.current.selected).toEqual([1, 2]);
  });

  test('toggle function', () => {
    const { result } = renderHook(() => useSelection([1, 2], []));

    act(() => {
      result.current.toggle(1);
    });

    expect(result.current.selected).toEqual([1]);

    act(() => {
      result.current.toggle(1);
    });

    expect(result.current.selected).toEqual([]);
  });

  test('toggleAll function', () => {
    const { result } = renderHook(() => useSelection([1, 2], []));

    act(() => {
      result.current.toggleAll();
    });

    expect(result.current.selected).toEqual([1, 2]);

    act(() => {
      result.current.toggleAll();
    });

    expect(result.current.selected).toEqual([]);
  });

  test('var allSelected', () => {
    const { result } = renderHook(() => useSelection([1, 2], []));

    expect(result.current.allSelected).toBeFalsy();

    act(() => {
      result.current.toggleAll();
    });

    expect(result.current.allSelected).toBeTruthy();
  });

  test('isSelected function', () => {
    const { result } = renderHook(() => useSelection([1, 2], []));

    expect(result.current.isSelected(1)).toBeFalsy();

    act(() => {
      result.current.toggle(1);
    });

    expect(result.current.isSelected(1)).toBeTruthy();
  });

  test('isEqual params', () => {
    const { result } = renderHook(() =>
      useSelection(
        [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
        ],
        [],
        (value, other) => value.value === other.value,
      ),
    );

    act(() => {
      result.current.toggle({ value: 1, label: '1' });
    });

    expect(result.current.selected).toEqual([{ value: 1, label: '1' }]);

    expect(result.current.isSelected({ value: 1, label: '1' }));
  });
});
