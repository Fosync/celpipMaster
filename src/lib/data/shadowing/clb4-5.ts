import { ShadowingSet } from './types';

export const greetingsSet: ShadowingSet = {
  id: 'shadowing-greetings',
  title: 'Greetings',
  description: 'Common greetings and introductions for everyday conversations.',
  clbLevel: 4,
  category: 'daily',
  icon: '\u{1F44B}',
  sentences: [
    {
      id: 'gr-01',
      text: 'Good morning! How are you doing today?',
      turkishMeaning: 'Gunaydin! Bugun nasilsiniz?',
      speed: 'slow',
    },
    {
      id: 'gr-02',
      text: "I'm doing great, thanks for asking.",
      turkishMeaning: 'Cok iyiyim, sordugunuz icin tesekkurler.',
      speed: 'slow',
    },
    {
      id: 'gr-03',
      text: 'Nice to meet you. My name is Sarah.',
      turkishMeaning: 'Tanistigimiza memnun oldum. Benim adim Sarah.',
      speed: 'slow',
    },
    {
      id: 'gr-04',
      text: "It's been really cold lately, hasn't it?",
      turkishMeaning: 'Son zamanlarda cok soguk oldu, degil mi?',
      speed: 'normal',
    },
    {
      id: 'gr-05',
      text: 'I just moved here from Toronto last month.',
      turkishMeaning: "Gecen ay Toronto'dan buraya tasindim.",
      speed: 'normal',
    },
    {
      id: 'gr-06',
      text: 'Have a great weekend! See you on Monday.',
      turkishMeaning: 'Iyi hafta sonlari! Pazartesi gorusuruz.',
      speed: 'normal',
    },
    {
      id: 'gr-07',
      text: "Sorry, I didn't catch your name. Could you say it again?",
      turkishMeaning: 'Ozur dilerim, adinizi anlayamadim. Tekrar soyler misiniz?',
      speed: 'fast',
    },
    {
      id: 'gr-08',
      text: 'It was really nice chatting with you. Take care!',
      turkishMeaning: 'Sizinle sohbet etmek cok guzeldi. Kendinize iyi bakin!',
      speed: 'fast',
    },
  ],
};

export const shoppingSet: ShadowingSet = {
  id: 'shadowing-shopping',
  title: 'Shopping',
  description: 'Essential phrases for shopping at stores and markets.',
  clbLevel: 4,
  category: 'shopping',
  icon: '\u{1F6D2}',
  sentences: [
    {
      id: 'sh-01',
      text: 'Excuse me, where can I find the milk?',
      turkishMeaning: 'Afedersiniz, sutu nerede bulabilirim?',
      speed: 'slow',
    },
    {
      id: 'sh-02',
      text: 'How much does this cost, please?',
      turkishMeaning: 'Bu ne kadar, lutfen?',
      speed: 'slow',
    },
    {
      id: 'sh-03',
      text: 'Can I pay with my debit card?',
      turkishMeaning: 'Banka kartimla odeyebilir miyim?',
      speed: 'slow',
    },
    {
      id: 'sh-04',
      text: 'Do you have this shirt in a medium size?',
      turkishMeaning: 'Bu gomlegin orta bedeni var mi?',
      speed: 'normal',
    },
    {
      id: 'sh-05',
      text: "I'd like to return this item, please.",
      turkishMeaning: 'Bu urunu iade etmek istiyorum, lutfen.',
      speed: 'normal',
    },
    {
      id: 'sh-06',
      text: 'Is this item on sale? The sign said twenty percent off.',
      turkishMeaning: 'Bu urun indirimde mi? Tabela yuzde yirmi indirim yaziyordu.',
      speed: 'normal',
    },
    {
      id: 'sh-07',
      text: "I'd like to return this jacket. I have the receipt right here.",
      turkishMeaning: 'Bu ceketi iade etmek istiyorum. Fis burada.',
      speed: 'fast',
    },
    {
      id: 'sh-08',
      text: 'Could I get a bag for these, please? Paper is fine.',
      turkishMeaning: 'Bunlar icin bir torba alabilir miyim? Kagit olur.',
      speed: 'fast',
    },
  ],
};

export const directionsSet: ShadowingSet = {
  id: 'shadowing-directions',
  title: 'Directions',
  description: 'Asking for and giving directions to navigate around the city.',
  clbLevel: 5,
  category: 'navigation',
  icon: '\u{1F5FA}\uFE0F',
  sentences: [
    {
      id: 'di-01',
      text: 'Go straight and turn left at the light.',
      turkishMeaning: 'Duz gidin ve isiklarda sola donun.',
      speed: 'slow',
    },
    {
      id: 'di-02',
      text: 'The library is right across from the post office.',
      turkishMeaning: 'Kutuphane postanenin tam karsisinda.',
      speed: 'slow',
    },
    {
      id: 'di-03',
      text: 'Take the bus on Main Street. It stops right there.',
      turkishMeaning: 'Main Caddesindeki otobuse binin. Tam orada duruyor.',
      speed: 'slow',
    },
    {
      id: 'di-04',
      text: "It's about a ten-minute walk from the subway station.",
      turkishMeaning: 'Metro istasyonundan yaklasik on dakikalik yurume mesafesinde.',
      speed: 'normal',
    },
    {
      id: 'di-05',
      text: "If you reach the traffic lights, you've gone too far.",
      turkishMeaning: 'Eger trafik isiklarina ulastiysaniz, cok ileri gitmissiniz.',
      speed: 'normal',
    },
    {
      id: 'di-06',
      text: "The parking lot is behind the building. You can't miss it.",
      turkishMeaning: 'Otopark binanin arkasinda. Kacirmaniz mumkun degil.',
      speed: 'normal',
    },
    {
      id: 'di-07',
      text: 'You need to transfer to Line 2 at Bloor Station.',
      turkishMeaning: "Bloor Istasyonunda Hat 2'ye aktarma yapmaniz gerekiyor.",
      speed: 'fast',
    },
    {
      id: 'di-08',
      text: "It's on the second floor, near the food court.",
      turkishMeaning: 'Ikinci katta, yemek alaninin yakininda.',
      speed: 'fast',
    },
  ],
};

