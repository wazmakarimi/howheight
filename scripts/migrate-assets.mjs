import fs from "node:fs";
import path from "node:path";

const desktopDir = "C:/Users/Fkdigitalmedia/Desktop";
const targetPublicDir = "public/assets/entities";
const targetSrcDir = "src/assets/entities";

const categoryConfig = {
  male: {
    folder: path.join(desktopDir, "male_icons"),
    prefix: "male-",
    defaultHeight: 175,
    minHeight: 140,
    maxHeight: 225,
    measurementType: "head-to-ground",
    names: ["Average Male", "Athletic Male", "Tall Male", "Casual Male", "Slim Male", "Standing Male", "Runner Male", "Formal Male"]
  },
  female: {
    folder: path.join(desktopDir, "female_icons"),
    prefix: "female-",
    defaultHeight: 163,
    minHeight: 130,
    maxHeight: 210,
    measurementType: "head-to-ground",
    names: ["Average Female", "Athletic Female", "Tall Female", "Casual Female", "Standing Female", "Model Female", "Runner Female", "Formal Female"]
  },
  apparel: {
    folder: path.join(desktopDir, "apparel_icons"),
    prefix: "apparel-",
    defaultHeight: 75,
    minHeight: 20,
    maxHeight: 180,
    measurementType: "top-to-bottom",
    names: ["T-Shirt", "Hoodie", "Jacket", "Overcoat", "Dress", "Trousers", "Jeans", "Shorts", "Sneakers", "Boots", "Hat"]
  },
  animals: {
    folder: path.join(desktopDir, "animal_icons"),
    prefix: "animal-",
    defaultHeight: 60,
    minHeight: 15,
    maxHeight: 550,
    measurementType: "shoulder-height",
    names: ["Dog", "Cat", "Horse", "Lion", "Giraffe", "Elephant", "Tiger", "Bear", "Wolf", "Deer", "Blue Whale", "Cheetah", "Zebra", "Kangaroo", "Gorilla", "Panda"]
  },
  plants: {
    folder: path.join(desktopDir, "plants_icons"),
    prefix: "plant-",
    defaultHeight: 150,
    minHeight: 20,
    maxHeight: 3000,
    measurementType: "ground-to-top",
    names: ["Oak Tree", "Pine Tree", "Palm Tree", "Sunflower", "Rose Bush", "House Plant", "Cactus", "Bonsai Tree", "Fern", "Fruit Tree"]
  },
  sports: {
    folder: path.join(desktopDir, "sports_icons"),
    prefix: "sports-",
    defaultHeight: 305,
    minHeight: 20,
    maxHeight: 450,
    measurementType: "ground-to-top",
    names: ["Basketball Hoop", "Football Goal", "Tennis Net", "Bicycle", "Surfboard", "Punching Bag", "Weight Bench", "Skateboard", "Golf Bag", "Volleyball Net"]
  },
  fictional: {
    folder: path.join(desktopDir, "fictional_icons"),
    prefix: "fictional-",
    defaultHeight: 400,
    minHeight: 100,
    maxHeight: 2000,
    measurementType: "character-height",
    names: ["Tyrannosaurus Rex", "Dragon", "Fantasy Giant", "Cyborg Mech", "Alien Creature", "Centaur", "Golem", "Monster", "Superhero", "Kaiju"]
  },
  objects: {
    folder: path.join(desktopDir, "howheight_assets"),
    prefix: "object-",
    defaultHeight: 210,
    minHeight: 15,
    maxHeight: 2500,
    measurementType: "ground-to-top",
    names: ["Standard Door", "Sedan Car", "Office Chair", "Dining Table", "Smartphone", "Water Bottle", "Building", "Street Lamp", "Sofa", "Refrigerator"]
  }
};

console.log("Migration script initialized");
