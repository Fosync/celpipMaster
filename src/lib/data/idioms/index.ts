export type { IdiomWord, IdiomSet, IdiomContext } from './types';
export { idiomSetsGroup1 } from './common';
export { idiomSetsGroup2 } from './advanced';
export { idiomSetsGroup3 } from './extra';
export { idiomSetsGroup4 } from './extra2';

import { idiomSetsGroup1 } from './common';
import { idiomSetsGroup2 } from './advanced';
import { idiomSetsGroup3 } from './extra';
import { idiomSetsGroup4 } from './extra2';

export const allIdiomSets = [...idiomSetsGroup1, ...idiomSetsGroup2, ...idiomSetsGroup3, ...idiomSetsGroup4];
export const allIdiomWords = allIdiomSets.flatMap((s) => s.words);
