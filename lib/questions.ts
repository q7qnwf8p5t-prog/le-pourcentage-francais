export type Option = { label: string; value: number }
export type Question = { question: string; options: Option[] }
export type Capital = { id: string; label: string; icon: string; color: string; questions: Question[] }

const REVENUS_Q: Question[] = [
  {
    question: "Quel est votre revenu net mensuel personnel (salaire, allocations...) ?",
    options: [
      { label: "Moins de 800 € — RSA ou temps partiel subi", value: 5 },
      { label: "800 – 1 400 € — autour du SMIC", value: 22 },
      { label: "1 400 – 1 900 € — médiane française", value: 45 },
      { label: "1 900 – 2 800 €", value: 67 },
      { label: "2 800 – 4 500 €", value: 84 },
      { label: "Plus de 4 500 €", value: 97 },
    ],
  },
  {
    question: "Combien épargnez-vous chaque mois (épargne nette) ?",
    options: [
      { label: "Je suis dans le rouge / rien du tout", value: 4 },
      { label: "Moins de 50 €", value: 18 },
      { label: "50 – 200 €", value: 38 },
      { label: "200 – 600 €", value: 62 },
      { label: "600 – 1 500 €", value: 82 },
      { label: "Plus de 1 500 €", value: 96 },
    ],
  },
  {
    question: "Quel est le revenu net mensuel total de votre foyer ?",
    options: [
      { label: "Moins de 1 200 €", value: 8 },
      { label: "1 200 – 2 000 €", value: 28 },
      { label: "2 000 – 3 000 €", value: 50 },
      { label: "3 000 – 4 500 €", value: 72 },
      { label: "4 500 – 7 000 €", value: 88 },
      { label: "Plus de 7 000 €", value: 97 },
    ],
  },
  {
    question: "Avez-vous des crédits à la consommation ou des découverts récurrents ?",
    options: [
      { label: "Oui, et c'est un problème important", value: 5 },
      { label: "Oui, plusieurs crédits conso actifs", value: 20 },
      { label: "Parfois à découvert, mais gérable", value: 42 },
      { label: "Non, aucune dette hors immobilier", value: 75 },
    ],
  },
  {
    question: "Avez-vous une épargne de précaution disponible rapidement ?",
    options: [
      { label: "Non, rien du tout", value: 10 },
      { label: "Moins de 1 mois de charges", value: 28 },
      { label: "1 à 3 mois de charges", value: 52 },
      { label: "Plus de 3 mois de charges", value: 78 },
      { label: "Plus de 6 mois de charges", value: 93 },
    ],
  },
  {
    question: "Touchez-vous des revenus passifs (loyers, dividendes, intérêts) ?",
    options: [
      { label: "Non, aucun revenu passif", value: 30 },
      { label: "Moins de 200 € / mois", value: 55 },
      { label: "200 – 1 000 € / mois", value: 78 },
      { label: "Plus de 1 000 € / mois", value: 93 },
      { label: "Plus de 3 000 € / mois", value: 99 },
    ],
  },
  {
    question: "Comment qualifieriez-vous votre stabilité financière actuelle ?",
    options: [
      { label: "Très précaire — je ne sais pas payer le prochain loyer", value: 5 },
      { label: "Fragile — je survis mois par mois", value: 20 },
      { label: "Acceptable — j'y arrive sans marge", value: 42 },
      { label: "Stable — je m'en sors bien", value: 65 },
      { label: "Confortable — j'ai de la marge", value: 83 },
      { label: "Solide — aucune inquiétude financière", value: 96 },
    ],
  },
  {
    question: "Avez-vous investi en Bourse (PEA, CTO, actions, ETF) ?",
    options: [
      { label: "Non, je ne sais pas ce que c'est", value: 15 },
      { label: "Non, mais ça m'intéresse", value: 32 },
      { label: "Oui, moins de 5 000 € investis", value: 58 },
      { label: "Oui, entre 5 000 et 30 000 €", value: 78 },
      { label: "Oui, plus de 30 000 €", value: 95 },
    ],
  },
  {
    question: "Quelle est votre situation professionnelle actuelle ?",
    options: [
      { label: "Sans emploi / RSA / minima sociaux", value: 8 },
      { label: "Intérim / CDD précaire / alternant", value: 25 },
      { label: "CDI employé ou ouvrier", value: 50 },
      { label: "CDI cadre ou profession intermédiaire", value: 70 },
      { label: "Cadre supérieur / Manager / Expert", value: 87 },
      { label: "Dirigeant / Indépendant à fort revenu", value: 97 },
    ],
  },
]

