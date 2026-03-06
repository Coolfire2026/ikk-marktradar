export interface InsuranceCompany {
  id: string
  name: string
  beitragssatz: string
  kurzbeschreibung: string
  website: string
  kommunikationskanale: string[]
  schwerpunkt: string
  letzteAktivitaetDatum: string
}

export interface Activity {
  id: string
  krankenkasse: string
  krankenkasseId: string
  titel: string
  kategorie: string
  datum: string
  zusammenfassung: string
  warum_relevant: string
  quelle: string
  quellenlink: string
}

export interface Alert {
  id: string
  krankenkasse: string
  krankenkasseId: string
  titel: string
  datum: string
  zusammenfassung: string
  relevanz: 'Information' | 'Relevant' | 'Wichtig'
  quelle: string
  quellenlink: string
}

export const insuranceCompanies: InsuranceCompany[] = [
  {
    id: 'tk',
    name: 'Techniker Krankenkasse',
    beitragssatz: '15,5%',
    kurzbeschreibung: 'Deutschlands größte Krankenkasse mit starkem Fokus auf digitale Gesundheit und Innovation',
    website: 'www.tk.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'Instagram', 'YouTube'],
    schwerpunkt: 'Digitale Innovation',
    letzteAktivitaetDatum: '2026-03-04',
  },
  {
    id: 'barmer',
    name: 'Barmer',
    beitragssatz: '16,0%',
    kurzbeschreibung: 'Innovativer Anbieter mit großem Fokus auf Prävention und Familienleistungen',
    website: 'www.barmer.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'LinkedIn'],
    schwerpunkt: 'Prävention & Familie',
    letzteAktivitaetDatum: '2026-03-03',
  },
  {
    id: 'aok',
    name: 'AOK',
    beitragssatz: '15,8%',
    kurzbeschreibung: 'Bundesweit größter Anbieter mit regionalen Schwerpunkten und umfangreichen Services',
    website: 'www.aok.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'Instagram'],
    schwerpunkt: 'Regionale Services',
    letzteAktivitaetDatum: '2026-03-02',
  },
  {
    id: 'dak',
    name: 'DAK-Gesundheit',
    beitragssatz: '15,9%',
    kurzbeschreibung: 'Schwerpunkt auf mentale Gesundheit und psychologische Unterstützung',
    website: 'www.dak.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'TikTok'],
    schwerpunkt: 'Psychische Gesundheit',
    letzteAktivitaetDatum: '2026-03-04',
  },
  {
    id: 'ikk_suedwest',
    name: 'IKK Südwest',
    beitragssatz: '15,7%',
    kurzbeschreibung: 'Regionale Krankenkasse mit Fokus auf Bonusprogramme und Kundenservice',
    website: 'www.ikk-suedwest.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'LinkedIn'],
    schwerpunkt: 'Kundenservice & Bonus',
    letzteAktivitaetDatum: '2026-03-01',
  },
  {
    id: 'hkk',
    name: 'hkk',
    beitragssatz: '15,6%',
    kurzbeschreibung: 'Moderner Anbieter mit Schwerpunkt auf digitale Leistungen und Transparenz',
    website: 'www.hkk.de',
    kommunikationskanale: ['Website', 'App', 'Facebook', 'LinkedIn', 'Instagram'],
    schwerpunkt: 'Digital First',
    letzteAktivitaetDatum: '2026-03-03',
  },
]

