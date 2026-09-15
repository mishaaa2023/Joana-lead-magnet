/* Joana's Language Hub — shared scripts: i18n (EN/IT/ES/FR), VSL captions, mobile menu, scroll reveal */
(function () {
  'use strict';
  var LANGS = ['en', 'it', 'es', 'fr'];
  /* ------------------------------------------------------------------
     Subtitle timing. One caption per paragraph of the VSL, timed to the
     actual video length (1:35 = 95s). Adjust the "t" values (seconds)
     freely to re-sync the captions with your audio.
  ------------------------------------------------------------------ */
  var CAPTION_TRACK = [
    { t: 0,    key: 'cap_1' },
    { t: 23.2, key: 'cap_2' },
    { t: 40.5, key: 'cap_3' },
    { t: 58.9, key: 'cap_4' },
    { t: 79.2, key: 'cap_5' }
  ];
  var I18N = {
    en: {
      language_auto: 'Auto',
      nav_map: 'The Map', nav_results: 'Results', nav_roadmap: 'Roadmap',
      nav_book: 'Book a call', nav_home: 'Home',
      hero_badge: 'Free 3-Page Boardroom Map',
      hero_live: '100% free',
      hero_h1: `You're a lion in your language. Lead like one in English.`,
      hero_sub: `Get the free Boardroom Map: 5 emergency phrases so you never freeze on Zoom again, exactly why your brain locks up, and the 6-month plan to stop translating in your head.`,
      hero_cta: 'Get the Free Boardroom Map',
      hero_cta2: 'Watch the message',
      hero_proof: 'Practical coaching for people who already know their work.',
      map_1: 'Page 1 · The Emergency Kit', map_1d: 'Phrases for the moment your mind goes blank',
      map_2: 'Page 2 · Why You Freeze', map_2d: 'The real cause in your brain — and the fix',
      map_3: 'Page 3 · The 6-Month Plan', map_3d: 'Speak with power, stop translating in your head',
      map_cta: 'Get the free map',
      vsl_kicker: 'Your next move',
      vsl_title: 'Watch how this works — in 90 seconds.',
      vsl_sub: 'A message from Joana on why you freeze — and the 3-page map that changes it.',
      caption_note: 'Captions will appear here as the video plays.',
      nav_inside: 'Inside the map',
      preview_kicker: 'A quick look inside',
      preview_title: 'Three pages. Zero fluff.',
      preview_intro: `Scroll through what's waiting for you — free.`,
      preview2_line: `Hint: it's not the grammar — it's the pressure.`,
      preview3_line: 'Months 1–2 · 3–4 · 5–6 — from unlock to autonomy.',
      final_kicker: `It's yours — free`,
      final_title: 'Ready to lead like a lion again?',
      final_sub: 'Get the 3-page Boardroom Freedom Map — free. Keep it on your desk. Use it tomorrow.',
      recap_title: 'Everything you grabbed — in 3 pages.',
      recap_sub: 'Same kit. Same plan. Now go use it.',
      toc_summary: 'Summary',
      toc_book: 'Book your call',
      contrast_kicker: 'The real gap',
      contrast_title: 'Your expertise is already there. English should not hide it.',
      s3_left_status: 'This is you',
      s3_right_status: 'The friction',
      s3_left_title: 'In your native language: the lion',
      s3_left_1: 'You manage high-stakes deals without hesitation.',
      s3_left_2: 'You have full control of the room and your team.',
      s3_left_3: 'You communicate complex ideas clearly.',
      s3_right_title: 'In English: the kitten',
      s3_right_1: 'Your mind races, but your voice goes quiet.',
      s3_right_2: 'You fear the wrong words will make you sound junior.',
      s3_right_3: 'You stay silent — or ask a colleague to translate for you.',
      s3_anchor: `This isn't a grammar problem. It's a pressure problem — and it's completely fixable.`,
      method_kicker: 'What you get',
      method_title: 'The map behind your confidence',
      method_intro: 'Three clean pages that turn pressure into presence — built around real work situations.',
      s4_p1_title: 'Page 1 — The Emergency Kit',
      s4_p1_desc: 'Say the right thing tomorrow if you forget a word or get asked a surprise question in a meeting.',
      s4_p2_title: 'Page 2 — Why You Freeze',
      s4_p2_desc: 'Exactly why your brain locks up under pressure — and the simple fix that stops it.',
      s4_p3_title: 'Page 3 — The 6-Month Plan',
      s4_p3_desc: 'The roadmap that helps you speak English with power and stop translating in your head.',
      results_kicker: 'A real shift',
      s5_header: 'From freezing on calls to closing international contracts.',
      s5_quote: `“Daniele is the CEO of several companies. He knew the grammar, but the pressure made him freeze. We removed the textbooks and simulated his real meetings. Today, he leads international negotiations, interviews and public talks entirely in English.”`,
      s5_tag1: '5 emergency phrases',
      s5_tag2: 'Zero grammar rules',
      s5_tag3: 'Results in 6 months',
      results_months_1: 'months', results_months_2: 'to momentum',
      roadmap_kicker: 'Your progression',
      roadmap_title: 'Six months. Three clear stages.',
      roadmap_badge: 'Built around your work',
      s6_m12_title: 'Months 1–2: Activation & mental unblocking',
      s6_m12_desc: 'Stop translating in your head. Unlock the vocabulary you already have by removing the fear of judgment.',
      s6_m34_title: 'Months 3–4: Real-work simulations',
      s6_m34_desc: 'No textbooks. We practice your real slide decks, negotiations and weekly meetings until they feel natural.',
      s6_m56_title: 'Months 5–6: Autonomy & leadership',
      s6_m56_desc: 'Lead meetings, handle surprise objections and close deals abroad without preparing every sentence first.',
      booking_kicker: 'Start here',
      s8_header: 'Take the first step.',
      s8_sub: 'Book your free activation call. 15 minutes, one-to-one with Joana. Find where you get stuck and leave with a clear action plan — no pressure.',
      booking_point_1: 'A focused 15-minute conversation',
      booking_point_2: 'A practical next step',
      booking_point_3: 'No obligation',
      footer_copy: 'Practical English for people who lead.',
      footer_privacy: 'Privacy',
      footer_terms: 'Terms',
      cap_1: `When you speak Italian, you are like a Lion. You are strong. You are smart. People listen to you. But the moment you have to speak English at work, you feel like a tiny Kitten. You get scared. You stay quiet because you don't want to make a mistake. It makes you feel small, and it makes you feel stuck.`,
      cap_2: `It's really hard to see other people get the big jobs and the extra money just because they speak English faster than you. You know you are smarter than them, but the language stops you from showing it. You feel like you aren't doing as well as you should.`,
      cap_3: `Most people think they need to take more English courses. But you don't need more books or more grammar rules. You are just tired of overthinking every word. You are tired of feeling embarrassed and having to ask a friend to help you translate what you want to say.`,
      cap_4: `I want to help you feel like a Lion again. So, I made a simple 3-Page Boardroom Map for you. Page 1 is an Emergency Kit — it gives you sentences to use tomorrow if you forget a word in a meeting. Page 2 explains exactly why your brain gets scared and how to stop it. Page 3 shows you my 6-month plan to help you speak English with power.`,
      cap_5: `It's totally free. I want you to stop feeling like a child at work and start feeling like the expert you really are. Click the button below, and you'll be directed towards the resource.`,
      back_home: '← Back to homepage',
      resource_kicker: 'Your free gift — 3 pages',
      resource_title: 'The Boardroom Freedom Map',
      resource_sub: '5 emergency phrases to never freeze on Zoom again and the action plan to stop translating in your head.',
      chip_1: '3 pages', chip_2: '5 emergency phrases', chip_3: 'Read in 10 minutes',
      resource_cta_book: 'Book your free activation session',
      resource_intro: 'A quick guide for professionals who are confident and respected in their native language — but feel stuck the second the meeting switches to English. Keep it on your desk. Use it tomorrow.',
      part1_kicker: 'Part 1',
      part1_title: 'The Meeting Survival Kit',
      part1_intro: 'What to say in the first 10 seconds when your mind goes blank — or you get asked an unexpected question.',
      label_avoid: 'What to avoid', label_say: 'What to say', label_why: 'Why it works',
      sc1_label: 'Scenario 1', sc1_tag: 'Surprise question',
      sc1_title: 'You get a surprise question and need 10 seconds to think.',
      sc1_avoid: 'Sitting in dead silence or saying “Uhhh… wait.”',
      sc1_say: '“That’s an interesting angle. Give me just a second to gather my thoughts on this.”',
      sc1_why: 'You buy time while sounding calm, senior and thoughtful — not caught off guard.',
      sc2_label: 'Scenario 2', sc2_tag: 'Slip-up',
      sc2_title: 'You realize you just used the wrong word.',
      sc2_avoid: 'Apologizing three times and getting flustered.',
      sc2_say: '“Actually, let me rephrase that, so it’s completely clear.”',
      sc2_why: 'You take control of the slip-up before anyone else even notices it.',
      sc3_label: 'Scenario 3', sc3_tag: 'Missing word',
      sc3_title: 'You have the idea — but you forgot the exact English word.',
      sc3_avoid: 'Staring at the ceiling, trying to remember the dictionary translation.',
      sc3_say: '“I’m missing the exact word in English, but what I mean is…”',
      sc3_why: 'Direct transparency shows confidence. Clients care about your solution, not your vocabulary.',
      sc4_label: 'Scenario 4', sc4_tag: 'Fast talker',
      sc4_title: 'Someone speaks too fast and you missed an important detail.',
      sc4_avoid: 'Nodding along politely and pretending you understood.',
      sc4_say: '“Could you walk me through that last point once more? I want to make sure we’re fully aligned.”',
      sc4_why: 'It frames the question around business alignment — not a language weakness.',
      sc5_label: 'Scenario 5', sc5_tag: 'Jumping in',
      sc5_title: 'You want to interrupt and share your point before the topic changes.',
      sc5_avoid: 'Waiting for total silence that never comes.',
      sc5_say: '“Jumping in on that note…”',
      sc5_why: 'A natural, authoritative way to step into the conversation.',
      part1_footer: `These phrases will save your meeting tomorrow. But memorizing five sentences won't change your career. Here is what is actually happening in your brain when you freeze.`,
      part2_kicker: 'Part 2',
      part2_title: 'Why You Actually Freeze',
      part2_intro: 'Why experienced professionals with 15+ years of career experience still feel insecure on international calls.',
      trap1_title: 'The 100mph Translation Trap',
      trap1_desc: 'In your native language your thoughts are fast and complex. When you switch to English, you try to translate every thought word-for-word. Your brain overloads, runs out of memory — and your voice locks up.',
      trap2_title: 'The Perfection Fever',
      trap2_desc: `You're an expert at work. You hate looking silly or unprepared. So your brain says: “If you can't say it perfectly, don't say it at all.” You stay silent, nod, and let someone else take the credit for the deal because they speak faster.`,
      trap3_title: 'The Traditional Course Illusion',
      trap3_desc: 'You think the fix is more grammar rules or YouTube videos. The truth: the more rules you cram in, the more you overthink before opening your mouth. And the more you overthink, the more you freeze.',
      part3_kicker: 'Part 3',
      part3_title: 'From Fear to Leadership in 6 Months',
      part3_intro: 'The practical roadmap we use in “Your Passport to English Freedom” to unlock your spoken voice.',
      phase1_kicker: 'Phase 1 · Months 1–2',
      phase1_title: 'Activation & mental unblocking',
      phase1_desc: 'Stop translating in your head. We unlock the vocabulary you already know by removing the fear of judgment. A safe, relaxed environment where mistakes are completely normal.',
      phase2_kicker: 'Phase 2 · Months 3–4',
      phase2_title: 'Real-work simulations',
      phase2_desc: 'No school textbooks. We take your actual upcoming slide decks, client negotiations and weekly meetings — and practice them together until speaking becomes second nature.',
      phase3_kicker: 'Phase 3 · Months 5–6',
      phase3_title: 'Total autonomy & international deals',
      phase3_desc: 'Learn to lead meetings, handle surprise objections and close deals with foreign clients without preparing every sentence beforehand. You will never need a colleague to translate for you again.',
      book_kicker: 'Ready?',
      book_title: 'Want to apply this map to your career?',
      book_sub: 'Book your free English activation session — a relaxed, one-on-one diagnostic call with Joana. We will evaluate your spoken English, pinpoint where your voice gets stuck under pressure, and map out your custom action plan. Zero sales pressure. No boring grammar tests.',
      book_pt1: '15 minutes · 1-to-1 on Google Meet',
      book_pt2: '100% confidential (NDA protected)',
      book_pt3: 'Clear, actionable feedback on your English',
      book_pt4: 'Zero sales pressure',
      book_cta: 'Select a date & time below',
      book_cta_note: 'The calendar opens an official booking page — nothing is charged.'
    },
    it: {
      language_auto: 'Auto',
      nav_map: 'La Mappa', nav_results: 'Risultati', nav_roadmap: 'Percorso',
      nav_book: 'Prenota una chiamata', nav_home: 'Home',
      hero_badge: 'Mappa executive gratuita — 3 pagine',
      hero_live: '100% gratuito',
      hero_h1: 'Nella tua lingua sei un leone. Guida anche in inglese.',
      hero_sub: 'Ricevi la Mappa gratuita: 5 frasi d’emergenza per non bloccarti mai più su Zoom, il motivo esatto per cui il tuo cervello si ferma e il piano in 6 mesi per smettere di tradurre nella tua testa.',
      hero_cta: 'Ricevi la Mappa gratuita',
      hero_cta2: 'Guarda il messaggio',
      hero_proof: 'Coaching pratico per chi conosce già il proprio lavoro.',
      map_1: 'Pagina 1 · Il Kit d’Emergenza', map_1d: 'Frasi per il momento in cui la mente va in bianco',
      map_2: 'Pagina 2 · Perché ti blocchi', map_2d: 'La vera causa nel tuo cervello — e la soluzione',
      map_3: 'Pagina 3 · Il Piano in 6 Mesi', map_3d: 'Parla con autorevolezza, smetti di tradurre nella testa',
      map_cta: 'Ricevi la mappa gratuita',
      vsl_kicker: 'La tua prossima mossa',
      vsl_title: 'Guarda come funziona — in 90 secondi.',
      vsl_sub: 'Un messaggio di Joana su perché ti blocchi — e la mappa in 3 pagine che lo cambia.',
      caption_note: 'I sottotitoli appariranno qui man mano che il video va avanti.',
      nav_inside: 'Dentro la mappa',
      preview_kicker: 'Uno sguardo rapido dentro',
      preview_title: 'Tre pagine. Zero fronzoli.',
      preview_intro: 'Scorri quello che ti aspetta — gratis.',
      preview2_line: 'Indizio: non è la grammatica — è la pressione.',
      preview3_line: 'Mesi 1–2 · 3–4 · 5–6 — dallo sblocco all’autonomia.',
      final_kicker: 'È tuo — gratis',
      final_title: 'Pronto a guidare di nuovo come un leone?',
      final_sub: 'Ricevi la Mappa per la Libertà in Riunione in 3 pagine — gratis. Tienila sulla scrivania. Usala domani.',
      recap_title: 'Tutto quello che hai ricevuto — in 3 pagine.',
      recap_sub: 'Stesso kit. Stesso piano. Ora usalo.',
      toc_summary: 'Riepilogo',
      toc_book: 'Prenota la tua chiamata',
      contrast_kicker: 'Il vero problema',
      contrast_title: 'La tua competenza c’è già. L’inglese non dovrebbe nasconderla.',
      s3_left_status: 'Questo sei tu',
      s3_right_status: 'L’attrito',
      s3_left_title: 'Nella tua lingua madre: il leone',
      s3_left_1: 'Gestisci trattative importanti senza esitare.',
      s3_left_2: 'Controlli la stanza e il tuo team senza sforzo.',
      s3_left_3: 'Comunichi idee complesse con chiarezza.',
      s3_right_title: 'In inglese: il gattino',
      s3_right_1: 'La mente corre, ma la voce si spegne.',
      s3_right_2: 'Temi che le parole sbagliate ti facciano sembrare inesperto.',
      s3_right_3: 'Rimani in silenzio — o chiedi a un collega di tradurre per te.',
      s3_anchor: 'Non è un problema di grammatica. È un problema di pressione — ed è completamente risolvibile.',
      method_kicker: 'Cosa ricevi',
      method_title: 'La mappa dietro la tua sicurezza',
      method_intro: 'Tre pagine pulite che trasformano la pressione in presenza — costruite su situazioni di lavoro reali.',
      s4_p1_title: 'Pagina 1 — Il Kit d’Emergenza',
      s4_p1_desc: 'Dì la cosa giusta domani, se dimentichi una parola o ricevi una domanda a sorpresa in riunione.',
      s4_p2_title: 'Pagina 2 — Perché ti blocchi',
      s4_p2_desc: 'Esattamente perché il tuo cervello si blocca sotto pressione — e il rimedio semplice che lo ferma.',
      s4_p3_title: 'Pagina 3 — Il Piano in 6 Mesi',
      s4_p3_desc: 'Il percorso che ti aiuta a parlare inglese con forza e a smettere di tradurre nella testa.',
      results_kicker: 'Un cambiamento reale',
      s5_header: 'Dal bloccarti in riunione al chiudere contratti internazionali.',
      s5_quote: '“Daniele è il CEO di diverse aziende. Conosceva la grammatica, ma la pressione lo bloccava. Abbiamo tolto i libri di testo e simulato le sue riunioni reali. Oggi guida negoziazioni internazionali, colloqui e talk pubblici interamente in inglese.”',
      s5_tag1: '5 frasi d’emergenza',
      s5_tag2: 'Zero regole di grammatica',
      s5_tag3: 'Risultati in 6 mesi',
      results_months_1: 'mesi', results_months_2: 'per lo slancio',
      roadmap_kicker: 'Il tuo percorso',
      roadmap_title: 'Sei mesi. Tre fasi chiare.',
      roadmap_badge: 'Costruito sul tuo lavoro',
      s6_m12_title: 'Mesi 1–2: Attivazione e sblocco mentale',
      s6_m12_desc: 'Smetti di tradurre nella testa. Riscopri il vocabolario che già possiedi togliendo la paura del giudizio.',
      s6_m34_title: 'Mesi 3–4: Simulazioni sul lavoro reale',
      s6_m34_desc: 'Niente libri di testo. Esercitiamo le tue presentazioni, negoziazioni e riunioni vere finché diventano naturali.',
      s6_m56_title: 'Mesi 5–6: Autonomia e leadership',
      s6_m56_desc: 'Conduci le riunioni, gestisci le obiezioni a sorpresa e chiudi trattative all’estero senza preparare ogni frase.',
      booking_kicker: 'Inizia qui',
      s8_header: 'Fai il primo passo.',
      s8_sub: 'Prenota la tua chiamata di attivazione gratuita. 15 minuti, uno-a-uno con Joana. Trovi dove ti blocchi e parti con un piano d’azione chiaro — senza pressioni.',
      booking_point_1: 'Una conversazione mirata di 15 minuti',
      booking_point_2: 'Un passo successivo pratico',
      booking_point_3: 'Nessun obbligo',
      footer_copy: 'Inglese pratico per chi guida.',
      footer_privacy: 'Privacy',
      footer_terms: 'Termini',
      cap_1: 'Quando parli italiano sei come un leone. Sei forte. Sei intelligente. La gente ti ascolta. Ma nel momento in cui devi parlare inglese al lavoro, ti senti come un piccolo gattino. Ti spaventi. Resti in silenzio perché non vuoi fare un errore. Ti fa sentire piccolo — e ti fa sentire bloccato.',
      cap_2: 'È davvero dura vedere altre persone ottenere i ruoli importanti e i soldi extra solo perché parlano inglese più velocemente di te. Sai di essere più intelligente di loro, ma la lingua ti impedisce di dimostrarlo. Ti senti come se non stessi rendendo quanto dovresti.',
      cap_3: 'Molti pensano di dover seguire altri corsi di inglese. Ma non ti servono più libri o più regole di grammatica. Sei solo stanco di pensare troppo a ogni parola. Stanco di sentirti in imbarazzo e di dover chiedere a un amico di aiutarti a tradurre quello che vuoi dire.',
      cap_4: 'Voglio aiutarti a sentirti di nuovo un leone. Così ho creato per te una semplice Mappa Executive in 3 pagine. Ecco che cosa contiene: la Pagina 1 è un Kit d’Emergenza: ti dà le frasi da usare domani se dimentichi una parola in riunione. La Pagina 2 spiega esattamente perché il tuo cervello si spaventa e come fermarlo. La Pagina 3 mostra il mio piano in 6 mesi per parlare inglese con forza.',
      cap_5: 'È completamente gratuita. Voglio che smetti di sentirti un bambino al lavoro e che inizi a sentirti l’esperto che sei davvero. Clicca il pulsante qui sotto e verrai portato alla risorsa.',
      back_home: '← Torna alla home',
      resource_kicker: 'Il tuo regalo gratuito — 3 pagine',
      resource_title: 'La Mappa per la Libertà in Riunione',
      resource_sub: '5 frasi d’emergenza per non bloccarti mai più su Zoom e il piano d’azione per smettere di tradurre nella tua testa.',
      chip_1: '3 pagine', chip_2: '5 frasi d’emergenza', chip_3: 'Da leggere in 10 minuti',
      resource_cta_book: 'Prenota la tua sessione di attivazione gratuita',
      resource_intro: 'Una guida rapida per professionisti sicuri e rispettati nella propria lingua madre — ma che si bloccano nell’istante in cui la riunione passa all’inglese. Tienila sulla scrivania. Usala domani.',
      part1_kicker: 'Parte 1',
      part1_title: 'Il Kit di Sopravvivenza per le Riunioni',
      part1_intro: 'Cosa dire nei primi 10 secondi quando la mente va in bianco — o quando ricevi una domanda inaspettata.',
      label_avoid: 'Da evitare', label_say: 'Da dire', label_why: 'Perché funziona',
      sc1_label: 'Scenario 1', sc1_tag: 'Domanda a sorpresa',
      sc1_title: 'Ricevi una domanda a sorpresa e ti servono 10 secondi per pensare.',
      sc1_avoid: 'Restare in silenzio assoluto o dire “Uhhh… aspetta”.',
      sc1_say: '“È un punto di vista interessante. Dammi solo un secondo per raccogliere le idee su questo.”',
      sc1_why: 'Guadagni tempo restando calmo, senior e riflessivo — non colto alla sprovvista.',
      sc2_label: 'Scenario 2', sc2_tag: 'Errore di parola',
      sc2_title: 'Ti accorgi di aver appena usato la parola sbagliata.',
      sc2_avoid: 'Scusarti tre volte e perdere la calma.',
      sc2_say: '“In realtà, lasciami riformulare così che sia del tutto chiaro.”',
      sc2_why: 'Prendi il controllo dell’errore prima ancora che gli altri se ne accorgano.',
      sc3_label: 'Scenario 3', sc3_tag: 'Parola mancante',
      sc3_title: 'Hai l’idea — ma hai dimenticato la parola inglese esatta.',
      sc3_avoid: 'Fissare il soffitto cercando di ricordare la traduzione dal dizionario.',
      sc3_say: '“Mi manca la parola esatta in inglese, ma quello che intendo è…”',
      sc3_why: 'La trasparenza diretta mostra sicurezza. Ai clienti interessa la tua soluzione, non il tuo vocabolario.',
      sc4_label: 'Scenario 4', sc4_tag: 'Interlocutore veloce',
      sc4_title: 'Qualcuno parla troppo velocemente e ti è sfuggito un dettaglio importante.',
      sc4_avoid: 'Annuire educatamente fingendo di aver capito.',
      sc4_say: '“Potresti ripetere l’ultimo punto? Voglio essere sicuro che siamo perfettamente allineati.”',
      sc4_why: 'Trasforma la richiesta in allineamento di business — non in una debolezza linguistica.',
      sc5_label: 'Scenario 5', sc5_tag: 'Intervento',
      sc5_title: 'Vuoi intervenire e dire la tua prima che l’argomento cambi.',
      sc5_avoid: 'Aspettare un silenzio totale che non arriva mai.',
      sc5_say: '“Inserendomi su questo punto…”',
      sc5_why: 'Un modo naturale e autorevole per entrare nella conversazione.',
      part1_footer: 'Queste frasi ti salveranno la riunione di domani. Ma memorizzare cinque frasi non cambierà la tua carriera. Ecco che cosa succede davvero nel tuo cervello quando ti blocchi.',
      part2_kicker: 'Parte 2',
      part2_title: 'Perché in realtà ti blocchi',
      part2_intro: 'Perché professionisti esperti con 15+ anni di carriera si sentono ancora insicuri nelle chiamate internazionali.',
      trap1_title: 'La Trappola della Traduzione a 100 all’ora',
      trap1_desc: 'Nella tua lingua madre i pensieri sono veloci e complessi. Quando passi all’inglese, provi a tradurre ogni pensiero parola per parola. Il tuo cervello va in sovraccarico, finisce la memoria — e la voce si blocca.',
      trap2_title: 'La Febbre della Perfezione',
      trap2_desc: 'Sei un esperto al lavoro. Detesti sembrare sciocco o impreparato. Così il tuo cervello dice: “Se non puoi dirlo perfettamente, non dirlo affatto.” Resti in silenzio, annuisci e lasci che un altro prenda il merito dell’affare solo perché parla più veloce.',
      trap3_title: 'L’Illusione del Corso Tradizionale',
      trap3_desc: 'Pensi che la soluzione siano più regole di grammatica o video su YouTube. La verità: più regole accumuli, più pensi troppo prima di aprire bocca. E più pensi troppo, più ti blocchi.',
      part3_kicker: 'Parte 3',
      part3_title: 'Dalla Paura alla Leadership in 6 Mesi',
      part3_intro: 'Il percorso pratico che usiamo in “Your Passport to English Freedom” per liberare la tua voce.',
      phase1_kicker: 'Fase 1 · Mesi 1–2',
      phase1_title: 'Attivazione e sblocco mentale',
      phase1_desc: 'Smetti di tradurre nella testa. Riscopriamo il vocabolario che già conosci rimuovendo la paura del giudizio. Un ambiente sicuro e rilassato dove gli errori sono del tutto normali.',
      phase2_kicker: 'Fase 2 · Mesi 3–4',
      phase2_title: 'Simulazioni sul lavoro reale',
      phase2_desc: 'Niente libri scolastici. Prendiamo le tue presentazioni, negoziazioni con i clienti e riunioni settimanali — e le esercitiamo insieme finché parlare diventa natura.',
      phase3_kicker: 'Fase 3 · Mesi 5–6',
      phase3_title: 'Autonomia totale e affari internazionali',
      phase3_desc: 'Impara a condurre riunioni, gestire obiezioni a sorpresa e chiudere accordi con clienti stranieri senza preparare ogni frase prima. Non dovrai mai più chiedere a un collega di tradurre per te.',
      book_kicker: 'Pronto?',
      book_title: 'Vuoi applicare questa mappa alla tua carriera?',
      book_sub: 'Prenota la tua sessione di attivazione gratuita — una chiacchierata diagnostica uno-a-uno con Joana. Valuteremo il tuo inglese parlato, individueremo dove la tua voce si blocca sotto pressione e definiremo il tuo piano d’azione personalizzato. Zero pressione commerciale. Niente noiosi test di grammatica.',
      book_pt1: '15 minuti · 1-a-1 su Google Meet',
      book_pt2: '100% riservato (protetto da NDA)',
      book_pt3: 'Feedback chiaro e azionabile sul tuo inglese',
      book_pt4: 'Zero pressione commerciale',
      book_cta: 'Seleziona data e ora qui sotto',
      book_cta_note: 'Il calendario apre una pagina di prenotazione ufficiale — non viene addebitato nulla.'
    },
    es: {
      language_auto: 'Auto',
      nav_map: 'El Mapa', nav_results: 'Resultados', nav_roadmap: 'Ruta',
      nav_book: 'Reservar una llamada', nav_home: 'Inicio',
      hero_badge: 'Mapa ejecutivo gratuito — 3 páginas',
      hero_live: '100% gratis',
      hero_h1: 'Eres un león en tu idioma. Lidera también en inglés.',
      hero_sub: 'Consigue el Mapa gratuito: 5 frases de emergencia para no quedarte en blanco en Zoom nunca más, por qué exactamente tu cerebro se bloquea y el plan de 6 meses para dejar de traducir en tu cabeza.',
      hero_cta: 'Consigue el Mapa gratis',
      hero_cta2: 'Ver el mensaje',
      hero_proof: 'Coaching práctico para personas que ya dominan su trabajo.',
      map_1: 'Página 1 · El Kit de Emergencia', map_1d: 'Frases para el momento en que tu mente se queda en blanco',
      map_2: 'Página 2 · Por qué te bloqueas', map_2d: 'La causa real en tu cerebro — y la solución',
      map_3: 'Página 3 · El Plan de 6 Meses', map_3d: 'Habla con autoridad, deja de traducir en tu cabeza',
      map_cta: 'Consigue el mapa gratis',
      vsl_kicker: 'Tu próximo movimiento',
      vsl_title: 'Mira cómo funciona — en 90 segundos.',
      vsl_sub: 'Un mensaje de Joana sobre por qué te bloqueas — y el mapa de 3 páginas que lo cambia.',
      caption_note: 'Los subtítulos aparecerán aquí mientras se reproduce el video.',
      nav_inside: 'Dentro del mapa',
      preview_kicker: 'Un vistazo rápido dentro',
      preview_title: 'Tres páginas. Cero relleno.',
      preview_intro: 'Desliza lo que te espera — gratis.',
      preview2_line: 'Pista: no es la gramática — es la presión.',
      preview3_line: 'Meses 1–2 · 3–4 · 5–6 — del desbloqueo a la autonomía.',
      final_kicker: 'Es tuyo — gratis',
      final_title: '¿Listo para liderar como un león otra vez?',
      final_sub: 'Consigue el Mapa para la Libertad en la Sala de Juntas — gratis. Tenlo en tu escritorio. Úsalo mañana.',
      recap_title: 'Todo lo que recibiste — en 3 páginas.',
      recap_sub: 'El mismo kit. El mismo plan. Ahora úsalo.',
      toc_summary: 'Resumen',
      toc_book: 'Reserva tu llamada',
      contrast_kicker: 'La verdadera brecha',
      contrast_title: 'Tu experiencia ya está ahí. El inglés no debería ocultarla.',
      s3_left_status: 'Este eres tú',
      s3_right_status: 'La fricción',
      s3_left_title: 'En tu lengua materna: el león',
      s3_left_1: 'Gestionas acuerdos importantes sin dudar.',
      s3_left_2: 'Controlas la sala y a tu equipo sin esfuerzo.',
      s3_left_3: 'Comunicas ideas complejas con claridad.',
      s3_right_title: 'En inglés: el gatito',
      s3_right_1: 'Tu mente corre, pero tu voz se apaga.',
      s3_right_2: 'Temes que las palabras equivocadas te hagan parecer novato.',
      s3_right_3: 'Te quedas callado — o le pides a un colega que traduzca por ti.',
      s3_anchor: 'No es un problema de gramática. Es un problema de presión — y se puede arreglar por completo.',
      method_kicker: 'Qué recibes',
      method_title: 'El mapa detrás de tu confianza',
      method_intro: 'Tres páginas limpias que convierten la presión en presencia — construidas en torno a situaciones reales de trabajo.',
      s4_p1_title: 'Página 1 — El Kit de Emergencia',
      s4_p1_desc: 'Di lo correcto mañana si olvidas una palabra o recibes una pregunta inesperada en una reunión.',
      s4_p2_title: 'Página 2 — Por qué te bloqueas',
      s4_p2_desc: 'Exactamente por qué tu cerebro se bloquea bajo presión — y la solución simple que lo detiene.',
      s4_p3_title: 'Página 3 — El Plan de 6 Meses',
      s4_p3_desc: 'La ruta que te ayuda a hablar inglés con fuerza y a dejar de traducir en tu cabeza.',
      results_kicker: 'Un cambio real',
      s5_header: 'De quedarte en blanco en las llamadas a cerrar contratos internacionales.',
      s5_quote: '“Daniele es el CEO de varias empresas. Sabía gramática, pero la presión lo bloqueaba. Quitamos los libros de texto y simulamos sus reuniones reales. Hoy dirige negociaciones internacionales, entrevistas y charlas públicas completamente en inglés.”',
      s5_tag1: '5 frases de emergencia',
      s5_tag2: 'Cero reglas de gramática',
      s5_tag3: 'Resultados en 6 meses',
      results_months_1: 'meses', results_months_2: 'hasta el impulso',
      roadmap_kicker: 'Tu avance',
      roadmap_title: 'Seis meses. Tres etapas claras.',
      roadmap_badge: 'Construido en torno a tu trabajo',
      s6_m12_title: 'Meses 1–2: Activación y desbloqueo mental',
      s6_m12_desc: 'Deja de traducir en tu cabeza. Recupera el vocabulario que ya tienes quitando el miedo al juicio.',
      s6_m34_title: 'Meses 3–4: Simulaciones de trabajo real',
      s6_m34_desc: 'Sin libros de texto. Practicamos tus presentaciones, negociaciones y reuniones reales hasta que sean naturales.',
      s6_m56_title: 'Meses 5–6: Autonomía y liderazgo',
      s6_m56_desc: 'Dirige reuniones, gestiona objeciones inesperadas y cierra acuerdos en el extranjero sin preparar cada frase.',
      booking_kicker: 'Empieza aquí',
      s8_header: 'Da el primer paso.',
      s8_sub: 'Reserva tu llamada de activación gratuita. 15 minutos, uno a uno con Joana. Encuentras dónde te bloqueas y te vas con un plan de acción claro — sin presión.',
      booking_point_1: 'Una conversación enfocada de 15 minutos',
      booking_point_2: 'Un siguiente paso práctico',
      booking_point_3: 'Sin compromiso',
      footer_copy: 'Inglés práctico para quienes lideran.',
      footer_privacy: 'Privacidad',
      footer_terms: 'Términos',
      cap_1: 'Cuando hablas italiano eres como un león. Eres fuerte. Eres inteligente. La gente te escucha. Pero en el momento en que tienes que hablar inglés en el trabajo, te sientes como un pequeño gatito. Te asustas. Te quedas callado porque no quieres cometer un error. Te hace sentir pequeño — y te hace sentir estancado.',
      cap_2: 'Es realmente difícil ver a otras personas conseguir los grandes puestos y el dinero extra solo porque hablan inglés más rápido que tú. Sabes que eres más inteligente que ellos, pero el idioma te impide demostrarlo. Sientes que no estás rindiendo tanto como deberías.',
      cap_3: 'Mucha gente cree que necesita hacer más cursos de inglés. Pero no necesitas más libros ni más reglas de gramática. Solo estás cansado de pensar demasiado cada palabra. Cansado de sentir vergüenza y de tener que pedirle a un amigo que te ayude a traducir lo que quieres decir.',
      cap_4: 'Quiero ayudarte a sentirte un león de nuevo. Así que hice un Mapa de 3 páginas para ti. Esto es lo que contiene: la Página 1 es un Kit de Emergencia. Te da frases para usar mañana si olvidas una palabra en una reunión. La Página 2 explica exactamente por qué tu cerebro se asusta y cómo detenerlo. La Página 3 muestra mi plan de 6 meses para ayudarte a hablar inglés con poder.',
      cap_5: 'Es totalmente gratis. Quiero que dejes de sentirte como un niño en el trabajo y empieces a sentirte el experto que realmente eres. Haz clic en el botón de abajo y serás dirigido a la página del recurso.',
      back_home: '← Volver al inicio',
      resource_kicker: 'Tu regalo gratis — 3 páginas',
      resource_title: 'El Mapa para la Libertad en la Sala de Juntas',
      resource_sub: '5 frases de emergencia para no quedarte nunca más en blanco en Zoom y el plan de acción para dejar de traducir en tu cabeza.',
      chip_1: '3 páginas', chip_2: '5 frases de emergencia', chip_3: 'Se lee en 10 minutos',
      resource_cta_book: 'Reserva tu sesión de activación gratis',
      resource_intro: 'Una guía rápida para profesionales seguros y respetados en su lengua materna — pero que se bloquean en cuanto la reunión pasa al inglés. Tenla en tu escritorio. Úsala mañana.',
      part1_kicker: 'Parte 1',
      part1_title: 'El Kit de Supervivencia para Reuniones',
      part1_intro: 'Qué decir en los primeros 10 segundos cuando tu mente se queda en blanco — o recibes una pregunta inesperada.',
      label_avoid: 'A evitar', label_say: 'Qué decir', label_why: 'Por qué funciona',
      sc1_label: 'Escenario 1', sc1_tag: 'Pregunta inesperada',
      sc1_title: 'Recibes una pregunta sorpresa y necesitas 10 segundos para pensar.',
      sc1_avoid: 'Quedarte en silencio total o decir “Uhhh… espera”.',
      sc1_say: '“Es un punto de vista interesante. Dame solo un segundo para ordenar mis ideas sobre esto.”',
      sc1_why: 'Ganas tiempo sonando tranquilo, senior y reflexivo — no pillado por sorpresa.',
      sc2_label: 'Escenario 2', sc2_tag: 'Error de palabra',
      sc2_title: 'Te das cuenta de que acabas de usar la palabra equivocada.',
      sc2_avoid: 'Disculparte tres veces y ponerte nervioso.',
      sc2_say: '“En realidad, déjame reformularlo para que quede completamente claro.”',
      sc2_why: 'Tomas el control del error antes de que nadie más lo note.',
      sc3_label: 'Escenario 3', sc3_tag: 'Palabra que falta',
      sc3_title: 'Tienes la idea — pero olvidaste la palabra exacta en inglés.',
      sc3_avoid: 'Mirar el techo intentando recordar la traducción del diccionario.',
      sc3_say: '“Me falta la palabra exacta en inglés, pero lo que quiero decir es…”',
      sc3_why: 'La transparencia directa muestra confianza. A los clientes les importa tu solución, no tu vocabulario.',
      sc4_label: 'Escenario 4', sc4_tag: 'Interlocutor rápido',
      sc4_title: 'Alguien habla demasiado rápido y te perdiste un detalle importante.',
      sc4_avoid: 'Asentir educadamente y fingir que entendiste.',
      sc4_say: '“¿Podrías repasarme ese último punto una vez más? Quiero asegurarme de que estamos totalmente alineados.”',
      sc4_why: 'Enmarca la pregunta en torno a la alineación del negocio — no a una debilidad de idioma.',
      sc5_label: 'Escenario 5', sc5_tag: 'Intervenir',
      sc5_title: 'Quieres interrumpir y compartir tu punto antes de que cambie el tema.',
      sc5_avoid: 'Esperar un silencio total que nunca llega.',
      sc5_say: '“Interviniendo sobre ese punto…”',
      sc5_why: 'Una forma natural y autoritaria de entrar en la conversación.',
      part1_footer: 'Estas frases te salvarán la reunión de mañana. Pero memorizar cinco frases no cambiará tu carrera. Esto es lo que ocurre realmente en tu cerebro cuando te bloqueas.',
      part2_kicker: 'Parte 2',
      part2_title: 'Por qué realmente te bloqueas',
      part2_intro: 'Por qué profesionales con más de 15 años de experiencia siguen sintiéndose inseguros en las llamadas internacionales.',
      trap1_title: 'La Trampa de la Traducción a 100 km/h',
      trap1_desc: 'En tu lengua materna tus pensamientos son rápidos y complejos. Cuando cambias al inglés, intentas traducir cada pensamiento palabra por palabra. Tu cerebro se sobrecarga, se queda sin memoria — y tu voz se bloquea.',
      trap2_title: 'La Fiebre de la Perfección',
      trap2_desc: 'Eres un experto en el trabajo. Odias parecer tonto o no estar preparado. Así que tu cerebro te dice: “Si no puedes decirlo perfecto, no lo digas.” Te quedas callado, asientes y dejas que otro se lleve el mérito del trato solo porque habla más rápido.',
      trap3_title: 'La Ilusión del Curso Tradicional',
      trap3_desc: 'Crees que la solución es más reglas de gramática o videos de YouTube. La verdad: cuantas más reglas acumulas, más piensas antes de abrir la boca. Y cuanto más piensas, más te bloqueas.',
      part3_kicker: 'Parte 3',
      part3_title: 'Del Miedo al Liderazgo en 6 Meses',
      part3_intro: 'La ruta práctica que usamos en “Your Passport to English Freedom” para liberar tu voz.',
      phase1_kicker: 'Fase 1 · Meses 1–2',
      phase1_title: 'Activación y desbloqueo mental',
      phase1_desc: 'Deja de traducir en tu cabeza. Recuperamos el vocabulario que ya conoces eliminando el miedo al juicio. Un entorno seguro y relajado donde los errores son completamente normales.',
      phase2_kicker: 'Fase 2 · Meses 3–4',
      phase2_title: 'Simulaciones de trabajo real',
      phase2_desc: 'Nada de libros de texto. Tomamos tus próximas presentaciones, negociaciones con clientes y reuniones semanales — y las practicamos juntos hasta que hablar se vuelva algo natural.',
      phase3_kicker: 'Fase 3 · Meses 5–6',
      phase3_title: 'Autonomía total y acuerdos internacionales',
      phase3_desc: 'Aprende a liderar reuniones, gestionar objeciones inesperadas y cerrar tratos con clientes extranjeros sin preparar cada frase de antemano. Nunca más necesitarás que un colega traduzca por ti.',
      book_kicker: '¿Listo?',
      book_title: '¿Quieres aplicar este mapa a tu carrera?',
      book_sub: 'Reserva tu sesión de activación de inglés gratuita — una llamada diagnóstica relajada, uno a uno con Joana. Evaluaremos tu inglés oral, localizaremos dónde se bloquea tu voz bajo presión y trazaremos tu plan de acción personalizado. Cero presión comercial. Sin aburridos tests de gramática.',
      book_pt1: '15 minutos · 1 a 1 en Google Meet',
      book_pt2: '100% confidencial (protegido por NDA)',
      book_pt3: 'Feedback claro y accionable sobre tu inglés',
      book_pt4: 'Cero presión comercial',
      book_cta: 'Selecciona fecha y hora abajo',
      book_cta_note: 'El calendario abre una página de reserva oficial — no se cobra nada.'
    },
    fr: {
      language_auto: 'Auto',
      nav_map: 'La Carte', nav_results: 'Résultats', nav_roadmap: 'Parcours',
      nav_book: 'Réserver un appel', nav_home: 'Accueil',
      hero_badge: 'Carte executive gratuite — 3 pages',
      hero_live: '100% gratuit',
      hero_h1: 'Vous êtes un lion dans votre langue. Menez aussi en anglais.',
      hero_sub: 'Recevez la Carte gratuite : 5 phrases d’urgence pour ne plus jamais rester bloqué sur Zoom, pourquoi votre cerveau se fige, et le plan en 6 mois pour arrêter de traduire dans votre tête.',
      hero_cta: 'Recevoir la Carte gratuite',
      hero_cta2: 'Voir le message',
      hero_proof: 'Un coaching pratique pour des gens qui connaissent déjà leur métier.',
      map_1: 'Page 1 · Le Kit d’Urgence', map_1d: 'Des phrases pour le moment où votre esprit se vide',
      map_2: 'Page 2 · Pourquoi vous figez', map_2d: 'La vraie cause dans votre cerveau — et la solution',
      map_3: 'Page 3 · Le Plan en 6 Mois', map_3d: 'Parlez avec autorité, arrêtez de traduire dans votre tête',
      map_cta: 'Recevoir la carte gratuite',
      vsl_kicker: 'Votre prochaine étape',
      vsl_title: 'Voyez comment ça fonctionne — en 90 secondes.',
      vsl_sub: 'Un message de Joana sur pourquoi vous figez — et la carte en 3 pages qui change tout.',
      caption_note: 'Les sous-titres apparaîtront ici pendant la lecture de la vidéo.',
      nav_inside: 'Dans la carte',
      preview_kicker: 'Un aperçu rapide',
      preview_title: 'Trois pages. Zéro blabla.',
      preview_intro: 'Parcourez ce qui vous attend — gratuitement.',
      preview2_line: 'Indice : ce n’est pas la grammaire — c’est la pression.',
      preview3_line: 'Mois 1–2 · 3–4 · 5–6 — du déblocage à l’autonomie.',
      final_kicker: 'C’est à vous — gratuitement',
      final_title: 'Prêt à mener à nouveau comme un lion ?',
      final_sub: 'Recevez la Carte de la Liberté en Réunion — gratuite. Gardez-la sur votre bureau. Utilisez-la demain.',
      recap_title: 'Tout ce que vous avez reçu — en 3 pages.',
      recap_sub: 'Le même kit. Le même plan. Maintenant, utilisez-le.',
      toc_summary: 'Résumé',
      toc_book: 'Réserver votre appel',
      contrast_kicker: 'Le vrai décalage',
      contrast_title: 'Votre expertise est déjà là. L’anglais ne devrait pas la cacher.',
      s3_left_status: 'C’est vous',
      s3_right_status: 'La friction',
      s3_left_title: 'Dans votre langue maternelle : le lion',
      s3_left_1: 'Vous gérez des enjeux importants sans hésiter.',
      s3_left_2: 'Vous contrôlez la salle et votre équipe sans effort.',
      s3_left_3: 'Vous communiquez des idées complexes avec clarté.',
      s3_right_title: 'En anglais : le chaton',
      s3_right_1: 'Votre esprit s’emballe, mais votre voix se tait.',
      s3_right_2: 'Vous craignez que le mauvais mot vous fasse paraître junior.',
      s3_right_3: 'Vous restez silencieux — ou vous demandez à un collègue de traduire.',
      s3_anchor: 'Ce n’est pas un problème de grammaire. C’est un problème de pression — et il se corrige complètement.',
      method_kicker: 'Ce que vous obtenez',
      method_title: 'La carte derrière votre assurance',
      method_intro: 'Trois pages claires qui transforment la pression en présence — construites autour de situations de travail réelles.',
      s4_p1_title: 'Page 1 — Le Kit d’Urgence',
      s4_p1_desc: 'Dites la bonne chose demain si vous oubliez un mot ou recevez une question surprise en réunion.',
      s4_p2_title: 'Page 2 — Pourquoi vous figez',
      s4_p2_desc: 'Exactement pourquoi votre cerveau se bloque sous pression — et le correctif simple qui l’arrête.',
      s4_p3_title: 'Page 3 — Le Plan en 6 Mois',
      s4_p3_desc: 'Le parcours qui vous aide à parler anglais avec force et à arrêter de traduire dans votre tête.',
      results_kicker: 'Un vrai changement',
      s5_header: 'De se figer en réunion à signer des contrats internationaux.',
      s5_quote: '« Daniele est le PDG de plusieurs entreprises. Il connaissait la grammaire, mais la pression le figeait. Nous avons retiré les manuels et simulé ses réunions réelles. Aujourd’hui, il mène des négociations internationales, des entretiens et des conférences entièrement en anglais. »',
      s5_tag1: '5 phrases d’urgence',
      s5_tag2: 'Zéro règle de grammaire',
      s5_tag3: 'Résultats en 6 mois',
      results_months_1: 'mois', results_months_2: 'vers la confiance',
      roadmap_kicker: 'Votre progression',
      roadmap_title: 'Six mois. Trois étapes claires.',
      roadmap_badge: 'Construit autour de votre travail',
      s6_m12_title: 'Mois 1–2 : Activation et déblocage mental',
      s6_m12_desc: 'Arrêtez de traduire dans votre tête. Retrouvez le vocabulaire que vous possédez déjà en enlevant la peur du jugement.',
      s6_m34_title: 'Mois 3–4 : Simulations sur du travail réel',
      s6_m34_desc: 'Pas de manuels. Nous pratiquons vos vraies présentations, négociations et réunions jusqu’à ce que ce soit naturel.',
      s6_m56_title: 'Mois 5–6 : Autonomie et leadership',
      s6_m56_desc: 'Menez les réunions, gérez les objections surprises et concluez des affaires à l’international sans préparer chaque phrase.',
      booking_kicker: 'Commencez ici',
      s8_header: 'Faites le premier pas.',
      s8_sub: 'Réservez votre appel d’activation gratuit. 15 minutes, en tête-à-tête avec Joana. Repérez où vous bloquez et repartez avec un plan d’action clair — sans pression.',
      booking_point_1: 'Une conversation ciblée de 15 minutes',
      booking_point_2: 'Une prochaine étape concrète',
      booking_point_3: 'Aucun engagement',
      footer_copy: 'De l’anglais pratique pour ceux qui dirigent.',
      footer_privacy: 'Confidentialité',
      footer_terms: 'Conditions',
      cap_1: 'Quand vous parlez italien, vous êtes comme un lion. Vous êtes fort. Vous êtes intelligent. On vous écoute. Mais dès que vous devez parler anglais au travail, vous vous sentez comme un petit chaton. Vous avez peur. Vous restez silencieux parce que vous ne voulez pas faire d’erreur. Cela vous fait sentir petit — et cela vous fait sentir bloqué.',
      cap_2: 'C’est vraiment difficile de voir d’autres personnes obtenir les grands postes et l’argent en plus simplement parce qu’elles parlent anglais plus vite que vous. Vous savez que vous êtes plus intelligent qu’eux, mais la langue vous empêche de le montrer. Vous avez l’impression de ne pas être à la hauteur.',
      cap_3: 'La plupart des gens pensent qu’ils ont besoin de plus de cours d’anglais. Mais vous n’avez pas besoin de plus de livres ni de plus de règles de grammaire. Vous êtes simplement fatigué de ressasser chaque mot. Fatigué d’avoir honte et de devoir demander à un ami de traduire ce que vous voulez dire.',
      cap_4: 'Je veux vous aider à vous sentir à nouveau un lion. Alors, j’ai créé une simple Carte de direction en 3 pages. Voici ce qu’elle contient : la page 1 est un Kit d’Urgence. Elle vous donne des phrases à utiliser demain si vous oubliez un mot en réunion. La page 2 explique exactement pourquoi votre cerveau a peur et comment l’arrêter. La page 3 vous montre mon plan en 6 mois pour parler anglais avec puissance.',
      cap_5: 'C’est totalement gratuit. Je veux que vous arrêtiez de vous sentir comme un enfant au travail et que vous commenciez à vous sentir l’expert que vous êtes vraiment. Cliquez sur le bouton ci-dessous et vous serez redirigé vers la ressource.',
      back_home: '← Retour à l’accueil',
      resource_kicker: 'Votre cadeau gratuit — 3 pages',
      resource_title: 'La Carte de la Liberté en Réunion',
      resource_sub: '5 phrases d’urgence pour ne plus jamais rester bloqué sur Zoom et le plan d’action pour arrêter de traduire dans votre tête.',
      chip_1: '3 pages', chip_2: '5 phrases d’urgence', chip_3: 'À lire en 10 minutes',
      resource_cta_book: 'Réserver votre session d’activation gratuite',
      resource_intro: 'Un guide rapide pour des professionnels sûrs d’eux et respectés dans leur langue maternelle — mais qui se figent dès que la réunion passe à l’anglais. Gardez-le sur votre bureau. Utilisez-le demain.',
      part1_kicker: 'Partie 1',
      part1_title: 'Le Kit de Survie en Réunion',
      part1_intro: 'Que dire dans les 10 premières secondes quand votre esprit se vide — ou quand vous recevez une question inattendue.',
      label_avoid: 'À éviter', label_say: 'À dire', label_why: 'Pourquoi ça marche',
      sc1_label: 'Scénario 1', sc1_tag: 'Question surprise',
      sc1_title: 'Vous recevez une question surprise et avez besoin de 10 secondes pour réfléchir.',
      sc1_avoid: 'Rester dans un silence total ou dire « Euh… attends ».',
      sc1_say: '« C’est un angle intéressant. Donnez-moi juste une seconde pour rassembler mes idées. »',
      sc1_why: 'Vous gagnez du temps en restant calme, senior et réfléchi — pas pris au dépourvu.',
      sc2_label: 'Scénario 2', sc2_tag: 'Erreur de mot',
      sc2_title: 'Vous réalisez que vous venez d’utiliser le mauvais mot.',
      sc2_avoid: 'Vous excuser trois fois et perdre vos moyens.',
      sc2_say: '« En fait, laissez-moi reformuler pour que ce soit parfaitement clair. »',
      sc2_why: 'Vous reprenez le contrôle de l’erreur avant même que quiconque ne la remarque.',
      sc3_label: 'Scénario 3', sc3_tag: 'Mot manquant',
      sc3_title: 'Vous avez l’idée — mais vous avez oublié le mot exact en anglais.',
      sc3_avoid: 'Regarder le plafond en essayant de retrouver la traduction du dictionnaire.',
      sc3_say: '« Il me manque le mot exact en anglais, mais je veux dire… »',
      sc3_why: 'La transparence directe montre la confiance. Les clients se soucient de votre solution, pas de votre vocabulaire.',
      sc4_label: 'Scénario 4', sc4_tag: 'Interlocuteur rapide',
      sc4_title: 'Quelqu’un parle trop vite et vous avez manqué un détail important.',
      sc4_avoid: 'Hocher poliment la tête en faisant semblant d’avoir compris.',
      sc4_say: '« Pourriez-vous me reparcourir ce dernier point ? Je veux m’assurer que nous sommes parfaitement alignés. »',
      sc4_why: 'La question se présente comme un alignement business — pas une faiblesse de langue.',
      sc5_label: 'Scénario 5', sc5_tag: 'Intervenir',
      sc5_title: 'Vous voulez intervenir et partager votre point avant que le sujet ne change.',
      sc5_avoid: 'Attendre un silence total qui ne vient jamais.',
      sc5_say: '« En rebondissant sur ce point… »',
      sc5_why: 'Une manière naturelle et autoritaire d’entrer dans la conversation.',
      part1_footer: 'Ces phrases vous sauveront votre réunion de demain. Mais mémoriser cinq phrases ne changera pas votre carrière. Voici ce qui se passe réellement dans votre cerveau quand vous figez.',
      part2_kicker: 'Partie 2',
      part2_title: 'Pourquoi vous figez vraiment',
      part2_intro: 'Pourquoi des professionnels expérimentés avec plus de 15 ans de carrière se sentent encore en insécurité sur les appels internationaux.',
      trap1_title: 'Le Piège de la Traduction à 100 km/h',
      trap1_desc: 'Dans votre langue maternelle, vos pensées sont rapides et complexes. Quand vous passez à l’anglais, vous essayez de traduire chaque pensée mot à mot. Votre cerveau surcharge, manque de mémoire — et votre voix se bloque.',
      trap2_title: 'La Fièvre de la Perfection',
      trap2_desc: 'Vous êtes un expert au travail. Vous détestez paraître ridicule ou pas préparé. Votre cerveau vous dit donc : « Si tu ne peux pas le dire parfaitement, ne dis rien. » Vous restez silencieux, vous hochez la tête, et vous laissez quelqu’un d’autre rafler le crédit de l’affaire simplement parce qu’il parle plus vite.',
      trap3_title: 'L’Illusion du Cours Traditionnel',
      trap3_desc: 'Vous pensez que la solution, c’est plus de règles de grammaire ou des vidéos YouTube. La vérité : plus vous accumulez de règles, plus vous ressassez avant d’ouvrir la bouche. Et plus vous ressassez, plus vous figez.',
      part3_kicker: 'Partie 3',
      part3_title: 'De la Peur au Leadership en 6 Mois',
      part3_intro: 'Le parcours pratique que nous utilisons dans « Your Passport to English Freedom » pour libérer votre voix.',
      phase1_kicker: 'Phase 1 · Mois 1–2',
      phase1_title: 'Activation et déblocage mental',
      phase1_desc: 'Arrêtez de traduire dans votre tête. Nous retrouvons le vocabulaire que vous connaissez déjà en retirant la peur du jugement. Un environnement sûr et détendu où les erreurs sont totalement normales.',
      phase2_kicker: 'Phase 2 · Mois 3–4',
      phase2_title: 'Simulations sur du travail réel',
      phase2_desc: 'Pas de manuels scolaires. Nous prenons vos vraies présentations, négociations clients et réunions hebdomadaires — et nous les pratiquons ensemble jusqu’à ce que parler devienne naturel.',
      phase3_kicker: 'Phase 3 · Mois 5–6',
      phase3_title: 'Autonomie totale et affaires internationales',
      phase3_desc: 'Apprenez à mener des réunions, gérer des objections surprises et conclure des accords avec des clients étrangers sans préparer chaque phrase à l’avance. Vous n’aurez plus jamais besoin d’un collègue pour traduire.',
      book_kicker: 'Prêt(e) ?',
      book_title: 'Vous voulez appliquer cette carte à votre carrière ?',
      book_sub: 'Réservez votre session d’activation gratuite — un appel diagnostic détendu, en tête-à-tête avec Joana. Nous évaluerons votre anglais oral, localiserons où votre voix se bloque sous pression, et construirons votre plan d’action personnalisé. Zéro pression commerciale. Pas de tests de grammaire ennuyeux.',
      book_pt1: '15 minutes · 1 à 1 sur Google Meet',
      book_pt2: '100% confidentiel (protégé par NDA)',
      book_pt3: 'Un feedback clair et actionnable sur votre anglais',
      book_pt4: 'Zéro pression commerciale',
      book_cta: 'Sélectionnez une date et une heure ci-dessous',
      book_cta_note: 'Le calendrier ouvre une page de réservation officielle — rien n’est facturé.'
    }
  };
  function detectLang() {
    var n = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
    return LANGS.indexOf(n) !== -1 ? n : 'en';
  }
  var current = (function () {
    var saved = null;
    try { saved = localStorage.getItem('jhl-lang'); } catch (e) { saved = null; }
    var auto = document.getElementById('auto-language');
    if (auto) auto.checked = !saved;
    return saved && LANGS.indexOf(saved) !== -1 ? saved : detectLang();
  })();
  function t(key) {
    var dict = I18N[current] || I18N.en;
    return dict[key] != null ? dict[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }
  function applyLang(lang) {
    current = lang;
    try { localStorage.setItem('jhl-lang', lang); } catch (e) { /* ignore */ }
    document.documentElement.lang = lang;
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute('data-i18n'));
    var badge = document.getElementById('caption-language');
    if (badge) badge.textContent = lang.toUpperCase();
    var select = document.getElementById('language-switcher');
    if (select) select.value = lang;
    var captionText = document.getElementById('caption-text');
    var video = document.getElementById('vsl-video');
    if (captionText) {
      if (video && !video.paused && video.currentTime > 0) {
        renderCaption(video.currentTime);
      } else {
        captionText.textContent = t('caption_note');
      }
    }
    for (var r = 0; r < renderers.length; r++) renderers[r]();
  }
  function renderCaption(time) {
    var cue = null;
    for (var i = 0; i < CAPTION_TRACK.length; i++) {
      var next = CAPTION_TRACK[i + 1] ? CAPTION_TRACK[i + 1].t : Infinity;
      if (time >= CAPTION_TRACK[i].t && time < next) { cue = CAPTION_TRACK[i]; break; }
    }
    var el = document.getElementById('caption-text');
    if (el) el.textContent = cue ? t(cue.key) : t('caption_note');
  }
  /* ---- interactive renderers (tabs, scenario explorer) ---- */
  var renderers = [];
  function addRenderer(fn) { renderers.push(fn); }
  var state = { preview: 0, scen: 1 };
  var PREVIEWS = [
    { pin: '01', title: 'map_1', desc: 'map_1d', sample: 'sc1_say' },
    { pin: '02', title: 'map_2', desc: 'map_2d', sample: 'preview2_line' },
    { pin: '03', title: 'map_3', desc: 'map_3d', sample: 'preview3_line' }
  ];
  function renderPreview() {
    var tabs = document.querySelectorAll('#preview-tabs .preview-tab');
    var p = PREVIEWS[state.preview];
    if (!p || !tabs.length) return;
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.toggle('active', i === state.preview);
      tabs[i].setAttribute('aria-selected', i === state.preview ? 'true' : 'false');
    }
    var pin = document.getElementById('preview-pin');
    var tl = document.getElementById('preview-title-line');
    var d = document.getElementById('preview-desc');
    var s = document.getElementById('preview-sample');
    if (pin) pin.textContent = p.pin;
    if (tl) tl.textContent = t(p.title);
    if (d) d.textContent = t(p.desc);
    if (s) s.textContent = t(p.sample);
  }
  function renderExplorer() {
    var items = document.querySelectorAll('#scen-nav .scen-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('active', items[i].getAttribute('data-sc') == state.scen);
    }
    var avoid = document.getElementById('scen-avoid');
    var say = document.getElementById('scen-say');
    var why = document.getElementById('scen-why');
    if (avoid) avoid.textContent = t('sc' + state.scen + '_avoid');
    if (say) say.textContent = t('sc' + state.scen + '_say');
    if (why) why.textContent = t('sc' + state.scen + '_why');
  }
  addRenderer(renderPreview);
  addRenderer(renderExplorer);
  /* ---- init ---- */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(current);
    // Language controls
    var auto = document.getElementById('auto-language');
    var select = document.getElementById('language-switcher');
    if (auto && select) {
      auto.addEventListener('change', function () {
        if (auto.checked) {
          try { localStorage.removeItem('jhl-lang'); } catch (e) { /* ignore */ }
          applyLang(detectLang());
        } else {
          applyLang(select.value);
        }
      });
      select.addEventListener('change', function () {
        if (auto) auto.checked = false;
        applyLang(select.value);
      });
    }
    // Mobile menu
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('nav-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('menu-open', open);
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        });
      });
    }
    // Scroll reveal
    var revealEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('visible'); });
    }
    // VSL player + captions
    var video = document.getElementById('vsl-video');
    var playBtn = document.getElementById('video-play');
    if (video) {
      function playing() { if (playBtn) playBtn.classList.add('is-playing'); }
      function paused() { if (playBtn) playBtn.classList.remove('is-playing'); }
      video.addEventListener('play', playing);
      video.addEventListener('pause', paused);
      video.addEventListener('ended', paused);
      video.addEventListener('timeupdate', function () { renderCaption(video.currentTime); });
      if (playBtn) {
        playBtn.addEventListener('click', function () {
          if (video.paused) { video.play(); } else { video.pause(); }
        });
      }
    }
    // Interactive tab + scenario explorer
    var previewTabs = document.querySelectorAll('#preview-tabs .preview-tab');
    Array.prototype.forEach.call(previewTabs, function (tab, i) {
      tab.addEventListener('click', function () { state.preview = i; renderPreview(); });
    });
    var scenItems = document.querySelectorAll('#scen-nav .scen-item');
    Array.prototype.forEach.call(scenItems, function (item) {
      item.addEventListener('click', function () {
        state.scen = parseInt(item.getAttribute('data-sc'), 10);
        renderExplorer();
      });
    });
    renderPreview();
    renderExplorer();
  });
})();
