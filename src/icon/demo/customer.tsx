import React from 'react';
// @ts-ignore
import { Icon } from 'lumu-mobile-ui';

const MyIcon = Icon.createFormIconfont(
  '//at.alicdn.com/t/font_1433712_itjwh5ck0s.js',
);

export default () => {
  return (
    <div>
      <MyIcon type="icon-wenzi" />
      <MyIcon type="icon-shangpin" />
      <MyIcon type="icon-lunbotu" />
      <MyIcon type="icon-shipin" />
    </div>
  );
};