const PATRIMOINE_Q: Question[] = [
  {
    question: "Quel est votre patrimoine net estimé (actifs − dettes) ?",
    options: [
      { label: "Négatif — plus de dettes que d'actifs", value: 5 },
      { label: "0 – 5 000 €", value: 18 },
      { label: "5 000 – 30 000 €", value: 38 },
      { label: "30 000 – 100 000 €", value: 58 },
      { label: "100 000 – 300 000 €", value: 76 },
      { label: "300 000 – 700 000 €", value: 90 },
      { label: "Plus de 700 000 €", value: 97 },
    ],
  },
  {
    question: "Êtes-vous propriétaire de votre résidence principale ?",
    options: [
      { label: "Non, locataire avec loyer élevé", value: 20 },
      { label: "Non, locataire (loyer raisonnable)", value: 38 },
      { label: "Oui, avec crédit immobilier en cours", value: 65 },
      { label: "Oui, sans crédit (remboursé)", value: 88 },
      { label: "Oui, et j'ai d'autres biens immobiliers", value: 97 },
    ],
  },
  {
    question: "Avez-vous une assurance-vie ou un Plan d'Épargne Retraite (PER) ?",
    options: [
      { label: "Non, aucun produit d'épargne long terme", value: 20 },
      { label: "Oui, assurance-vie < 10 000 €", value: 42 },
      { label: "Oui, assurance-vie 10 000 – 50 000 €", value: 65 },
      { label: "Oui, plus de 50 000 €", value: 85 },
      { label: "Oui, plus de 200 000 €", value: 97 },
    ],
  },
  {
    question: "Avez-vous reçu ou recevrez-vous probablement un héritage ?",
    options: [
      { label: "Non, ma famille n'a pas de patrimoine", value: 22 },
      { label: "Non, mais un petit patrimoine familial possible", value: 38 },
      { label: "Probablement quelques dizaines de milliers €", value: 62 },
      { label: "Oui, entre 100 000 et 500 000 €", value: 83 },
      { label: "Oui, plus de 500 000 €", value: 97 },
    ],
  },
  {
    question: "Quel est le solde de vos livrets d'épargne (Livret A, LDDS...) ?",
    options: [
      { label: "Vides ou inexistants", value: 12 },
      { label: "Entre 0 et 1 000 €", value: 28 },
      { label: "Entre 1 000 et 5 000 €", value: 48 },
      { label: "Entre 5 000 et 22 950 € (plafond Livret A)", value: 72 },
      { label: "Livrets pleins + autres placements", value: 92 },
    ],
  },
  {
    question: "Avez-vous des placements financiers autres que le Livret A ?",
    options: [
      { label: "Non, aucun", value: 18 },
      { label: "PEL ou CEL uniquement", value: 38 },
      { label: "Assurance-vie fonds euros uniquement", value: 55 },
      { label: "PEA ou CTO avec actions ou ETF", value: 78 },
      { label: "Portefeuille diversifié (immobilier, bourse, crypto...)", value: 93 },
    ],
  },
  {
    question: "Possédez-vous un bien immobilier locatif (investissement) ?",
    options: [
      { label: "Non", value: 35 },
      { label: "Oui, 1 bien en cours de remboursement", value: 70 },
      { label: "Oui, 1 bien payé qui génère des revenus", value: 87 },
      { label: "Oui, 2 biens ou plus", value: 97 },
    ],
  },
  {
    question: "Comment évaluez-vous votre sécurité financière à la retraite ?",
    options: [
      { label: "Très inquiet·e — aucune épargne retraite", value: 8 },
      { label: "Inquiet·e — uniquement la retraite par répartition", value: 25 },
      { label: "Acceptable — quelques économies supplémentaires", value: 50 },
      { label: "Rassuré·e — épargne retraite bien constituée", value: 75 },
      { label: "Serein·e — plusieurs sources de revenus à la retraite", value: 95 },
    ],
  },
]