export const phoneSet: ShadowingSet = {
  id: 'shadowing-phone',
  title: 'Phone Calls',
  description: 'Handling phone conversations in professional and casual settings.',
  clbLevel: 5,
  category: 'communication',
  icon: '\u{1F4DE}',
  sentences: [
    {
      id: 'ph-01',
      text: 'Hello, may I speak to the manager, please?',
      turkishMeaning: 'Merhaba, mudurle gorusebilir miyim, lutfen?',
      speed: 'slow',
    },
    {
      id: 'ph-02',
      text: "I'm calling to book an appointment for next Tuesday.",
      turkishMeaning: 'Gelecek sali icin randevu almak icin ariyorum.',
      speed: 'slow',
    },
    {
      id: 'ph-03',
      text: "Could you please hold for a moment? I'll transfer you.",
      turkishMeaning: 'Lutfen bir an bekler misiniz? Sizi aktariyorum.',
      speed: 'slow',
    },
    {
      id: 'ph-04',
      text: "I'm sorry, she's not available right now. Can I take a message?",
      turkishMeaning: 'Uzgunum, su anda musait degil. Mesaj birakabilir misiniz?',
      speed: 'normal',
    },
    {
      id: 'ph-05',
      text: 'Could you spell your last name for me, please?',
      turkishMeaning: 'Soyadinizi heceler misiniz, lutfen?',
      speed: 'normal',
    },
    {
      id: 'ph-06',
      text: "I'm returning your call about the service request.",
      turkishMeaning: 'Hizmet talebiyle ilgili aramanizi iade ediyorum.',
      speed: 'normal',
    },
    {
      id: 'ph-07',
      text: 'Thanks for calling back. I wanted to confirm our meeting on Friday.',
      turkishMeaning: 'Geri aradiginiz icin tesekkurler. Cuma toplantimizi teyit etmek istedim.',
      speed: 'fast',
    },
    {
      id: 'ph-08',
      text: "Let me read that back to you to make sure I've got it right.",
      turkishMeaning: 'Dogru yazdigimdan emin olmak icin size tekrar okuyayim.',
      speed: 'fast',
    },
  ],
};

export const restaurantSet: ShadowingSet = {
  id: 'shadowing-restaurant',
  title: 'Restaurant',
  description: 'Ordering food, making requests, and dining out conversations.',
  clbLevel: 4,
  category: 'dining',
  icon: '\u{1F37D}\uFE0F',
  sentences: [
    {
      id: 're-01',
      text: 'Could I see the menu, please?',
      turkishMeaning: 'Menuyu gorebilir miyim, lutfen?',
      speed: 'slow',
    },
    {
      id: 're-02',
      text: "I'd like a table for two, please.",
      turkishMeaning: 'Iki kisilik bir masa istiyorum, lutfen.',
      speed: 'slow',
    },
    {
      id: 're-03',
      text: "I'll have the chicken sandwich and a small coffee.",
      turkishMeaning: 'Tavuklu sandvic ve kucuk boy kahve alayim.',
      speed: 'slow',
    },
    {
      id: 're-04',
      text: 'Could I get the bill when you have a moment?',
      turkishMeaning: 'Musait oldugunuzda hesabi alabilir miyim?',
      speed: 'normal',
    },
    {
      id: 're-05',
      text: 'Is there anything gluten-free on the menu?',
      turkishMeaning: 'Menude glutensiz bir sey var mi?',
      speed: 'normal',
    },
    {
      id: 're-06',
      text: "We'd like to sit by the window if possible.",
      turkishMeaning: 'Mumkunse pencere kenarinda oturmak istiyoruz.',
      speed: 'normal',
    },
    {
      id: 're-07',
      text: "Everything was delicious, thank you. We'll definitely come back.",
      turkishMeaning: 'Her sey cok lezzetliydi, tesekkurler. Kesinlikle tekrar geliriz.',
      speed: 'fast',
    },
    {
      id: 're-08',
      text: 'Could we have some more water for the table, please?',
      turkishMeaning: 'Masaya biraz daha su getirebilir misiniz, lutfen?',
      speed: 'fast',
    },
  ],
};

export const easySets: ShadowingSet[] = [
  greetingsSet,
  shoppingSet,
  directionsSet,
  phoneSet,
  restaurantSet,
];
