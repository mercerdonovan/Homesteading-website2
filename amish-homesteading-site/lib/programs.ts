export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  capacity: number;
  price: string;
  nextSession: string;
  image: string;
  skills: string[];
  schedule: { time: string; activity: string }[];
  faqs: { question: string; answer: string }[];
  whatToBring: string[];
  category: string;
}

export const programs: Program[] = [
  {
    slug: "farming",
    title: "Sustainable Farming",
    subtitle: "From Soil to Harvest",
    description:
      "Master the rhythms of the growing season through hands-on field work, soil science, and the patient art of stewarding the earth.",
    longDescription:
      "Our Sustainable Farming program is built on the belief that working the land is both a spiritual calling and a practical skill. Participants spend five full days learning alongside experienced farmers who have tended this same soil for over two decades.\n\nYou will plant, cultivate, and harvest—all while developing a deep understanding of why the land produces abundantly when treated with care and wisdom. Whether you are planning your first backyard garden or dreaming of a full working farm, this program gives you the foundation, the confidence, and the community to grow something real.",
    duration: "5 Days",
    capacity: 12,
    price: "$695 per person",
    nextSession: "April 14–18, 2026",
    image: "https://placehold.co/1200x600/2C5016/FAF7F2?text=Sustainable+Farming",
    skills: [
      "Soil health, structure, and composting",
      "Crop rotation and succession planting",
      "Natural pest and weed management",
      "Seed saving and heritage variety selection",
      "Irrigation planning and water stewardship",
      "Harvest timing, curing, and storage basics",
    ],
    schedule: [
      { time: "Day 1 – Morning", activity: "Orientation, farm tour, and soil science fundamentals" },
      { time: "Day 1 – Afternoon", activity: "Composting workshop: building your first pile" },
      { time: "Day 2 – Full Day", activity: "Bed preparation, transplanting, and direct sowing" },
      { time: "Day 3 – Full Day", activity: "Field cultivation, irrigation setup, and organic amendments" },
      { time: "Day 4 – Full Day", activity: "Pest scouting, companion planting, and cover crop seeding" },
      { time: "Day 5 – Morning", activity: "Harvest and post-harvest handling" },
      { time: "Day 5 – Afternoon", activity: "Group reflection, Q&A, and sending-off meal together" },
    ],
    faqs: [
      {
        question: "Do I need farming experience to enroll?",
        answer:
          "Not at all. This program is designed to welcome complete beginners while still offering depth for those with some gardening background. Our instructors meet you where you are and adapt their teaching accordingly.",
      },
      {
        question: "What will I actually do each day?",
        answer:
          "You will work in the fields every day—this is a hands-on program, not a lecture series. Expect to get your hands in the soil, pull weeds, plant seeds, and carry harvest baskets. Short teaching sessions happen in the field or around the barn table.",
      },
      {
        question: "Is this program suitable for families with children?",
        answer:
          "Yes. Children ages 8 and older are welcome to participate alongside their parents. We ask that parents remain responsible for their children at all times. Some tasks will be adapted for younger participants.",
      },
      {
        question: "What happens if there is rain or severe weather?",
        answer:
          "We farm in light rain with proper gear. In the event of severe weather, activities move to the barn where we have an equally full teaching agenda. Please review our Weather Policy for full details.",
      },
      {
        question: "Will I receive materials to take home?",
        answer:
          "Yes. Every participant receives a printed planting guide, a seasonal calendar tailored to your region, and a small seed packet from our heritage seed collection to start your own garden at home.",
      },
    ],
    whatToBring: [
      "Work clothes you don't mind soiling",
      "Sturdy closed-toe boots or shoes",
      "Sun hat and sunscreen",
      "Rain jacket or poncho",
      "Water bottle (refill stations on site)",
      "Personal toiletries if staying overnight",
    ],
    category: "Farming",
  },
  {
    slug: "homemaking",
    title: "Traditional Homemaking",
    subtitle: "The Art of the Well-Run Home",
    description:
      "Rediscover the warmth and craft of a self-sufficient household—from scratch cooking and bread baking to home organization and seasonal rhythms.",
    longDescription:
      "Homemaking is not a lesser calling—it is one of the most profound contributions a person can make to the wellbeing of a family and community. This three-day immersion program reclaims the art of the home as something worthy of skill, intention, and even joy.\n\nParticipants work in our fully restored farmhouse kitchen and common areas, learning time-tested methods passed down through generations. You will leave with practical techniques, a pantry of new recipes, and a renewed sense of purpose in the daily work of home.",
    duration: "3 Days",
    capacity: 10,
    price: "$395 per person",
    nextSession: "May 8–10, 2026",
    image: "https://placehold.co/1200x600/5C4D3C/FAF7F2?text=Traditional+Homemaking",
    skills: [
      "Scratch cooking and pantry-based meal planning",
      "Sourdough and whole-grain bread baking",
      "Seasonal preserving and pantry building",
      "Home organization and daily rhythms",
      "Natural cleaning preparations and recipes",
      "Hospitality traditions and communal cooking",
    ],
    schedule: [
      { time: "Day 1 – Morning", activity: "Welcome, pantry tour, and foundational cooking methods" },
      { time: "Day 1 – Afternoon", activity: "Bread baking workshop (sourdough starter through finished loaf)" },
      { time: "Day 2 – Morning", activity: "Whole-grain breakfast recipes and weekly meal planning session" },
      { time: "Day 2 – Afternoon", activity: "Seasonal preserving and building a working pantry" },
      { time: "Day 3 – Morning", activity: "Natural home care and daily rhythm planning" },
      { time: "Day 3 – Afternoon", activity: "Communal meal, recipe exchange, and closing reflection" },
    ],
    faqs: [
      {
        question: "Is this program only for women?",
        answer:
          "This program welcomes everyone who tends a home. While our instructors and most participants have historically been women, men are warmly invited. A love for cooking, hospitality, and home is the only requirement.",
      },
      {
        question: "Do I need any cooking experience?",
        answer:
          "No experience is necessary. We start with fundamentals and build from there. If you can boil water and slice a vegetable, you have everything you need to begin.",
      },
      {
        question: "Can I bring a friend or family member?",
        answer:
          "Absolutely. Friends, mothers and daughters, couples—all are welcome. Learning together makes the experience richer. Please enroll each participant separately.",
      },
      {
        question: "Will dietary restrictions be accommodated?",
        answer:
          "We primarily prepare plant-based, whole-food meals in keeping with our Adventist health principles. Gluten-free alternatives are available for most sessions. Please note any restrictions in your enrollment form.",
      },
    ],
    whatToBring: [
      "Comfortable, modest clothing suitable for kitchen work",
      "A full-size apron if you have a favorite one",
      "Notebook and pen for recording recipes",
      "A jar or container for taking home ferments or preserves",
      "Any family recipe you'd like to share with the group",
    ],
    category: "Homemaking",
  },
  {
    slug: "construction",
    title: "Timber & Construction",
    subtitle: "Build Something That Lasts",
    description:
      "Learn to work with your hands using traditional carpentry methods, timber framing, and the enduring satisfaction of building structures meant to stand for generations.",
    longDescription:
      "There is a particular pride that comes from standing inside something you built yourself. In this seven-day program, participants work on an actual construction project on our property—using hand tools and traditional joinery techniques.\n\nOur head builder, a former Amish master carpenter with over 30 years of experience, teaches with patience and precision. This is not a workshop where you watch—you swing the hammer, raise the beam, and do the work. The result is both a lasting structure and a lasting skill.",
    duration: "7 Days",
    capacity: 8,
    price: "$895 per person",
    nextSession: "June 1–7, 2026",
    image: "https://placehold.co/1200x600/1A3009/FAF7F2?text=Timber+%26+Construction",
    skills: [
      "Hand tool selection, use, and sharpening",
      "Traditional mortise and tenon joinery",
      "Timber frame layout and raising",
      "Reading simple building plans and elevations",
      "Foundation preparation and leveling",
      "Roof framing, sheathing, and basic finishing",
    ],
    schedule: [
      { time: "Day 1", activity: "Tool orientation, safety procedures, and site preparation" },
      { time: "Day 2", activity: "Foundation layout and preparation work" },
      { time: "Day 3", activity: "Timber cutting and joinery practice" },
      { time: "Day 4", activity: "Wall framing and raising (the big day)" },
      { time: "Day 5", activity: "Roof structure and sheathing" },
      { time: "Day 6", activity: "Doors, windows, trim, and finish work" },
      { time: "Day 7", activity: "Final details, cleanup, and dedication of the completed structure" },
    ],
    faqs: [
      {
        question: "How physically demanding is this program?",
        answer:
          "This program involves significant physical labor—lifting, carrying, bending, and standing for most of the day. Participants should be in reasonably good physical health. If you have any concerns, please consult your physician before enrolling.",
      },
      {
        question: "What tools should I bring?",
        answer:
          "We provide all tools needed for the program. If you have a favorite handsaw or hammer you'd like to use, you're welcome to bring it, but it is not required.",
      },
      {
        question: "Is there an age minimum?",
        answer:
          "Participants must be 16 or older. Those under 18 must be accompanied by a parent or guardian who is also enrolled in the program.",
      },
      {
        question: "What project will we be building?",
        answer:
          "The specific project varies by session based on current property needs. Past groups have built a chicken coop, a tool storage building, and a section of post-and-rail fencing. The project is always real, practical, and used by our community.",
      },
    ],
    whatToBring: [
      "Work boots with ankle support (steel-toed strongly recommended)",
      "Leather work gloves",
      "Long pants and long-sleeve shirt for safety",
      "Safety glasses",
      "Sunscreen and a wide-brimmed hat",
      "Ear protection (we also have on site)",
    ],
    category: "Construction",
  },
  {
    slug: "sewing",
    title: "Textile Arts & Sewing",
    subtitle: "Craft What You Wear and Use",
    description:
      "From threading a needle to completing a quilt, this four-day program teaches the foundational skills of hand sewing, garment making, and the timeless tradition of quilting.",
    longDescription:
      "Before ready-to-wear clothing, every family made what they wore. Before factories produced quilts, neighbors gathered to stitch them by hand—sharing stories, songs, and patterns as they worked.\n\nOur Textile Arts program revives these traditions in a welcoming, unhurried environment. Whether you are mending a tear in a favorite shirt, cutting out your first garment pattern, or adding to a hand-quilted project, our experienced instructors guide each participant at their own pace.",
    duration: "4 Days",
    capacity: 10,
    price: "$495 per person",
    nextSession: "April 28 – May 1, 2026",
    image: "https://placehold.co/1200x600/8B2E19/FAF7F2?text=Textile+Arts+%26+Sewing",
    skills: [
      "Hand sewing techniques and stitch types",
      "Reading and cutting a sewing pattern",
      "Garment construction basics",
      "Traditional quilting piecing and hand-tying",
      "Mending, darning, and invisible repair",
      "Natural fabric identification and care",
    ],
    schedule: [
      { time: "Day 1 – Morning", activity: "Thread, needles, and foundational hand stitches" },
      { time: "Day 1 – Afternoon", activity: "Pattern reading and fabric cutting" },
      { time: "Day 2 – Full Day", activity: "Garment construction (apron or simple work top)" },
      { time: "Day 3 – Morning", activity: "Introduction to quilting: design, cutting, and piecing" },
      { time: "Day 3 – Afternoon", activity: "Quilting: assembly and hand-tying methods" },
      { time: "Day 4 – Morning", activity: "Mending workshop: patches, darning, and invisible repairs" },
      { time: "Day 4 – Afternoon", activity: "Finishing touches, show-and-tell, and closing" },
    ],
    faqs: [
      {
        question: "Do I need to know how to sew to attend?",
        answer:
          "No prior sewing experience is needed. We welcome complete beginners. The program is also valuable for those with intermediate skills who want to deepen their hand sewing and quilting practice.",
      },
      {
        question: "Will I complete a finished project?",
        answer:
          "Most participants complete a simple garment (apron or work top) and begin a quilting project. Given the pace, the quilt is often a take-home project to finish. You will leave with all the skills and materials to do so.",
      },
      {
        question: "Is hand sewing very different from machine sewing?",
        answer:
          "Yes, and intentionally so. We focus entirely on hand sewing, which develops a slower, more attentive relationship with the craft. Machine sewing is useful, but hand sewing teaches you to understand the work from the inside out.",
      },
      {
        question: "Can children participate?",
        answer:
          "Children ages 10 and up may participate with a parent present. We have child-sized thimbles and simpler projects available. Younger children tend to get fatigued with the concentration required, so we suggest 10+ as a guideline.",
      },
    ],
    whatToBring: [
      "Comfortable clothing (we sew by natural and lamp light)",
      "Reading glasses if you use them",
      "A small sewing kit if you have one (we supplement)",
      "Thimble if you own one (we provide extras)",
      "Any fabric scraps you'd like to incorporate into your quilt",
    ],
    category: "Textile Arts",
  },
  {
    slug: "canning",
    title: "Food Preservation & Canning",
    subtitle: "Put Up the Harvest",
    description:
      "Learn the safe and time-tested methods of food preservation—water bath canning, pressure canning, fermentation, and dehydrating—to nourish your family through every season.",
    longDescription:
      "A well-stocked pantry is a form of security, generosity, and wisdom. In this two-day intensive, participants learn the full range of home food preservation methods using produce from our farm and local growers.\n\nOur instructors have been putting up food for decades, and they bring both expertise and enthusiasm to every jar they seal. You will leave with hands-on experience in every method, several jars of your own work to take home, and the confidence to fill your own shelves.",
    duration: "2 Days",
    capacity: 12,
    price: "$245 per person",
    nextSession: "July 17–18, 2026",
    image: "https://placehold.co/1200x600/B8860B/1A1512?text=Food+Preservation",
    skills: [
      "Water bath canning (jams, pickles, tomatoes)",
      "Pressure canning (vegetables, beans, broths)",
      "Lacto-fermentation (sauerkraut, kimchi, kvass)",
      "Fruit and vegetable dehydrating",
      "Food safety principles and proper storage",
      "Building a seasonal preservation calendar",
    ],
    schedule: [
      { time: "Day 1 – Morning", activity: "Food safety fundamentals and equipment overview" },
      { time: "Day 1 – Afternoon", activity: "Water bath canning: jam, pickles, and tomato sauce" },
      { time: "Day 2 – Morning", activity: "Pressure canning and lacto-fermentation basics" },
      { time: "Day 2 – Afternoon", activity: "Dehydrating, creating your preservation calendar, Q&A session" },
    ],
    faqs: [
      {
        question: "Is canning safe to do at home?",
        answer:
          "Yes, when done correctly. Food safety is the foundation of everything we teach. We follow USDA-approved methods and teach participants to understand why each step matters, not just how to follow a recipe.",
      },
      {
        question: "What will I take home?",
        answer:
          "Each participant takes home 4–6 jars of what they canned or fermented during the program, along with a printed reference guide covering all the methods taught.",
      },
      {
        question: "Do I need to bring any equipment?",
        answer:
          "No. All canning equipment is provided. If you plan to continue at home and want guidance on purchasing equipment, we include a short recommendation session on Day 2.",
      },
      {
        question: "Can I attend if I only want to learn fermentation?",
        answer:
          "The program is designed as a complete curriculum, and the methods are taught in sequence for a reason. However, we understand specialized interests—please reach out before enrolling and we'll discuss what works best for you.",
      },
    ],
    whatToBring: [
      "An apron or work clothes you can get wet",
      "Closed-toe shoes (no sandals in the kitchen)",
      "A sturdy box or bag to carry your jars home safely",
      "Enthusiasm and a good appetite—we taste everything we make",
    ],
    category: "Preservation",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
