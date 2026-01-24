import type { Course } from '../types';
import { fiqhMuamalatMeta } from './meta';
import { lesson001 } from './lessons/001-introduction';
import { lesson002 } from './lessons/002-ahkam-buyu';
import { lesson003 } from './lessons/003-shurut-bay';
import { lesson004 } from './lessons/004-buyu-muharramah';
import { lesson005 } from './lessons/005-khiyarat';

export const fiqhMuamalatCourse: Course = {
  ...fiqhMuamalatMeta,
  lessons: [lesson001, lesson002, lesson003, lesson004, lesson005],
};

export { fiqhMuamalatMeta };
