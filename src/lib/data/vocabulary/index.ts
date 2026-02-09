export type { VocabWord, VocabSet } from './types';
import type { VocabSet } from './types';
import { clb4Sets } from './clb4';
import { clb5Sets } from './clb5';
import { clb6Sets } from './clb6';
import { clb7Sets } from './clb7';
import { clb8Sets } from './clb8';

export const vocabularySets: VocabSet[] = [
  ...clb4Sets,
  ...clb5Sets,
  ...clb6Sets,
  ...clb7Sets,
  ...clb8Sets,
];
