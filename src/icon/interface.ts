export interface IconProps {
  /**
   * @description 设置图标名称
   */
  type: string;
  /**
   * @description 设置图标的样式名
   */
  className?: string;
  /**
   * @description 设置图标的样式
   */
  style?: React.CSSProperties;
  /**
   * @description 设置图标的颜色
   */
  color?: string;
  /**
   * @description 是否有旋转动画
   */
  spin?: boolean;
}
