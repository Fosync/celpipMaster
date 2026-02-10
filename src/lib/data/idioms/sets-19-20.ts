import type { IdiomSet } from './types';

export const idiomSets19to20: IdiomSet[] = [
  {
    id: 'idioms-risk-danger',
    title: 'Risk & Danger',
    description: 'Idioms about taking risks and danger',
    clbLevel: 7,
    category: 'Risk & Danger',
    icon: '⚠️',
    words: [
      {
        id: 'play-with-fire',
        idiom: 'play with fire',
        meaning: 'Take dangerous risk',
        example: 'Investing all savings is playing with fire.',
        turkishMeaning: 'ateşle oynamak',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Warn about dangerous behavior.',
        contexts: [
          { scenario: 'Lying to boss is playing with fire.', question: 'What does it mean?', options: ['Safe action', 'Dangerous risk', 'Good idea', 'Normal'], correctIndex: 1 },
          { scenario: 'You\'re playing with fire driving fast.', question: 'What is warning?', options: ['It\'s safe', 'It\'s risky', 'It\'s fun', 'It\'s slow'], correctIndex: 1 },
          { scenario: 'He played with fire and got burned.', question: 'What happened?', options: ['Succeeded', 'Faced consequences', 'Was lucky', 'Gave up'], correctIndex: 1 }
        ],
        collocations: ['playing with fire'],
        similarIdioms: ['take-big-risk'],
        oppositeIdioms: ['play-it-safe']
      },
      {
        id: 'on-thin-ice',
        idiom: 'on thin ice',
        meaning: 'In risky or precarious situation',
        example: 'He\'s on thin ice with manager.',
        turkishMeaning: 'ince buzda yürümek',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Dangerous position.',
        contexts: [
          { scenario: 'You\'re on thin ice missing deadlines.', question: 'What is situation?', options: ['Safe position', 'Risky situation', 'Promoted', 'Praised'], correctIndex: 1 },
          { scenario: 'Company on thin ice financially.', question: 'Company\'s status?', options: ['Very stable', 'Precarious', 'Growing', 'Profitable'], correctIndex: 1 },
          { scenario: 'He\'s skating on thin ice.', question: 'His position?', options: ['Secure', 'Dangerous', 'Improving', 'Strong'], correctIndex: 1 }
        ],
        collocations: ['on thin ice'],
        similarIdioms: ['walking-tightrope'],
        oppositeIdioms: ['on-solid-ground']
      },
      {
        id: 'out-on-limb',
        idiom: 'out on a limb',
        meaning: 'In vulnerable position',
        example: 'Guaranteeing results put him out on limb.',
        turkishMeaning: 'riskli durumda',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Exposed position.',
        contexts: [
          { scenario: 'She went out on limb supporting idea.', question: 'What did she do?', options: ['Stayed safe', 'Took risk', 'Refused', 'Hid'], correctIndex: 1 },
          { scenario: 'Don\'t go out on limb alone.', question: 'What is advice?', options: ['Take risks alone', 'Don\'t expose yourself', 'Climb trees', 'Work harder'], correctIndex: 1 },
          { scenario: 'He\'s out on limb with prediction.', question: 'His position?', options: ['Safe', 'Vulnerable', 'Strong', 'Hidden'], correctIndex: 1 }
        ],
        collocations: ['out on a limb'],
        similarIdioms: ['stick-neck-out'],
        oppositeIdioms: ['play-safe']
      },
      {
        id: 'dice-with-death',
        idiom: 'dice with death',
        meaning: 'Take very dangerous risks',
        example: 'Extreme sports is dicing with death.',
        turkishMeaning: 'ölümle oynamak',
        clbLevel: 8,
        category: 'Risk & Danger',
        whenToUse: 'Extreme danger.',
        contexts: [
          { scenario: 'Drunk driving is dicing with death.', question: 'What does it mean?', options: ['Safe', 'Extremely dangerous', 'Legal', 'Common'], correctIndex: 1 },
          { scenario: 'He dices with death doing stunts.', question: 'What is he doing?', options: ['Being careful', 'Taking huge risks', 'Staying safe', 'Quitting'], correctIndex: 1 },
          { scenario: 'Don\'t dice with death.', question: 'What is warning?', options: ['Be brave', 'Don\'t take extreme risks', 'Try harder', 'Give up'], correctIndex: 1 }
        ],
        collocations: ['dice with death'],
        similarIdioms: ['tempt-fate'],
        oppositeIdioms: ['avoid-danger']
      },
      {
        id: 'live-dangerously',
        idiom: 'live dangerously',
        meaning: 'Take risks, be adventurous',
        example: 'He likes to live dangerously.',
        turkishMeaning: 'tehlikeli yaşamak',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Risk-taking lifestyle.',
        contexts: [
          { scenario: 'Starting business is living dangerously.', question: 'What does it mean?', options: ['Safe choice', 'Risky move', 'Bad idea', 'Easy path'], correctIndex: 1 },
          { scenario: 'She lives dangerously trying new things.', question: 'Her approach?', options: ['Cautious', 'Adventurous', 'Boring', 'Scared'], correctIndex: 1 },
          { scenario: 'Living dangerously can be fun.', question: 'What is suggested?', options: ['Stay safe always', 'Risks can be exciting', 'Avoid everything', 'Never try'], correctIndex: 1 }
        ],
        collocations: ['live dangerously'],
        similarIdioms: ['throw-caution-to-wind'],
        oppositeIdioms: ['play-it-safe']
      },
      {
        id: 'safe-bet',
        idiom: 'safe bet',
        meaning: 'Reliable choice with low risk',
        example: 'Government bonds are safe bet.',
        turkishMeaning: 'güvenli seçenek',
        clbLevel: 6,
        category: 'Risk & Danger',
        whenToUse: 'Low-risk option.',
        contexts: [
          { scenario: 'That investment is safe bet.', question: 'Investment is?', options: ['Risky', 'Reliable', 'Unpredictable', 'Dangerous'], correctIndex: 1 },
          { scenario: 'Choosing him is safe bet.', question: 'What does it mean?', options: ['Risky choice', 'Reliable choice', 'Bad choice', 'Random choice'], correctIndex: 1 },
          { scenario: 'Looking for safe bet.', question: 'What is wanted?', options: ['High risk', 'Low risk option', 'Gamble', 'Adventure'], correctIndex: 1 }
        ],
        collocations: ['safe bet'],
        similarIdioms: ['sure-thing'],
        oppositeIdioms: ['long-shot']
      },
      {
        id: 'close-call',
        idiom: 'close call',
        meaning: 'Narrowly avoided danger',
        example: 'Car accident was close call.',
        turkishMeaning: 'kıl payı kurtulmak',
        clbLevel: 6,
        category: 'Risk & Danger',
        whenToUse: 'Nearly had problem.',
        contexts: [
          { scenario: 'That was close call with deadline.', question: 'What happened?', options: ['Missed it badly', 'Barely made it', 'Had plenty time', 'Cancelled'], correctIndex: 1 },
          { scenario: 'Close call avoiding accident.', question: 'What occurred?', options: ['Had accident', 'Narrowly avoided', 'No danger', 'Crashed'], correctIndex: 1 },
          { scenario: 'We had close call.', question: 'What does it mean?', options: ['Safe situation', 'Nearly in trouble', 'Big problem', 'Good news'], correctIndex: 1 }
        ],
        collocations: ['that was close call'],
        similarIdioms: ['narrow-escape'],
        oppositeIdioms: ['disaster']
      },
      {
        id: 'tip-of-iceberg',
        idiom: 'tip of the iceberg',
        meaning: 'Small visible part of bigger problem',
        example: 'These complaints are tip of iceberg.',
        turkishMeaning: 'buzdağının görünen kısmı',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Larger hidden problem.',
        contexts: [
          { scenario: 'Scandal is tip of iceberg.', question: 'What does it mean?', options: ['Only problem', 'Small part of bigger issue', 'Final problem', 'Not serious'], correctIndex: 1 },
          { scenario: 'These errors are tip of iceberg.', question: 'What is suggested?', options: ['Few errors only', 'Many more errors exist', 'No more problems', 'All found'], correctIndex: 1 },
          { scenario: 'Just tip of iceberg.', question: 'What is implied?', options: ['That\'s all', 'Much more hidden', 'Very small', 'Not important'], correctIndex: 1 }
        ],
        collocations: ['tip of the iceberg'],
        similarIdioms: ['surface-level'],
        oppositeIdioms: ['whole-picture']
      },
      {
        id: 'cross-that-bridge',
        idiom: 'cross that bridge when we come to it',
        meaning: 'Deal with problem when it happens',
        example: 'We\'ll cross that bridge when we come to it.',
        turkishMeaning: 'o köprüye geldiğimizde geçeriz',
        clbLevel: 6,
        category: 'Risk & Danger',
        whenToUse: 'Don\'t worry in advance.',
        contexts: [
          { scenario: 'What if fails? Cross that bridge later.', question: 'What is response?', options: ['Worry now', 'Deal with it if happens', 'Give up', 'Prepare now'], correctIndex: 1 },
          { scenario: 'Let\'s cross that bridge when we come to it.', question: 'What is suggested?', options: ['Worry about future', 'Handle problem later', 'Avoid problem', 'Solve now'], correctIndex: 1 },
          { scenario: 'No need to cross that bridge yet.', question: 'What does it mean?', options: ['Deal with now', 'Don\'t worry yet', 'Already handled', 'Too late'], correctIndex: 1 }
        ],
        collocations: ['cross that bridge'],
        similarIdioms: ['deal-with-it-later'],
        oppositeIdioms: ['prepare-in-advance']
      },
      {
        id: 'bite-bullet',
        idiom: 'bite the bullet',
        meaning: 'Face difficult situation bravely',
        example: 'Time to bite bullet and tell truth.',
        turkishMeaning: 'dişini sıkmak',
        clbLevel: 7,
        category: 'Risk & Danger',
        whenToUse: 'Accept unpleasant necessity.',
        contexts: [
          { scenario: 'Had to bite bullet and apologize.', question: 'What did he do?', options: ['Avoided it', 'Faced difficult task', 'Gave up', 'Got angry'], correctIndex: 1 },
          { scenario: 'Bite the bullet and start diet.', question: 'What is advised?', options: ['Avoid it', 'Face it bravely', 'Postpone it', 'Forget it'], correctIndex: 1 },
          { scenario: 'She bit bullet and quit job.', question: 'What did she do?', options: ['Avoided decision', 'Made tough choice', 'Stayed safe', 'Complained'], correctIndex: 1 }
        ],
        collocations: ['bite the bullet'],
        similarIdioms: ['grasp-nettle'],
        oppositeIdioms: ['avoid-issue']
      }
    ]
  },
  {
    id: 'idioms-change-progress',
    title: 'Change & Progress',
    description: 'Idioms about change and development',
    clbLevel: 6,
    category: 'Change & Progress',
    icon: '📈',
    words: [
      {
        id: 'turn-over-new-leaf',
        idiom: 'turn over a new leaf',
        meaning: 'Start fresh, change behavior',
        example: 'He turned over new leaf after incident.',
        turkishMeaning: 'yeni sayfa açmak',
        clbLevel: 6,
        category: 'Change & Progress',
        whenToUse: 'Positive change.',
        contexts: [
          { scenario: 'She turned over new leaf studying hard.', question: 'What did she do?', options: ['Quit school', 'Changed for better', 'Gave up', 'Stayed same'], correctIndex: 1 },
          { scenario: 'Time to turn over new leaf.', question: 'What is suggested?', options: ['Stay same', 'Make fresh start', 'Go back', 'Give up'], correctIndex: 1 },
          { scenario: 'He promised to turn over new leaf.', question: 'What did he promise?', options: ['No change', 'Improve behavior', 'Quit', 'Complain'], correctIndex: 1 }
        ],
        collocations: ['turn over new leaf'],
        similarIdioms: ['fresh-start'],
        oppositeIdioms: ['stuck-in-rut']
      },
      {
        id: 'move-forward',
        idiom: 'move forward',
        meaning: 'Progress, continue ahead',
        example: 'Let\'s move forward with plan.',
        turkishMeaning: 'ilerlemek',
        clbLevel: 5,
        category: 'Change & Progress',
        whenToUse: 'Continue progress.',
        contexts: [
          { scenario: 'We need to move forward.', question: 'What is needed?', options: ['Go back', 'Make progress', 'Stop', 'Wait'], correctIndex: 1 },
          { scenario: 'Company moving forward with changes.', question: 'Company is?', options: ['Reversing', 'Progressing', 'Stopping', 'Failing'], correctIndex: 1 },
          { scenario: 'Can\'t move forward without approval.', question: 'What is needed?', options: ['To stop', 'To progress', 'To quit', 'To reverse'], correctIndex: 1 }
        ],
        collocations: ['move forward with'],
        similarIdioms: ['progress'],
        oppositeIdioms: ['stand-still']
      },
      {
        id: 'back-to-drawing-board',
        idiom: 'back to the drawing board',
        meaning: 'Start over, plan failed',
        example: 'Proposal rejected, back to drawing board.',
        turkishMeaning: 'başa dönmek',
        clbLevel: 7,
        category: 'Change & Progress',
        whenToUse: 'Need to restart.',
        contexts: [
          { scenario: 'Test failed, back to drawing board.', question: 'What now?', options: ['Succeeded', 'Start over', 'Give up', 'Continue same'], correctIndex: 1 },
          { scenario: 'Back to drawing board on design.', question: 'What is happening?', options: ['Finishing', 'Redesigning', 'Launching', 'Celebrating'], correctIndex: 1 },
          { scenario: 'Guess it\'s back to drawing board.', question: 'What does it mean?', options: ['Success', 'Need to restart', 'Almost done', 'Perfect'], correctIndex: 1 }
        ],
        collocations: ['back to the drawing board'],
        similarIdioms: ['start-from-scratch'],
        oppositeIdioms: ['mission-accomplished']
      },
      {
        id: 'step-in-right-direction',
        idiom: 'step in the right direction',
        meaning: 'Positive progress toward goal',
        example: 'New policy is step in right direction.',
        turkishMeaning: 'doğru yönde adım',
        clbLevel: 6,
        category: 'Change & Progress',
        whenToUse: 'Positive development.',
        contexts: [
          { scenario: 'Hiring her was step in right direction.', question: 'What does it mean?', options: ['Bad decision', 'Good progress', 'No change', 'Wrong move'], correctIndex: 1 },
          { scenario: 'It\'s step in right direction.', question: 'What is it?', options: ['Wrong way', 'Positive move', 'Backwards', 'No movement'], correctIndex: 1 },
          { scenario: 'Small step in right direction.', question: 'Progress?', options: ['None', 'Some positive', 'Backwards', 'Complete'], correctIndex: 1 }
        ],
        collocations: ['step in right direction'],
        similarIdioms: ['move-in-right-direction'],
        oppositeIdioms: ['step-backwards']
      },
      {
        id: 'winds-of-change',
        idiom: 'winds of change',
        meaning: 'Forces bringing transformation',
        example: 'Winds of change sweeping company.',
        turkishMeaning: 'değişim rüzgarları',
        clbLevel: 7,
        category: 'Change & Progress',
        whenToUse: 'Major changes coming.',
        contexts: [
          { scenario: 'Winds of change in industry.', question: 'What is happening?', options: ['No change', 'Major transformation', 'Everything same', 'Decline'], correctIndex: 1 },
          { scenario: 'Feel winds of change.', question: 'What is sensed?', options: ['Stability', 'Coming changes', 'Nothing', 'Problems'], correctIndex: 1 },
          { scenario: 'Winds of change are here.', question: 'What is occurring?', options: ['Status quo', 'Transformation', 'Regression', 'Stopping'], correctIndex: 1 }
        ],
        collocations: ['winds of change'],
        similarIdioms: ['times-are-changing'],
        oppositeIdioms: ['status-quo']
      },
      {
        id: 'reinvent-wheel',
        idiom: 'reinvent the wheel',
        meaning: 'Waste time on existing solution',
        example: 'Don\'t reinvent wheel, use template.',
        turkishMeaning: 'tekerleği yeniden icat etmek',
        clbLevel: 7,
        category: 'Change & Progress',
        whenToUse: 'Avoid unnecessary work.',
        contexts: [
          { scenario: 'No need to reinvent wheel.', question: 'What is advised?', options: ['Create new', 'Use existing solution', 'Start over', 'Ignore options'], correctIndex: 1 },
          { scenario: 'He\'s reinventing wheel.', question: 'What is he doing?', options: ['Being smart', 'Wasting effort', 'Innovating', 'Succeeding'], correctIndex: 1 },
          { scenario: 'Don\'t reinvent wheel, copy best practice.', question: 'What is suggested?', options: ['Be original', 'Use proven method', 'Start from zero', 'Innovate'], correctIndex: 1 }
        ],
        collocations: ['reinvent the wheel'],
        similarIdioms: ['waste-effort'],
        oppositeIdioms: ['use-what-works']
      },
      {
        id: 'break-new-ground',
        idiom: 'break new ground',
        meaning: 'Innovate, do something first',
        example: 'Research breaks new ground.',
        turkishMeaning: 'çığır açmak',
        clbLevel: 7,
        category: 'Change & Progress',
        whenToUse: 'Innovation.',
        contexts: [
          { scenario: 'Company breaking new ground in AI.', question: 'Company is?', options: ['Following others', 'Innovating', 'Failing', 'Stopping'], correctIndex: 1 },
          { scenario: 'Study breaks new ground.', question: 'What does study do?', options: ['Repeats old', 'Discovers new', 'Fails', 'Copies'], correctIndex: 1 },
          { scenario: 'Ready to break new ground.', question: 'Ready to?', options: ['Quit', 'Innovate', 'Follow', 'Stop'], correctIndex: 1 }
        ],
        collocations: ['break new ground'],
        similarIdioms: ['blaze-trail'],
        oppositeIdioms: ['follow-beaten-path']
      },
      {
        id: 'quantum-leap',
        idiom: 'quantum leap',
        meaning: 'Sudden major advance',
        example: 'Technology made quantum leap.',
        turkishMeaning: 'büyük sıçrama',
        clbLevel: 8,
        category: 'Change & Progress',
        whenToUse: 'Huge progress.',
        contexts: [
          { scenario: 'Science made quantum leap.', question: 'What happened?', options: ['Small change', 'Major breakthrough', 'No progress', 'Regressed'], correctIndex: 1 },
          { scenario: 'This is quantum leap forward.', question: 'Type of progress?', options: ['Tiny', 'Huge', 'None', 'Backwards'], correctIndex: 1 },
          { scenario: 'Quantum leap in understanding.', question: 'Understanding?', options: ['Decreased', 'Greatly increased', 'Same', 'Confused'], correctIndex: 1 }
        ],
        collocations: ['quantum leap forward'],
        similarIdioms: ['giant-leap'],
        oppositeIdioms: ['baby-steps']
      },
      {
        id: 'shifting-gears',
        idiom: 'shift gears',
        meaning: 'Change approach or focus',
        example: 'Let\'s shift gears and try new strategy.',
        turkishMeaning: 'vites değiştirmek',
        clbLevel: 6,
        category: 'Change & Progress',
        whenToUse: 'Change direction.',
        contexts: [
          { scenario: 'Time to shift gears.', question: 'What is suggested?', options: ['Continue same', 'Change approach', 'Give up', 'Speed up only'], correctIndex: 1 },
          { scenario: 'Company shifting gears.', question: 'Company is?', options: ['Staying same', 'Changing direction', 'Closing', 'Growing same way'], correctIndex: 1 },
          { scenario: 'Need to shift gears quickly.', question: 'What is needed?', options: ['Stay course', 'Adapt fast', 'Stop', 'Slow down'], correctIndex: 1 }
        ],
        collocations: ['shift gears'],
        similarIdioms: ['change-tack'],
        oppositeIdioms: ['stay-course']
      },
      {
        id: 'point-of-no-return',
        idiom: 'point of no return',
        meaning: 'Stage where cannot reverse',
        example: 'We\'ve reached point of no return.',
        turkishMeaning: 'geri dönülmez nokta',
        clbLevel: 7,
        category: 'Change & Progress',
        whenToUse: 'Cannot go back.',
        contexts: [
          { scenario: 'Past point of no return.', question: 'What does it mean?', options: ['Can reverse', 'Cannot go back', 'Just starting', 'Not committed'], correctIndex: 1 },
          { scenario: 'Reached point of no return.', question: 'What is status?', options: ['Can quit', 'Must continue', 'Just began', 'Can change'], correctIndex: 1 },
          { scenario: 'Before point of no return.', question: 'Still can?', options: ['Nothing', 'Reverse course', 'Only continue', 'Must commit'], correctIndex: 1 }
        ],
        collocations: ['point of no return'],
        similarIdioms: ['past-turning-back'],
        oppositeIdioms: ['early-stage']
      }
    ]
  }
];
