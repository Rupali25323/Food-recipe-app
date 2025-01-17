import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({details}) => {
    console.log(details)
  return (
    <>
    <div className="meals">
        {!details?"":details.map((currItem)=>{
return(
    <div className='mealImg'>
<img src={currItem.strMealThumb} />
<p>{currItem.strMeal}</p>
<NavLink to={`/${currItem.idMeal}`}><button>Click Here</button></NavLink>


    </div>
)
        })}
    </div>
    </>
  )
}

export default Mealcards
