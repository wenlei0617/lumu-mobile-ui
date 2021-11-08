export interface ButtonProps {
  /**
   * @description 按钮类型，可选值 default primary
   * @default 'default'
   */
  type?: 'default' | 'primary';
  /**
   * @description 设置大小，可选值 md lg sm
   * @default 'md'
   */
  size?: 'md' | 'lg' | 'sm';
  /**
   * @description 设置形状，可选值为 rect radius round
   * @default 'radius''
   */
  shape?: 'rect' | 'radius' | 'round';
  /**
   * @description 是否块级元素
   * @default false
   */
  block?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 设置图标
   */
  icon?: React.ReactNode;
  /**
   * @description 点击后触发的回调函数
   */
  onClick?: React.MouseEventHandler<Element>;
}