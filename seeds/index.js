const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "630efb07888564b425c9939a",
      location: `${cities[random1000].city} ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "fififi",
      price: price,
      images: [
        {
          url: `https://source.unsplash.com//collection/483251`,
          filename: "YelpCamp/oz2hwgyynj7itdtazkgr",
        },
        {
          url: `https://source.unsplash.com//collection/483259`,
          filename: "YelpCamp/x8wmrga885hookdlxn9f",
        },
        {
          url: `https://source.unsplash.com//collection/483272`,
          filename: "YelpCamp/caxkxq5jcfovrwrwlkax",
        },
        
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
