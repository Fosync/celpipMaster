import { grammarTopicsCLB4_5 } from './clb4-5';
import { grammarTopicsCLB6_7 } from './clb6-7';
import { grammarTopicsCLB7_8 } from './clb7-8';

export type { GrammarItem, GrammarTopic } from './types';

export const grammarTopics = [
  ...grammarTopicsCLB4_5,
  ...grammarTopicsCLB6_7,
  ...grammarTopicsCLB7_8,
];