export const activities: Activity[] = [
  // Techniker Krankenkasse
  {
    id: 'act_1',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'Neue TK-Fit App mit AI-Coach gelauncht',
    kategorie: 'App & Digital',
    datum: '2026-03-04',
    zusammenfassung: 'Techniker Krankenkasse stellt neue erweiterte Fitness-App mit künstlicher Intelligenz vor. Der AI-Coach erstellt personalisierte Trainingspläne basierend auf Nutzerdaten.',
    warum_relevant: 'Zeigt Techniker als Innovationsführer. Potenziell attraktiv für sportlich orientierte Zielgruppen. Deutliche Verbesserung gegenüber Konkurrenz.',
    quelle: 'tk.de/news',
    quellenlink: 'https://www.tk.de/fitness-app-ai',
  },
  {
    id: 'act_2',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'TK-Telemedizin: 24/7 Ärztliche Beratung kostenfrei',
    kategorie: 'Serviceverbessert',
    datum: '2026-02-28',
    zusammenfassung: 'Ausweitung des Telemedizin-Angebots auf 24/7-Verfügbarkeit. Erstkonsulatationen mit Ärzt:innen kostenfrei für alle Versicherten.',
    warum_relevant: 'Wettbewerbsvorteil in der Zugänglichkeit von Gesundheitsservices. Könnte Wechsel-Kandidaten anziehen, die Work-Life-Balance schätzen.',
    quelle: 'tk.de/gesundheitsservices',
    quellenlink: 'https://www.tk.de/telemedizin-24-7',
  },
  {
    id: 'act_3',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'Prämienrückerstattung: Bis 60€ für aktive Versicherte',
    kategorie: 'Bonusprogramme',
    datum: '2026-02-25',
    zusammenfassung: 'TK erweitert Bonusprogramm: Bis zu 60€ jährlich für Versicherte, die Fitness-Aktivitäten tracken und regelmäßig Vorsorgeuntersuchungen nutzen.',
    warum_relevant: 'Direkter Anreiz zum Wechsel. Monetärer Bonus könnte preis-sensitive Segmente anlocken.',
    quelle: 'Facebook: TK Social Media',
    quellenlink: 'https://facebook.com/techniker/bonus',
  },
  {
    id: 'act_4',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'Partnership mit Fitbit & Garmin - Integration in TK-App',
    kategorie: 'App & Digital',
    datum: '2026-02-20',
    zusammenfassung: 'Techniker Krankenkasse ermöglicht direkte Verbindung von Fitness-Trackern und Smartwatches mit der TK-App. Automatische Synchronisation von Aktivitätsdaten.',
    warum_relevant: 'Öffnet Ökosystem-Ansatz. Für Tech-affine Versicherte attraktiv. Differenzierung durch Ecosystemintegration.',
    quelle: 'tk.de/news',
    quellenlink: 'https://www.tk.de/smartwatch-integration',
  },
  {
    id: 'act_5',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'Mentale Gesundheit: Neue Online-Kurse (Stress, Schlaf, Achtsamkeit)',
    kategorie: 'Prävention',
    datum: '2026-02-18',
    zusammenfassung: 'TK baut Angebot für psychologisches Wohlbefinden aus: 50+ neue Online-Kurse zu Stressabbau, Schlafoptimierung und Achtsamkeit. Alle kostenlos für Versicherte.',
    warum_relevant: 'Megatrend psychische Gesundheit. Könnte besonders junge, stressbelastete Versicherte ansprechen.',
    quelle: 'tk.de/gesundheitsservices',
    quellenlink: 'https://www.tk.de/mental-health-courses',
  },
  {
    id: 'act_6',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'Kampagne "Gesundheit ist Vielfalt" - Inklusion & Diversity',
    kategorie: 'Kampagnen',
    datum: '2026-02-15',
    zusammenfassung: 'Großangelegte Kampagne mit Fokus auf inklusive Gesundheitsversorgung. Gezielte Services für Menschen mit Behinderungen, LGBTQ+ Community und verschiedene kulturelle Gruppen.',
    warum_relevant: 'Positioniert TK als inclusive employer/insurer. Modernwertorientierung. Könnte progressive Versicherte ansprechen.',
    quelle: 'tk.de/news',
    quellenlink: 'https://www.tk.de/diversity-campaign',
  },

  // Barmer
  {
    id: 'act_7',
    krankenkasse: 'Barmer',
    krankenkasseId: 'barmer',
    titel: 'Barmer Familien-Plus: Erweiterte Leistungen für Familien',
    kategorie: 'Familienleistungen',
    datum: '2026-03-03',
    zusammenfassung: 'Barmer führt neues Familien-Tarif ein: Reduktion Eigenbeteiligung für Kinderleistungen, Gratis-Zahnvorsorge für Kinder bis 18 Jahren, erweiterte Hebammen-Leistungen.',
    warum_relevant: 'Direkte Ansprache von Familien als Zielgruppe. Konkrete monetäre Vorteile für Familien. Könnte Wechsel-Motivation sein.',
    quelle: 'barmer.de/news',
    quellenlink: 'https://www.barmer.de/familien-plus',
  },
  {
    id: 'act_8',
    krankenkasse: 'Barmer',
    krankenkasseId: 'barmer',
    titel: 'Pflege-Plus Initiative: Kostenlose Unterstützung für pflegende Angehörige',
    kategorie: 'Prävention',
    datum: '2026-02-28',
    zusammenfassung: 'Barmer startet landesweite Initiative zur Unterstützung pflegender Angehöriger: Kostenlose Kurse, psychologische Beratung, Vermittlung von Entlastungsangeboten.',
    warum_relevant: 'Adressiert wachsendes Problem. Differenzierungsmerkmal in Segment der 45-65 Jährigen.',
    quelle: 'barmer.de/pflege',
    quellenlink: 'https://www.barmer.de/pflege-initiative',
  },
  {
    id: 'act_9',
    krankenkasse: 'Barmer',
    krankenkasseId: 'barmer',
    titel: 'Barmer Forsa-Umfrage: "Zufriedenheit mit Krankenkassen sinkt"',
    kategorie: 'Kampagnen',
    datum: '2026-02-25',
    zusammenfassung: 'Barmer veröffentlicht Studie zur Krankenkassen-Zufriedenheit. Positioniert sich als "kundenfreundlichste Krankenkasse" mit 82% Zufriedenheitswert.',
    warum_relevant: 'Markenpflege und Positionierung. Implizite Kritik an Konkurrenten.',
    quelle: 'barmer.de/news',
    quellenlink: 'https://www.barmer.de/forsa-study',
  },
  {
    id: 'act_10',
    krankenkasse: 'Barmer',
    krankenkasseId: 'barmer',
    titel: 'Zahnvorsorge Upgrade: Professionelle Zahnreinigung kostenlos 2x im Jahr',
    kategorie: 'Serviceverbessert',
    datum: '2026-02-20',
    zusammenfassung: 'Barmer erweitert Zahnvorsorge: 2x jährliche professionelle Zahnreinigung vollständig kostenfrei (bisher teilweise selbstfinanziert).',
    warum_relevant: 'Konkrete Kostenersparnis für Versicherte. Zahnarzt-Leistungen sind kaufmotivierend.',
    quelle: 'barmer.de/zahnversorgung',
    quellenlink: 'https://www.barmer.de/zahnreinigung-kostenlos',
  },

  // AOK
  {
    id: 'act_11',
    krankenkasse: 'AOK',
    krankenkasseId: 'aok',
    titel: 'AOK StartFit: Kostenloser Fitness-Einstieg für Neue Mitglieder',
    kategorie: 'Bonusprogramme',
    datum: '2026-03-02',
    zusammenfassung: 'AOK bietet neuen Versicherten 3 Monate kostenloses Fitness-Studio-Membership an. Wählbar aus 8000+ Partnerstudios bundesweit.',
    warum_relevant: 'Niedrigschwelliger Einstieg für Fitness-interessierte. Zeitlich befristete Anreize können Switching beeinflussen.',
    quelle: 'aok.de/fitness',
    quellenlink: 'https://www.aok.de/startfit',
  },
  {
    id: 'act_12',
    krankenkasse: 'AOK',
    krankenkasseId: 'aok',
    titel: 'AOK-Ergo Partnership: Krankenversicherung + Zusatzversicherung kombiniert',
    kategorie: 'Serviceverbessert',
    datum: '2026-02-27',
    zusammenfassung: 'AOK kündigt strategische Partnerschaft mit Ergo an. Versicherte können Zusatzversicherungen (Zahn, Brillen, Zahnreinigung) direkt über AOK abschließen mit Rabattierung.',
    warum_relevant: 'Paketierungsstrategie. Erhöht Bindung durch Cross-Selling. Competitive Bundling.',
    quelle: 'aok.de/news',
    quellenlink: 'https://www.aok.de/ergo-partnership',
  },
  {
    id: 'act_13',
    krankenkasse: 'AOK',
    krankenkasseId: 'aok',
    titel: 'AOK Digital: Neuer Online-Krankmeldungs-Service startet',
    kategorie: 'App & Digital',
    datum: '2026-02-23',
    zusammenfassung: 'AOK führt digitale Krankmeldung ein: Versicherte melden Krankheit über App/Web an, automatische Benachrichtigung von Arbeitgeber, vollständig digital.',
    warum_relevant: 'Kundenfrequenz-Erhöhung durch digitale Nutzung. Moderne Kernleistung.',
    quelle: 'aok.de/digital-services',
    quellenlink: 'https://www.aok.de/digital-krankmeldung',
  },

  // DAK
  {
    id: 'act_14',
    krankenkasse: 'DAK-Gesundheit',
    krankenkasseId: 'dak',
    titel: 'DAK Mental: Telefonische Psychologische Soforthilfe 24/7',
    kategorie: 'Prävention',
    datum: '2026-03-04',
    zusammenfassung: 'DAK startet "DAK Mental Hotline": Kostenlose Sofort-Beratung durch Psycholog:innen rund um die Uhr. Auch für akute Krisen bei psychischer Belastung.',
    warum_relevant: 'Direkte Reaktion auf mentale Gesundheitskrise. Differenzierungsmerkmal. Megatrend-fokussiert.',
    quelle: 'dak.de/mental-health',
    quellenlink: 'https://www.dak.de/mental-hotline',
  },
  {
    id: 'act_15',
    krankenkasse: 'DAK-Gesundheit',
    krankenkasseId: 'dak',
    titel: 'DAK auf TikTok: "Gesundheit machen" - Aufklärungskanal startet',
    kategorie: 'Kampagnen',
    datum: '2026-02-28',
    zusammenfassung: 'DAK beginnt TikTok-Kampagne mit Daily-Videos zu Gesundheitsthemen, psychologischen Tipps und Wellness. Zielgruppe: Gen Z & junge Milliennials.',
    warum_relevant: 'Moderne Kanalstrategie. Kann junge Zielgruppen gezielt erreichen. Trendsetter-Positionierung.',
    quelle: 'TikTok: @dak_gesundheit',
    quellenlink: 'https://www.tiktok.com/@dak_gesundheit',
  },
  {
    id: 'act_16',
    krankenkasse: 'DAK-Gesundheit',
    krankenkasseId: 'dak',
    titel: 'DAK Burnout-Prevention: Umfassender Präventionskurs',
    kategorie: 'Prävention',
    datum: '2026-02-20',
    zusammenfassung: 'Neue 12-Wochen Burnout-Prevention Kurs (online + offline). Scientifisch basiert. Kostenfrei für alle DAK-Versicherten.',
    warum_relevant: 'Präventivansatz zu Arbeitsunfähigkeit. Fokus auf psychische Gesundheit.',
    quelle: 'dak.de/kurse',
    quellenlink: 'https://www.dak.de/burnout-prevention',
  },

  // IKK Südwest
  {
    id: 'act_17',
    krankenkasse: 'IKK Südwest',
    krankenkasseId: 'ikk_suedwest',
    titel: 'IKK Südwest: Neue Kundenservice-Center in Frankfurt und Stuttgart',
    kategorie: 'Serviceverbessert',
    datum: '2026-03-01',
    zusammenfassung: 'Eröffnung neuer kundenzentrierter Service-Center mit erweiterten Öffnungszeiten, Video-Beratung und persönlicher Kundenbetreuung.',
    warum_relevant: 'Investition in Kundennähe. Differenzierung durch persönlichen Service.',
    quelle: 'ikk-suedwest.de/news',
    quellenlink: 'https://www.ikk-suedwest.de/service-center',
  },
  {
    id: 'act_18',
    krankenkasse: 'IKK Südwest',
    krankenkasseId: 'ikk_suedwest',
    titel: 'IKK Südwest Bonus-Boost: Verdopplung der Bonuspunkte im März',
    kategorie: 'Bonusprogramme',
    datum: '2026-02-28',
    zusammenfassung: 'IKK Südwest bietet im März alle Bonuspunkte mit 2x Multiplier an. Wer 10 Punkte sammelt, bekommt 20 gutgeschrieben.',
    warum_relevant: 'Temporärer Anreiz zur Aktivierung. Zeitlich begrenzte Kampagne.',
    quelle: 'ikk-suedwest.de/bonus',
    quellenlink: 'https://www.ikk-suedwest.de/bonus-boost-maerz',
  },

  // hkk
  {
    id: 'act_19',
    krankenkasse: 'hkk',
    krankenkasseId: 'hkk',
    titel: 'hkk Digital Wallet: Elektronische Krankenversichertenkarte in Smartphone',
    kategorie: 'App & Digital',
    datum: '2026-03-03',
    zusammenfassung: 'hkk launches digitale Krankenversichertenkarte. Speicherung in Apple Wallet und Google Wallet. Ärztliche Praxen können direkt auslesen.',
    warum_relevant: 'Pure Digital Play. First-Mover in Region. Modern und praktisch.',
    quelle: 'hkk.de/digital',
    quellenlink: 'https://www.hkk.de/digital-wallet',
  },
  {
    id: 'act_20',
    krankenkasse: 'hkk',
    krankenkasseId: 'hkk',
    titel: 'hkk Transparenz-Versprechen: Alle Leistungen im Kalkulator online',
    kategorie: 'Serviceverbessert',
    datum: '2026-02-25',
    zusammenfassung: 'hkk baut interaktiven Leistungs-Kalkulator: Versicherte sehen exakt welche Leistungen sie bei welcher Diagnose erhalten, Kosten-Überblick.',
    warum_relevant: 'Seltenes Differenzierungsmerkmal: Preistransparenz. Könnte Tech-affine Versicherte anziehen.',
    quelle: 'hkk.de/tools',
    quellenlink: 'https://www.hkk.de/leistungs-kalkulator',
  },
]

