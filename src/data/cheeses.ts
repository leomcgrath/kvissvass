// 16 cheese personalities based on 4 axes (like MBTI)
// Axis 0: Social (0 = Reserved, 1 = Outgoing)
// Axis 1: Energy (0 = Calm, 1 = Intense)
// Axis 2: Style (0 = Classic, 1 = Adventurous)
// Axis 3: Approach (0 = Practical, 1 = Dreamy)

export type CheeseCode = [0 | 1, 0 | 1, 0 | 1, 0 | 1];

export interface CheesePersonality {
  id: string;
  name: string;
  code: CheeseCode;
  tagline: string;
  description: string;
  traits: string[];
  pairWith: string;
  emoji: string;
}

export const CHEESES: CheesePersonality[] = [
  {
    id: "brie",
    name: "Brie",
    code: [0, 0, 0, 0],
    tagline: "Elegant, soft & diplomatic",
    description:
      "You're the Brie of the group—smooth, approachable, and impossible to dislike. You bring people together with your gentle presence and know exactly when to step back. Classic taste with a soft exterior.",
    traits: ["Diplomatic", "Elegant", "Adaptable", "Understated"],
    pairWith: "A crisp baguette and a quiet evening",
    emoji: "🧀",
  },
  {
    id: "camembert",
    name: "Camembert",
    code: [0, 0, 0, 1],
    tagline: "Rich, indulgent & romantic",
    description:
      "You're a Camembert—deep, rich, and unapologetically romantic. You find beauty in the small things and believe in grand gestures. Your inner world is as complex as your creamy center.",
    traits: ["Romantic", "Thoughtful", "Indulgent", "Dreamy"],
    pairWith: "Soft jazz and candlelight",
    emoji: "🫕",
  },
  {
    id: "gruyere",
    name: "Gruyère",
    code: [0, 0, 1, 0],
    tagline: "Nutty, refined & precise",
    description:
      "You're Gruyère—reliable, refined, and wonderfully precise. You appreciate quality over quantity and have a subtle complexity that reveals itself over time. Swiss-level dependability.",
    traits: ["Refined", "Reliable", "Subtle", "Quality-focused"],
    pairWith: "Fondue night with close friends",
    emoji: "🧀",
  },
  {
    id: "gorgonzola",
    name: "Gorgonzola",
    code: [0, 0, 1, 1],
    tagline: "Dramatic, bold & full of flair",
    description:
      "You're Gorgonzola—bold, dramatic, and impossible to ignore. You have strong opinions and aren't afraid to show your blue veins. Life with you is never boring.",
    traits: ["Bold", "Dramatic", "Opinionated", "Memorable"],
    pairWith: "Pear, honey, and a standing ovation",
    emoji: "🔵",
  },
  {
    id: "cheddar",
    name: "Cheddar",
    code: [0, 1, 0, 0],
    tagline: "Classic, dependable & versatile",
    description:
      "You're Cheddar—the backbone of any good cheese board. Dependable, versatile, and always there when needed. You might be classic, but you're never boring. Sharp when it counts.",
    traits: ["Dependable", "Versatile", "Classic", "Sharp"],
    pairWith: "Apple slices and a solid handshake",
    emoji: "🧀",
  },
  {
    id: "roquefort",
    name: "Roquefort",
    code: [0, 1, 0, 1],
    tagline: "Bold, complex & intensely memorable",
    description:
      "You're Roquefort—intense, complex, and unforgettable. You feel things deeply and aren't afraid to show it. Your intensity might surprise people, but they always remember you.",
    traits: ["Intense", "Complex", "Memorable", "Deep"],
    pairWith: "Fig jam and meaningful conversations",
    emoji: "🫐",
  },
  {
    id: "parmesan",
    name: "Parmesan",
    code: [0, 1, 1, 0],
    tagline: "Sharp, sophisticated & timeless",
    description:
      "You're Parmesan—sharp, sophisticated, and aged to perfection. You have high standards and a dry wit. You elevate everything you're part of. No one forgets you.",
    traits: ["Sophisticated", "Sharp", "Timeless", "Elevating"],
    pairWith: "Pasta, wine, and intellectual debate",
    emoji: "🧀",
  },
  {
    id: "stilton",
    name: "Stilton",
    code: [0, 1, 1, 1],
    tagline: "Bold, aristocratic & unapologetically British",
    description:
      "You're Stilton—bold, aristocratic, and proud of your roots. You have strong convictions and a distinctive character. You might be an acquired taste, but your true fans are devoted.",
    traits: ["Aristocratic", "Bold", "Distinctive", "Proud"],
    pairWith: "Port wine and a roaring fire",
    emoji: "👑",
  },
  {
    id: "mozzarella",
    name: "Mozzarella",
    code: [1, 0, 0, 0],
    tagline: "Fresh, simple & loyal",
    description:
      "You're Mozzarella—fresh, genuine, and wonderfully simple. You're the friend everyone counts on. You don't need to be the star; you're happy making everyone else shine. Pure and loyal.",
    traits: ["Fresh", "Loyal", "Genuine", "Supportive"],
    pairWith: "Tomatoes, basil, and good company",
    emoji: "🍅",
  },
  {
    id: "ricotta",
    name: "Ricotta",
    code: [1, 0, 0, 1],
    tagline: "Gentle, soft & nurturing",
    description:
      "You're Ricotta—gentle, soft, and naturally nurturing. You make people feel at home. You're the one who remembers birthdays and brings comfort. Sweet without being saccharine.",
    traits: ["Nurturing", "Gentle", "Comforting", "Thoughtful"],
    pairWith: "Honey, lemon, and a cozy morning",
    emoji: "🥞",
  },
  {
    id: "gouda",
    name: "Gouda",
    code: [1, 0, 1, 0],
    tagline: "Sweet, mellow & easy-going",
    description:
      "You're Gouda—sweet, mellow, and everyone's favorite. You go with the flow and make life feel easier. Your warmth is genuine and your vibe is always good. Aged wisdom, young spirit.",
    traits: ["Easy-going", "Warm", "Mellow", "Likeable"],
    pairWith: "Mustard and a relaxed picnic",
    emoji: "🧀",
  },
  {
    id: "emmental",
    name: "Emmental",
    code: [1, 0, 1, 1],
    tagline: "Full of holes, full of fun & sociable",
    description:
      "You're Emmental—full of character and full of holes (the good kind!). You're the life of the party, sociable and fun. You don't take yourself too seriously and neither should anyone else.",
    traits: ["Sociable", "Fun", "Light-hearted", "Characterful"],
    pairWith: "A sandwich and a group hike",
    emoji: "🕳️",
  },
  {
    id: "feta",
    name: "Feta",
    code: [1, 1, 0, 0],
    tagline: "Tangy, spirited & Mediterranean",
    description:
      "You're Feta—tangy, spirited, and full of Mediterranean sunshine. You bring zest to every situation. You're bold in flavor but practical in approach. Salt of the earth with a twist.",
    traits: ["Spirited", "Zesty", "Bold", "Sunny"],
    pairWith: "Olives, watermelon, and a beach day",
    emoji: "🇬🇷",
  },
  {
    id: "halloumi",
    name: "Halloumi",
    code: [1, 1, 0, 1],
    tagline: "Unconventional, resilient & grill master",
    description:
      "You're Halloumi—unconventional and proud of it. You don't melt under pressure; you sizzle. You're resilient, surprising, and you thrive in situations that would break others. Think outside the box.",
    traits: ["Resilient", "Unconventional", "Surprising", "Strong"],
    pairWith: "A grill, lemon, and summer nights",
    emoji: "🔥",
  },
  {
    id: "manchego",
    name: "Manchego",
    code: [1, 1, 1, 0],
    tagline: "Proud, traditional & Spanish soul",
    description:
      "You're Manchego—proud, traditional, and full of soul. You honor your roots while welcoming the new. You have depth and character that only gets better with time. Fierce loyalty, warm heart.",
    traits: ["Proud", "Traditional", "Soulful", "Loyal"],
    pairWith: "Quince paste and flamenco",
    emoji: "🇪🇸",
  },
  {
    id: "comte",
    name: "Comté",
    code: [1, 1, 1, 1],
    tagline: "Complex, patient & French depth",
    description:
      "You're Comté—complex, patient, and endlessly interesting. You've got layers upon layers. You're outgoing but deep, intense but refined. You're the cheese that has it all. The ultimate personality.",
    traits: ["Complex", "Patient", "Layered", "Ultimate"],
    pairWith: "Everything. You're the main character.",
    emoji: "🇫🇷",
  },
];

export function getCheeseByCode(code: CheeseCode): CheesePersonality {
  const found = CHEESES.find(
    (c) =>
      c.code[0] === code[0] &&
      c.code[1] === code[1] &&
      c.code[2] === code[2] &&
      c.code[3] === code[3]
  );
  return found ?? CHEESES[0];
}
