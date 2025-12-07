/**
 * Les Compagnons Illustres du Prophète ﷺ
 * Course index - exports metadata and all lessons
 */

import { Course } from '../types';
import { historyCompanionsMeta } from './meta';

// Import all lessons
import { lesson001 } from './lessons/001-abu-bakr';
import { lesson002 } from './lessons/002-umar';
import { lesson003 } from './lessons/003-uthman';
import { lesson004 } from './lessons/004-ali';
import { lesson005 } from './lessons/005-dix-promis';
import { lesson006 } from './lessons/006-khadija-aicha';
import { lesson007 } from './lessons/007-opprimes';
import { lesson008 } from './lessons/008-khalid';
import { lesson009 } from './lessons/009-jeunes';
import { lesson010 } from './lessons/010-ansar';
import { lesson011 } from './lessons/011-fatima';
import { lesson012 } from './lessons/012-heritage';

// Export the full course
export const historyCompanionsCourse: Course = {
  ...historyCompanionsMeta,
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

// Export individual lessons for direct access
export {
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
};

// Default export
export default historyCompanionsCourse;