const DIPLOME_Q: Question[] = [
  {
    question: "Quel est votre niveau de diplôme le plus élevé ?",
    options: [
      { label: "Aucun diplôme ou brevet des collèges", value: 8 },
      { label: "CAP / BEP", value: 18 },
      { label: "Baccalauréat (général, techno ou pro)", value: 35 },
      { label: "Bac+2 (BTS, DUT, DEUG)", value: 52 },
      { label: "Bac+3 à Bac+4 (Licence, Bachelor)", value: 70 },
      { label: "Bac+5 (Master, Grande École)", value: 88 },
      { label: "Bac+8 (Doctorat, MD...)", value: 97 },
    ],
  },
  {
    question: "Avez-vous suivi une formation continue ces 2 dernières années ?",
    options: [
      { label: "Non, jamais envisagé", value: 15 },
      { label: "Non, faute de temps ou d'argent", value: 30 },
      { label: "Oui, quelques heures (MOOC, YouTube)", value: 55 },
      { label: "Oui, une formation certifiante", value: 78 },
      { label: "Oui, plusieurs formations ou diplôme complémentaire", value: 93 },
    ],
  },
  {
    question: "Quel est votre niveau d'anglais professionnel ?",
    options: [
      { label: "Aucun / très basique", value: 12 },
      { label: "Niveau scolaire (A2-B1)", value: 30 },
      { label: "Intermédiaire (B2 — je me débrouille)", value: 55 },
      { label: "Courant (C1 — réunions en anglais)", value: 78 },
      { label: "Bilingue / langue maternelle", value: 95 },
    ],
  },
  {
    question: "Maîtrisez-vous des outils numériques professionnels avancés ?",
    options: [
      { label: "Non, j'ai du mal avec les bases", value: 10 },
      { label: "Maîtrise basique (Word, email, navigation web)", value: 28 },
      { label: "Maîtrise intermédiaire (Excel, outils collaboratifs)", value: 52 },
      { label: "Maîtrise avancée (Data, code, automatisation)", value: 80 },
      { label: "Expert (développement, IA, outils complexes)", value: 96 },
    ],
  },
  {
    question: "Lisez-vous des livres non fictionnels (essais, sciences, développement perso) ?",
    options: [
      { label: "Non, je ne lis presque jamais", value: 20 },
      { label: "Occasionnellement (1-2 par an)", value: 40 },
      { label: "Régulièrement (1 par trimestre)", value: 62 },
      { label: "Souvent (1 par mois)", value: 80 },
      { label: "Intensément (plusieurs par mois)", value: 95 },
    ],
  },
  {
    question: "Parlez-vous une autre langue que le français et l'anglais ?",
    options: [
      { label: "Non", value: 30 },
      { label: "Quelques mots seulement", value: 45 },
      { label: "Niveau intermédiaire (une 3e langue)", value: 72 },
      { label: "Courant (une 3e langue)", value: 88 },
      { label: "Plusieurs langues étrangères courantes", value: 98 },
    ],
  },
  {
    question: "Avez-vous des compétences valorisables rares sur le marché du travail ?",
    options: [
      { label: "Non, profil généraliste standard", value: 25 },
      { label: "Quelques compétences recherchées", value: 50 },
      { label: "Profil spécialisé avec expertise reconnue", value: 75 },
      { label: "Expert rare dans mon domaine", value: 93 },
    ],
  },
  {
    question: "Avez-vous étudié dans une grande métropole ou à l'international ?",
    options: [
      { label: "Non, études locales ou en région rurale", value: 28 },
      { label: "Grande ville française (hors Paris)", value: 55 },
      { label: "Paris / Île-de-France", value: 72 },
      { label: "À l'international (Erasmus ou études à l'étranger)", value: 90 },
    ],
  },
]

