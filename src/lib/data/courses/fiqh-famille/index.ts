import type { Course } from '../types';
import { fiqhFamilleMeta } from './meta';
import { lesson001 } from './lessons/001-introduction';
import { lesson002 } from './lessons/002-khitbah';
import { lesson003 } from './lessons/003-nikah-arkan';
import { lesson004 } from './lessons/004-nikah-sahih-fasid';
import { lesson005 } from './lessons/005-huquq-zawjayn';
import { lesson006 } from './lessons/006-nushuz-shiqaq';
import { lesson007 } from './lessons/007-talaq-types';
import { lesson008 } from './lessons/008-talaq-sunni-bidi';
import { lesson009 } from './lessons/009-iddah';
import { lesson010 } from './lessons/010-rujah';
import { lesson011 } from './lessons/011-khul';
import { lesson012 } from './lessons/012-hadanah';
import { lesson013 } from './lessons/013-nafaqah';
import { lesson014 } from './lessons/014-nasab-rada';

export const fiqhFamilleCourse: Course = {
  ...fiqhFamilleMeta,
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
  ],
};

export { fiqhFamilleMeta };
