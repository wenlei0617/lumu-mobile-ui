import React, { ReactNode } from 'react';
import Icon from './index';
import { IconProps } from './interface';

const customCache = new Set<string>();

export const createFormIconfont = (scriptUrl: string): React.FC<IconProps> => {
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !customCache.has(scriptUrl)
  ) {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  const Iconfont: React.FC<IconProps> = (props) => {
    Iconfont.displayName = 'Iconfont';

    const { type } = props;

    let content: ReactNode;
    if (type) {
      content = <use xlinkHref={`#${type}`} />;
    }
    return <Icon {...props}>{content}</Icon>;
  };

  return Iconfont;
};
