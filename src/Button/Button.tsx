import { getClsPrefix } from '../utils/utils';
import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './interface';
import './style/index.less';

const btnPrefix = getClsPrefix('btn');

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    shape = 'radius',
    block = false,
    type = 'default',
    icon,
    loading = false,
    disabled = false,
    onClick,
    children,
  } = props;

  const className = useMemo(() => {
    return classNames(
      btnPrefix,
      `${btnPrefix}-size__${size}`,
      `${btnPrefix}-theme__${type}`,
      `${btnPrefix}-shape__${shape}`,
      {
        [`${btnPrefix}-block`]: block,
        [`${btnPrefix}-disabled`]: disabled,
      },
    );
  }, [size, type, block, shape, disabled]);

  const handleClick = useCallback(
    (e) => {
      if (loading || disabled) return;
      onClick?.(e);
    },
    [onClick, loading, disabled],
  );

  return (
    <button type="button" onClick={handleClick} className={className}>
      <div className={`${btnPrefix}-content`}>
        {loading && (
          <span
            className={classNames(
              'iconfont',
              'icon-loading',
              `${btnPrefix}-loading`,
            )}
          ></span>
        )}
        {icon && !loading && (
          <span className={`${btnPrefix}-icon`}>{icon}</span>
        )}
        <span className={`${btnPrefix}-text`}>{children}</span>
      </div>
    </button>
  );
};
