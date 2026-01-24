import type { Course } from '../types';
import { fiqhMuamalatMeta } from './meta';
import { lesson001 } from './lessons/001-introduction';
import { lesson002 } from './lessons/002-ahkam-buyu';
import { lesson003 } from './lessons/003-shurut-bay';
import { lesson004 } from './lessons/004-buyu-muharramah';
import { lesson005 } from './lessons/005-khiyarat';
import { lesson006 } from './lessons/006-riba-intro';
import { lesson007 } from './lessons/007-riba-types';
import { lesson008 } from './lessons/008-sarf-currency';
import { lesson009 } from './lessons/009-ijarah';
import { lesson010 } from './lessons/010-mudarabah';
import { lesson011 } from './lessons/011-musharakah';
import { lesson012 } from './lessons/012-salam-istisna';
import { lesson013 } from './lessons/013-qard-rahn';
import { lesson014 } from './lessons/014-taamin';
import { lesson015 } from './lessons/015-masrafiyyah';

export const fiqhMuamalatCourse: Course = {
  ...fiqhMuamalatMeta,
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
    lesson013,
    lesson014,
    lesson015,
  ],
};

export { fiqhMuamalatMeta };
