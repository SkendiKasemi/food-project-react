import {
  MexicanCuisineSVG,
  ItalianCuisineSVG,
  AsianCuisineSVG,
  AmericanSVG,
  BritishSVG,
  CanadianSVG,
  ChineseSVG,
  DutchSVG,
  TurkishSVG,
  EgyptianSVG,
  FrenchSVG,
  GreekSVG,
  IndianSVG,
  IrishSVG,
  PortugueseSVG,
  RussianSVG,
  SpanishSVG,
  ThaiSVG,
  UnknownSVG,
  JamaicanSVG,
  KenyaSVG,
  MalaysiaSVG,
  MoroccanSVG,
  TunisianSVG,
  VietnameseSVG,
  PolishSVG,
} from '../components/svg/InternationalSVG';

export const internationalCuisines = [
  {
    Icon: <AmericanSVG />,
    type: 'American',
    description:
      'Discover classic American comfort foods from coast to coast, including burgers, BBQ ribs, apple pie, and creamy mac ’n’ cheese delights.',
  },
  {
    Icon: <BritishSVG />,
    type: 'British',
    description:
      'Enjoy hearty British fare like fish and chips, shepherd’s pie, bangers and mash, and afternoon tea treats with scones and clotted cream.',
  },
  {
    type: 'French',
    description:
      'Indulge in French gastronomy with buttery croissants, coq au vin, ratatouille, escargots, and delicate pastries showcasing refined, timeless culinary artistry.',
    Icon: <FrenchSVG />,
  },
  {
    type: 'Canadian',
    description:
      'Savor Canadian specialties such as poutine, butter tarts, maple-glazed dishes, and tender tourtière pies capturing the nation’s comforting flavors.',
    Icon: <CanadianSVG />,
  },
  {
    type: 'Chinese',
    description:
      'Experience diverse Chinese cuisine with dim sum, stir-fries, Peking duck, dumplings, and bold regional flavors ranging from Sichuan spice to Cantonese sweetness.',
    Icon: <ChineseSVG />,
  },
  {
    type: 'Dutch',
    description:
      'Sample Dutch delights like stroopwafels, bitterballen, herring, pea soup, and rich cheeses that celebrate the Netherlands’ cozy, homestyle traditions.',
    Icon: <DutchSVG />,
  },
  {
    type: 'Egyptian',
    description:
      'Delight in Egyptian staples such as ful medames, koshari, molokhia, falafel, and sweet basbousa that reflect ancient flavors and modern street eats.',
    Icon: <EgyptianSVG />,
  },
  {
    type: 'Greek',
    description:
      'Feast on fresh Greek classics like moussaka, souvlaki, tzatziki, spanakopita, and olive-oil-drizzled salads inspired by sun-drenched Mediterranean shores.',
    Icon: <GreekSVG />,
  },
  {
    type: 'Indian',
    description:
      'Explore India’s aromatic spices and diverse dishes: creamy curries, tandoori meats, dosas, biryanis, chutneys, and freshly baked naan breads brimming with flavor.',
    Icon: <IndianSVG />,
  },
  {
    type: 'Irish',
    description:
      'Warm up with hearty Irish stews, soda bread, colcannon, boxty, and creamy cheeses spotlighting Ireland’s rustic, comforting countryside cuisine traditions.',
    Icon: <IrishSVG />,
  },
  {
    type: 'Italian',
    description:
      'Relish Italian favorites such as wood-fired pizzas, handmade pastas, risottos, gelato, and tiramisu, celebrating simplicity and high-quality ingredients in every bite.',
    Icon: <ItalianCuisineSVG />,
  },
  {
    type: 'Jamaican',
    description:
      'Feel the island heat with Jamaican jerk chicken, ackee and saltfish, festival dumplings, and spicy patties bursting with bold Caribbean seasonings.',
    Icon: <JamaicanSVG />,
  },
  {
    type: 'Japanese',
    description:
      'Savor Japanese precision in sushi, ramen, tempura, yakitori, and delicate wagashi sweets, balancing umami, freshness, and artful presentation in each dish.',
    Icon: <AsianCuisineSVG />,
  },
  {
    type: 'Kenyan',
    description:
      'Taste Kenyan staples like ugali, nyama choma, sukuma wiki, pilau rice, and fresh chapatis reflecting East Africa’s vibrant, communal food culture.',
    Icon: <KenyaSVG />,
  },
  {
    type: 'Turkish',
    description:
      'Savor Turkish mezes, kebabs, pide breads, baklava, and rich Turkish coffee in a culinary journey showcasing Ottoman heritage and street-food vibrancy.',
    Icon: <TurkishSVG />,
  },
  {
    type: 'Mexican',
    description:
      'Experience the rich and vibrant flavors of Mexican cuisine, with delicious dishes like tacos, burritos, guacamole, and quesadillas that inspire festive gatherings.',
    Icon: <MexicanCuisineSVG />,
  },
  {
    type: 'Moroccan',
    description:
      'Journey through Moroccan tagines, couscous, pastilla, harira soup, and sweet pastries blending fragrant spices, preserved lemons, and hearty local ingredients.',
    Icon: <MoroccanSVG />,
  },
  {
    type: 'Polish',
    description:
      'Enjoy Polish comfort foods such as pierogi, kielbasa, bigos stew, żurek soup, and poppy seed pastries showcasing rich Eastern European traditions.',
    Icon: <PolishSVG />,
  },
  {
    type: 'Portuguese',
    description:
      'Indulge in Portuguese favorites like bacalhau, pastel de nata, piri-piri chicken, caldo verde, and custard tarts highlighting coastal and hearty flavors.',
    Icon: <PortugueseSVG />,
  },
  {
    type: 'Russian',
    description:
      'Delight in Russian dishes like borscht, beef stroganoff, blini pancakes, pelmeni dumplings, and hearty salads reflecting centuries-old Slavic traditions.',
    Icon: <RussianSVG />,
  },
  {
    type: 'Spanish',
    description:
      'Share Spanish tapas, paella, jamón ibérico, gazpacho, and churros con chocolate celebrating lively flavors and communal dining under Mediterranean skies.',
    Icon: <SpanishSVG />,
  },
  {
    type: 'Thai',
    description:
      'Explore Thai cuisine’s perfect balance of sweet, sour, spicy, and salty with pad Thai, green curry, tom yum soup, and mango sticky rice desserts.',
    Icon: <ThaiSVG />,
  },
  {
    type: 'Tunisian',
    description:
      'Experience Tunisian couscous, brik pastries, shakshuka, and spicy harissa dishes reflecting North Africa’s bold flavors and Mediterranean influences.',
    Icon: <TunisianSVG />,
  },
  {
    type: 'Malaysian',
    description:
      'Dive into Malaysian street food with nasi lemak, laksa, satay skewers, roti canai, and kaya toast offering spicy, sweet, and savory harmony on a plate.',
    Icon: <MalaysiaSVG />,
  },
  {
    type: 'Unknown',
    description:
      'Discover mysterious recipes labeled ‘Unknown,’ offering surprise flavors and undisclosed origins that invite adventurous palates to explore hidden culinary treasures.',
    Icon: <UnknownSVG />,
  },
  {
    type: 'Vietnamese',
    description:
      'Relish Vietnamese pho, banh mi, spring rolls, bun cha, and fresh herb-packed salads marrying light broths, crisp textures, and fragrant aromatics.',
    Icon: <VietnameseSVG />,
  },
];
/*115 
 
*/
