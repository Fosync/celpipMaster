import { ShadowingSet } from './types';

export const workSet: ShadowingSet = {
  id: 'shadowing-work',
  title: 'Work & Office Communication',
  description: 'Practice professional workplace phrases for meetings, emails, and teamwork in a Canadian office.',
  clbLevel: 6,
  category: 'workplace',
  icon: '💼',
  sentences: [
    {
      id: 'wk-01',
      text: "I was wondering if we could reschedule the meeting.",
      turkishMeaning: 'Toplantinin zamanini degistirip degistiremeyecegimizi merak ediyordum.',
      speed: 'slow',
    },
    {
      id: 'wk-02',
      text: "I'll send you the report by the end of the day.",
      turkishMeaning: 'Raporu gun sonuna kadar size gonderirim.',
      speed: 'slow',
    },
    {
      id: 'wk-03',
      text: "Let me check my calendar and get back to you on that.",
      turkishMeaning: 'Takvimime bakayim ve bu konuda size donus yapayim.',
      speed: 'slow',
    },
    {
      id: 'wk-04',
      text: "We're running a bit behind schedule on the project.",
      turkishMeaning: 'Projede programa gore biraz gerideyiz.',
      speed: 'normal',
    },
    {
      id: 'wk-05',
      text: "Would you mind reviewing this document before I submit it?",
      turkishMeaning: 'Gondermeden once bu belgeyi gozden gecirir misiniz?',
      speed: 'normal',
    },
    {
      id: 'wk-06',
      text: "I think we should delegate some tasks to the new team members.",
      turkishMeaning: 'Bazi gorevleri yeni ekip uyelerine devretmemiz gerektigini dusunuyorum.',
      speed: 'normal',
    },
    {
      id: 'wk-07',
      text: "I appreciate your feedback on the proposal. I'll make the changes.",
      turkishMeaning: 'Teklif hakkindaki geri bildiriminiz icin tesekkur ederim. Degisiklikleri yapacagim.',
      speed: 'fast',
    },
    {
      id: 'wk-08',
      text: "I'd like to bring up a concern about the budget allocation.",
      turkishMeaning: 'Butce dagilimi hakkinda bir endisemi dile getirmek istiyorum.',
      speed: 'fast',
    },
  ],
};

export const healthSet: ShadowingSet = {
  id: 'shadowing-health',
  title: 'Health & Medical Appointments',
  description: 'Practice common phrases for visiting doctors, describing symptoms, and understanding medical advice.',
  clbLevel: 5,
  category: 'health',
  icon: '🏥',
  sentences: [
    {
      id: 'he-01',
      text: "I've been having headaches for the past few days.",
      turkishMeaning: 'Son birkac gundur bas agrim var.',
      speed: 'slow',
    },
    {
      id: 'he-02',
      text: "I'd like to make an appointment with Dr. Chen, please.",
      turkishMeaning: "Dr. Chen'den randevu almak istiyorum, lutfen.",
      speed: 'slow',
    },
    {
      id: 'he-03',
      text: "The pain started about three days ago and it's getting worse.",
      turkishMeaning: 'Agri yaklasik uc gun once basladi ve giderek kotulesiyeor.',
      speed: 'slow',
    },
    {
      id: 'he-04',
      text: "I'm allergic to penicillin. It's noted in my file.",
      turkishMeaning: 'Penisiline alerjim var. Dosyamda yaziyor.',
      speed: 'normal',
    },
    {
      id: 'he-05',
      text: "Should I take this medicine before or after meals?",
      turkishMeaning: 'Bu ilaci yemeklerden once mi sonra mi almaliyim?',
      speed: 'normal',
    },
    {
      id: 'he-06',
      text: "Do I need to bring my health card to the appointment?",
      turkishMeaning: 'Randevuya saglik kartimi getirmem gerekiyor mu?',
      speed: 'normal',
    },
    {
      id: 'he-07',
      text: "I twisted my ankle while I was jogging in the park.",
      turkishMeaning: 'Parkta kosarken bilgimi burktum.',
      speed: 'fast',
    },
    {
      id: 'he-08',
      text: "I'd like to get a referral to a specialist if that's possible.",
      turkishMeaning: 'Mumkunse bir uzmana sevk almak istiyorum.',
      speed: 'fast',
    },
  ],
};

export const housingSet: ShadowingSet = {
  id: 'shadowing-housing',
  title: 'Housing & Renting',
  description: 'Practice phrases for apartment hunting, lease discussions, and communicating with landlords in Canada.',
  clbLevel: 6,
  category: 'housing',
  icon: '🏠',
  sentences: [
    {
      id: 'ho-01',
      text: "The apartment is spacious and the rent is reasonable.",
      turkishMeaning: 'Daire genis ve kira makul.',
      speed: 'slow',
    },
    {
      id: 'ho-02',
      text: "Is the heat and water included in the monthly rent?",
      turkishMeaning: 'Isitma ve su aylik kiraya dahil mi?',
      speed: 'slow',
    },
    {
      id: 'ho-03',
      text: "I'm looking for a two-bedroom apartment near downtown.",
      turkishMeaning: 'Sehir merkezine yakin iki yatak odali daire ariyorum.',
      speed: 'slow',
    },
    {
      id: 'ho-04',
      text: "The lease is for twelve months with an option to renew.",
      turkishMeaning: 'Kira sozlesmesi on iki aylik ve yenileme secenegi var.',
      speed: 'normal',
    },
    {
      id: 'ho-05',
      text: "We need to give sixty days' notice before moving out.",
      turkishMeaning: 'Tasinmadan once altmis gun onceden bildirim vermemiz gerekiyor.',
      speed: 'normal',
    },
    {
      id: 'ho-06',
      text: "The building has a gym and laundry facilities in the basement.",
      turkishMeaning: 'Binanin bodrum katinda spor salonu ve camasirhane var.',
      speed: 'normal',
    },
    {
      id: 'ho-07',
      text: "I'd like to schedule a viewing of the apartment this weekend.",
      turkishMeaning: 'Bu hafta sonu daireyi gormek icin randevu almak istiyorum.',
      speed: 'fast',
    },
    {
      id: 'ho-08',
      text: "Are pets allowed in the building? I have a small dog.",
      turkishMeaning: 'Binada evcil hayvanlara izin veriliyor mu? Kucuk bir kopegim var.',
      speed: 'fast',
    },
  ],
};

