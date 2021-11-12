import React from 'react';
import classNames from 'classnames';
import { createFormIconfont } from './createFormIconfont';
import { IconProps } from './interface';
import './style/index.less';
import { getClsPrefix } from '../utils/utils';

const iconPrefix = getClsPrefix('icon');

const INNER_SVG_PROPS = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  viewBox: '0 0 32 32',
};

class Icon extends React.PureComponent<IconProps> {
  static createFormIconfont = createFormIconfont;

  render() {
    const { type, children, spin, className, style, color } = this.props;

    const cls = classNames(
      iconPrefix,
      {
        [`${iconPrefix}-spin`]: spin,
      },
      className,
    );

    const newProps = {
      className: cls,
      style: {
        ...style,
        color,
      },
    };

    if (children) {
      return (
        <i {...newProps}>
          <svg aria-hidden="true" {...INNER_SVG_PROPS}>
            {children}
          </svg>
        </i>
      );
    }

    if (type) {
      const MyIcon = Icon.createFormIconfont(
        '//at.alicdn.com/t/font_2921882_rssexpglw5.js',
      );
      return <MyIcon {...this.props} />;
    }

    return null;
  }
}

export default Icon;
