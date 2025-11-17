export interface Moon {
  id: number;
  name: string;
  month: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  teaching: string;
  wordOptions: string[];
}

export const moons: Moon[] = [
  {
    id: 1,
    name: "Spirit Moon",
    month: "January",
    color: "#EFE7D2",
    gradientFrom: "#EFE7D2",
    gradientTo: "#2F4F4F",
    teaching: "A time for spiritual renewal and inner reflection. The Spirit Moon teaches us to honor our ancestors and connect with the wisdom that comes from within. It reminds us that in the coldest, darkest time, our inner light shines brightest.",
    wordOptions: ["Renewal", "Reflection", "Wisdom", "Light"]
  },
  {
    id: 2,
    name: "Bear Moon",
    month: "February",
    color: "#EFE7D2",
    gradientFrom: "#EFE7D2",
    gradientTo: "#699F3E",
    teaching: "During the Bear Moon, we learn the importance of rest and introspection. Like the bear in hibernation, this moon teaches us to conserve our energy and prepare for the awakening that spring will bring.",
    wordOptions: ["Rest", "Introspection", "Energy", "Awakening"]
  },
  {
    id: 3,
    name: "Sugar Moon",
    month: "March",
    color: "#3DB6A4",
    gradientFrom: "#2F4F4F",
    gradientTo: "#3DB6A4",
    teaching: "The Sugar Moon marks the time when sap begins to flow. It teaches us about the sweetness that comes from patience and the natural cycles of giving. This moon reminds us that nature provides abundance when we work in harmony with it.",
    wordOptions: ["Sweetness", "Patience", "Abundance", "Harmony"]
  },
  {
    id: 4,
    name: "Sucker Moon",
    month: "April",
    color: "#699F3E",
    gradientFrom: "#699F3E",
    gradientTo: "#FFD447",
    teaching: "Named for the fish that spawn in spring, the Sucker Moon teaches about fertility, new beginnings, and the courage to move upstream against the current. It reminds us that persistence leads to new life.",
    wordOptions: ["Fertility", "Beginnings", "Courage", "Persistence"]
  },
  {
    id: 5,
    name: "Flower Moon",
    month: "May",
    color: "#D64545",
    gradientFrom: "#D64545",
    gradientTo: "#FF914D",
    teaching: "The Flower Moon celebrates growth, beauty, and the blossoming of potential. It teaches us to appreciate the beauty in ourselves and others, and to nurture the seeds we have planted.",
    wordOptions: ["Growth", "Beauty", "Potential", "Nurture"]
  },
  {
    id: 6,
    name: "Strawberry Moon",
    month: "June",
    color: "#D64545",
    gradientFrom: "#242323",
    gradientTo: "#D64545",
    teaching: "This moon teaches gratitude for the earth's gifts. The strawberry, close to the ground, reminds us to stay humble and appreciate the small blessings. It's a time for gathering and sharing abundance.",
    wordOptions: ["Gratitude", "Humble", "Blessings", "Sharing"]
  },
  {
    id: 7,
    name: "Raspberry Moon",
    month: "July",
    color: "#D64545",
    gradientFrom: "#D64545",
    gradientTo: "#242323",
    teaching: "The Raspberry Moon teaches about protection and boundaries. Just as the raspberry protects itself with thorns while offering sweet fruit, we learn to maintain healthy boundaries while sharing our gifts.",
    wordOptions: ["Protection", "Boundaries", "Balance", "Gifts"]
  },
  {
    id: 8,
    name: "Thimbleberry Moon",
    month: "August",
    color: "#FF914D",
    gradientFrom: "#FF914D",
    gradientTo: "#FFD447",
    teaching: "This moon teaches community and cooperation. The thimbleberry grows in patches, reminding us that we thrive when we support one another and work together for the common good.",
    wordOptions: ["Community", "Cooperation", "Support", "Unity"]
  },
  {
    id: 9,
    name: "Corn Moon",
    month: "September",
    color: "#FFD447",
    gradientFrom: "#FFD447",
    gradientTo: "#FF914D",
    teaching: "The Corn Moon represents harvest and the fruits of our labor. It teaches gratitude, preparation, and the wisdom of saving for times of need. This moon reminds us to honor the work we have done.",
    wordOptions: ["Harvest", "Gratitude", "Preparation", "Honor"]
  },
  {
    id: 10,
    name: "Harvest Moon",
    month: "October",
    color: "#FF914D",
    gradientFrom: "#FF914D",
    gradientTo: "#D64545",
    teaching: "The Harvest Moon teaches completion and celebration. It reminds us to gather what we have grown, give thanks for abundance, and prepare for the turning of the seasons.",
    wordOptions: ["Completion", "Celebration", "Abundance", "Gratitude"]
  },
  {
    id: 11,
    name: "Freezing Moon",
    month: "November",
    color: "#3DB6A4",
    gradientFrom: "#2F4F4F",
    gradientTo: "#3DB6A4",
    teaching: "As the earth begins to freeze, this moon teaches acceptance of change and the natural cycles of life. It reminds us that periods of dormancy are necessary for renewal.",
    wordOptions: ["Acceptance", "Change", "Cycles", "Renewal"]
  },
  {
    id: 12,
    name: "Long Night Moon",
    month: "December",
    color: "#2F4F4F",
    gradientFrom: "#242323",
    gradientTo: "#2F4F4F",
    teaching: "The Long Night Moon honors the longest night of the year. It teaches us to find light in darkness, to rest deeply, and to trust that the light will return. This moon reminds us that endings contain new beginnings.",
    wordOptions: ["Light", "Darkness", "Trust", "Beginnings"]
  },
  {
    id: 13,
    name: "Wolf Moon",
    month: "Cycles Throughout",
    color: "#EFE7D2",
    gradientFrom: "#2F4F4F",
    gradientTo: "#EFE7D2",
    teaching: "The Wolf Moon teaches about community, loyalty, and finding our voice. Like wolves that howl together, this moon reminds us of the strength found in family and the importance of clear communication.",
    wordOptions: ["Community", "Loyalty", "Voice", "Strength"]
  }
];