const SANTE_Q: Question[] = [
  {
    question: "Comment évaluez-vous votre état de santé général ?",
    options: [
      { label: "Mauvais — maladies chroniques importantes", value: 5 },
      { label: "Médiocre — souvent fatigué·e, problèmes récurrents", value: 20 },
      { label: "Moyen — quelques soucis de santé", value: 45 },
      { label: "Bon — en forme la plupart du temps", value: 70 },
      { label: "Excellent — rarement malade, pleine énergie", value: 90 },
    ],
  },
  {
    question: "Faites-vous de l'activité physique intense (sport, musculation, course...) ?",
    options: [
      { label: "Non, quasi sédentaire", value: 8 },
      { label: "Quelques promenades occasionnelles", value: 25 },
      { label: "1 fois par semaine", value: 50 },
      { label: "2-3 fois par semaine", value: 75 },
      { label: "4 fois ou plus par semaine", value: 92 },
    ],
  },
  {
    question: "Fumez-vous ou consommez-vous régulièrement de l'alcool ?",
    options: [
      { label: "Oui, fumeur·se quotidien·ne ET alcool régulier", value: 5 },
      { label: "Fumeur·se régulier·ère", value: 15 },
      { label: "Alcool plusieurs fois par semaine", value: 28 },
      { label: "Occasionnellement (moins d'une fois par semaine)", value: 60 },
      { label: "Non, ni tabac ni alcool", value: 88 },
    ],
  },
  {
    question: "Combien d'heures dormez-vous en moyenne par nuit ?",
    options: [
      { label: "Moins de 5 heures", value: 10 },
      { label: "5 – 6 heures", value: 28 },
      { label: "6 – 7 heures", value: 55 },
      { label: "7 – 8 heures (recommandé)", value: 85 },
      { label: "Plus de 8 heures de qualité", value: 72 },
    ],
  },
  {
    question: "Mangez-vous des fruits et légumes frais régulièrement ?",
    options: [
      { label: "Non, presque pas", value: 12 },
      { label: "Parfois, 2-3 fois par semaine", value: 35 },
      { label: "Presque chaque jour", value: 65 },
      { label: "Chaque jour, alimentation très équilibrée", value: 88 },
    ],
  },
  {
    question: "Consultez-vous régulièrement pour des bilans de santé préventifs ?",
    options: [
      { label: "Non, uniquement en urgence", value: 18 },
      { label: "Rarement, seulement si problème", value: 35 },
      { label: "Oui, suivi annuel chez le généraliste", value: 62 },
      { label: "Oui, suivi annuel multi-spécialistes", value: 85 },
    ],
  },
  {
    question: "Comment gérez-vous votre stress au quotidien ?",
    options: [
      { label: "Très mal — stress chronique, anxiété permanente", value: 8 },
      { label: "Difficile — souvent submergé·e", value: 25 },
      { label: "Moyen — gestion partielle", value: 50 },
      { label: "Bien — pratiques de régulation (sport, méditation...)", value: 75 },
      { label: "Très bien — stress rarement présent", value: 92 },
    ],
  },
  {
    question: "Êtes-vous en surpoids ou obèse ? (IMC > 25 = surpoids, > 30 = obésité)",
    options: [
      { label: "Obésité (IMC > 30) — catégorie 47% des Français", value: 12 },
      { label: "Surpoids (IMC 25–30) — catégorie la plus commune", value: 35 },
      { label: "Poids normal (IMC 18.5–25) — minorité en France", value: 78 },
      { label: "Je ne sais pas", value: 45 },
    ],
  },
  {
    question: "Passez-vous plus de 6 heures assis·e par jour (hors sommeil) ?",
    options: [
      { label: "Oui, plus de 8 heures", value: 15 },
      { label: "Entre 6 et 8 heures", value: 35 },
      { label: "Entre 4 et 6 heures", value: 62 },
      { label: "Moins de 4 heures (travail debout ou actif)", value: 85 },
    ],
  },
]

