const db = require("../db");
const Places = require("../models/places");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createPlaces = async () => {
  const places = [
    {
      name: "New York",
      description:
        "The most common mode of transportation for New Yorkers is still their own two feet. Recent improvements made to the city at large have made walking about much more comfortable. The High Line, a 1.45-mile elevated walkway above the Hudson River, and a more pedestrian-friendly Times Square are two of the city's most popular new features.",
      image: "https://source.unsplash.com/random/?Manhattan",
      attributes: ["Walks", "Shopping", "Fashion", "Parks"],
    },
    {
      name: "Los Angeles",
      description:
        " A new WalletHub report came out on Wednesday declaring Los Angeles the greatest city in the United States for soccer. In addition, Los Angeles topped the list in WalletHub's 2019 research.It was a West Coast affair, and the West Coast was well-represented. Salt Lake City, Portland, Orlando, and Seattle rounded out the top five. ",
      image: "https://source.unsplash.com/random/?beverly-hills",
      attributes: ["Soccer", "Shopping", "Music"],
    },
    {
      name: "Washington, D.C.",
      description:
        " A new WalletHub report came out on Wednesday declaring Los Angeles the greatest city in the United States for soccer. In addition, Los Angeles topped the list in WalletHub's 2019 research.It was a West Coast affair, and the West Coast was well-represented. Salt Lake City, Portland, Orlando, and Seattle rounded out the top five. ",
      image: "https://source.unsplash.com/random/?Washington-DC",
      attributes: ["Parks", "Outdoor and Nature", "Museums"],
    },
    {
      name: "Seattle",
      description:
        " It's common knowledge that Seattle is home to a large population of active individuals who love the outdoors. Those who visit the Emerald City may easily find a group of people who share their passion for activities like skiing, mountain biking, or even ultimate frisbee. However, the Pacific Northwest has an amazing running community. It's easy to find a running group in your area thanks to Seattle Running Club and a number of other large-scale organizations. And due of the beautiful landscape, you'll be treated to some spectacular scenery when you're out and about. ",
      image: "https://source.unsplash.com/random/?Seattle",
      attributes: ["Running"],
    },

    {
      name: "New Orleans",
      description:
        "New Orleans is the quintessential representation of jazz and the blues. This music is essential to the character of the city. Where else than New Orleans might the idea of a 'jazz funeral' (complete with a brass band procession) have originated to honor the memory of the departed? Tremé, Crescent City, Bourbon Street, and Preservation Hall are just few of the unique neighborhoods where you may catch a night of live music performed by residents and visiting performers.",
      image: "https://source.unsplash.com/random/?New-orleans",
      attributes: ["Music"],
    },
    {
      name: "Austin, TX",
      description:
        "Austin's reputation as the 'Live Music Capital of the World' is well-deserved. Live music may be found in many of the city's restaurants and bars; it is, after all, the inspiration for such famous musicians as Janis Joplin, Jamestown Revival, Explosions in the Sky, and Stevie Ray Vaughn. South by Southwest, Fun Fun Fun Fest, and Austin City Limits are just a few of Austin's many outdoor festivals. Make sure to stop by the timeless Continental Club and the ever-popular Stubb's while you're in town. You could even discover that you've learned a new dance or two before the night is up!",
      image: "https://source.unsplash.com/random/?Austin-Texas",
      attributes: ["Music"],
    },
    {
      name: "Miami",
      description:
        "While the city's beaches and art deco architecture are certainly draws, Miami is also known as a major hub for the fashion industry. There are many high-end boutiques, designer stores, and second-hand shops in the city, making it one of the most important fashion and entertainment hubs in the country. In a nutshell, it's the ultimate place to be if you work in the fashion or entertainment industries. In addition, Miami is home to a number of internationally recognized fashion weeks, including Mercedes-Benz Fashion Week, Miami Beach International Fashion Week, and Funkshion Fashion Week.",
      image: "https://source.unsplash.com/random/?Miami",
      attributes: ["Shopping", "Fashion"],
    },
    {
      name: "Portland, Oregon",
      description:
        "Portland is regarded by many to be a large city, but its wealth of natural areas makes it incredibly convenient to run through trails on a regular basis, in addition to the city streets. We appreciate that organizations like Portland Stump Runners give Portlanders a way to escape the city's relentless growth and sprawl and spend some time in the great outdoors.",
      image: "https://source.unsplash.com/random/?Portland-Oregon",
      attributes: ["Running", "Outdoor and Nature"],
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