export const alerts: Alert[] = [
  {
    id: 'alert_1',
    krankenkasse: 'Techniker Krankenkasse',
    krankenkasseId: 'tk',
    titel: 'TK erhöht Digitalisierungsinvestitionen um 150%',
    datum: '2026-03-04',
    zusammenfassung: 'Techniker Krankenkasse kündigt massiven Ausbau des Digital-Budgets an. Ziel: Marktführerschaft in Health-Tech.',
    relevanz: 'Wichtig',
    quelle: 'Financial Times Health',
    quellenlink: 'https://ft.com/tk-digital',
  },
  {
    id: 'alert_2',
    krankenkasse: 'Barmer',
    krankenkasseId: 'barmer',
    titel: 'Barmer-Mitgliederzahl wächst um 500.000 in 12 Monaten',
    datum: '2026-03-02',
    zusammenfassung: 'Barmer verzeichnet überproportionales Wachstum. Marktanteil steigt. Offensichtlich erfolgreich mit Familienausrichtung.',
    relevanz: 'Wichtig',
    quelle: 'Barmer Geschäftsbericht',
    quellenlink: 'https://barmer.de/geschaeftsbericht',
  },
  {
    id: 'alert_3',
    krankenkasse: 'DAK-Gesundheit',
    krankenkasseId: 'dak',
    titel: 'DAK Mental Health: Nachfrage übersteigt Kapazitäten',
    datum: '2026-02-28',
    zusammenfassung: 'Psychologische Services der DAK sind überbucht. Wartezeiten bis 6 Wochen. Zeigt enorme Nachfrage nach Mentalgesundheit.',
    relevanz: 'Relevant',
    quelle: 'DAK Pressemitteilung',
    quellenlink: 'https://dak.de/mental-kapazitaet',
  },
]

export const kategorien = [
  'App & Digital',
  'Bonusprogramme',
  'Kampagnen',
  'Prävention',
  'Serviceverbessert',
  'Familienleistungen',
]
