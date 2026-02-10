export type { IdiomWord, IdiomSet, IdiomContext } from './types';
export { idiomSetsGroup1 } from './common';
export { idiomSetsGroup2 } from './advanced';

import { idiomSetsGroup1 } from './common';
import { idiomSetsGroup2 } from './advanced';

export const allIdiomSets = [...idiomSetsGroup1, ...idiomSetsGroup2];
export const allIdiomWords = allIdiomSets.flatMap((s) => s.words);