const RESEAU_Q: Question[] = [
  {
    question: "Combien de personnes influentes (dirigeants, experts, recruteurs) connaissez-vous personnellement ?",
    options: [
      { label: "Personne de ce type dans mon réseau", value: 8 },
      { label: "1 à 3 personnes", value: 28 },
      { label: "4 à 10 personnes", value: 55 },
      { label: "Plus de 10 personnes", value: 78 },
      { label: "Plus de 30 — réseau actif et varié", value: 95 },
    ],
  },
  {
    question: "Si vous perdiez votre emploi demain, votre réseau pourrait-il vous aider ?",
    options: [
      { label: "Non, je n'ai aucun réseau utile", value: 5 },
      { label: "Peu — réseau très limité", value: 22 },
      { label: "Oui, 1 à 2 mois avec effort", value: 50 },
      { label: "Oui, en quelques semaines", value: 75 },
      { label: "Oui, j'aurais des offres proactives en moins de 2 semaines", value: 95 },
    ],
  },
  {
    question: "Avez-vous un profil LinkedIn actif avec plus de 500 relations ?",
    options: [
      { label: "Non, pas de LinkedIn", value: 12 },
      { label: "Oui, profil basique, peu de relations", value: 28 },
      { label: "Oui, entre 200 et 500 relations", value: 55 },
      { label: "Oui, plus de 500 relations actives", value: 78 },
      { label: "Oui, créateur de contenu avec audience", value: 95 },
    ],
  },
  {
    question: "Participez-vous à des événements professionnels (conférences, meetups, salons) ?",
    options: [
      { label: "Non, jamais", value: 12 },
      { label: "Rarement (1 fois par an)", value: 30 },
      { label: "Parfois (2-4 fois par an)", value: 58 },
      { label: "Régulièrement (mensuel)", value: 80 },
      { label: "Très souvent — je suis parfois speaker", value: 97 },
    ],
  },
  {
    question: "Êtes-vous membre actif d'associations, clubs ou organisations ?",
    options: [
      { label: "Non, aucun engagement associatif", value: 20 },
      { label: "Oui, 1 seul engagement passif", value: 40 },
      { label: "Oui, 1-2 engagements actifs", value: 65 },
      { label: "Oui, plusieurs engagements dont des responsabilités", value: 85 },
    ],
  },
  {
    question: "Avez-vous un mentor ou êtes-vous vous-même mentor de quelqu'un ?",
    options: [
      { label: "Non, jamais eu de mentor", value: 20 },
      { label: "Je cherche un mentor mais n'en ai pas", value: 38 },
      { label: "J'ai eu un mentor dans le passé", value: 60 },
      { label: "J'ai un mentor actif actuellement", value: 80 },
      { label: "J'ai un mentor et je coache d'autres", value: 97 },
    ],
  },
  {
    question: "Votre entourage proche est-il globalement diplômé et professionnel (CSP+) ?",
    options: [
      { label: "Non, milieu ouvrier / peu diplômé en général", value: 18 },
      { label: "Mixte — profils variés", value: 45 },
      { label: "Plutôt diplômé et CSP+", value: 70 },
      { label: "Majorité cadres, entrepreneurs, professions libérales", value: 90 },
    ],
  },
  {
    question: "Avez-vous un réseau professionnel à l'international ?",
    options: [
      { label: "Non, réseau uniquement local", value: 22 },
      { label: "Quelques contacts étrangers occasionnels", value: 45 },
      { label: "Réseau international actif", value: 78 },
      { label: "Réseau international fort — collaborations régulières", value: 95 },
    ],
  },
]

