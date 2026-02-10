// ==========================================
// Master Database - Central Learning Hub
// Links all vocabulary, idioms, grammar, patterns
// across all modules (reading, writing, speaking, listening)
// ==========================================

export interface MasterItem {
  id: string;
  word: string;
  definition: string;
  turkish: string;
  partOfSpeech: string;
  pronunciation: string;
  clbLevel: number;
  category: string;
  type: 'vocabulary' | 'idiom' | 'pattern' | 'grammar';

  // Related items
  relatedWords: string[];
  synonyms: string[];
  antonyms: string[];
  collocations: string[];

  // Cross-module references
  examples: {
    sentence: string;
    reading: string[];    // passage IDs where this word appears
    writing: string[];    // writing prompt IDs where relevant
    speaking: string[];   // speaking task IDs where relevant
    grammar: string[];    // grammar topic IDs related
    idioms: string[];     // related idiom IDs
    listening: string[];  // listening script IDs where appears
  };

  // Shadowing sentences
  shadowingSentences: string[];

  // CELPIP exam context
  celpipContext: string;
}

export interface CrossReference {
  itemId: string;
  modules: {
    vocabulary: boolean;
    idioms: boolean;
    grammar: boolean;
    reading: string[];
    writing: string[];
    speaking: string[];
    listening: string[];
    patterns: boolean;
  };
}

// ==========================================
// Category mapping for cross-references
// ==========================================
export const categoryToModules: Record<string, {
  reading: string[];
  writing: string[];
  speaking: string[];
  listening: string[];
}> = {
  housing: {
    reading: ['reading_apartment_maintenance', 'reading_rental_agreement'],
    writing: ['writing_noise_complaint', 'writing_repair_request'],
    speaking: ['speaking-dealing-situation', 'speaking-giving-advice'],
    listening: ['listening_apartment_viewing'],
  },
  workplace: {
    reading: ['reading_workplace_email', 'reading_job_posting'],
    writing: ['writing_schedule_change', 'writing_congratulations'],
    speaking: ['speaking-job-interview', 'speaking-comparing-persuading'],
    listening: ['listening_office_meeting', 'listening_job_interview'],
  },
  health: {
    reading: ['reading_health_clinic'],
    writing: [],
    speaking: ['speaking-dealing-situation'],
    listening: ['listening_health_seminar'],
  },
  daily_life: {
    reading: ['reading_community_newsletter'],
    writing: ['writing_party_invitation'],
    speaking: ['speaking-personal-experience', 'speaking-describing-scene'],
    listening: ['listening_weather_forecast', 'listening_community_event'],
  },
  shopping: {
    reading: [],
    writing: ['writing_product_complaint'],
    speaking: ['speaking-dealing-situation'],
    listening: ['listening_store_announcement'],
  },
  education: {
    reading: ['reading_school_newsletter'],
    writing: ['writing_school_letter'],
    speaking: ['speaking-expressing-opinions'],
    listening: ['listening_orientation', 'listening_university_lecture'],
  },
  transportation: {
    reading: ['reading_transit_schedule'],
    writing: [],
    speaking: ['speaking-describing-scene'],
    listening: ['listening_transit_announcement'],
  },
  communication: {
    reading: [],
    writing: ['writing_congratulations', 'writing_party_invitation'],
    speaking: ['speaking-making-predictions', 'speaking-expressing-opinions'],
    listening: [],
  },
  community: {
    reading: ['reading_community_newsletter', 'reading_volunteer_program'],
    writing: ['writing_park_request'],
    speaking: ['speaking-making-predictions', 'speaking-giving-advice'],
    listening: ['listening_community_event'],
  },
  business: {
    reading: ['reading_workplace_email', 'reading_annual_report'],
    writing: ['writing_schedule_change'],
    speaking: ['speaking-comparing-persuading', 'speaking-expressing-opinions'],
    listening: ['listening_office_meeting'],
  },
  academic: {
    reading: ['reading_research_article', 'reading_university_policy'],
    writing: [],
    speaking: ['speaking-expressing-opinions'],
    listening: ['listening_university_lecture'],
  },
  legal: {
    reading: ['reading_rental_agreement', 'reading_policy_document'],
    writing: ['writing_insurance_claim'],
    speaking: ['speaking-dealing-situation'],
    listening: [],
  },
  greetings: {
    reading: [],
    writing: ['writing_party_invitation', 'writing_congratulations'],
    speaking: ['speaking-personal-experience'],
    listening: [],
  },
  numbers: {
    reading: ['reading_transit_schedule'],
    writing: [],
    speaking: ['speaking-describing-scene'],
    listening: ['listening_weather_forecast'],
  },
  family: {
    reading: [],
    writing: ['writing_school_letter'],
    speaking: ['speaking-personal-experience', 'speaking-giving-advice'],
    listening: [],
  },
  abstract: {
    reading: ['reading_research_article', 'reading_opinion_editorial'],
    writing: [],
    speaking: ['speaking-expressing-opinions', 'speaking-comparing-persuading'],
    listening: ['listening_university_lecture'],
  },
  debate: {
    reading: ['reading_opinion_editorial'],
    writing: [],
    speaking: ['speaking-expressing-opinions', 'speaking-comparing-persuading'],
    listening: ['listening_debate_panel'],
  },
};

