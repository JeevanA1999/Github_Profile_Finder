import React from 'react'
import { useState } from 'react'

function Search(props) {
    const[text, SetText]=useState('')
    // function handleSearch(e){
    //     e.preventDefault()
    //     console.log('text value '+text)
    // }
    const handleSearch=(e)=>{
        e.preventDefault()
        props.searchName(text)
       SetText('')
    }
  return (
    <>
    <form className='form' onSubmit={handleSearch}>
        <input type='text' placeholder='Search GitHub Username' value={text} onChange={(e)=>{SetText(e.target.value)}} required />
        <input type='submit' placeholder='Search'className="btn btn-dark btn-block"/>
    </form>
    {props.showClear && <button type='submit' className='btn btn-light btn-block' onClick={props.clearUser}>Clear</button> }
    

      
    </>
  )
}

export default Search
