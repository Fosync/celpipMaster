// Pattern Synonym Map
// Maps each pattern ID to 2-4 alternative phrasings that express the same idea.
// Useful for CELPIP learners to expand their repertoire of expressions (CLB 4-8 level).

export const patternSynonymMap: Record<string, string[]> = {
  // ===== EMAIL OPENINGS =====

  'pat-email-open-1': [
    'I would like to let you know that...',
    'I am reaching out to notify you that...',
    'This email is to inform you that...',
  ],
  'pat-email-open-2': [
    'I am writing to ask if you could...',
    'I would appreciate it if you could...',
    'I wanted to request...',
  ],
  'pat-email-open-3': [
    'Thank you for reaching out about...',
    'Thank you for writing to me about...',
    'I appreciate your email about...',
  ],
  'pat-email-open-4': [
    'Thank you for your message. I wanted to reply regarding...',
    'I am getting back to you about...',
    'This is in reply to your email about...',
  ],
  'pat-email-open-5': [
    'I hope you are doing well.',
    'I hope all is well with you.',
    'I trust you are doing well.',
  ],
  'pat-email-open-6': [
    'I wanted to bring up my concerns regarding...',
    'I am reaching out because I am worried about...',
    'I feel the need to raise an issue about...',
  ],
  'pat-email-open-7': [
    'I am happy to inform you that...',
    'I am glad to share some good news about...',
    'It is my pleasure to let you know that...',
    'I am excited to tell you that...',
  ],
  'pat-email-open-8': [
    'I am getting in touch with you regarding...',
    'I wanted to contact you about...',
    'I am writing to you in connection with...',
  ],
  'pat-email-open-9': [
    'I would like to ask about...',
    'I am curious to find out more about...',
    'I wanted to get some information about...',
    'Could you provide me with details about...?',
  ],
  'pat-email-open-10': [
    'I recently came across... and I think you should know about it.',
    'I wanted to let you know that I noticed...',
    'Something has come to my attention regarding...',
  ],

  // ===== EMAIL CLOSINGS =====

  'pat-email-close-1': [
    'I hope to hear from you soon.',
    'I am looking forward to your reply.',
    'I eagerly await your response.',
  ],
  'pat-email-close-2': [
    'Feel free to reach out if you need any more information.',
    'Please let me know if you have any questions.',
    'If you need any further details, please do not hesitate to ask.',
  ],
  'pat-email-close-3': [
    'I appreciate you taking the time to read this.',
    'Thank you for considering my request.',
    'I am grateful for your time and attention.',
  ],
  'pat-email-close-4': [
    'I would be grateful if you could reply as soon as possible.',
    'Could you please respond at your earliest opportunity?',
    'I hope you can get back to me soon.',
  ],
  'pat-email-close-5': [
    'I appreciate any help you can provide.',
    'Thank you for your assistance with this.',
    'I am grateful for your support in this matter.',
  ],
  'pat-email-close-6': [
    'I am hoping we can find a solution soon.',
    'I look forward to a quick resolution.',
    'I trust we can work this out promptly.',
    'Let us try to settle this matter soon.',
  ],
  'pat-email-close-7': [
    'Feel free to let me know if you need further assistance.',
    'I am happy to help in any way I can.',
    'Do not hesitate to ask if there is anything else you need.',
  ],
  'pat-email-close-8': [
    'I am eager to hear your thoughts on this.',
    'I hope to receive your feedback on this soon.',
    'I await your response on this topic.',
  ],
  'pat-email-close-9': [
    'Thank you for addressing this quickly.',
    'I am grateful for your swift attention to this.',
    'I value your quick response on this matter.',
  ],
  'pat-email-close-10': [
    'Best wishes to you.',
    'I wish you all the best.',
    'Take care and best regards.',
    'With warm regards.',
  ],

  // ===== OPINION EXPRESSIONS =====

  'pat-opinion-1': [
    'I think that...',
    'The way I see it, ...',
    'As far as I am concerned, ...',
  ],
  'pat-opinion-2': [
    'I am fully convinced that...',
    'I firmly think that...',
    'I have no doubt that...',
  ],
  'pat-opinion-3': [
    'Although some people may say..., I believe that...',
    'I see the point about..., but I still think that...',
    'Even though... has some merit, I feel that...',
  ],
  'pat-opinion-4': [
    'A key benefit of... is that...',
    'One of the good things about... is that...',
    'A positive aspect of... is that...',
  ],
  'pat-opinion-5': [
    'Most people would agree that...',
    'It is commonly accepted that...',
    'It is generally understood that...',
    'Many people acknowledge that...',
  ],
  'pat-opinion-6': [
    'The way I look at it, ...',
    'In my view, ...',
    'As I see it, ...',
  ],
  'pat-opinion-7': [
    'I would say that...',
    'My position is that...',
    'I would make the case that...',
  ],
  'pat-opinion-8': [
    'I am absolutely certain that...',
    'I wholeheartedly believe that...',
    'Without a doubt, I think that...',
  ],
  'pat-opinion-9': [
    'One possible downside of... is that...',
    'A negative aspect of... is that...',
    'One concern about... is that...',
    'A possible disadvantage of... is that...',
  ],
  'pat-opinion-10': [
    'Taking everything into account, I think that...',
    'After weighing the pros and cons, I believe that...',
    'Overall, I feel that...',
  ],

  // ===== LINKING WORDS =====

  'pat-linking-1': [
    'Moreover, ...',
    'In addition, ...',
    'What is more, ...',
  ],
  'pat-linking-2': [
    'However, from another perspective, ...',
    'Then again, ...',
    'Conversely, ...',
    'At the same time, ...',
  ],
  'pat-linking-3': [
    'Consequently, ...',
    'Because of this, ...',
    'For this reason, ...',
  ],
  'pat-linking-4': [
    'Besides this, ...',
    'On top of that, ...',
    'Along with this, ...',
  ],
  'pat-linking-5': [
    'Nevertheless, ...',
    'On the other hand, ...',
    'That being said, ...',
    'Even so, ...',
  ],
  'pat-linking-6': [
    'To illustrate, ...',
    'For instance, ...',
    'As an example, ...',
  ],
  'pat-linking-7': [
    'As a result, ...',
    'For this reason, ...',
    'Because of this, ...',
    'Thus, ...',
  ],
  'pat-linking-8': [
    'In the same way, ...',
    'Likewise, ...',
    'Along the same lines, ...',
  ],
  'pat-linking-9': [
    'On the contrary, ...',
    'Unlike this, ...',
    'Whereas, ...',
    'Conversely, ...',
  ],
  'pat-linking-10': [
    'In conclusion, ...',
    'All in all, ...',
    'To summarize, ...',
    'In short, ...',
  ],

  // ===== DAILY CONVERSATION =====

  'pat-daily-1': [
    'Would you be able to...?',
    'Is there any chance you could...?',
    'I was hoping you could...',
  ],
  'pat-daily-2': [
    'Do you think it would be possible to...?',
    'I wanted to ask if...',
    'Would it be all right if...?',
  ],
  'pat-daily-3': [
    'Is it okay if I ask you to...?',
    'Could I trouble you to...?',
    'Would it bother you to...?',
  ],
  'pat-daily-4': [
    'I am sorry, could you explain that again?',
    'I did not quite catch that. Could you repeat it?',
    'I am afraid I do not follow. Could you say that differently?',
  ],
  'pat-daily-5': [
    'I am hoping to...',
    'I am interested in...',
    'What I really want is to...',
  ],
  'pat-daily-6': [
    'Would you happen to know...?',
    'Any idea about...?',
    'Can you tell me if...?',
  ],
  'pat-daily-7': [
    'That is a wonderful idea!',
    'I really like that idea.',
    'What a great suggestion!',
    'That is exactly what I was thinking.',
  ],
  'pat-daily-8': [
    'I could be wrong, but I believe...',
    'I am not entirely certain, but I think...',
    'I cannot say for sure, but my guess is...',
  ],
  'pat-daily-9': [
    'I really enjoyed our conversation.',
    'It was great chatting with you.',
    'I had a lovely time talking to you.',
  ],
  'pat-daily-10': [
    'Pardon me, do you know the way to...?',
    'Sorry to bother you, but how do I get to...?',
    'Could you point me in the direction of...?',
    'I am trying to find... Could you help me with directions?',
  ],

  // ===== SPEAKING OPINIONS =====

  'pat-speak-opinion-1': [
    'The way I look at it, ...',
    'As I see it, ...',
    'In my view, ...',
  ],
  'pat-speak-opinion-2': [
    'In my honest opinion, I believe...',
    'Speaking for myself, I think...',
    'Well, personally, I feel...',
  ],
  'pat-speak-opinion-3': [
    'I share the view of... since...',
    'I agree with the idea that... because...',
    'I side with... for the reason that...',
  ],
  'pat-speak-opinion-4': [
    'I truly believe that...',
    'I am quite passionate about the idea that...',
    'It is very important to me that...',
  ],
  'pat-speak-opinion-5': [
    'From where I stand, ...',
    'In my experience, ...',
    'Looking at it from my angle, ...',
  ],
  'pat-speak-opinion-6': [
    'I see it differently because...',
    'I would have to disagree on that point because...',
    'With all due respect, I have a different view because...',
  ],
  'pat-speak-opinion-7': [
    'A big reason for my opinion is...',
    'What makes me feel this way is...',
    'The main thing that supports my view is...',
  ],
  'pat-speak-opinion-8': [
    'I have no doubt that...',
    'I firmly believe that...',
    'I am completely sure that...',
  ],
  'pat-speak-opinion-9': [
    'If it were up to me, I would choose... because...',
    'Given the choice, I would go with... since...',
    'I have a preference for... because...',
    'My personal preference would be... because...',
  ],
  'pat-speak-opinion-10': [
    'Honestly, I think... is the better option.',
    'If I am being truthful, I believe... works better.',
    'Frankly speaking, I feel... is the way to go.',
  ],

  // ===== DESCRIBING SCENES =====

  'pat-describe-1': [
    'Looking at the picture, I notice...',
    'The image shows...',
    'From the picture, I can observe...',
  ],
  'pat-describe-2': [
    'It seems like...',
    'It looks as though...',
    'From what I can tell, ...',
  ],
  'pat-describe-3': [
    'The key distinction between... and... is...',
    'What sets... apart from... is...',
    'While... is..., on the other hand... is...',
  ],
  'pat-describe-4': [
    'The most noticeable thing is...',
    'The first thing that catches my eye is...',
    'What draws my attention the most is...',
    'The most striking feature is...',
  ],
  'pat-describe-5': [
    'Over on the left/right, I can see...',
    'If I look to the left/right, there is...',
    'Towards the left/right of the image, I notice...',
  ],
  'pat-describe-6': [
    'It seems as if... is taking place because...',
    'I get the impression that... is going on since...',
    'It gives the feeling that... is occurring because...',
  ],
  'pat-describe-7': [
    'The individual/individuals in the image appear to be...',
    'It looks like the person/people are...',
    'The person/people seem to be in the middle of...',
  ],
  'pat-describe-8': [
    'From what I observe, it seems that...',
    'Judging by the scene, I think that...',
    'Looking at the details, I believe that...',
  ],
  'pat-describe-9': [
    'The general mood of the picture is...',
    'The scene gives off a... feeling.',
    'The tone of the image seems to be...',
  ],
  'pat-describe-10': [
    'I can see that... which tells me that...',
    'I observe that... and this implies that...',
    'It is clear that... which means that...',
    'One detail I notice is... and it indicates that...',
  ],

  // ===== GIVING ADVICE =====

  'pat-advice-1': [
    'My strong suggestion would be to...',
    'I highly suggest that you...',
    'I really think you should...',
  ],
  'pat-advice-2': [
    'Have you thought about...?',
    'What about trying...?',
    'Has... ever crossed your mind?',
  ],
  'pat-advice-3': [
    'The smartest move would be to...',
    'I think the ideal thing to do would be to...',
    'Your best bet would be to...',
  ],
  'pat-advice-4': [
    'You really ought to think about... since...',
    'It might be worth looking into... because...',
    'I believe... deserves serious thought because...',
  ],
  'pat-advice-5': [
    'A major advantage of... is...',
    'What makes... so appealing is...',
    'The great thing about... is...',
  ],
  'pat-advice-6': [
    'In your shoes, I would...',
    'If I were in your position, I would...',
    'If it were me, I would...',
    'Were I in your place, I would...',
  ],
  'pat-advice-7': [
    'It might be worth considering...',
    'Perhaps you should look into...',
    'You may want to give... some thought.',
  ],
  'pat-advice-8': [
    'A wise move would be to... because...',
    'You should consider... so that...',
    'It is a good idea to... in order to...',
  ],
  'pat-advice-9': [
    'Would it not be wiser to...?',
    'Do you not think... might work better?',
    'Would it not make more sense to...?',
  ],
  'pat-advice-10': [
    'I think you would agree that...',
    'You will probably see that...',
    'I believe we both know that...',
  ],
};
