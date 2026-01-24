import { Course } from '../types';
import { historyHeroinesMeta } from './meta';
import { lesson001 } from './lessons/001-khadija';
import { lesson002 } from './lessons/002-aisha';
import { lesson003 } from './lessons/003-fatima';
import { lesson004 } from './lessons/004-martyres-opprimees';
import { lesson005 } from './lessons/005-combattantes';
import { lesson006 } from './lessons/006-savantes';

export const historyHeroinesCourse: Course = {
  ...historyHeroinesMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
  ],
};

export { historyHeroinesMeta };
