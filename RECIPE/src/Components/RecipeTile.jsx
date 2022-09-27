import React from 'react'
import "./RecipeTile.css"

function RecipeTile({recipe}) {
 // console.log("data after filtering",recipe);
  return (
     <div className="recipeCard">
        <img className="RecipeTile_image" src={recipe["recipe"]["image"]}></img>
        <p className="RecipeTile_name">{recipe["recipe"]["label"]}</p>
    </div>
    
  )
}

export default RecipeTile