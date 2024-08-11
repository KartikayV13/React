import React, { useState } from 'react'
import "./RandomQuotes.css"
import { TfiReload } from "react-icons/tfi";

const RandomQuotes = () => {

  let quotes = [];

  async function loadQuotes () {

    const response = await fetch("http://type.fit/api/quotes");
    quotes = await response.json()
    
  }
    
    const reload = () => {
      const select = quotes[Math.floor(Math.random()* quotes.length)];
      setQuote(select)
    }

    loadQuotes();

const [quote , setQuote] = useState({
    text:"If you are good at something never do it for freee",
    author:"Joker"
})


  return (
    <div className='container'>
        <div className='quoteText'>
            <div className='Text'>{quote.text}</div>
        </div>
        <div className='line'></div>
        <div className='quoteAuthor'>
            <div className='Author'>{quote.author}</div>
            <div className='icon'>
            <TfiReload  onClick={()=> reload() }/>

            </div>
        </div>


    </div>
  )
}

export default RandomQuotes