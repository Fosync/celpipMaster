export type { ShadowingSentence, ShadowingSet } from './types';

export {
  greetingsSet,
  shoppingSet,
  directionsSet,
  phoneSet,
  restaurantSet,
  easySets,
} from './clb4-5';

export {
  workSet,
  healthSet,
  housingSet,
  travelSet,
  educationSet,
  mediumSets,
} from './clb5-6';

export {
  opinionsSet,
  workplaceSet,
  academicSet,
  debateSet,
  celpipModelsSet,
  hardSets,
} from './clb6-8';

import { easySets } from './clb4-5';
import { mediumSets } from './clb5-6';
import { hardSets } from './clb6-8';
import type { ShadowingSet } from './types';

export const allShadowingSets: ShadowingSet[] = [
  ...easySets,
  ...mediumSets,
  ...hardSets,
];

export const shadowingSets = allShadowingSets;
