/**
 * Cours Seerah Module 2 — La Révélation à La Mecque
 */

import { Course } from '../types'
import { seerahModule2Meta } from './meta'

// Module 2 : La Révélation à La Mecque (8 leçons)
import { lesson006 } from './lessons/006-premiere-revelation'
import { lesson007 } from './lessons/007-premiers-musulmans'
import { lesson008 } from './lessons/008-appel-public'
import { lesson009 } from './lessons/009-persecution'
import { lesson010 } from './lessons/010-annees-difficiles'

export const seerahModule2Course: Course = {
  ...seerahModule2Meta,
  lessons: [lesson006, lesson007, lesson008, lesson009, lesson010],
}
