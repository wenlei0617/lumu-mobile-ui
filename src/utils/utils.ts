import { CLS_PREFIX } from './constant'

/**
 * @description 获取classname名称
 * @param name 
 * @returns string
 */
export const getClsPrefix = (name: string) => {
  return `${CLS_PREFIX}-${name}`;
}