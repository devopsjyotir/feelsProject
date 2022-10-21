const db = require("../db");
const Places = require("../models/Places");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createPlaces = async () => {
  const places = [
    {
      name: "New York",
      description:
        "The most common mode of transportation for New Yorkers is still their own two feet. Recent improvements made to the city at large have made walking about much more comfortable. The High Line, a 1.45-mile elevated walkway above the Hudson River, and a more pedestrian-friendly Times Square are two of the city's most popular new features.",
      image: "https://unsplash.com/photos/fEdPmPFLhLw",
      attributes: [
        "Walks",
        "Shopping",
        "Fashion",
        "Music",
        "Public Transportation",
        "Broadway",
        "Job Opportunities",
        "Diversity",
        "Scenery",
        "Cool Weather",
      ],
    },
    {
      name: "Los Angeles",
      description:
        " A new WalletHub report came out on Wednesday declaring Los Angeles the greatest city in the United States for soccer. In addition, Los Angeles topped the list in WalletHub's 2019 research.It was a West Coast affair, and the West Coast was well-represented. Salt Lake City, Portland, Orlando, and Seattle rounded out the top five. ",
      image: "https://unsplash.com/photos/9TUkYXQKXec",
      attributes: [
        "Soccer",
        "Shopping",
        "Music",
        "Job Opportunities",
        "Diversity",
        "warm weather",
      ],
    },
    {
      name: "Washington, D.C.",
      description:
        " A new WalletHub report came out on Wednesday declaring Los Angeles the greatest city in the United States for soccer. In addition, Los Angeles topped the list in WalletHub's 2019 research.It was a West Coast affair, and the West Coast was well-represented. Salt Lake City, Portland, Orlando, and Seattle rounded out the top five. ",
      image: "https://unsplash.com/photos/9TUkYXQKXec",
      attributes: ["Parks", "Outdoor and Nature", "Museums"],
    },
  ];
  await Places.insertMany(places);
  console.log("Created some Places!");
};
const run = async () => {
  await createPlaces();
  db.close();
};

run();
