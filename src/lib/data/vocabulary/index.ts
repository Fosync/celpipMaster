export type { VocabWord, VocabSet } from './types';
import type { VocabSet } from './types';
import { clb4Sets } from './clb4';
import { clb4NewSets } from './clb4-new';
import { clb4ExtraSets } from './clb4-extra';
import { clb4Extra2Sets } from './clb4-extra2';
import { clb5Sets } from './clb5';
import { clb5NewSets } from './clb5-new';
import { clb5ExtraSets } from './clb5-extra';
import { clb5Extra2Sets } from './clb5-extra2';
import { clb6Sets } from './clb6';
import { clb6NewSets } from './clb6-new';
import { clb6ExtraSets } from './clb6-extra';
import { clb6Extra2Sets } from './clb6-extra2';
import { clb7Sets } from './clb7';
import { clb7NewSets } from './clb7-new';
import { clb7ExtraSets } from './clb7-extra';
import { clb7Extra2Sets } from './clb7-extra2';
import { clb8Sets } from './clb8';
import { clb8NewSets } from './clb8-new';
import { clb8ExtraSets } from './clb8-extra';
import { clb8Extra2Sets } from './clb8-extra2';

export const vocabularySets: VocabSet[] = [
  ...clb4Sets,
  ...clb4NewSets,
  ...clb4ExtraSets,
  ...clb4Extra2Sets,
  ...clb5Sets,
  ...clb5NewSets,
  ...clb5ExtraSets,
  ...clb5Extra2Sets,
  ...clb6Sets,
  ...clb6NewSets,
  ...clb6ExtraSets,
  ...clb6Extra2Sets,
  ...clb7Sets,
  ...clb7NewSets,
  ...clb7ExtraSets,
  ...clb7Extra2Sets,
  ...clb8Sets,
  ...clb8NewSets,
  ...clb8ExtraSets,
  ...clb8Extra2Sets,
];