export const travelSet: ShadowingSet = {
  id: 'shadowing-travel',
  title: 'Travel & Transportation',
  description: 'Practice travel-related phrases for booking trips, navigating airports, and exploring Canadian cities.',
  clbLevel: 6,
  category: 'travel',
  icon: '✈️',
  sentences: [
    {
      id: 'tr-01',
      text: "We're planning to visit Vancouver next summer.",
      turkishMeaning: "Gelecek yaz Vancouver'i ziyaret etmeyi planliyoruz.",
      speed: 'slow',
    },
    {
      id: 'tr-02',
      text: "I'd like to book a round-trip ticket to Montreal.",
      turkishMeaning: "Montreal'e gidis-donus bilet ayirtmak istiyorum.",
      speed: 'slow',
    },
    {
      id: 'tr-03',
      text: "What time does the train to Ottawa leave from this platform?",
      turkishMeaning: 'Ottawa treni bu perondan saat kacta kalkiyor?',
      speed: 'slow',
    },
    {
      id: 'tr-04',
      text: "Could you recommend any good restaurants near the hotel?",
      turkishMeaning: 'Otelin yakininda iyi restoranlar onerebilir misiniz?',
      speed: 'normal',
    },
    {
      id: 'tr-05',
      text: "I need to exchange some currency before we leave tomorrow.",
      turkishMeaning: 'Yarin gitmeden once biraz doviz bozdurmam gerekiyor.',
      speed: 'normal',
    },
    {
      id: 'tr-06',
      text: "The flight was delayed by two hours due to bad weather.",
      turkishMeaning: 'Ucus kotu hava nedeniyle iki saat rotalandi.',
      speed: 'normal',
    },
    {
      id: 'tr-07',
      text: "We'd like a room with a view of the harbour, if available.",
      turkishMeaning: 'Mumkunse limana manzarali bir oda istiyoruz.',
      speed: 'fast',
    },
    {
      id: 'tr-08',
      text: "Is there a shuttle service from the airport to the city centre?",
      turkishMeaning: 'Havalimanindan sehir merkezine servis var mi?',
      speed: 'fast',
    },
  ],
};

export const educationSet: ShadowingSet = {
  id: 'shadowing-education',
  title: 'Education & Studying',
  description: 'Practice phrases for school enrollment, classroom communication, and academic life in Canada.',
  clbLevel: 5,
  category: 'education',
  icon: '📚',
  sentences: [
    {
      id: 'ed-01',
      text: "I'm currently enrolled in a part-time English course.",
      turkishMeaning: 'Su anda yari zamanli bir Ingilizce kursuna kayitliyim.',
      speed: 'slow',
    },
    {
      id: 'ed-02',
      text: "I'm planning to enrol in a college program this September.",
      turkishMeaning: "Bu Eylul'de bir kolej programina kayit olmayi planliyorum.",
      speed: 'slow',
    },
    {
      id: 'ed-03',
      text: "The assignment is due next Friday at midnight.",
      turkishMeaning: 'Odev gelecek cuma gece yarisina kadar teslim edilmeli.',
      speed: 'slow',
    },
    {
      id: 'ed-04',
      text: "I need to improve my writing skills for the CELPIP exam.",
      turkishMeaning: 'CELPIP sinavi icin yazma becerilerimi gelistirmem gerekiyor.',
      speed: 'normal',
    },
    {
      id: 'ed-05',
      text: "Could you explain the difference between these two grammar rules?",
      turkishMeaning: 'Bu iki dilbilgisi kurali arasindaki farki aciklayabilir misiniz?',
      speed: 'normal',
    },
    {
      id: 'ed-06',
      text: "I've decided to take some courses to improve my English skills.",
      turkishMeaning: 'Ingilizce becerilerimi gelistirmek icin bazi kurslar almaya karar verdim.',
      speed: 'normal',
    },
    {
      id: 'ed-07',
      text: "The professor recommended reading at least two chapters per week.",
      turkishMeaning: 'Profesor haftada en az iki bolum okunmasini onerdi.',
      speed: 'fast',
    },
    {
      id: 'ed-08',
      text: "I'm studying for my certification while working full-time.",
      turkishMeaning: 'Tam zamanli calisirken sertifikam icin calisiyorum.',
      speed: 'fast',
    },
  ],
};

export const mediumSets: ShadowingSet[] = [workSet, healthSet, housingSet, travelSet, educationSet];
