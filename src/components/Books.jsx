import React from 'react'
import { useState } from 'react';
import {FaHeart} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'

function Books({book, Add, present}) {

  const [selectedButton, setColor] = useState("white");

  return (

    
    <div className={present===1 ? 'book' : 'book2'}>
      <img className='book_img'
              src={book.image}></img>

      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
      <div className='category'>Category: {book.category}</div>
      {present===true ? 
    <>
   
    <div className='like'> 
    <style>{`
        .red {color: red}
        .white {color: white}
        
      `}</style>
    <button style={{border: "none"}} className={selectedButton}
    onMouseDown={() => setColor((selectedButton) => (selectedButton === "white" ? "red" : "white"))}
    onClick={()=>Add(book.title,book.author, book.id)}>
      <FaHeart></FaHeart>
      </button>
      Like the book
    </div>

    </> : <></>

    }
      
    </div>
  )
}

export default Books