const MODEVIE_Q: Question[] = [
  {
    question: "Combien d'heures de TV ou vidéos passives regardez-vous par jour ?",
    options: [
      { label: "Plus de 5 heures (moyenne française : 3h45)", value: 5 },
      { label: "3 à 5 heures", value: 18 },
      { label: "1 à 3 heures", value: 45 },
      { label: "Moins d'1 heure", value: 78 },
      { label: "Presque rien — contenu sélectionné uniquement", value: 92 },
    ],
  },
  {
    question: "Combien de pays étrangers avez-vous visités ?",
    options: [
      { label: "Aucun", value: 10 },
      { label: "1 à 2 pays", value: 28 },
      { label: "3 à 5 pays", value: 52 },
      { label: "6 à 15 pays", value: 75 },
      { label: "Plus de 15 pays", value: 93 },
    ],
  },
  {
    question: "Avez-vous un projet entrepreneurial, créatif ou un side-project actif ?",
    options: [
      { label: "Non, aucun projet personnel en dehors du travail", value: 20 },
      { label: "J'ai des idées mais rien de concret", value: 38 },
      { label: "Oui, un projet en cours (même petit)", value: 68 },
      { label: "Oui, un side-project qui génère des revenus", value: 90 },
    ],
  },
  {
    question: "Vous informez-vous via des sources sérieuses (presse, podcasts d'experts) ?",
    options: [
      { label: "Non, uniquement via les réseaux sociaux", value: 12 },
      { label: "Parfois, de façon non systématique", value: 35 },
      { label: "Oui, quelques articles par semaine", value: 62 },
      { label: "Oui, revue de presse quotidienne", value: 85 },
    ],
  },
  {
    question: "Pratiquez-vous régulièrement une activité artistique (musique, dessin, écriture...) ?",
    options: [
      { label: "Non, aucune pratique artistique", value: 22 },
      { label: "J'apprécie mais ne pratique pas", value: 40 },
      { label: "Oui, en amateur occasionnel", value: 65 },
      { label: "Oui, pratique régulière et sérieuse", value: 87 },
    ],
  },
  {
    question: "Avez-vous une vie sociale et amicale satisfaisante ?",
    options: [
      { label: "Non, je me sens seul·e et isolé·e", value: 8 },
      { label: "Peu de liens sociaux, peu d'activités", value: 25 },
      { label: "Quelques amis, vie sociale occasionnelle", value: 52 },
      { label: "Bonne vie sociale, amis nombreux et proches", value: 78 },
      { label: "Vie sociale riche et diverse", value: 95 },
    ],
  },
  {
    question: "Faites-vous du bénévolat ou contribuez-vous à des causes sociales ?",
    options: [
      { label: "Non, aucun engagement", value: 25 },
      { label: "Quelques dons financiers", value: 42 },
      { label: "Bénévolat occasionnel", value: 65 },
      { label: "Engagement régulier et actif", value: 88 },
    ],
  },
  {
    question: "Comment décririez-vous votre rapport à l'avenir ?",
    options: [
      { label: "Très anxieux·se — l'avenir m'angoisse", value: 10 },
      { label: "Incertain·e et préoccupé·e", value: 30 },
      { label: "Neutre — je vis au jour le jour", value: 50 },
      { label: "Confiant·e — j'ai des projets concrets", value: 75 },
      { label: "Optimiste et proactif·ve — j'anticipe et prépare", value: 93 },
    ],
  },
]

