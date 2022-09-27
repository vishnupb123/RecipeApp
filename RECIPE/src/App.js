import React,{useEffect, useState} from "react";
import "./App.css"
import Axios from "axios";
import RecipeTile from "./Components/RecipeTile";
import { render } from "react-dom";


function App() {
const YOUR_APP_KEY = "0df2ed6cbfb6763c2f68606bb2201561";
const YOUR_APP_ID = "bfc9f2dc";

const [ingredient,setIngredient] = useState("")
const [recipes,setRecipes] = useState([])
const [healthLabel,setHealthLabel] = useState("vegan")

function IngredientQuery(event){
  setIngredient(event.target.value)
}


useEffect(()=>{
  console.log(healthLabel);
},[healthLabel])

const Submit = (event)=>{
  event.preventDefault()
  getRecipe()
}
function updatedLabel(event){
  setHealthLabel(event.target.value);
  console.log(healthLabel)
}


const url = `https://api.edamam.com/api/recipes/v2/?q=${ingredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&type=public`;

async function getRecipe(){
  const result = await Axios.get(url);
  setRecipes(result.data.hits)
  console.log(recipes)
  console.log(url);
}



  return (
    <div className="app">
        <h1 claassName="brand"><span>M</span>IX it <span>UP</span></h1>
        <form className="app_queryForm" onSubmit={Submit}>
          <input type="text" placeholder="Enter the ingredient" className="app_Ingredient" value={ingredient} onChange={IngredientQuery}></input>
          <select name="app_healthLabel" className="app_healthLabel" onChange={updatedLabel}>
            <option  value="vegan">Vegan</option>
            <option  value="alcohol-cocktail">Alcohol-Cocktail</option>
            <option  value="alcohol-free">Alcohol-Free</option>
            <option  value="vegitarian">Vegitarian</option>
            <option  value="egg-free">Egg-Free</option>
          </select>
          <input type="submit" placeholder="search" className="app_Submit"></input>
        
        </form>
        <div className="recipeTile">
          {recipes.map((recipe)=>{
            return ( <RecipeTile recipe={recipe}/>)
          })}
        </div>
    </div>
  )
}

export default App;
