const db = require("../db");
const Places = require("../models/Places");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createPlaces = async () => {
  const places = [
    {
      name: "New York",
      description:
        "Recent improvements made to the city at large have made walking about much more comfortable. The High Line, a 1.45-mile elevated walkway above the Hudson River, and a more pedestrian-friendly Times Square are two of the city's most popular new features.",
      image: "https://source.unsplash.com/sh_k3G4Ym9w",
      attributes: ["Walks", "Shopping", "Fashion", "Parks", "Broadway"],
    },
    {
      name: "Los Angeles",
      description:
        " Thanks to the beautiful year round weather, Los Angeles is home to some of the best outdoor music venues and events in the country. A new WalletHub report came out on Wednesday declaring Los Angeles the greatest city in the United States for soccer.  ",
      image: "https://source.unsplash.com/t9-lA9qXfaI",
      attributes: ["Soccer", "Shopping", "Music"],
    },
    {
      name: "Washington, D.C.",
      description:
        " Washington DC may be known for all things politics, but there’s far more to this city.When designing ‘Federal City,’ his aim was to surround the hub of government with beautiful public gardens,places to embrace mindfulness and meditation and find an escape from the urban noise. ",
      image: "https://source.unsplash.com/ra3oAd6hrnM",
      attributes: ["Parks", "Outdoor and Nature", "Museums"],
    },
    {
      name: "Seattle",
      description:
        " It's common knowledge that Seattle is home to a large population of active individuals who love the outdoors. Those who visit the Emerald City may easily find a group of people who share their passion for activities like skiing, mountain biking, or even ultimate frisbee.",
      image: "https://source.unsplash.com/UmEYn_GYqFo",
      attributes: ["Running", "Soccer"],
    },

    {
      name: "New Orleans",
      description:
        "New Orleans is the quintessential representation of jazz and the blues. This music is essential to the character of the city. Where else than New Orleans might the idea of a 'jazz funeral' (complete with a brass band procession) have originated to honor the memory of the departed? Tremé, Crescent City, Bourbon Street.",
      image: "https://source.unsplash.com/t-A4eLb3jpw",
      attributes: ["Music"],
    },
    {
      name: "Austin, TX",
      description:
        "Austin's reputation as the 'Live Music Capital of the World' is well-deserved. Live music may be found in many of the city's restaurants and bars; it is, after all, the inspiration for such famous musicians as Janis Joplin, Jamestown Revival, Explosions in the Sky, and Stevie Ray Vaughn. South by Southwest, Fun Fun Fun Fest, and Austin City Limits are just a few of Austin's many outdoor festivals.",
      image: "https://source.unsplash.com/AlBgcDfDG_s",
      attributes: ["Music"],
    },
    {
      name: "Miami",
      description:
        "While the city's beaches and art deco architecture are certainly draws, Miami is also known as a major hub for the fashion industry. There are many high-end boutiques, designer stores, and second-hand shops in the city, making it one of the most important fashion and entertainment hubs in the country.",
      image: "https://source.unsplash.com/TxME_LN0o0c",
      attributes: ["Shopping", "Fashion"],
    },
    {
      name: "Portland, Oregon",
      description:
        "Portland is regarded by many to be a large city, but its wealth of natural areas makes it incredibly convenient to run through trails on a regular basis, in addition to the city streets. We appreciate that organizations like Portland Stump Runners give Portlanders a way to escape the city's relentless growth and sprawl and spend some time in the great outdoors.",
      image: "https://source.unsplash.com/M0rO6rjtos0",
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