export function getCapitaux(mode: 'rapide' | 'complet'): Capital[] {
  if (mode === 'rapide') {
    return [
      { id: 'revenus', label: 'Revenus', icon: '💶', color: '#c9a84c', questions: REVENUS_Q.slice(0, 3) },
      { id: 'patrimoine', label: 'Patrimoine', icon: '🏠', color: '#e47a4c', questions: PATRIMOINE_Q.slice(0, 2) },
      { id: 'diplome', label: 'Diplôme', icon: '🎓', color: '#4c9ac9', questions: DIPLOME_Q.slice(0, 3) },
      { id: 'sante', label: 'Santé', icon: '❤️', color: '#4cc97a', questions: SANTE_Q.slice(0, 2) },
      { id: 'reseau', label: 'Réseau', icon: '🤝', color: '#9a4cc9', questions: RESEAU_Q.slice(0, 3) },
      { id: 'modevie', label: 'Mode de vie', icon: '🌟', color: '#c94c9a', questions: MODEVIE_Q.slice(0, 2) },
    ]
  }
  return [
    { id: 'revenus', label: 'Revenus', icon: '💶', color: '#c9a84c', questions: REVENUS_Q },
    { id: 'patrimoine', label: 'Patrimoine', icon: '🏠', color: '#e47a4c', questions: PATRIMOINE_Q },
    { id: 'diplome', label: 'Diplôme', icon: '🎓', color: '#4c9ac9', questions: DIPLOME_Q },
    { id: 'sante', label: 'Santé', icon: '❤️', color: '#4cc97a', questions: SANTE_Q },
    { id: 'reseau', label: 'Réseau', icon: '🤝', color: '#9a4cc9', questions: RESEAU_Q },
    { id: 'modevie', label: 'Mode de vie', icon: '🌟', color: '#c94c9a', questions: MODEVIE_Q },
  ]
}

export type StatusLabel = { label: string; desc: string; color: string }

export function getGlobalLabel(topPercent: number): StatusLabel {
  if (topPercent <= 1)  return { label: "L'Exception Française", desc: "Vous appartenez au sommet de la pyramide sociale française. Un profil exceptionnel et ultra-rare.", color: '#ffd700' }
  if (topPercent <= 5)  return { label: "L'Élite Républicaine", desc: "Vous êtes parmi les Français les mieux lotis dans presque toutes les dimensions de la vie.", color: '#c9a84c' }
  if (topPercent <= 10) return { label: "La Classe Supérieure", desc: "Revenus, diplômes, réseau : vous avez cumulé des avantages que très peu de Français possèdent.", color: '#e4c97e' }
  if (topPercent <= 20) return { label: "La Bourgeoisie Établie", desc: "Votre profil est solide et au-dessus de la moyenne dans la plupart des dimensions de vie.", color: '#a0c4d4' }
  if (topPercent <= 35) return { label: "La Classe Moyenne Haute", desc: "Au-dessus de la médiane française, avec des atouts réels mais des axes de progression identifiés.", color: '#8ab0c8' }
  if (topPercent <= 50) return { label: "Le Français Médian", desc: "Vous représentez le cœur de la France — ni au sommet, ni en difficulté. La moitié des Français est dans votre situation.", color: '#7a9ab8' }
  if (topPercent <= 65) return { label: "La Classe Moyenne Basse", desc: "Légèrement en dessous de la médiane française sur l'ensemble des dimensions de vie.", color: '#8a8aa0' }
  if (topPercent <= 80) return { label: "La Classe Populaire", desc: "Des difficultés concrètes dans plusieurs dimensions de la vie sociale française.", color: '#9a8a7a' }
  if (topPercent <= 90) return { label: "Le Peuple Précaire", desc: "Une situation difficile sur plusieurs plans — revenus, réseau, capital culturel et santé.", color: '#9a7a6a' }
  return { label: "La France Invisible", desc: "Une situation très difficile, dans les marges du système social français. Chaque point compte.", color: '#8a6a5a' }
}
