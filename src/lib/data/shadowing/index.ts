export type { ShadowingSentence, ShadowingSet } from './types';

export {
  coffeeShopSet,
  shoppingReturnSet,
  directionsSet,
  phoneCallSet,
  restaurantOrderSet,
  easySets,
} from './clb4-5';

export {
  workMeetingSet,
  doctorVisitSet,
  apartmentViewSet,
  airportCheckinSet,
  bankAccountSet,
  mediumSets,
} from './clb5-6';

export {
  celpipTask1Set,
  celpipTask2Set,
  celpipTask5Set,
  celpipTask7Set,
  celpipTask8Set,
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
