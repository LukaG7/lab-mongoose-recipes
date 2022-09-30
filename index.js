const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost/recipe-app';

async function myRecipeSetter(){
  await mongoose.connect(MONGODB_URI)
  await Recipe.deleteMany();
  let manguRecipe = await Recipe.create({
    title: "Mangu",
    level: "Intermediate",
    ingredients: ['Plantains','Salami','Eggs','Pickled Onions','Butter', 'Olive Oil'],
    cuisine: 'Dominican',
    dishType: 'breakfast',
    duration: 120,
    creator: 'Lukas',
  })
    console.log(manguRecipe.title);
    let myRecipeArray = await Recipe.insertMany(data);
      for(let i = 0; i < myRecipeArray.length; i++){
        console.log(myRecipeArray[i].title)
    }
    let updateRigatoni = await Recipe.findOneAndUpdate({'title': 'Rigatoni alla Genovese'}, {'duration': 100});
      console.log(`Updated Rigatoni`);
    let deleteCake = await Recipe.deleteOne({title: 'Carrot Cake'});
      console.log('No more Carrot Cake!');
  }
  
  mongoose.connection.close();
  
  myRecipeSetter();
