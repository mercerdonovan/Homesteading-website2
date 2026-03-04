export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  duration: string;
  season: string;
  image: string;
  instructor: string;
  instructorBio: string;
  topics: string[];
  includes: string[];
  schedule: { day: string; activity: string }[];
  faqs: { question: string; answer: string }[];
};

export const programs: Program[] = [
  {
    slug: "farming",
    title: "Sustainable Farming",
    summary:
      "Learn practical field skills—planting, cultivating, harvesting—and the rhythm of seasonal work.",
    description:
      "A hands-on introduction to small-scale sustainable farming. You'll spend time in the fields each day, learning how to read the soil, prepare beds, manage pests without chemicals, and plan a productive seasonal garden. This program is grounded in the principles we use on our own 40-acre homestead.",
    duration: "3-day workshop",
    season: "Seasonal focus",
    image: "https://placehold.co/800x520/2C5016/FAF7F2",
    instructor: "Joseph Beiler",
    instructorBio:
      "Joseph was raised on an Amish farm and has been growing food sustainably for over 40 years. He oversees all field operations at Heritage Harvest.",
    topics: [
      "Soil health and composting",
      "Bed preparation and direct seeding",
      "Transplanting and spacing",
      "Irrigation basics",
      "Pest and disease identification",
      "Harvest timing and storage",
      "Crop rotation planning",
    ],
    includes: [
      "All field materials and tools",
      "Printed seasonal planting guide",
      "Shared farm meals (breakfast and lunch)",
      "Seed packet to take home",
    ],
    schedule: [
      { day: "Day 1", activity: "Soil science, composting, and bed preparation" },
      { day: "Day 2", activity: "Seeding, transplanting, irrigation, and pest management" },
      { day: "Day 3", activity: "Harvest, storage, and planning your home garden" },
    ],
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Sturdy closed-toe shoes, clothes you don't mind getting dirty, and a hat. We work outdoors in all weather—dress in layers.",
      },
      {
        question: "Is this program suitable for children?",
        answer:
          "Yes. Children aged 8 and up can participate alongside a parent. Younger children are welcome on the homestead but may not be able to participate fully in all field activities.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "We work in most weather—rain doesn't stop a farm. In cases of severe weather, we move to covered work or classroom sessions. See our Weather Policy for details.",
      },
      {
        question: "Do I need to bring tools?",
        answer:
          "All tools are provided. If you have favorite gloves, feel free to bring them, but it's not required.",
      },
    ],
  },
  {
    slug: "homemaking",
    title: "Traditional Homemaking",
    summary:
      "Build home skills that serve real life: routines, hospitality basics, and simple practical systems.",
    description:
      "This program covers the practical arts of running a home with intention and confidence. Ruth Beiler, who managed a large Amish household for decades, teaches the systems and habits that make a home function smoothly—with joy rather than chaos. Sessions cover meal planning, kitchen organization, simple cleaning rhythms, and the art of genuine hospitality.",
    duration: "2-day workshop",
    season: "Year-round",
    image: "https://placehold.co/800x520/1A3009/EDE5D8",
    instructor: "Ruth Beiler",
    instructorBio:
      "Ruth raised six children in a home without electricity and has been teaching homemaking skills for over 20 years. She brings warmth, practicality, and deep experience to every session.",
    topics: [
      "Weekly rhythm and routine design",
      "Kitchen organization and meal planning",
      "Simple scratch cooking",
      "Home cleaning rhythms",
      "Pantry management",
      "Hospitality essentials",
      "Rest and Sabbath keeping",
    ],
    includes: [
      "Printed homemaking workbook",
      "Shared meals during sessions",
      "Recipe collection",
    ],
    schedule: [
      { day: "Day 1", activity: "Kitchen, pantry, and rhythm — how to structure your week" },
      { day: "Day 2", activity: "Scratch cooking, hospitality, and building sustainable routines" },
    ],
    faqs: [
      {
        question: "Is this program just for women?",
        answer:
          "Not at all. We welcome anyone who wants to improve their home management skills. Men, couples, and single adults all attend and benefit.",
      },
      {
        question: "Will we actually cook during the program?",
        answer:
          "Yes. Day 2 is largely hands-on in our farmhouse kitchen. You'll leave having prepared multiple dishes from scratch.",
      },
      {
        question: "Is childcare available?",
        answer:
          "Older children can participate in many of the sessions. For young children, we ask that you make arrangements in advance. Contact us to discuss options.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Timber & Construction",
    summary:
      "Hands-on building projects and tool confidence—small structures, repairs, and safe technique.",
    description:
      "Learn to work with wood and basic construction with the guidance of someone who has built barns, sheds, outbuildings, and homes by hand. This program focuses on tool safety, fundamental joinery, reading plans, and completing a real small-scale project from start to finish.",
    duration: "4-day workshop",
    season: "Year-round",
    image: "https://placehold.co/800x520/8B2E19/FAF7F2",
    instructor: "Joseph Beiler",
    instructorBio:
      "Joseph has built or helped build more than a dozen structures entirely by hand, using traditional Amish timber-frame methods. He teaches with patience and an emphasis on safety first.",
    topics: [
      "Tool identification and safe use",
      "Measuring, marking, and cutting",
      "Basic joinery (lap, mortise and tenon)",
      "Reading simple plans and elevations",
      "Post and beam basics",
      "Fasteners and hardware",
      "Project: building a small garden structure",
    ],
    includes: [
      "All lumber and hardware for the project",
      "Safety equipment",
      "Basic tool kit reference guide",
      "Printed plans for at-home projects",
      "Shared lunches on site",
    ],
    schedule: [
      { day: "Day 1", activity: "Tool safety, site setup, and foundation concepts" },
      { day: "Day 2", activity: "Measuring, cutting, and basic joinery practice" },
      { day: "Day 3", activity: "Assembly and structural work on the project" },
      { day: "Day 4", activity: "Finishing, weatherproofing, and project review" },
    ],
    faqs: [
      {
        question: "Do I need construction experience?",
        answer:
          "No experience required. We start from the very beginning. If you've never held a hammer, that's fine.",
      },
      {
        question: "What's the project we build?",
        answer:
          "Typically a small garden cold frame or tool storage structure. The exact project varies by session and group size.",
      },
      {
        question: "Is this safe for older adults?",
        answer:
          "Yes, with reasonable physical ability. We move at a pace that works for the group. If you have specific mobility concerns, contact us before registering.",
      },
    ],
  },
  {
    slug: "sewing",
    title: "Textile Arts & Sewing",
    summary:
      "Machine basics, patterns, cutting, and finishing—learn to make and mend with confidence.",
    description:
      "A practical introduction to sewing that covers both hand techniques and machine operation. Ruth Beiler has sewn garments, quilts, and household items for her entire life. In this program, you'll learn to operate a sewing machine with confidence, understand fabric selection, cut from a pattern, and complete a project you take home.",
    duration: "3-day workshop",
    season: "Year-round",
    image: "https://placehold.co/800x520/2C5016/EDE5D8",
    instructor: "Ruth Beiler",
    instructorBio:
      "Ruth has been sewing since childhood—garments, quilts, curtains, and much more. She taught her six children to sew and brings the same patient approach to every workshop participant.",
    topics: [
      "Machine setup, threading, and tension",
      "Fabric types and their properties",
      "Pattern reading and cutting",
      "Seam types and finishing techniques",
      "Pressing and ironing",
      "Basic mending and repairs",
      "Project: complete a simple garment or tote",
    ],
    includes: [
      "All fabric and notions for the project",
      "Access to sewing machines (one per participant)",
      "Printed reference guide",
    ],
    schedule: [
      { day: "Day 1", activity: "Machine basics, fabric selection, and your first seams" },
      { day: "Day 2", activity: "Pattern work, cutting, and project assembly" },
      { day: "Day 3", activity: "Finishing, pressing, and mending techniques" },
    ],
    faqs: [
      {
        question: "Do I need to own a sewing machine?",
        answer:
          "No. Machines are provided for use during the program. If you own one and want to learn on your specific model, you're welcome to bring it.",
      },
      {
        question: "What project will I make?",
        answer:
          "Typically a simple everyday tote bag or an unlined apron—projects that teach the core skills without overwhelming beginners. Experienced sewers can work on something more advanced.",
      },
      {
        question: "Is this for beginners only?",
        answer:
          "No. The first half of Day 1 covers basics, and then participants progress at their own pace. Intermediate sewers often use this as an opportunity to refine technique.",
      },
    ],
  },
  {
    slug: "canning",
    title: "Food Preservation & Canning",
    summary:
      "Prepare produce and preserve it safely—practical steps, tools, and confidence for your pantry.",
    description:
      "Food preservation is one of the most practical skills a household can have. This program covers water-bath canning, pressure canning, fermentation, and dehydrating—with a strong emphasis on safety. You'll leave with jars you filled yourself and the knowledge to preserve an entire harvest at home.",
    duration: "2-day workshop",
    season: "Seasonal focus",
    image: "https://placehold.co/800x520/B8860B/1A3009",
    instructor: "Ruth Beiler",
    instructorBio:
      "Ruth has been canning and preserving food since she was a child helping her mother put up hundreds of jars each fall. She takes food safety seriously and teaches it accordingly.",
    topics: [
      "Water-bath canning: jams, pickles, and tomatoes",
      "Pressure canning: beans, broth, and meats",
      "Understanding pH and food safety",
      "Lacto-fermentation: sauerkraut and kimchi",
      "Dehydrating fruits and vegetables",
      "Proper labeling and pantry rotation",
    ],
    includes: [
      "All produce and ingredients",
      "Jars to take home (filled from the workshop)",
      "Canning safety reference booklet",
      "Shared meals during sessions",
    ],
    schedule: [
      { day: "Day 1", activity: "Water-bath canning, safety principles, and fermentation" },
      { day: "Day 2", activity: "Pressure canning, dehydrating, and pantry planning" },
    ],
    faqs: [
      {
        question: "Is canning difficult to learn?",
        answer:
          "It has a learning curve, but it's very manageable. The most important thing is understanding the safety principles—the techniques themselves are straightforward once you know why you do each step.",
      },
      {
        question: "What produce will we use?",
        answer:
          "It depends on the season. We try to use produce from our own farm. In peak summer/fall sessions you might can tomatoes and green beans; in other seasons we may work with pickles, jams, or root vegetables.",
      },
      {
        question: "Will I actually fill jars to take home?",
        answer:
          "Yes. Each participant leaves with a minimum of four to six jars of preserved food from the workshop.",
      },
      {
        question: "Is this appropriate for kids?",
        answer:
          "Children aged 10 and up can participate with a parent. Canning involves very hot liquids, so younger children should observe only.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