// ==========================================
// Grammar topic to category mapping
// ==========================================
export const grammarToCategories: Record<string, string[]> = {
  'simple-present': ['daily_life', 'greetings', 'workplace'],
  'simple-past': ['daily_life', 'workplace', 'education'],
  'articles': ['daily_life', 'academic', 'workplace'],
  'prepositions': ['daily_life', 'transportation', 'housing'],
  'comparatives-superlatives': ['shopping', 'housing', 'debate'],
  'subject-verb-agreement': ['academic', 'workplace', 'education'],
  'present-perfect': ['workplace', 'education', 'health'],
  'modals': ['workplace', 'daily_life', 'communication'],
  'conditionals': ['debate', 'abstract', 'daily_life'],
  'passive-voice': ['academic', 'legal', 'business'],
  'relative-clauses': ['academic', 'communication', 'workplace'],
  'reported-speech': ['communication', 'workplace', 'education'],
  'gerunds-infinitives': ['daily_life', 'education', 'workplace'],
  'phrasal-verbs': ['daily_life', 'workplace', 'communication'],
  'advanced-tenses': ['academic', 'business', 'abstract'],
  'subjunctive': ['academic', 'legal', 'debate'],
  'cleft-sentences': ['academic', 'debate', 'abstract'],
  'inversion': ['academic', 'debate', 'abstract'],
};

// ==========================================
// Build master database from existing data
// ==========================================

import { vocabularySets } from '@/lib/data/vocabulary';
import { idiomSets } from '@/lib/data/idioms';

function buildVocabItems(): MasterItem[] {
  const items: MasterItem[] = [];

  for (const set of vocabularySets) {
    for (const word of set.words) {
      const catRefs = categoryToModules[word.category] ?? {
        reading: [],
        writing: [],
        speaking: [],
        listening: [],
      };

      items.push({
        id: word.id,
        word: word.word,
        definition: word.definition,
        turkish: word.turkishMeaning,
        partOfSpeech: word.partOfSpeech,
        pronunciation: '',
        clbLevel: word.clbLevel,
        category: word.category,
        type: 'vocabulary',
        relatedWords: [],
        synonyms: [],
        antonyms: [],
        collocations: [],
        examples: {
          sentence: word.example,
          reading: catRefs.reading,
          writing: catRefs.writing,
          speaking: catRefs.speaking,
          grammar: [],
          idioms: [],
          listening: catRefs.listening,
        },
        shadowingSentences: [word.example],
        celpipContext: `CLB ${word.clbLevel} - ${word.category}`,
      });
    }
  }

  return items;
}

function buildIdiomItems(): MasterItem[] {
  const items: MasterItem[] = [];

  for (const set of idiomSets) {
    for (const idiom of set.words) {
      items.push({
        id: idiom.id,
        word: idiom.idiom,
        definition: idiom.meaning,
        turkish: idiom.turkishMeaning,
        partOfSpeech: 'idiom',
        pronunciation: '',
        clbLevel: idiom.clbLevel,
        category: idiom.category,
        type: 'idiom',
        relatedWords: [],
        synonyms: [],
        antonyms: [],
        collocations: [],
        examples: {
          sentence: idiom.example,
          reading: [],
          writing: [],
          speaking: [],
          grammar: [],
          idioms: [],
          listening: [],
        },
        shadowingSentences: [idiom.example],
        celpipContext: `Idiom - CLB ${idiom.clbLevel}`,
      });
    }
  }

  return items;
}

// Lazy-initialized singleton
let _masterItems: MasterItem[] | null = null;

export function getMasterDatabase(): MasterItem[] {
  if (!_masterItems) {
    _masterItems = [...buildVocabItems(), ...buildIdiomItems()];
  }
  return _masterItems;
}

// ==========================================
// Lookup helpers
// ==========================================

export function getMasterItemById(id: string): MasterItem | undefined {
  return getMasterDatabase().find((item) => item.id === id);
}

export function getMasterItemsByCategory(category: string): MasterItem[] {
  return getMasterDatabase().filter((item) => item.category === category);
}

export function getMasterItemsByClb(clbLevel: number): MasterItem[] {
  return getMasterDatabase().filter((item) => item.clbLevel === clbLevel);
}

export function getMasterItemsByType(type: MasterItem['type']): MasterItem[] {
  return getMasterDatabase().filter((item) => item.type === type);
}

export function getItemsForModule(
  module: 'reading' | 'writing' | 'speaking' | 'listening',
  moduleItemId: string
): MasterItem[] {
  return getMasterDatabase().filter((item) =>
    item.examples[module].includes(moduleItemId)
  );
}

export function getRelatedItems(itemId: string): MasterItem[] {
  const item = getMasterItemById(itemId);
  if (!item) return [];

  // Get items in same category and CLB range
  return getMasterDatabase().filter(
    (other) =>
      other.id !== itemId &&
      (other.category === item.category ||
        Math.abs(other.clbLevel - item.clbLevel) <= 1) &&
      other.type === item.type
  ).slice(0, 10);
}
