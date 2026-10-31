import type { EntityCategory } from '../lib/constants';

export interface CategoryDefinition {
  id: string;
  slug: string;
  name: string;
  h1: string;
  route: string;
  entityCategoryKey: EntityCategory;
  secondaryCategoryKey?: EntityCategory;
  title: string;
  description: string;
  badge: string;
  measurementAnchor: string;
  measurementGuide: string;
  // Short canvas tool-tip note for this category (shown under the tool).
  // If omitted, the tool falls back to its default withers note.
  measurementNote?: string;
  commonHeights: Array<{ label: string; heightCm: number; imperial: string; note: string }>;
  faqs: Array<{ question: string; answer: string }>;
  // Long-form, category-specific editorial sections. Each category's text must
  // be original to that category (no shared boilerplate) and total 500+ words.
  editorialSections?: Array<{ heading: string; paragraphs: string[] }>;
  indexable?: boolean;
}

export const CATEGORIES: CategoryDefinition[] = [
  {
    id: 'people',
    slug: 'people-height-comparison',
    name: 'People',
    h1: 'People Height Comparison',
    route: '/people-height-comparison/',
    entityCategoryKey: 'male',
    secondaryCategoryKey: 'female',
    title: 'People Height Comparison | HowHeight',
    description: 'Compare adult male and female human heights side-by-side using mathematically accurate anatomical silhouettes aligned to an identical floor baseline.',
    badge: 'Anthropometric Reference',
    measurementAnchor: 'Crown to Soles (Barefoot standing stature)',
    measurementGuide: 'Human stature is measured as barefoot standing height: the subject stands erect on a flat surface, heels together, back against a stadiometer, head held so the line of sight is horizontal, and the distance is read from the floor to the highest point of the skull (the vertex). Measurements are normally taken in the morning where possible, because the spine compresses slightly through the day and a person can measure roughly a centimetre or two shorter by evening than after waking. National surveys such as the CDC\'s NHANES program use trained examiners and calibrated stadiometers rather than self-reports, because people tend to overstate their own height by a small amount when asked.',
    measurementNote: 'Human heights are measured barefoot, crown to soles, standing erect.',
    commonHeights: [
      { label: 'Global Male Average', heightCm: 175, imperial: '5\'9"', note: 'Worldwide median adult male height' },
      { label: 'Global Female Average', heightCm: 162, imperial: '5\'4"', note: 'Worldwide median adult female height' },
      { label: 'Dutch Male Average', heightCm: 183, imperial: '6\'0"', note: 'Tallest national male average, per Dutch CBS and NCD-RisC data' },
      { label: 'Dutch Female Average', heightCm: 170, imperial: '5\'7"', note: 'Tallest national female average, per Dutch CBS and NCD-RisC data' },
      { label: 'US Female Average', heightCm: 161, imperial: '5\'3.5"', note: 'CDC NHANES measured mean for adult women' },
      { label: 'Indian Male Average', heightCm: 165, imperial: '5\'5"', note: 'National Family Health Survey rounds, adult men' },
      { label: 'Indian Female Average', heightCm: 152, imperial: '5\'0"', note: 'National Family Health Survey rounds, adult women' },
      { label: 'Male 95th Percentile', heightCm: 188, imperial: '6\'2"', note: 'Only about 1 in 20 adult men reaches this height or more' },
      { label: 'Female 95th Percentile', heightCm: 173, imperial: '5\'8"', note: 'Only about 1 in 20 adult women reaches this height or more' },
      { label: 'Robert Wadlow', heightCm: 272, imperial: '8\'11"', note: 'Tallest person ever verified, measured 27 June 1940' },
      { label: 'Sultan Kosen', heightCm: 251, imperial: '8\'2.8"', note: 'Tallest living man, verified by Guinness World Records' },
      { label: 'Chandra Bahadur Dangi', heightCm: 54.6, imperial: '1\'9.5"', note: 'Shortest adult ever verified, measured in Kathmandu in 2012' },
      { label: 'Jyoti Amge', heightCm: 62.8, imperial: '2\'0.7"', note: 'Shortest living woman, verified by Guinness World Records' },
    ],
    faqs: [
      {
        question: 'Why is my height slightly different in the morning and evening?',
        answer: 'Your spine compresses during the day. The discs between your vertebrae lose a little fluid under gravity and load, so most adults measure roughly a centimetre or two shorter in the evening than they did when they woke up. This is normal and temporary; the discs rehydrate overnight while you lie down. That is why clinics and national surveys prefer morning measurements when they want a consistent, comparable figure.',
      },
      {
        question: 'What is a percentile, and why does it matter more than the average?',
        answer: 'A percentile tells you where you stand in a population. If you are at the 75th percentile for your sex, you are taller than about 75 percent of people like you and shorter than about 25 percent. Averages alone hide this spread: two countries can share a similar average while having very different ranges. Percentiles are the tool doctors and researchers use to judge whether a child\'s growth is on track, because they compare like with like instead of against a single number.',
      },
      {
        question: 'Why are Dutch people the tallest in the world?',
        answer: 'Dutch men average around 183 cm and Dutch women around 170 cm, the highest national averages on record. Military records show Dutch men gained roughly 20 cm over the past 200 years, a rise researchers link to improved childhood nutrition, universal healthcare, and rising living standards rather than any single genetic change. The increase has levelled off since the 1980s, which suggests the population may be close to its practical ceiling under current conditions.',
      },
      {
        question: 'Do men and women really differ in height by a fixed amount?',
        answer: 'On average, adult men are about 13 to 14 cm taller than adult women worldwide, a gap driven by longer male growth periods: boys typically keep growing for about two years longer than girls before their growth plates fuse. But the distributions overlap heavily. A woman at the 95th percentile (about 173 cm) is taller than roughly half of all men, so the averages describe populations, not individuals, and they say nothing reliable about any single person you meet.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why ordinary human height is worth comparing',
        paragraphs: [
          'Human height feels personal in a way that almost no other measurement does. People remember their own height to the centimetre, argue about it, round it up on forms, and notice it the moment they walk into a room. That is because height is one of the few physical traits that is visible at a glance, comparable at a distance, and loaded with social meaning all at once. A comparison tool earns its keep here not by showing a number, but by showing the gap: the difference between 175 cm and 183 cm is hard to feel from digits alone, yet the moment two figures stand on the same baseline, eight centimetres becomes a visible step up that anyone can read without doing any arithmetic.',
          'The other reason this category matters is that "average" is a moving target. The global male median of about 175 cm and the global female median of about 162 cm hide enormous variation between populations. A Dutch man at 183 cm is unremarkable at home but would stand out in a crowd in India, where the male average is around 165 cm. Comparing yourself against a single world average therefore tells you very little; comparing against the right population, the right percentile, and the right sex tells you a great deal. That is the comparison this page is built to support.',
        ],
      },
      {
        heading: 'How height is actually measured, and why small errors creep in',
        paragraphs: [
          'Proper stature measurement is a small ritual with a strict protocol. The subject removes their shoes, stands with heels together and back straight against a vertical stadiometer, and looks straight ahead so the head sits in what anthropometrists call the Frankfurt plane. The measurer lowers a horizontal headpiece until it just touches the crown of the skull and reads the value. Every part of that ritual exists to kill a specific error: shoes add two to three centimetres, slouching removes several more, and a tilted head can shift the reading by a centimetre either way.',
          'Even with perfect technique, the number moves through the day. Spinal discs compress under gravity, so evening readings run roughly a centimetre or two below morning ones. Self-reported heights run the other direction: people round up, remember their morning height, or quote the figure from their driving licence, which may be years old. National surveys solve this by measuring rather than asking, using trained examiners and calibrated equipment. When you compare figures on this page, you are comparing measured or survey-grade numbers, not guesses, which is why a gap of two or three centimetres between two entries is real and worth noticing rather than noise.',
        ],
      },
      {
        heading: 'Extremes that put the ordinary range in perspective',
        paragraphs: [
          'Most adults on Earth fall inside a surprisingly narrow band. Roughly speaking, adult men cluster between about 165 cm at the 5th percentile and 188 cm at the 95th, and adult women between about 152 cm and 173 cm. That band is the world most of us live in, and it is why a difference of ten centimetres between two friends feels large: it spans a big chunk of the whole distribution.',
          'The record holders sit far outside that band, and they are useful precisely because they break the scale. Robert Wadlow, measured at 272 cm shortly before his death in 1940, was nearly a metre taller than the average man of his time, the result of an overactive pituitary gland that never stopped driving his growth. At the other end, Chandra Bahadur Dangi measured 54.6 cm in Kathmandu in 2012, shorter than the average two-year-old, as a result of primordial dwarfism. Put either figure next to an average adult on the comparison canvas and the ordinary range suddenly looks compact: the entire spread of typical human height fits inside the gap between Wadlow\'s waist and his crown.',
        ],
      },
      {
        heading: 'Using the tool for this category',
        paragraphs: [
          'The most useful comparison here is not celebrity against celebrity but you against a population. Start by adding a figure at your own height, then add the average for your sex and country and see where you land. If you are 178 cm and male, you are above the global median but below the Dutch average; if you are 170 cm and female, you are above the global female median and right at the Dutch female average. Those placements are more informative than any single number, because they tell you whether you are typical, tall, or short relative to the people you actually live among.',
          'Percentiles make the same point more precisely. Adding the 5th, 50th, and 95th percentile figures for your sex draws the full shape of the distribution on one canvas, and your own figure drops into it like a marker. Try it against the record holders too: placing Wadlow beside an average adult is the fastest way to grasp what "tallest ever" really means, because no description in words carries the same weight as seeing a figure nearly twice your height standing on the same floor.',
        ],
      },
    ],
  },
  {
    id: 'celebrities',
    slug: 'celebrity-height-comparison',
    name: 'Celebrities',
    h1: 'Celebrity Height Comparison',
    route: '/celebrity-height-comparison/',
    entityCategoryKey: 'celebrities',
    title: 'Celebrity Height Comparison | HowHeight',
    description: 'Compare verified heights of Hollywood actors, Bollywood stars, world-class athletes, and musicians with accurate visual models standing on an aligned baseline.',
    badge: 'Verified Stature Directory',
    measurementAnchor: 'Official standing stature documentation',
    measurementGuide: 'Celebrity heights come from a mix of sources of very different reliability, and this page ranks them accordingly. The strongest figures are measured ones: professional sports combines and draft camps, where athletes are measured barefoot by officials, and federation records such as cricket board profiles. Next come reputable biographical references that cross-check agency material against interviews and photographs. The weakest figures are agency listings and publicity bios, which are routinely rounded up, quoted with shoes on, or simply inherited from an early press release and never corrected. Where sources disagree, this page prefers the measured or widely corroborated figure and treats a lone agency listing with suspicion.',
    measurementNote: 'Celebrity heights are listed figures; combines and federations measure barefoot.',
    commonHeights: [
      { label: 'Dwayne Johnson', heightCm: 196, imperial: '6\'5"', note: 'Actor and former WWE champion, tallest figure in the directory' },
      { label: 'Chris Hemsworth', heightCm: 190, imperial: '6\'2.8"', note: 'Australian actor, known for Thor' },
      { label: 'Amitabh Bachchan', heightCm: 188, imperial: '6\'2"', note: 'Indian cinema legend, notably tall for his generation of actors' },
      { label: 'Cristiano Ronaldo', heightCm: 187, imperial: '6\'1.6"', note: 'Portuguese footballer, measured in professional club records' },
      { label: 'Leonardo DiCaprio', heightCm: 183, imperial: '6\'0"', note: 'American actor' },
      { label: 'Ranbir Kapoor', heightCm: 183, imperial: '6\'0"', note: 'Indian actor' },
      { label: 'Neeraj Chopra', heightCm: 182, imperial: '5\'11.7"', note: 'Indian Olympic javelin champion, World Athletics profile' },
      { label: 'Brad Pitt', heightCm: 180, imperial: '5\'11"', note: 'American actor and producer' },
      { label: 'Zendaya', heightCm: 178, imperial: '5\'10"', note: 'American actress and singer, tall for a leading actress' },
      { label: 'Virat Kohli', heightCm: 175, imperial: '5\'9"', note: 'Indian cricketer, BCCI player profile' },
      { label: 'Shah Rukh Khan', heightCm: 173, imperial: '5\'8"', note: 'Indian actor, "King of Bollywood"' },
      { label: 'Tom Cruise', heightCm: 170, imperial: '5\'7"', note: 'American actor, the directory\'s most searched shorter leading man' },
      { label: 'Sachin Tendulkar', heightCm: 165, imperial: '5\'5"', note: 'Indian cricketer, record run-scorer' },
      { label: 'Alia Bhatt', heightCm: 160, imperial: '5\'3"', note: 'Indian actress' },
    ],
    faqs: [
      {
        question: 'Why do different websites list different heights for the same celebrity?',
        answer: 'Because they are copying different kinds of sources. A sports federation profile, a film agency booking sheet, and a fan wiki rarely agree to the centimetre, and each site picks one and presents it as fact. Agency sheets are the usual culprit for inflation: they are marketing documents, and a centimetre or two is routinely added, especially for leading men. Measured records from combines and federations are far more consistent, which is why athletes\' heights are generally more trustworthy than actors\' heights. When you see a celebrity\'s height vary by 3 to 5 cm across sites, you are usually seeing the gap between a measured figure and a publicised one.',
      },
      {
        question: 'Are actors really as tall as their listed heights claim?',
        answer: 'Often not quite. Actors are photographed and filmed in ways that flatter their stature: heeled boots, lifted insoles, camera angles shot from below, and co-stars chosen or positioned to preserve a leading man\'s apparent height advantage. Some productions even place shorter actors on apple boxes for two-shots. None of this means the listed figure is invented, but it does mean the height you perceive on screen can run a few centimetres above the barefoot figure. Comparing the listed number against a co-star whose height is independently measured is usually the fastest way to spot the exaggeration.',
      },
      {
        question: 'Who is the tallest and shortest celebrity in this directory?',
        answer: 'Dwayne Johnson, at 196 cm, is the tallest figure in the verified directory, a legacy of his professional wrestling career where his billed size was part of the act but his real stature is genuinely exceptional. At the other end, Alia Bhatt at 160 cm and Scarlett Johansson at 160 cm are the shortest leading ladies listed. The gap between Johnson and either of them is 36 cm, more than a foot, which is why placing those two figures side by side on the canvas is one of the most striking comparisons the tool can draw.',
      },
      {
        question: 'Why are athletes\' heights more reliable than actors\' heights?',
        answer: 'Athletes get measured by people with no interest in flattering them. A football club, a cricket board, or an Olympic federation records height because it matters for selection, kit, and medical baselines, and the measurement is taken barefoot by staff following a protocol. Actors, by contrast, are measured by their own representation, where height is part of a marketable image and nobody audits the number. That structural difference explains why a cricketer\'s listed height rarely moves over a career while an actor\'s can quietly drift upward between an early biography and a later one.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why famous heights fascinate people',
        paragraphs: [
          'Nobody argues about the height of a stranger, but everyone has an opinion about the height of a famous person. Part of it is simple curiosity: film and television flatten the world into a rectangle, and the rectangle lies about scale. Two actors can look identical in height on screen while differing by fifteen centimetres in real life, because the camera, the framing, and the footwear all conspire to hide the difference. Finding out the real number feels like solving a small mystery, and it reframes every scene you have watched: suddenly the hero\'s dominance in a confrontation scene looks less like physique and more like cinematography.',
          'The other part is identification. Fans compare themselves to famous people as a way of placing themselves in the world. A person who is 170 cm discovers that Tom Cruise and Lionel Messi share that height, and the number stops feeling short. A person who is 188 cm finds company in Amitabh Bachchan. The comparison tool works for celebrities precisely because it turns an abstract listing into a visual fact: your figure standing on the same baseline as a star\'s, at true scale, with no camera tricks left in the way.',
        ],
      },
      {
        heading: 'Listed heights, measured heights, and the gap between them',
        paragraphs: [
          'Every celebrity height on this page belongs to one of two families, and knowing which one matters more than the number itself. Measured heights come from institutions that record stature for practical reasons: sports combines, draft camps, cricket boards, and Olympic federations. These are taken barefoot, by officials, under a protocol, and they rarely change over a career. Listed heights come from agencies, publicity bios, and interviews, where the number serves an image rather than a record. Those are the figures that drift upward by a centimetre or two, get quoted with shoes on, or survive unchanged from a press release written when the actor was twenty-one.',
          'The gap is usually small but it is systematic, and it runs in one direction: up. Leading men are the worst affected, because casting has historically favoured taller heroes and shorter leading men have an incentive to close the gap on paper. Actresses face the opposite pressure in some contexts, where being notably tall can cost roles opposite shorter male leads. None of this makes the figures useless, but it means a celebrity comparison should be read as approximate to within a few centimetres, and a difference of two centimetres between two actors should not be treated as decisive. A difference of fifteen centimetres, on the other hand, is real no matter which source you trust.',
        ],
      },
      {
        heading: 'The extremes of fame, and what they reveal',
        paragraphs: [
          'The directory\'s range runs from 160 cm to 196 cm, a span of 36 cm between Alia Bhatt and Scarlett Johansson at the lower end and Dwayne Johnson at the upper. That span is worth pausing on, because it covers almost the entire normal adult range: the shortest and tallest famous people are not freakish outliers but people whose heights sit near the edges of ordinary variation. Johnson\'s 196 cm is exceptional but not record-breaking; it is the height of a very tall man who happened to become a wrestler and then an actor. Johansson\'s and Bhatt\'s 160 cm is simply the height of a shorter-than-average woman, unremarkable off screen.',
          'What is remarkable is how little those real differences show up in their work. Johnson is filmed to look powerful but not absurd, and Johansson is framed to look commanding rather than small, because directors adjust angles, blocking, and co-star placement to serve the story rather than the tape measure. The tool strips all of that away. Put Johnson beside Bhatt on one baseline and the 36 cm gap is suddenly undeniable, which is exactly why the comparison is satisfying: it replaces years of carefully managed screen illusion with one honest picture.',
        ],
      },
      {
        heading: 'Using the tool for this category',
        paragraphs: [
          'The best celebrity comparison starts with yourself. Add a figure at your own height, then add the star you are curious about, and the gap becomes personal rather than trivia. A 175 cm user standing next to Virat Kohli at the same height sees an equal; next to Cristiano Ronaldo at 187 cm, the same user sees a twelve-centimetre step up; next to Tom Cruise at 170 cm, a five-centimetre step down. Those three pictures together teach more about scale than any list of numbers, because each one anchors the star\'s height to a body you already know.',
          'The tool also rewards mixing categories, which is where celebrity comparison gets genuinely interesting. Place a cricketer beside a doorframe, an actor beside a horse, or a footballer beside an average adult from another country, and the fame falls away leaving only the measurement. That is the point of the exercise: a celebrity\'s height is not a fact about celebrity at all. It is a human height, measured the same way yours is, and the canvas is the one place where it is shown without flattery, footwear, or camera angles getting in the way.',
        ],
      },
    ],
  },
  {
    id: 'anime',
    slug: 'anime-height-comparison',
    name: 'Anime',
    h1: 'Anime Character Height Comparison',
    route: '/anime-height-comparison/',
    entityCategoryKey: 'anime',
    title: 'Anime Character Height Comparison | HowHeight',
    description: 'Compare official heights of popular anime and manga characters side-by-side. Discover canonical heights from Shonen Jump, studio databooks, and canon lore.',
    badge: 'Canonical Lore Database',
    measurementAnchor: 'Official Databook Standing Stature',
    measurementGuide: 'Anime character heights come from official franchise databooks, manga author notes, and character design sheets published by the rights holders, not from screenshots or fan estimates. Because long-running series follow their casts for years, a single character often has more than one official height: early-series, post-timeskip, and adult figures can all be correct for different points in the story. Fan wikis disagree with each other mainly because they mix these eras, round conversions differently, or repeat outdated guidebook editions, so every figure on this page is tied to a specific version of the character.',
    measurementNote: 'Anime heights are official databook figures for a specific story era, not estimates from animation frames.',
    commonHeights: [
      { label: 'Edward Elric', heightCm: 149, imperial: '4\'11"', note: 'Fullmetal Alchemist, early series; grows to about 165 cm by the series end' },
      { label: 'Levi Ackerman', heightCm: 160, imperial: '5\'3"', note: 'Attack on Titan, official guidebooks supervised by Hajime Isayama' },
      { label: 'Tanjiro Kamado', heightCm: 165, imperial: '5\'5"', note: 'Demon Slayer, age 15 after joining the Corps; 156 cm at age 13' },
      { label: 'Yuji Itadori', heightCm: 173, imperial: '5\'8"', note: 'Jujutsu Kaisen, official fanbook' },
      { label: 'Monkey D. Luffy', heightCm: 174, imperial: '5\'8.5"', note: 'One Piece, post-timeskip; 172 cm before the timeskip' },
      { label: 'Ichigo Kurosaki', heightCm: 174, imperial: '5\'8.5"', note: 'Bleach, teenage years; 181 cm as an adult' },
      { label: 'Son Goku', heightCm: 175, imperial: '5\'9"', note: 'Dragon Ball Z / Super, adult' },
      { label: 'Naruto Uzumaki', heightCm: 180, imperial: '5\'11"', note: 'Naruto, adult as 7th Hokage; 166 cm as a teenager in Shippuden' },
      { label: 'Roronoa Zoro', heightCm: 181, imperial: '5\'11"', note: 'One Piece, post-timeskip; 178 cm before the timeskip' },
      { label: 'Eren Yeager', heightCm: 183, imperial: '6\'0"', note: 'Attack on Titan, post-timeskip; 170 cm in the early seasons' },
      { label: 'Satoru Gojo', heightCm: 190, imperial: '6\'3"', note: 'Jujutsu Kaisen, fanbook lists him as over 190 cm' },
      { label: 'All Might (Hero Form)', heightCm: 220, imperial: '7\'2.6"', note: 'My Hero Academia, powered hero form; far shorter in his weakened form' },
    ],
    faqs: [
      {
        question: 'Are anime character heights official, or do fans guess them?',
        answer: 'They are official. Japanese publishers print character profiles with height, weight, and birthday in databooks and fanbooks that accompany a manga series, and animation studios build their model sheets from those same numbers. When you see two different heights for one character, it is almost always because the character aged between story arcs, not because the number was invented.',
      },
      {
        question: 'Why does one character have two different heights on different sites?',
        answer: 'Long-running anime age their casts. Luffy is 172 cm before the One Piece timeskip and 174 cm after it, Eren Yeager grows from 170 cm to 183 cm, and Tanjiro grows from 156 cm to 165 cm during his training. A site that does not say which era it is quoting will look wrong even when its number comes from a real source, which is why this page labels the era for every entry.',
      },
      {
        question: 'Why are some anime characters so short compared to real people?',
        answer: 'Many protagonists are teenagers, and Japanese character design often keeps heroes compact so they read clearly on screen next to much larger villains and creatures. Edward Elric at 149 cm and Levi Ackerman at 160 cm are both written as small, and their stories make a point of it: their size is part of their identity, not a drawing error. Comparing them with an average adult on the canvas shows exactly how deliberate that choice is.',
      },
      {
        question: 'Do anime heights change between the manga and the anime?',
        answer: 'The published databook figure is the same for both, because the anime adapts the manga\'s design sheets. What changes is how tall a character looks on screen: camera angles, dramatic perspective, and the height of whoever is standing next to them can make a character seem taller or shorter in a given scene. The databook number stays fixed, which is why it is the right figure to compare.',
      },
      {
        question: 'How should I use the comparison tool with anime characters?',
        answer: 'Start with one character and an average human of 175 cm, then add a second character from the same series to see the in-universe gap, and finally add a real-world object such as a doorframe to ground the result. Because anime casts mix teenagers, adults, and giants, the tool is most revealing when you compare characters from the same era of the same series rather than mixing early-series and adult versions.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why anime heights are worth comparing',
        paragraphs: [
          'Anime is one of the few media where height is a deliberate storytelling tool rather than an accident of casting. A director cannot simply hire a taller actor, so when a character is drawn short or tall, that choice was made on a design sheet and approved by the creator. Levi Ackerman is 160 cm in a cast of soldiers who tower over him, and the story never lets the audience forget it: his lethality is startling precisely because his frame is small. All Might, at 220 cm in his hero form, is the opposite trick, a body drawn to fill a doorway so that his presence feels like a public monument before he ever speaks. Putting these figures side by side on a single baseline turns an impression you half-noticed while watching into a measurement you can actually see.',
          'The range inside a single series is often wider than the range across real human populations. One Piece runs from Chopper-sized comic relief to giants several metres tall, and Attack on Titan places a 160 cm captain in the same army as 183 cm soldiers and Titans fifteen metres tall. A comparison canvas handles that spread better than any paragraph can, because it forces every figure onto the same ground line and the same scale. The moment you see Eren Yeager\'s post-timeskip 183 cm next to Levi\'s unchanged 160 cm, the four-year gap between them stops being trivia and becomes something you can feel.',
        ],
      },
      {
        heading: 'Where the numbers come from, and why sources disagree',
        paragraphs: [
          'The reliable sources are printed, not crowdsourced. Shueisha, Kodansha, and other Japanese publishers release databooks and fanbooks in which each major character gets a profile block listing height, weight, birthday, and blood type. Attack on Titan\'s INSIDE and OUTSIDE guidebooks, supervised by Hajime Isayama, fix Levi at 160 cm and Eren\'s final height at 183 cm. Jujutsu Kaisen\'s official fanbook lists Gojo as over 190 cm, which is why careful tables quote 190 cm as a floor rather than an exact measurement. Demon Slayer\'s Corps records give Tanjiro as 165 cm at fifteen, with his 156 cm figure from age thirteen preserved in the same record, so both numbers are official and both belong to different birthdays.',
          'Disagreement between websites usually has one of three causes, and none of them is a mystery once you know to look for it. The first is era mixing: a site that quotes teen Ichigo at 174 cm next to adult Naruto at 180 cm is comparing two different life stages without saying so. The second is conversion rounding: Japanese sources publish centimetres, and converting to feet and inches loses a fraction of an inch that different sites round in different directions, which is why 174 cm appears as both 5\'8" and 5\'8.5". The third is stale data: early fan translations of guidebooks circulated before official English editions, and some of those early numbers were simply wrong and never corrected. The fix is to demand an era label and a named source for every figure, which is the standard this page follows.',
        ],
      },
      {
        heading: 'Extremes, growth, and the misconceptions they create',
        paragraphs: [
          'The most common misconception about anime heights is that a character\'s height is a fixed fact like a birth date. In practice it is a snapshot, and the snapshot\'s date matters more than most fans realise. Edward Elric begins Fullmetal Alchemist at 149 cm and ends it at about 165 cm, and his fury about being called short is a running joke precisely because he is still growing. Naruto\'s jump from 166 cm as a Shippuden teenager to 180 cm as Hokage is a full 14 cm of adult growth that a single-number table hides completely. Even Luffy\'s modest move from 172 cm to 174 cm across the timeskip tells you something about how Oda treats his cast: pirates age, and their official profiles age with them.',
          'The other misconception is that short characters are drawn short by accident or by the limits of animation. The opposite is true. Short stature in anime is usually a considered design decision that signals youth, underdog status, or menace in a small package. Tanjiro at 165 cm is unremarkable among Demon Slayer\'s Hashira, several of whom clear 175 cm, and that ordinariness is the point: he is a normal boy holding his own against demons. Gojo at over 190 cm is the reverse, a mentor drawn to loom over his students so that his authority reads before he acts. When you line up a whole cast, the pattern becomes visible: height in anime is casting, done with a pen instead of a casting director.',
        ],
      },
      {
        heading: 'How to get the most out of the comparison tool',
        paragraphs: [
          'The tool is most useful when you treat it as an experiment bench rather than a poster. Begin with a single character beside the average male figure of 175 cm, which is close to Goku\'s 175 cm and makes Goku a useful anchor: almost every other anime character can be described as taller or shorter than Goku. Then add a second character from the same series and the same era, for example post-timeskip Luffy at 174 cm beside post-timeskip Zoro at 181 cm, and the seven-centimetre gap between captain and swordsman becomes concrete. Finally, add an everyday object such as a doorframe at 245 cm or a car, and the fictional scale collides with the real world in a way that no episode screenshot can deliver.',
          'Two habits make the results trustworthy. First, keep eras consistent: do not place teen Eren at 170 cm next to adult Naruto at 180 cm and conclude anything about their series, because you are comparing a fifteen-year-old with a grown man. Second, remember that hero forms and transformations are separate entries: All Might\'s 220 cm belongs to his powered form, and his weakened form would stand far lower on the same canvas. Used this way, the tool stops being a novelty and becomes the fastest way to settle the arguments anime fans actually have, which are rarely about who is stronger and very often about who is standing taller in the frame.',
        ],
      },
    ],
  },
  {
    id: 'films',
    slug: 'film-height-comparison',
    name: 'Films',
    h1: 'Film Character Height Comparison',
    route: '/film-height-comparison/',
    entityCategoryKey: 'films',
    title: 'Film Character Height Comparison | HowHeight',
    description: 'Compare heights of famous movie heroes, villains, sci-fi creatures, and cinematic figures visually with exact mathematical proportions.',
    badge: 'Cinematic Stature Guide',
    measurementAnchor: 'Canon Script & Prop Blueprint Stature',
    measurementGuide: 'Film character heights come from studio production bibles, prop design blueprints, and official scale charts prepared during production, not from measuring actors on a red carpet. Three different numbers can all be true for one character: the actor\'s own height, the height of the costumed figure on set, and the height of the finished CGI character on screen. Armor, helmets, platform boots, and digital scaling each add centimetres, so every entry on this page states which of those figures it is quoting.',
    measurementNote: 'Film heights quote the finished on-screen figure, with armor and suit height flagged separately from the actor.',
    commonHeights: [
      { label: 'Yoda', heightCm: 66, imperial: '2\'2"', note: 'Star Wars, Jedi Master; StarWars.com Databank figure' },
      { label: 'R2-D2', heightCm: 109, imperial: '3\'7"', note: 'Star Wars, R2-series astromech droid; 1.09 m in canon references' },
      { label: 'Captain America (Steve Rogers, MCU)', heightCm: 188, imperial: '6\'2"', note: 'Post-serum height shown in the Smithsonian exhibit; actor Chris Evans is 6\'0"' },
      { label: 'T-800 (Terminator)', heightCm: 188, imperial: '6\'2"', note: 'As portrayed by Arnold Schwarzenegger, official 6\'2" billing' },
      { label: 'Wolverine (film portrayal)', heightCm: 188, imperial: '6\'2"', note: 'Hugh Jackman on screen; comics canon is 160 cm, a different figure' },
      { label: 'Iron Man (Mark 85 armor)', heightCm: 198, imperial: '6\'6"', note: 'Armor height in Avengers: Endgame; Tony Stark himself is 185 cm' },
      { label: 'Darth Vader (armor)', heightCm: 203, imperial: '6\'8"', note: 'Full life-support armor per StarWars.com Databank; unarmored Anakin is shorter' },
      { label: 'Chewbacca', heightCm: 228, imperial: '7\'6"', note: 'Star Wars, Wookiee co-pilot; StarWars.com Databank figure' },
      { label: 'The Hulk (MCU)', heightCm: 259, imperial: '8\'6"', note: 'Gamma form in the MCU; Bruce Banner is 175 cm' },
      { label: 'Jake Sully (avatar)', heightCm: 274, imperial: '9\'0"', note: 'Avatar, adult Na\'vi body; production material gives adults as 9-10 ft' },
      { label: 'Optimus Prime (Bayverse)', heightCm: 853, imperial: '28\'0"', note: 'Transformers live-action scale charts for the 2007-2017 films' },
      { label: 'King Kong (Skull Island, 2017)', heightCm: 3170, imperial: '104\'0"', note: 'Adolescent Kong in Kong: Skull Island' },
      { label: 'King Kong (Godzilla vs. Kong, 2021)', heightCm: 10270, imperial: '337\'0"', note: 'Fully grown Kong in the MonsterVerse' },
      { label: 'Godzilla (2021)', heightCm: 11980, imperial: '393\'0"', note: 'MonsterVerse Godzilla in Godzilla vs. Kong' },
    ],
    faqs: [
      {
        question: 'Do film heights include armor, helmets, and boots?',
        answer: 'Sometimes, and that is exactly why the distinction matters. Darth Vader\'s 203 cm is the armored figure complete with helmet and life-support suit, while Anakin Skywalker underneath is a much shorter man. Iron Man\'s 198 cm is the Mark 85 armor, not Tony Stark, who is 185 cm. This page labels armor figures as armor figures, so you are never comparing a suit with a barefoot human by accident.',
      },
      {
        question: 'Why is Wolverine 188 cm here when the comics say 160 cm?',
        answer: 'Because this is the film category, and the films cast Hugh Jackman, who is 188 cm, as Wolverine. The comics list Logan at 160 cm, and that figure is correct for the printed character. The two numbers describe two different versions of the character, and the film version is the one that belongs on a film comparison page. Mixing continuities is the single most common source of wrong film heights.',
      },
      {
        question: 'Why do Godzilla and King Kong change height between films?',
        answer: 'Because each film\'s production team sets its own scale. Kong is 104 ft as an adolescent in Kong: Skull Island in 2017 and 337 ft as a fully grown adult in Godzilla vs. Kong in 2021, and the growth is part of the story: he is still maturing in the earlier film. Godzilla likewise grew from 108 m in 2014 to 119.8 m in the 2021 film. A creature\'s height is only meaningful with the film title attached, which is why every creature entry here names its film.',
      },
      {
        question: 'Are CGI creature heights real measurements or guesses?',
        answer: 'They are production decisions recorded in scale charts. Before a single frame is rendered, the visual effects team agrees how tall a creature is relative to buildings, vehicles, and human characters, because every shot depends on that ratio. Transformers\' production scale charts list the live-action Optimus Prime at 28 ft, and Avatar\'s production material defines adult Na\'vi as 9-10 ft tall. These numbers are no less official than a costume measurement; they are simply decided on paper before they appear on screen.',
      },
      {
        question: 'Can I compare film characters with real people and objects on the tool?',
        answer: 'Yes, and that is where the tool earns its keep. Place Chewbacca at 228 cm beside a 175 cm average man and the Wookiee\'s advantage stops being a vague impression and becomes a 53 cm gap you can see. Place Godzilla beside a skyscraper and the reason kaiju films frame their monsters against city skylines becomes obvious: at 119.8 m, Godzilla is a building that moves.',
      },
    ],
    editorialSections: [
      {
        heading: 'The three heights hiding inside every film character',
        paragraphs: [
          'Ask how tall a film character is and you will usually get three answers, all of them defensible. There is the actor\'s height, the height of the figure actually photographed on set, and the height of the finished character audiences see. For an ordinary human role these three numbers are nearly identical, and nobody notices the difference. For a costumed or digital character they can be metres apart, and the gap is where most confusion about film heights begins. Darth Vader is the textbook case: David Prowse inside the suit was a very tall man, the finished armor with its helmet reaches 203 cm, and Anakin Skywalker the person underneath was never that tall at all. Quoting any one of those numbers without saying which one you mean is how arguments start.',
          'Armor is the biggest single source of extra height, and it is worth understanding as a craft rather than a trick. A suit of powered armor, a Wookiee costume, or a superhero outfit is built over the performer\'s body, and helmets, shoulder pads, and platform boots routinely add ten to twenty centimetres. Iron Man\'s Mark 85 armor stands at 198 cm while Tony Stark is 185 cm, and the thirteen centimetres between them are engineering: plating, a helmet, and the boots of the suit. Chewbacca\'s 228 cm is a costume figure too, built up from the performer inside plus fur, a headpiece, and footwear. None of this makes the numbers fake. The armored figure is what the audience sees, what the story treats as the character\'s height, and what the official databank records. It only becomes misleading when it is silently compared with a barefoot human measurement as though both were taken the same way.',
        ],
      },
      {
        heading: 'Production bibles, scale charts, and why reboots reset everything',
        paragraphs: [
          'For human characters, the production bible is usually just the casting sheet: the actor\'s billed height, adjusted by whatever the costume adds. For creatures and robots, the key document is the scale chart, a sheet drawn before filming that fixes each character\'s height against a human silhouette, a vehicle, and a building. Transformers\' live-action scale charts settle the Bayverse Optimus Prime at 28 ft, and that figure stayed consistent across the 2007-2017 films because every effects shot was built from the same chart. Avatar\'s production material defines adult Na\'vi as 9-10 ft tall, which is why Jake Sully\'s avatar body reads as roughly 9 ft against human soldiers in the same frame. These documents are the closest thing film has to an anime databook, and they deserve the same respect as sources.',
          'Reboots and sequels reset the chart, and that is a feature rather than an error. Kong is 104 ft in Kong: Skull Island because the story needs an adolescent ape who can still grow, and he is 337 ft in Godzilla vs. Kong because the story needs an adult who can stand against a 393 ft Godzilla. The tripling is deliberate, and the production team published both numbers. The same logic explains why a 1954 Godzilla at 50 m and a 2021 Godzilla at 119.8 m are both correct: they belong to different productions with different skylines to tower over. Any table that lists a creature without naming its film is hiding the most important piece of information about that figure.',
        ],
      },
      {
        heading: 'Forced perspective, doubles, and the illusions that fool the eye',
        paragraphs: [
          'Even when the production chart is exact, the finished film can lie to your eyes, and filmmakers have a whole toolkit for doing it. Forced perspective puts a shorter actor closer to the camera so they appear taller, a technique the Lord of the Rings films used constantly for hobbits and wizards. Camera height matters too: shooting a character from below adds authority and apparent height, while shooting from above diminishes them, and directors choose these angles for emotional effect rather than documentary accuracy. That is why two characters can look like equals in one scene and differ by a head in the next, and why measuring heights off a film still is a fool\'s errand.',
          'Body doubles and stand-ins add another layer. Captain America is a clean example: Steve Rogers is 188 cm after the Super Soldier Serum according to the in-universe Smithsonian exhibit, while Chris Evans, the actor, is 183 cm, and the production bridged the gap with camera tricks and careful framing. The Hulk is the extreme case, because there is no performer of that size at all: the 259 cm MCU Hulk is a fully digital build whose height was chosen on paper and then rendered, with Mark Ruffalo\'s 175 cm body serving only as a motion reference. Once you know these mechanisms exist, the right question stops being "how tall did he look in that scene" and becomes "what did the production decide", which is a question with a documented answer.',
        ],
      },
      {
        heading: 'Using the tool to settle film scale arguments',
        paragraphs: [
          'The comparison tool is at its best when it makes a film\'s visual language literal. Put Yoda at 66 cm beside Darth Vader\'s armored 203 cm and you have reproduced, in numbers, the most famous contrast in Star Wars: the smallest master and the tallest villain, separated by 137 cm of screen presence. Put R2-D2 at 109 cm beside Chewbacca at 228 cm and the droid\'s habit of rolling through scenes at knee height suddenly has a measurement attached. These are not trivia; they are the spatial facts the directors were working with when they blocked each scene, and seeing them on one baseline explains casting and costume decisions that otherwise look arbitrary.',
          'The tool also handles the jump from human scale to kaiju scale, which is where film height becomes genuinely spectacular. A human figure at 175 cm beside Godzilla at 119.8 m is almost invisible, and that near-invisibility is the honest result: it tells you why kaiju films never frame their monsters against people, but against skylines, mountains, and other monsters. Comparing the 2017 Kong at 31.7 m with the 2021 Kong at 102.7 m on the same canvas shows the character\'s growth arc more vividly than any sequel montage, because the tripling is drawn rather than described. Keep the film title attached to every creature, keep armor figures labelled as armor, and the tool will do what no single film frame can: show you the production\'s own scale, all at once, on one ground line.',
        ],
      },
    ],
  },
  {
    id: 'animals',
    slug: 'animal-height-comparison',
    name: 'Animals',
    h1: 'Animal Height Comparison',
    route: '/animal-height-comparison/',
    entityCategoryKey: 'animals',
    title: 'Animal Height Comparison | HowHeight',
    description: 'Compare animal species heights and shoulder withers measurements to humans and everyday objects on a mathematically aligned ground baseline.',
    badge: 'Zoological Measurement Standards',
    measurementAnchor: 'Shoulder / Withers height for quadrupeds; Crown for bipeds',
    measurementGuide: 'Four-legged mammals are measured from level ground to the withers, the bony ridge between the shoulder blades, because the withers stay at a fixed height while the head constantly moves up, down, and sideways. Horses keep the same withers standard but express it in hands, where one hand equals 4 inches (10.16 cm), so a 160 cm horse is 15.3 hands. Upright animals such as kangaroos and gorillas are instead measured to the crown of the head, and giraffes to the tips of their ossicones, because those animals have no meaningful withers line. Head height is never used for quadrupeds: a grazing horse, an alert deer, and a charging elephant all hold their heads at wildly different heights, so a head-based number would describe a pose, not an animal.',
    measurementNote: 'Four-legged animals are measured to the shoulder or withers, not the head.',
    commonHeights: [
      { label: 'Domestic Cat', heightCm: 25, imperial: '10 in', note: 'Ground to shoulder withers, typical adult' },
      { label: 'Domestic Dog', heightCm: 60, imperial: '1\'11"', note: 'Ground to withers; varies greatly by breed' },
      { label: 'Grey Wolf', heightCm: 80, imperial: '2\'7"', note: 'Ground to withers, adult' },
      { label: 'Tiger', heightCm: 110, imperial: '3\'7"', note: 'Ground to shoulder, adult' },
      { label: 'African Lion', heightCm: 120, imperial: '3\'11"', note: 'Ground to shoulder withers, adult male' },
      { label: 'Brown Bear', heightCm: 130, imperial: '4\'3"', note: 'Shoulder height on all fours; stands taller on hind legs' },
      { label: 'Cow', heightCm: 140, imperial: '4\'7"', note: 'Ground to shoulder withers, adult' },
      { label: 'Red Kangaroo', heightCm: 150, imperial: '4\'11"', note: 'Upright standing height to head' },
      { label: 'Gorilla', heightCm: 160, imperial: '5\'3"', note: 'Standing height to crown of head' },
      { label: 'Domestic Horse', heightCm: 160, imperial: '5\'3"', note: 'Withers measurement, 15.3 hands' },
      { label: 'Camel', heightCm: 200, imperial: '6\'7"', note: 'Top of shoulder; the hump can rise higher' },
      { label: 'African Bush Elephant', heightCm: 320, imperial: '10\'6"', note: 'Adult bull shoulder height' },
      { label: 'Giraffe', heightCm: 480, imperial: '15\'9"', note: 'Ground to ossicone tips, typical adult' },
    ],
    faqs: [
      {
        question: 'Why are animals measured at the shoulder or withers instead of the head?',
        answer: 'The withers are a fixed skeletal landmark, the highest point of the shoulder blades, and they do not move when the animal grazes, looks around, or lowers its head. Head height can change by tens of centimeters from one second to the next, so it cannot serve as a repeatable standard. Every veterinary record, breed standard, and zoo measurement for a quadruped therefore uses the withers, which is why the comparison tool draws quadrupeds to that line.',
      },
      {
        question: 'How are horses measured, and what is a hand?',
        answer: 'Horses are measured at the withers in hands, a traditional unit equal to 4 inches or 10.16 cm. A horse described as 15.3 hands is 15 full hands plus 3 inches, which works out to 160 cm. The tool shows both units, so a horse listed at 160 cm and a horse listed at 15.3 hands are the same height expressed two ways.',
      },
      {
        question: 'Why is a bear\'s height confusing, and which number should I trust?',
        answer: 'A bear walks on all fours at roughly 130 cm at the shoulder, but the same animal rears up to around 2.5 m on its hind legs, so both numbers are real and they describe different postures. The comparison tool uses the all-fours shoulder height as the default because it is the animal\'s normal travelling posture and the only one comparable with other quadrupeds. If you want the rearing height, compare it against a standing human instead.',
      },
      {
        question: 'Do giraffes really get most of their height from their necks?',
        answer: 'Only partly. A giraffe\'s legs and neck are each about 1.8 m long, so the legs alone are already as tall as an average adult human before the body and neck are added. The neck adds roughly another third of the animal\'s total height, and it contains just seven vertebrae, the same number as a human neck, with each vertebra stretched to over 25 cm. That is why a giraffe looks so extreme on the chart: it is two human-height structures stacked on top of each other.',
      },
      {
        question: 'Why do dog heights vary so much between breeds?',
        answer: 'Dogs are the most size-variable land mammal because centuries of selective breeding stretched one species from a 15 cm Chihuahua to a 110 cm Great Dane at the shoulder. A single "dog height" is therefore only a rough middle value, and the tool\'s 60 cm figure is a mid-sized dog, not a breed standard. For an exact comparison, enter a specific breed\'s withers height as a custom height instead of relying on the generic dog figure.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why animal heights are harder to pin down than human heights',
        paragraphs: [
          'A human stands upright, stays still for a tape measure, and keeps the same height from morning to night, which makes human measurement almost trivial. Animals refuse to cooperate in every possible way: they move, they crouch, they rear, they graze, and their bodies are built horizontally rather than vertically, so the very idea of "height" has to be defined before it can be measured. That definition is what makes animal comparison interesting, because a single animal can legitimately carry two or three different heights depending on posture, and each one tells a different story about how the animal lives.',
          'The withers standard exists precisely to cut through that ambiguity. The withers are the ridge of bone where the neck meets the back, and unlike the head they cannot be raised or lowered at will. A horse that drops its head to drink and a horse that tosses its head in alarm have the same withers height, which is why breed registries, veterinary records, and wildlife surveys all anchor on it. When you see a quadruped on the comparison chart, its back line sits at its withers height, and its head and ears rise above that line naturally, just as they do in real life.',
        ],
      },
      {
        heading: 'How measurement works in practice, and where it goes wrong',
        paragraphs: [
          'Measuring a calm animal is straightforward: stand it on level ground, find the highest point of the shoulder blades, and drop a vertical line to the floor. Measuring a wild or uncooperative one is a different job, and researchers often estimate from tracks, photographs with a known reference object, or skeletal remains. That is why published heights for the same species often disagree by 10 cm or more, and why the tool uses typical adult values rather than record-breaking extremes. A record elephant or an exceptionally tall giraffe is a curiosity, not a representative animal, and comparing yourself to an outlier distorts the picture.',
          'The most common error is mixing postures. A bear\'s shoulder height on all fours and its standing height on hind legs differ by more than a meter, and both figures circulate online without labels. The same trap catches elephants, where shoulder height is sometimes confused with head height, and camels, where the hump can sit 30 cm above the shoulder line. The tool avoids this by fixing one posture per animal and stating it in the label, so a comparison between a bear and a human is always an apples-to-apples one.',
        ],
      },
      {
        heading: 'Extremes that reframe what tall means',
        paragraphs: [
          'The animal kingdom stretches the human sense of scale in both directions. At one end, a domestic cat at 25 cm at the shoulder barely reaches an adult\'s ankle, and the entire animal fits under a coffee table. At the other end, a giraffe at 480 cm is nearly three average humans stacked, and its legs alone are about as tall as a person. Between those poles sit the animals people actually meet: dogs, horses, and cows, whose withers heights cluster between 60 and 160 cm, right in the range where a human can judge them at a glance.',
          'What surprises most people is how much of a tall animal\'s height is leg. A giraffe\'s legs are roughly 1.8 m long, which means the animal is already human-height before its body even starts, and its neck adds another 1.8 m on top. Elephants invert the pattern: their legs are comparatively short and column-like, and their bulk comes from a massive torso sitting high off the ground. Seeing both animals beside a human on the same baseline makes the difference obvious in a way numbers alone never do.',
        ],
      },
      {
        heading: 'Common misconceptions, and how to use the tool well',
        paragraphs: [
          'The most persistent misconception is that a horse\'s height includes its head. It does not, and a horse whose withers measure 160 cm will carry its head well above 200 cm when alert, which is why people who meet a horse in person often insist the published height is wrong. The same logic applies to deer, where antlers are excluded, and to dogs, where ears are excluded. The chart is honest about this: it draws the animal\'s body to its measured height and lets the head extend above the line.',
          'To get the most from the tool, start with a human figure you know, add one animal at a time, and watch the baseline rather than the tops of the drawings. Compare a horse to a human, then add a lion to see how a big cat\'s shoulder sits below a horse\'s, then add an elephant to see the jump to true megafauna scale. If you want to compare a specific animal, such as your own dog, measure its withers with a level and a wall, enter that exact number as a custom height, and the chart will show you precisely where your dog sits against everything else.',
        ],
      },
    ],
  },
  {
    id: 'objects',
    slug: 'object-height-comparison',
    name: 'Objects',
    h1: 'Object Height Comparison',
    route: '/object-height-comparison/',
    entityCategoryKey: 'objects',
    title: 'Object Height Comparison | HowHeight',
    description: 'Compare everyday items, furniture, consumer electronics, vehicles, and architectural elements with humans using a standardized physical scale.',
    badge: 'Everyday Reference Standards',
    measurementAnchor: 'Ground / floor to highest rigid structural plane',
    measurementGuide: 'Objects are measured from their level resting surface, usually the floor or the pavement, straight up to their highest rigid point, which means the top of a chair\'s backrest, a refrigerator\'s top hinge, or a car\'s roofline, but not a soft or adjustable extra such as an antenna or a raised headrest. Standard dimensions describe a common manufactured size rather than a law of nature, so a "standard door" is 80 inches (203 cm) of door slab in the United States but is commonly sold as a 210 cm frame opening elsewhere, and the same door can measure differently depending on whether the frame is included. Always state which point was measured, because two honest measurements of the same object can differ by several centimeters when one includes trim, hinges, or roof rails and the other does not.',
    measurementNote: 'Objects are measured from the floor to their highest rigid point.',
    commonHeights: [
      { label: 'Dining Table', heightCm: 75, imperial: '2\'6"', note: 'Floor to tabletop surface' },
      { label: 'Washing Machine', heightCm: 85, imperial: '2\'9"', note: 'Floor to top panel, standard front-loader' },
      { label: 'Sofa', heightCm: 85, imperial: '2\'9"', note: 'Floor to top of backrest cushions' },
      { label: 'Dining Chair', heightCm: 90, imperial: '2\'11"', note: 'Floor to top of backrest' },
      { label: 'Bicycle', heightCm: 105, imperial: '3\'5"', note: 'Ground to top of handlebars' },
      { label: 'Motorcycle', heightCm: 115, imperial: '3\'9"', note: 'Ground to handlebars or windshield top' },
      { label: 'Sedan Car', heightCm: 145, imperial: '4\'9"', note: 'Pavement to roof apex' },
      { label: 'Floor Lamp', heightCm: 160, imperial: '5\'3"', note: 'Floor to top of lampshade or finial' },
      { label: 'Refrigerator', heightCm: 175, imperial: '5\'9"', note: 'Floor to top door hinge' },
      { label: 'Bookshelf', heightCm: 180, imperial: '5\'11"', note: 'Floor to top shelf or crown' },
      { label: 'Pickup Truck', heightCm: 190, imperial: '6\'3"', note: 'Ground to top of cab roof' },
      { label: 'Wardrobe', heightCm: 200, imperial: '6\'7"', note: 'Floor to top of cabinet' },
      { label: 'Standard Door', heightCm: 210, imperial: '6\'11"', note: 'Floor to top of frame opening' },
      { label: 'Basketball Hoop', heightCm: 305, imperial: '10\'0"', note: 'Court floor to rim surface, regulation' },
      { label: 'City Bus', heightCm: 320, imperial: '10\'6"', note: 'Road surface to roof deck' },
    ],
    faqs: [
      {
        question: 'Why does a "standard door" have more than one height?',
        answer: 'Because the number depends on country and on what exactly is being measured. In the United States the common interior door slab is 80 inches, which is 203 cm, while the frame opening it sits in is often around 210 cm, and European doors are commonly sold at 210 cm. The tool uses 210 cm for the frame opening because that is the height a person actually walks through, but if your own door measures 203 cm, enter that as a custom height for an exact comparison.',
      },
      {
        question: 'Is a car\'s height measured to the roof or to the roof rails?',
        answer: 'To the highest rigid point of the roof, which for most cars is the roof panel itself, but roof rails or a roof box can add several centimeters and are sometimes included in manufacturer figures. That is why one source may list a sedan at 145 cm and another at 148 cm: the car is the same, but one figure includes the rails. The tool uses the roof apex without accessories, so a car with a roof box will stand slightly taller in real life than on the chart.',
      },
      {
        question: 'Why is a basketball hoop exactly 10 feet high everywhere?',
        answer: 'The rim height of 10 feet, or 305 cm, was fixed when the game was invented and has never changed, and every major league in the world uses the same figure. It is one of the few object heights that is a genuine global constant rather than a manufacturing convention, which makes it an unusually reliable reference point. If you can touch the rim, you can reach 305 cm, and comparing yourself to that line instantly tells you how far above your head it sits.',
      },
      {
        question: 'How do I compare my own furniture if it is not a standard size?',
        answer: 'Measure it the same way the tool does: put it on a flat floor, hold a tape vertically from the floor to the highest rigid point, and read the number in centimeters. A chair is measured to the top of its backrest, not its seat, and a bookshelf to its top edge, not its tallest book. Enter that number as a custom height and the chart will place your exact piece of furniture beside a human figure.',
      },
      {
        question: 'Why does a two-story building not equal twice a one-story house?',
        answer: 'Because a building\'s height includes floor slabs, roof structure, and parapets, not just two stacks of room height, and ceiling heights vary by era and purpose. A single-story house at 450 cm to its roof ridge and a two-story building at 600 cm to its parapet are typical values, but an old house with tall ceilings can rival a modern two-story block. The chart\'s building figures are representative, not architectural drawings, so use them for scale intuition rather than construction planning.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why everyday objects are the best ruler you already own',
        paragraphs: [
          'People struggle to picture a number like 175 cm in isolation, but they instantly understand a door they walk through every day, a car they drive, and a chair they sit on. That is what makes objects the most useful category on a height comparison tool: the references are already installed in the reader\'s memory, and the chart only has to arrange them on a common baseline. A human figure beside a 210 cm door frame reads immediately, because everyone knows the feeling of a door that clears their head by a hand\'s breadth or forces them to duck.',
          'Objects also anchor the rest of the scale. Once you know that a sedan roof sits at about 145 cm, roughly chest height on an adult, you can judge every vehicle on the road against it. Once you know a basketball rim is fixed at 305 cm, you can picture exactly how far above a player\'s head it hangs. These are not abstract measurements but physical facts that people have bumped into, reached for, and ducked under, which is why they make better mental rulers than any number alone.',
        ],
      },
      {
        heading: 'How object measurement works, and why two honest numbers can disagree',
        paragraphs: [
          'Measuring an object sounds simple until you decide which point counts as the top. A chair has a seat at roughly 45 cm and a backrest at roughly 90 cm, and both are real heights of the same chair, but only the backrest is its overall height. A refrigerator\'s body may end at 170 cm while its top hinge reaches 175 cm. A car measured to the roof panel and the same car measured to its roof rails differ by a few centimeters. None of these disagreements mean anyone is wrong; they mean the measurement point was not stated.',
          'The tool follows one rule to keep comparisons honest: floor to highest rigid point, excluding soft, temporary, or optional extras. An antenna does not count, a raised headrest does not count, and a roof box does not count, because those can be added, removed, or adjusted without changing the object itself. Stating the rule matters more than the rule itself, because once the rule is known, anyone can reproduce the measurement with a tape measure and a flat floor, and that reproducibility is what separates a useful reference from a guess.',
        ],
      },
      {
        heading: 'Standards, and why they vary by country and era',
        paragraphs: [
          'Some object heights are true global constants. A basketball rim is 305 cm on every court in every country, because the sport\'s rules fixed it and never changed it. Most others are conventions that drift across borders and decades. Door heights are the classic example: the familiar 80-inch American interior door is 203 cm of slab, while many European and Asian markets build around a 210 cm opening, and older houses often have doors shorter than either. Furniture follows the same pattern, with desk heights settling around 75 cm because that suits the average seated elbow, while dining tables vary with style and era.',
          'Vehicles show the same drift in a different direction. A sedan from twenty years ago typically stood lower than a modern one, and the rise of SUVs has pushed the average car roof from around 145 cm toward 170 cm or more. That is why the chart uses typical current values rather than pretending a single number covers all cars ever made. If your car is older or taller than typical, measuring it and entering a custom height takes seconds and is always more accurate than trusting a generic figure.',
        ],
      },
      {
        heading: 'Common misconceptions, and how to use the tool well',
        paragraphs: [
          'The most common mistake is comparing the wrong points: judging a person against a chair\'s seat instead of its backrest, or against a car\'s window line instead of its roof. The chart prevents this by drawing every object to its overall height, so the top of each drawing is the measurement point. Another frequent surprise is how tall ordinary things turn out to be: a refrigerator at 175 cm is exactly average human height, which is why it dominates a kitchen, and a city bus at 320 cm is nearly twice a person, which is why stepping off one feels like descending a small cliff.',
          'To use the tool well, start with objects from your own home. Put a human figure beside a door, then add your car, then your refrigerator, and watch how the familiar world stacks up. Then add something outside daily life, such as a bus or a basketball rim, to stretch the scale upward. If a figure looks wrong, measure the real object before doubting the chart: nine times out of ten, the surprise is real, and the object genuinely is that tall.',
        ],
      },
    ],
  },
  {
    id: 'plants',
    slug: 'plant-height-comparison',
    name: 'Plants',
    h1: 'Plant Height Comparison',
    route: '/plant-height-comparison/',
    entityCategoryKey: 'plants',
    title: 'Plant Height Comparison | HowHeight',
    description: 'Compare trees, garden shrubs, flowering plants, and botanical specimens with human stature on a proportional scale.',
    badge: 'Botanical Scale Directory',
    measurementAnchor: 'Soil line to upper canopy apex',
    measurementGuide: 'Plant height is measured as the vertical distance from the soil line at the base of the plant to the highest living tip of its canopy or stem, with the plant in its natural growth posture rather than stretched or staked upright. For trees, foresters distinguish between the height of a mature specimen growing in the open and one competing in a dense stand, and they record the year of measurement because a living tree keeps growing, loses crown to storms or fire, and can therefore be shorter at a later survey than it was before. The same species can vary enormously: a sunflower in a home garden may reach 2 metres while a record specimen exceeds 10 metres, and a date palm in a dry orchard stays far shorter than one in a deep, irrigated grove. For that reason every height on this page describes a specific kind of specimen — a record individual, a typical mature plant, or a common garden form — and the note beside each entry says which one it is.',
    measurementNote: 'Measured from the soil line to the highest living tip of the canopy.',
    commonHeights: [
      { label: 'Hyperion Coast Redwood', heightCm: 11592, imperial: '380\'4"', note: 'Tallest known living tree, measured 115.92 m in Redwood National Park, California' },
      { label: 'Centurion Mountain Ash', heightCm: 9960, imperial: '326\'9"', note: 'World\'s tallest flowering plant, Tasmania; measured 99.6 m after losing crown to fire in 2019' },
      { label: 'Doerner Fir', heightCm: 9930, imperial: '325\'9"', note: 'Tallest known Douglas fir and tallest non-redwood tree, measured 99.3 m in Oregon in 2022' },
      { label: 'General Sherman Giant Sequoia', heightCm: 8380, imperial: '274\'11"', note: 'Largest known living single-stem tree by trunk volume, Sequoia National Park, California' },
      { label: 'Giant Bamboo', heightCm: 3000, imperial: '98\'5"', note: 'Typical mature height of Dendrocalamus giganteus, the world\'s tallest grass' },
      { label: 'African Baobab', heightCm: 2500, imperial: '82\'0"', note: 'Large mature Adansonia digitata, a massive succulent tree of African savannas' },
      { label: 'Date Palm', heightCm: 2000, imperial: '65\'7"', note: 'Typical mature Phoenix dactylifera, the cultivated palm of Middle Eastern and North African oases' },
      { label: 'Mature Saguaro Cactus', heightCm: 1219, imperial: '40\'0"', note: 'Average mature Carnegiea gigantea per the US National Park Service, Sonoran Desert' },
      { label: 'Record Sunflower', heightCm: 1090, imperial: '35\'9"', note: 'Guinness World Record sunflower grown by Alex Babich, USA, verified 3 September 2025' },
      { label: 'Banana Plant', heightCm: 500, imperial: '16\'5"', note: 'Typical mature cultivated banana plant, a giant herb with a pseudostem rather than a woody trunk' },
      { label: 'Garden Fruit Tree (Apple/Pear)', heightCm: 350, imperial: '11\'6"', note: 'Semi-dwarf orchard canopy' },
      { label: 'Common Sunflower', heightCm: 180, imperial: '5\'11"', note: 'Ordinary garden sunflower at full bloom' },
    ],
    faqs: [
      {
        question: 'Why do different sources give different heights for the same famous tree?',
        answer: 'A living tree is a moving target. It grows every year, and it can lose metres of crown to lightning, fire, or wind, so a figure is only correct for the year it was measured. Hyperion, for example, was measured at 115.55 m in 2006 and 115.92 m in 2019, and Centurion lost about 4 m in a 2019 bushfire. Slope also matters: surveyors report height above the average ground level, while a tape dropped from the crown to the lowest point downhill can read several metres more.',
      },
      {
        question: 'How tall does an ordinary sunflower actually get?',
        answer: 'Most garden sunflowers reach 1.5 to 3 metres, which is already taller than most adults. The record books are a different story: competitive growers using rich soil, shelter, and staking have pushed the species past 10 metres, with the current Guinness record at 10.90 m. When you compare a sunflower in the tool, check whether the entry is a garden plant or a record specimen, because the two differ by a factor of five.',
      },
      {
        question: 'Can I compare a houseplant with furniture in the tool?',
        answer: 'Yes, and that is one of the most practical uses of this category. Place a fiddle-leaf fig or monstera next to a dining table, bookshelf, or doorway to judge whether it will fit a room and how much light its top leaves will get. Measure the plant from the soil surface in its pot, not from the floor, and remember that a plant bought small will keep growing toward its mature height.',
      },
      {
        question: 'Why is a banana plant not counted as a tree?',
        answer: 'A banana plant has no woody trunk. What looks like a trunk is a pseudostem made of tightly wrapped leaf sheaths, and the whole above-ground plant dies back after fruiting while new shoots rise from the underground rhizome. Botanists therefore call it the largest herbaceous flowering plant rather than a tree, even though a mature specimen can stand 5 metres tall and shade a garden like a small tree does.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why plant heights are the hardest numbers in nature',
        paragraphs: [
          'No other category on this site spans a range as wide as plants. At one end sits a garden sunflower that a child can look over; at the other, a coast redwood taller than a 35-storey building. Between them lie palms, cacti, bamboos, fruit trees, and shrubs, each with its own growth habit, lifespan, and relationship to its surroundings. That range is what makes plant heights so satisfying to compare: placing a person next to a redwood turns an abstract number like 116 metres into something felt, while placing the same person next to a saguaro explains why a desert that looks empty from a car window is actually full of slow, towering life.',
          'The difficulty is that a plant\'s height is never a fixed property the way a doorway\'s height is. A plant grows, and its final size depends on soil, water, light, wind, and neighbours. Two seeds from the same parent can end up metres apart in height if one lands in a sheltered, irrigated garden and the other on a dry, windy slope. Age matters just as much: a saguaro takes about a decade to reach a single inch, yet may stand for two centuries and eventually top 12 metres, while a bamboo shoot reaches its full 30 metres in a single growing season and then never grows taller. Any honest plant comparison therefore has to say what kind of specimen it is describing, and this page does exactly that in the note beside every entry.',
        ],
      },
      {
        heading: 'How a tree is actually measured',
        paragraphs: [
          'For a garden plant, measurement is simple: stand a tape beside it and read the top. For a giant tree, it is a small expedition. The gold standard is the tape drop, in which a climber ascends to the highest living shoot and lowers a tape to the ground, a method that confirmed Hyperion\'s record and is still used because laser rangefinders can be fooled by leaning trunks, dense foliage, and slopes. Surveyors also correct for the ground itself: a tree growing on a steep hillside is taller measured from its downhill side than from its uphill side, so published heights use the average ground level around the base.',
          'These details explain why the same tree appears with different heights in different years. A tree does not only grow; it also breaks. Centurion, the mountain ash in Tasmania, was measured at 100.5 m in 2018 and then lost roughly 4 m of crown in a bushfire the following year, so its current published height is 99.6 m. The Doerner Fir in Oregon was 100.3 m in 1991 and 99.3 m in 2022, and it lost further crown to fire in 2025. None of these revisions means the earlier figures were wrong; they mean the tree changed. When you use the comparison tool, treat record-tree heights as snapshots of named individuals on a particular date, and treat garden-plant heights as typical ranges rather than promises.',
        ],
      },
      {
        heading: 'The extremes, from record trees to a single flower',
        paragraphs: [
          'The top of the plant world belongs to conifers and one extraordinary flowering tree. Hyperion, a coast redwood in California, is the tallest known living thing on land at about 116 m, and it is still growing. Just behind it come Centurion, a mountain ash in Tasmania that is the tallest flowering plant on Earth, and the Doerner Fir, the tallest Douglas fir and the tallest tree in the world that is not a redwood. General Sherman, the giant sequoia, is shorter than all three at 83.8 m, but it holds a different record: by trunk volume it is the largest single-stem tree alive, a reminder that height and bulk are different achievements.',
          'The smaller end of the scale is just as surprising. Giant bamboo, technically a grass, reaches 30 m, which makes it taller than most suburban trees and the fastest route to a tall screen in a garden. The saguaro, the largest cactus in the United States, averages about 12 m at maturity and can live two hundred years, growing so slowly that a ten-year-old plant is barely ankle-high. And the sunflower shows how far cultivation can stretch a species: the same plant that stands 1.8 m in a typical garden has been grown to 10.90 m by a record holder in Indiana, a height that would clear a three-storey house. Comparing these extremes side by side is the quickest way to grasp that "plant height" is not one number but a whole spectrum shaped by genetics, climate, and time.',
        ],
      },
      {
        heading: 'How to use the comparison tool for plants',
        paragraphs: [
          'Start with something you know. Put an average adult next to a date palm to see why oasis towns feel shaded and enclosed, or next to a mature saguaro to understand why desert hikers use cacti as landmarks. Then try a practical comparison: a banana plant beside a garden fence, a semi-dwarf apple tree beside a single-storey house, or a houseplant beside a bookshelf before you buy it. The tool keeps every plant on the same baseline, so the eye can judge scale honestly instead of guessing from photographs, where a wide-angle lens can make a shrub look like a tree.',
          'A useful habit is to compare the same species at two ages or forms. Place a common sunflower beside the record sunflower and the gap shows what selective growing can do; place a young saguaro beside a mature one and the gap shows why desert conservation is measured in centuries rather than seasons. If you are planning a garden, compare the mature height of a tree with the height of your roofline and power lines, because a tree planted for shade today can become a pruning problem in twenty years. The tool will not tell you which plant to choose, but it will stop you from being surprised by the size of the one you did.',
        ],
      },
    ],
  },
  {
    id: 'sports',
    slug: 'sports-height-comparison',
    name: 'Sports',
    h1: 'Sports Figure Height Comparison',
    route: '/sports-height-comparison/',
    entityCategoryKey: 'sports',
    title: 'Sports Figure Height Comparison | HowHeight',
    description: 'Compare athletes across basketball, football, cricket, and soccer alongside regulation equipment such as basketball rims and goalposts.',
    badge: 'Athletic Combine Standards',
    measurementAnchor: 'Official Combine Barefoot Stature & Regulation Rim Height',
    measurementGuide: 'Athlete heights come from official measurements, not from publicity material. Since the 2019 season the NBA has certified barefoot heights at team training camps, replacing the older practice of listing players in their playing shoes, which typically added 2 to 5 cm. Football registrations come from FIFA and club records, cricket squads from ICC team sheets, and gymnastics profiles from national federation data, so figures for the same athlete can differ slightly between sources depending on when and how they were taken. Equipment heights are a different kind of number altogether: they are fixed by the rulebook, so a basketball rim is 305 cm everywhere in the world, a soccer crossbar is 244 cm, and a men\'s volleyball net is 243 cm, regardless of who is playing.',
    measurementNote: 'Athlete heights are barefoot combine figures; equipment heights are regulation standards.',
    commonHeights: [
      { label: 'Yao Ming', heightCm: 229, imperial: '7\'6"', note: 'Former Houston Rockets centre, tallest player in the Basketball Hall of Fame' },
      { label: 'Victor Wembanyama', heightCm: 224, imperial: '7\'4"', note: 'San Antonio Spurs centre, listed at 7 ft 4 in' },
      { label: 'Men\'s Volleyball Net', heightCm: 243, imperial: '7\'11.7"', note: 'FIVB regulation net height for men\'s competition' },
      { label: 'Soccer Goal Crossbar', heightCm: 244, imperial: '8\'0"', note: 'FIFA Laws of the Game, lower edge of the crossbar above the ground' },
      { label: 'Women\'s Volleyball Net', heightCm: 224, imperial: '7\'4"', note: 'FIVB regulation net height for women\'s competition' },
      { label: 'Shaquille O\'Neal', heightCm: 216, imperial: '7\'1"', note: 'Former NBA centre, four-time NBA champion' },
      { label: 'Michael Jordan', heightCm: 198, imperial: '6\'6"', note: 'Former Chicago Bulls shooting guard, six-time NBA champion' },
      { label: 'Usain Bolt', heightCm: 196, imperial: '6\'5"', note: 'Jamaican sprinter, world record holder at 100 m and 200 m' },
      { label: 'Cristiano Ronaldo', heightCm: 187, imperial: '6\'1.6"', note: 'Portuguese forward, among the highest scorers in men\'s international football' },
      { label: 'Lionel Messi', heightCm: 170, imperial: '5\'7"', note: 'Argentine forward, eight-time Ballon d\'Or winner' },
      { label: 'Muggsy Bogues', heightCm: 160, imperial: '5\'3"', note: 'Shortest player in NBA history, 14 seasons as a point guard' },
      { label: 'Simone Biles', heightCm: 142, imperial: '4\'8"', note: 'American artistic gymnast, most decorated gymnast in history' },
      { label: 'Regulation Basketball Rim', heightCm: 305, imperial: '10\'0"', note: 'FIBA and NBA standard rim height above the court' },
      { label: 'Cricket Stumps', heightCm: 71, imperial: '2\'4"', note: 'MCC Laws of Cricket, tops of the stumps above the playing surface' },
    ],
    faqs: [
      {
        question: 'Does the NBA measure players with or without shoes?',
        answer: 'Without shoes, since 2019. Before that season, teams listed players in their basketball shoes, which added roughly an inch or two and made comparisons unreliable. The league now certifies barefoot height at training camps, so a player listed at 6 ft 6 in today is genuinely that tall barefoot, and the number on the roster matches the number from the draft combine. Older listings from before the change can still read a little taller than the player\'s barefoot height.',
      },
      {
        question: 'Why does the same athlete sometimes appear at different heights in different places?',
        answer: 'Because the numbers come from different moments and different methods. A footballer measured at 17 may grow another centimetre or two, a basketball player listed in shoes reads taller than the same player barefoot, and some federations round to the nearest inch while others round to the nearest centimetre. Team rosters are also updated at different times. When two sources disagree by a centimetre or two, both may be honest; they are simply measuring different things, and the barefoot combine figure is the one to trust for comparisons.',
      },
      {
        question: 'How high is a basketball rim compared with a soccer goal?',
        answer: 'A basketball rim sits at 305 cm, a full 61 cm above a soccer crossbar at 244 cm. That gap is easy to feel in the tool: a tall basketball player like Yao Ming at 229 cm still reaches well below the rim he dunks on, while a soccer goalkeeper standing under a 244 cm crossbar can reach the bar with a jump. The men\'s volleyball net at 243 cm is almost exactly the same height as a soccer crossbar, which is a coincidence worth seeing side by side.',
      },
      {
        question: 'Why are gymnasts short while basketball players are tall?',
        answer: 'Each sport selects for the body that its physics rewards. Gymnastics rewards a compact frame because a shorter athlete rotates faster in the air and has less distance to travel around the apparatus, which is why the greatest gymnast of all time, Simone Biles, stands 142 cm. Basketball rewards reach, because the rim is fixed at 305 cm and every extra centimetre of height brings a player\'s hands closer to it. Neither body type is better in general; each is an answer to the demands of one particular game.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why sport turned height into an official statistic',
        paragraphs: [
          'Few fields record human height as carefully as professional sport. Every NBA draft combine measures prospects barefoot with a stadiometer, every football federation registers its players\' heights for match programmes, and every Olympic team sheet lists its athletes to the centimetre. The reason is practical: height decides which position a player can fill, how a team defends, and what tactics make sense. A basketball coach needs to know whether a rookie can credibly guard a 224 cm centre; a volleyball coach needs to know whether a blocker can reach over a 243 cm net; a football scout needs to know whether a winger\'s low centre of gravity will help them change direction at speed.',
          'That official attention makes sports heights unusually trustworthy compared with celebrity heights, which often come from interviews and guesswork. When this page lists Yao Ming at 229 cm or Muggsy Bogues at 160 cm, those are league measurements, not estimates. The gap between them, 69 cm, is one of the largest ever seen between two players in the same professional league, and it is a useful anchor for the whole category: put the two side by side in the tool and you can immediately see what "tall for basketball" and "short for basketball" really mean, without any exaggeration.',
        ],
      },
      {
        heading: 'Barefoot, in shoes, or on the roster',
        paragraphs: [
          'The most common confusion about sports heights is the difference between a barefoot measurement and a listed height. For years, NBA rosters showed players in their shoes, which added a couple of centimetres and made a 6 ft 5 in player appear as 6 ft 7 in. The league ended that practice in 2019 and now certifies barefoot heights at training camps, which is why some long-established players appeared to shrink by an inch overnight without actually changing at all. If you compare a modern listing with an old trading card, the barefoot figure is the honest one, and this page uses it throughout.',
          'Other sports have their own conventions. Football heights come from federation and club registrations that are usually taken once and rarely re-measured, so a player who grew after signing as a teenager may be listed a centimetre short for years. Cricket squads list heights from team records rather than a combine, and gymnastics profiles come from national federations that measure athletes at competitions. None of this makes the numbers unreliable, but it does mean that a difference of one or two centimetres between sources is normal noise rather than a contradiction. For equipment, by contrast, there is no noise at all: the rulebook fixes the rim, the crossbar, and the net, and every court and pitch in the world is supposed to match.',
        ],
      },
      {
        heading: 'The extremes: giants, outliers, and the equipment they play against',
        paragraphs: [
          'The most instructive comparisons in sport are not between two similar athletes but between an athlete and the equipment their sport fixes in place. A basketball rim at 305 cm hangs 76 cm above even Yao Ming\'s head, which explains why dunking is a feat of jumping as much as of height: the tallest players still have to leave the floor. A soccer crossbar at 244 cm sits just 15 cm above Shaquille O\'Neal\'s head, which is why goalkeepers, who are tall but rarely basketball-tall, can still reach it with a leap and a stretch. The men\'s volleyball net at 243 cm and the women\'s net at 224 cm show how a single sport adjusts its fixed obstacle for its athletes, and the cricket stumps at 71 cm show the opposite extreme: a target barely knee-high that a bowler must hit from 20 metres away.',
          'The athletes themselves tell the same story from the other side. Victor Wembanyama at 224 cm is the tallest active star in basketball and still 5 cm short of Yao Ming, while Simone Biles at 142 cm is 18 cm shorter than Muggsy Bogues, the shortest man ever to play in the NBA, and yet she is the most decorated gymnast in history. Usain Bolt at 196 cm broke the assumption that sprinters must be short, using long strides to cover ground that smaller rivals needed more steps to cross. Lionel Messi at 170 cm and Cristiano Ronaldo at 187 cm show that football\'s greatest rivalry was also a 17 cm height difference that never decided which of them was better. Height in sport is an advantage in some positions and a trade-off in others, never the whole story.',
        ],
      },
      {
        heading: 'How to use the comparison tool for sports',
        paragraphs: [
          'Start with yourself. Add your own height beside a basketball rim and you will see exactly how far above your reach the 305 cm target sits, which makes the athleticism of a dunk suddenly concrete. Then add a favourite player: stand next to Wembanyama to feel what reporters mean by a generational physical talent, or next to Muggsy Bogues to see that an NBA career is possible at 160 cm. Coaches and fans use the same trick with whole teams, lining up a starting five to check whether a side is genuinely tall or simply has one tall centre surrounded by average-sized guards.',
          'Equipment comparisons are just as revealing. Place a soccer goal beside a basketball rim and the 61 cm difference between them becomes visible in a way that reading the numbers never quite achieves. Place a men\'s volleyball net beside a women\'s net and the 19 cm gap explains why the two games look and feel different even though the court is the same size. And place cricket stumps beside any of these and you are reminded that some sports make their central object deliberately small, so that skill, not stature, decides the contest. The tool keeps everyone and everything on one baseline, which is the only honest way to compare a person with a piece of furniture that was built to a rulebook.',
        ],
      },
    ],
  },
  {
    id: 'apparel',
    slug: 'apparel-height-comparison',
    name: 'Apparel',
    h1: 'Apparel Height Comparison',
    route: '/apparel-height-comparison/',
    entityCategoryKey: 'apparel',
    title: 'Apparel Height Comparison | HowHeight',
    description: 'Compare how high heels, athletic platform sneakers, work boots, hats, and protective headgear modify human standing stature.',
    badge: 'Wearable Stature Dynamics',
    measurementAnchor: 'Effective vertical offset added to barefoot stature',
    measurementGuide: 'Apparel height is measured as the effective vertical offset a piece adds to barefoot stature. For footwear, that means the heel stack or platform thickness under the foot, measured from the ground to the insole at the heel; for headwear, it means the crown height above the top of the head. A heel only raises the back of the foot, so the same labelled heel adds different perceived height depending on foot angle and on how much the foam compresses under body weight, while a full platform raises the whole foot evenly. That is why two shoes with the same advertised height can leave you standing at visibly different heights.',
    measurementNote: 'Apparel adds height above barefoot stature: compare the offset, not the shoe itself.',
    commonHeights: [
      { label: 'Standard Running Sneaker', heightCm: 3, imperial: '1.2 in', note: 'Added height: typical foam midsole heel stack; regular running shoes measure 21-30 mm of stack' },
      { label: 'Men\'s Dress Shoe (Oxford)', heightCm: 2.5, imperial: '1 in', note: 'Added height: standard stacked leather heel, about 1 inch' },
      { label: 'Roper Heel (Cowboy Boot)', heightCm: 2.5, imperial: '1 in', note: 'Added height: flat 1-inch roper heel, built for walking and ranch work' },
      { label: 'Heel Lift Insole', heightCm: 2.5, imperial: '1 in', note: 'Added height: single removable heel lift, at the low end of the 0.5-1.5 in insert range' },
      { label: 'Maximalist Running Shoe', heightCm: 4, imperial: '1.6 in', note: 'Added height: lab-measured 41.3 mm heel stack in the maximalist class' },
      { label: 'Work Boot (Lug Sole)', heightCm: 4.5, imperial: '1.8 in', note: 'Added height: heavy-duty welted leather boot sole stack' },
      { label: 'Cowboy Riding Heel', heightCm: 5, imperial: '2 in', note: 'Added height: traditional angled riding heel of 2 inches, shaped to hold a stirrup' },
      { label: 'Kitten Heel', heightCm: 5, imperial: '2 in', note: 'Added height: short slim heel, up to 2 inches' },
      { label: 'Elevator Shoe (Everyday)', heightCm: 7, imperial: '2.8 in', note: 'Added height: hidden internal wedge; everyday models give around 2.8 inches of lift' },
      { label: 'Classic Stiletto Heel', heightCm: 10, imperial: '4 in', note: 'Added height: formal fashion high heel, in the classic 3-4 in range' },
      { label: 'Top Hat (Modern Crown)', heightCm: 13, imperial: '5 in', note: 'Added height above the head: modern top hat crown averages 5 inches (historical stovepipes reached 8 in)' },
      { label: 'Platform Boot', heightCm: 15, imperial: '6 in', note: 'Added height: elevated runway platform in the extra-high 6-inch class' },
    ],
    faqs: [
      {
        question: 'Do shoes really make you taller, or just look taller?',
        answer: 'They genuinely raise your measured standing height, by exactly the thickness of material under your foot. If you measure 175 cm barefoot and put on running sneakers with a 3 cm stack, you measure 178 cm in those shoes. What shoes do not change is your body\'s own stature: take them off and you are back to 175 cm. That distinction is why doctors and sports officials measure height barefoot, while photographers and casting directors often measure it in whatever footwear the person is wearing.',
      },
      {
        question: 'Why does the same heel height feel different in different shoes?',
        answer: 'Because "heel height" describes only the back of the shoe. A stiletto with a 10 cm heel tilts your foot steeply, since the forefoot stays near the ground, while a 10 cm platform raises the whole foot level and feels far more stable. Foam firmness matters too: soft foam compresses under body weight, so part of the advertised stack disappears the moment you stand on it, while a firm sole keeps almost all of it. Foot length also plays a role, since brands scale heel height slightly with shoe size to keep proportions stable.',
      },
      {
        question: 'How much height do elevator shoes actually add?',
        answer: 'Everyday elevator shoes typically add 2 to 3 inches through a wedge hidden inside the shoe, with some specialist designs reaching further. The catch is that almost every lift figure in this category is the manufacturer\'s own claim rather than an independently lab-measured number, so two brands advertising the same lift can deliver visibly different results. The other trade-off is comfort: a bigger hidden wedge means a steeper foot angle, which is why most daily-wear models stay around the 2 to 3 inch mark.',
      },
      {
        question: 'Does headwear count toward your height?',
        answer: 'It counts toward your total top height, which is what matters for doorways, photographs, and anyone standing next to you. A modern top hat crown adds about 5 inches above the head, so a person who is 175 cm barefoot reaches about 188 cm to the top of the hat. Protective headgear works the same way in reverse: a hard hat adds clearance above the skull rather than stature, but the silhouette on a comparison canvas still grows by that amount.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why footwear changes your height more than you think',
        paragraphs: [
          'Almost nobody walks around barefoot, yet almost every height figure you hear is a barefoot figure. That gap is where apparel does its quiet work. A person who is 175 cm barefoot is 178 cm in running sneakers, 180 cm in cowboy boots, and 185 cm in classic stilettos, all without growing a millimetre. The change is large enough to matter in the situations where height is actually noticed: group photographs, door frames, job uniforms, and the long-running argument about whether someone is "really" six feet tall. Most of those arguments are really arguments about footwear, because one person is remembering a barefoot measurement and the other is remembering how tall someone looked in boots.',
          'The confusion is understandable, because shoe height is rarely stated honestly. Product pages advertise the heel, not the height you keep. A running shoe\'s stack height is measured without a foot in it, so the foam has not yet compressed under your weight. A stiletto\'s labelled height ignores the fact that the forefoot sits much lower than the heel, which changes your posture and how tall you read to someone facing you. And a platform\'s height is sometimes quoted including the outsole and sometimes not. The result is that two people can buy shoes with the same advertised number and end up standing at noticeably different heights, and both will insist the label was right.',
        ],
      },
      {
        heading: 'Heel stacks, platforms, and wedges: what actually lifts you',
        paragraphs: [
          'There are only three ways a shoe adds height, and they behave very differently. A heel stack raises the back of the foot while the toes stay low, which is why heels change your posture, your calf angle, and your balance all at once. The higher the heel, the steeper the pitch, which is why a 10 cm stiletto feels nothing like a 10 cm platform even though both add the same number to your standing height. A platform raises the entire foot evenly, so your ankle stays near its natural angle and the lift feels calmer, though the shoe becomes heavier and clumsier. A hidden wedge, as used in elevator shoes, splits the difference: part of the lift sits inside the shoe where nobody can see it, and the visible sole stays modest, so the shoe passes as ordinary footwear while quietly adding inches.',
          'The numbers behind these designs are more regulated than most people realise. World Athletics caps competition running shoes at a 40 mm stack height, which tells you something about how much lift modern foam can deliver: the tallest lab-measured running sneakers sit just above 40 mm, and the average sneaker sits around 30 mm. That means the difference between an ordinary sneaker and the tallest running shoe on the market is only about a centimetre, even though marketing makes it sound dramatic. The real jumps come from fashion and work footwear, where a riding heel, a stiletto, or a platform boot can add two to six times as much as any sneaker.',
        ],
      },
      {
        heading: 'The extremes: from barefoot to runway platforms',
        paragraphs: [
          'At the modest end, a dress shoe heel of about 1 inch is so normal that most people forget it exists, and a roper heel on a cowboy boot adds the same amount while looking like part of the boot\'s working design rather than a height device. At the other end, platform boots in the 6-inch class and historical stovepipe top hats at 8 inches above the head are deliberate statements: they exist to be noticed. Between those poles sit the everyday compromises most people actually wear, from kitten heels at 2 inches to elevator shoes hiding 2 to 3 inches inside an otherwise ordinary-looking shoe. The interesting pattern is that the most extreme height gains are usually the most visible ones, while the most discreet gains top out around 3 inches, because beyond that the foot angle gives the trick away.',
          'Headwear deserves a mention here because it breaks the usual logic. Footwear lifts you from below, so your body stays the same and the ground effectively moves down. Headwear adds height from above, so your body stays the same and your silhouette simply extends upward. A top hat does not make you taller in any sense a doctor would recognise, yet it changes every photograph you appear in and every doorway you walk through. That is why comparing apparel on a height canvas is useful: it shows the total visual height a person occupies in the world, not just the number on their medical record.',
        ],
      },
      {
        heading: 'How to use the comparison tool for this category',
        paragraphs: [
          'Start with a human silhouette at a known barefoot height, then place an apparel offset beside it to see the dressed height. The most revealing comparison is the same person in different footwear: one silhouette in sneakers, one in boots, one in stilettos, and the gaps between them are the honest story of what shoes do. You can also compare heel types directly, which settles arguments about whether a riding heel or a kitten heel adds more, and whether a platform really beats a stiletto at the same labelled height. Remember that every apparel entry here is an offset, not a standalone object: a 10 cm stiletto does not stand 10 cm tall on its own, it adds 10 cm to whoever wears it, so always pair it with a human figure to read the result correctly.',
        ],
      },
    ],
  },
  {
    id: 'fictional',
    slug: 'fictional-character-height-comparison',
    name: 'Fictional Characters',
    h1: 'Fictional Character Height Comparison',
    route: '/fictional-character-height-comparison/',
    entityCategoryKey: 'fictional',
    title: 'Fictional Character Height Comparison | HowHeight',
    description: 'Compare fantastical creatures, monsters, comic book legends, and mythological beings with realistic human figures.',
    badge: 'Fantasy & Sci-Fi Scale Guide',
    measurementAnchor: 'Canonical Franchise Lore & World-Building Archives',
    measurementGuide: 'Fictional heights come from the canon source for one specific version of the character: a franchise databank, a licensed sourcebook, or a tabletop rulebook such as the Dungeons and Dragons Monster Manual, which usually states an average for a creature type rather than an exact figure for an individual. The same character often has different official heights across adaptations, because films rescale creatures for the story, games rebalance them, and new editions revise old numbers. This page uses one stated figure per version and names that version, so a comparison always shows which Kong or which Godzilla you are looking at.',
    measurementNote: 'Fictional heights follow the stated canon version; adaptations of the same character often differ.',
    commonHeights: [
      { label: 'Yoda', heightCm: 66, imperial: '2\'2"', note: 'Star Wars Databank: 0.66 m' },
      { label: 'Hobbit (average)', heightCm: 107, imperial: '3\'6"', note: 'Tolkien\'s Lord of the Rings prologue: average hobbit height of 3 ft 6 in' },
      { label: 'Gandalf', heightCm: 168, imperial: '5\'6"', note: 'Tolkien\'s late notes: the wizard stood at least 5 ft 6 in' },
      { label: 'Legolas', heightCm: 183, imperial: '6\'0"', note: 'Tolkien character guides: the elf stands about 6 ft' },
      { label: 'Aragorn', heightCm: 198, imperial: '6\'6"', note: 'Tolkien\'s notes, cited in The Lord of the Rings: A Reader\'s Companion' },
      { label: 'Darth Vader (armored)', heightCm: 203, imperial: '6\'8"', note: 'Star Wars Databank: 2.03 m in full armor' },
      { label: 'Chewbacca', heightCm: 228, imperial: '7\'6"', note: 'Star Wars Databank: 2.28 m' },
      { label: 'Hill Giant (D&D 5e)', heightCm: 488, imperial: '16\'0"', note: 'Smallest of the true giants, averaging 16 ft' },
      { label: 'Frost Giant (D&D 5e)', heightCm: 640, imperial: '21\'0"', note: 'Averaging 21 ft in the 5e giant ranking' },
      { label: 'Cloud Giant (D&D 5e)', heightCm: 732, imperial: '24\'0"', note: '24 ft in the 5e giant ranking' },
      { label: 'King Kong (1933, New York)', heightCm: 732, imperial: '24\'0"', note: 'Scaled to 24 ft in the New York scenes (18 ft on Skull Island)' },
      { label: 'Storm Giant (D&D 5e)', heightCm: 792, imperial: '26\'0"', note: 'Tallest of the true giants, averaging 26 ft' },
      { label: 'King Kong (Skull Island, 2017)', heightCm: 3170, imperial: '104\'0"', note: 'Adolescent Kong, 104 ft tall' },
      { label: 'Godzilla (2014)', heightCm: 10800, imperial: '354\'4"', note: '108 m tall in the 2014 film' },
    ],
    faqs: [
      {
        question: 'Why does the same character have different heights in different movies?',
        answer: 'Because filmmakers rescale creatures to fit the story they are telling, not to match a previous film\'s ruler. The original King Kong was built at 18 feet on Skull Island and rescaled to 24 feet once he reached New York, because he needed to look bigger against the city. Decades later, Kong was set at 104 feet in Skull Island (2017) so he could eventually stand against a Godzilla of over 100 metres. Neither figure is a mistake: each is the official height for its own version, which is why this page always names the version next to the number.',
      },
      {
        question: 'Are tabletop rulebook heights exact measurements?',
        answer: 'No, they are averages for a creature type, and the rulebooks say so. The Dungeons and Dragons Monster Manual tradition describes a hill giant as standing around 16 feet and a storm giant around 26 feet, with individual giants varying above and below those figures. That is a feature, not a flaw: a game master needs a typical giant for an encounter, not a census of every giant in the world. When you compare a rulebook giant with a human, read the result as "a typical specimen of this kind", not as a specific named individual.',
      },
      {
        question: 'Why are Star Wars heights so precise?',
        answer: 'Because Lucasfilm\'s official Databank publishes single metric figures for its characters, such as Yoda at 0.66 m, Darth Vader at 2.03 m in armor, and Chewbacca at 2.28 m. Those numbers come from production and continuity records rather than from prose descriptions, so they behave more like real-world measurements than like literary estimates. The trade-off is that the figure describes the character as officially catalogued, which can differ from the actor\'s own height: the performer inside the costume is not always the same height as the character on paper.',
      },
      {
        question: 'Can I compare a kaiju with a human on the same canvas?',
        answer: 'Yes, and the result is the point: Godzilla at 108 metres beside a 175 cm human makes the scale gap instantly obvious in a way that reading "108 metres" never does. The canvas fits everything to one shared baseline, so the human becomes a thin line at the bottom of the frame and the kaiju towers over it. For very large creatures it helps to add a familiar landmark as a middle step, such as a building or a tall animal, so the eye has something to travel up before it reaches the top of the monster.',
      },
    ],
    editorialSections: [
      {
        heading: 'Why fictional heights are never just one number',
        paragraphs: [
          'Ask how tall King Kong is and you have not asked a complete question, because there is no single King Kong. The 1933 ape was scaled to 18 feet while on Skull Island and 24 feet once he was loose in New York, since the filmmakers wanted him to read larger against skyscrapers than against jungle trees. The 2017 Kong was set at 104 feet, partly because he was written as an adolescent still growing, and partly because the studio already knew he would one day have to fight a Godzilla of over 100 metres. Godzilla himself has grown across his own history, from 50 metres in the original 1954 film to 108 metres in the 2014 film and roughly 120 metres in later MonsterVerse entries. Each of these numbers is official for its own version, and each contradicts the others, which is exactly why fictional height is a cataloguing problem rather than a measuring problem.',
          'The same instability shows up in quieter places. A character described in prose as "tall" can be drawn short by one comic artist and towering by the next, and a tabletop game can revise a creature\'s size when a new edition rebalances the game. Fans argue about these differences endlessly, but the arguments usually miss the real point: fictional height is a design decision, not a physical fact. A director makes a monster bigger when the scene needs more threat, a game designer makes a giant smaller when a dungeon needs to fit it through a door, and an author leaves a height vague when the mystery matters more than the measurement. Understanding that is the first step to comparing fictional characters sensibly.',
        ],
      },
      {
        heading: 'Canon sources: who decides how tall a character is',
        paragraphs: [
          'The answer depends on the franchise, and the franchises fall into three rough groups. The first group publishes precise official figures: the Star Wars Databank lists Yoda at 0.66 m, Darth Vader at 2.03 m in armor, and Chewbacca at 2.28 m, and those numbers are treated as continuity. When a source like that exists, there is little room for debate, though there is still room for confusion, since the armored figure and the unarmored actor are different numbers and fans often mix them up. The second group gives averages for a kind rather than a figure for an individual: the Dungeons and Dragons tradition describes hill giants at around 16 feet, frost giants at 21, cloud giants at 24, and storm giants at 26, with the understanding that any particular giant may be taller or shorter. The third group never states a number at all, and the figure everyone quotes comes from an author\'s letter, a late note, or a companion book published years later.',
          'Tolkien\'s work sits across all three groups, which makes it a good example of the problem. The Lord of the Rings prologue states the average hobbit height outright at 3 feet 6 inches, so that figure is solid. Aragorn\'s 6 feet 6 inches and Gandalf\'s 5 feet 6 inches come from Tolkien\'s own later notes and from the Reader\'s Companion, which is nearly as strong. Legolas at about 6 feet is a widely repeated guide figure rather than a line from the books, so it carries a little more uncertainty. A responsible comparison page should keep those distinctions visible instead of flattening every figure into the same level of confidence, because a reader who knows which numbers are rock solid and which are approximate will trust the page more, not less.',
        ],
      },
      {
        heading: 'The extremes: from Yoda to Godzilla',
        paragraphs: [
          'The fictional category has the widest height range of any category on this site, and that range is its main attraction. At the small end, Yoda at 66 cm stands barely above a toddler\'s height, yet he is one of the most powerful figures in his universe, which is precisely the joke and the point of the character. A hobbit at 107 cm is not much taller, and the contrast between hobbit stature and hobbit courage is one of the engines of Tolkien\'s story. At the human end of the scale, Aragorn at 198 cm and Chewbacca at 228 cm are both recognisably person-shaped, which makes them good bridges: a reader can picture Aragorn, then picture Chewbacca beside him, and from there begin to grasp what a giant means.',
          'Then the scale breaks open. A hill giant at 488 cm is already about three times the height of a human, and the giant ladder climbs steadily through frost, cloud, and storm giants until it reaches 792 cm, roughly the height of a two-storey house. King Kong at 104 feet in his 2017 version is about four times that again, and Godzilla at 108 metres is more than three times Kong\'s height on top of that. The interesting thing about this ladder is that each step was designed by someone thinking about the previous step: the storm giant is big compared with a human, Kong is big compared with a giant, and Godzilla is big compared with Kong. Stacking them on one canvas shows a chain of deliberate one-upmanship that no single number on its own can convey.',
        ],
      },
      {
        heading: 'How to use the comparison tool for this category',
        paragraphs: [
          'The most useful fictional comparison is rarely fictional against fictional. Put a fictional character next to a human first, because the human is the unit your eye already understands, and the gap between them is the fact you are trying to learn. A storm giant beside an average man tells you more than a storm giant beside a cloud giant, because the man is familiar and the giant is not. Once that anchor is set, add a second fictional figure to see the relationship between the two inventions, and then, for the very large creatures, add a building or a vehicle as a middle rung so the eye has a path to climb.',
          'Two habits make fictional comparisons much more reliable. First, always check which version you are comparing, since Kong alone has at least three official heights and Godzilla has several, and mixing versions silently produces nonsense. Second, remember that a rulebook figure is an average for a kind: your hill giant may be a foot taller or shorter than the 16-foot average, and that is not an error in the tool, it is how the source was written. Used with those two caveats, the canvas becomes something no paragraph can replace: a single picture of how invented worlds measure up against the real one.',
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.slug === slug || c.route.includes(slug));
}

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getCategoryByEntityKey(key: EntityCategory): CategoryDefinition | undefined {
  return CATEGORIES.find((c) => c.entityCategoryKey === key || c.secondaryCategoryKey === key);
}
