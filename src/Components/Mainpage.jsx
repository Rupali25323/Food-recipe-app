import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {
    const[data,setData]=useState()
    const[search,setSearch]=useState()
    const updateInput=(e)=>{
        setSearch(e.target.value)
    }
    
    const myFun=async()=>{
        const response=await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsonData=await response.json()
        // console.log(jsonData.meals)
        setData(jsonData.meals)
    }
    // console.log(data)
  return (
    <>
    <h1 className='head'>Food Recipe App</h1>
    <div className='container'>
<div className='input'>
<input type="text" placeholder='Enter Your Dish' onChange={updateInput} />

</div>
<button onClick={myFun}>Search</button>

    </div>
    <div>
        <Mealcards details={data}/>
    </div>
    </>
  )
}

export default Mainpage
