import { Theme } from "./theme.interface";

export interface User {
  name: string; // 名字
  age?: number; // 年龄
  gender?: string; // 性别
  role?: string; // 角色
  theme?: Theme; // 主题
  isActive?: boolean; // 是否激活
  hobbies?: {[key: string]: boolean}; // 爱好
  topics?: string[]; // 话题
  province: number; // 省
  city: number; // 市
}