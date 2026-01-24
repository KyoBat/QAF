import type { Course } from '../types';
import { usulFiqhMeta } from './meta';
import { lesson001 } from './lessons/001-introduction';
import { lesson002 } from './lessons/002-quran';
import { lesson003 } from './lessons/003-sunnah';
import { lesson004 } from './lessons/004-ijma';
import { lesson005 } from './lessons/005-qiyas';
import { lesson006 } from './lessons/006-maslaha';
import { lesson007 } from './lessons/007-istihsan';
import { lesson008 } from './lessons/008-urf-sadd';
import { lesson009 } from './lessons/009-ahkam';
import { lesson010 } from './lessons/010-ijtihad';
import { lesson011 } from './lessons/011-taqlid';
import { lesson012 } from './lessons/012-qawaid';

export const usulFiqhCourse: Course = {
  ...usulFiqhMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
    lesson009,
    lesson010,
    lesson011,
    lesson012,
  ],
};

export { usulFiqhMeta };
