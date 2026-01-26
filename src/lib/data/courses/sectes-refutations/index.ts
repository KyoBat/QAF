import { Course } from '../types';
import { sectesRefutationsMeta } from './meta';
import { lesson001 } from './lessons/001-intro-firaq';
import { lesson002 } from './lessons/002-khawarij';
import { lesson003 } from './lessons/003-murjiah';
import { lesson004 } from './lessons/004-qadariyyah-jabriyyah';
import { lesson005 } from './lessons/005-jahmiyyah-mutazilah';
import { lesson006 } from './lessons/006-ashariyyah-maturidiyyah';
import { lesson007 } from './lessons/007-shia';
import { lesson008 } from './lessons/008-sufism';
import { lesson009 } from './lessons/009-contemporary-sects';
import { lesson010 } from './lessons/010-methodology-refutation';
import { lesson011 } from './lessons/011-atheism-contemporary';

export const sectesRefutationsCourse: Course = {
  ...sectesRefutationsMeta,
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
  ],
};
