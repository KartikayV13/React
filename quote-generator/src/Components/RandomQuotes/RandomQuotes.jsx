import React, { useState } from 'react'
import "./RandomQuotes.css"

const RandomQuotes = () => {
    

const [quotes , setQuotes] = useState({
    text:"If you are good at something never do it for freee",
    author:"Joker"
})


  return (
    <div className='container'>
        <div className='quoteText'>
            <div className='Text'>{quotes.text}</div>
        </div>
        <div className='line'></div>
        <div className='quoteAuthor'>
            <div className='Author'>{quotes.author}</div>
            <div className='icon'>

            </div>
        </div>


    </div>
  )
}

export default RandomQuotes