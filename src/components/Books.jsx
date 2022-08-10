import React from 'react'
import {FaHeart} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'

function Books({book, ChangeAndAdd}) {

  return (
    <div className='book'>

    
      <img className='book_img'>{book.image}</img>

      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
      <div className='category'>Category: {book.category}</div>
      <div className='more'> 
      <button className='button_more'>
        <AiOutlinePlus></AiOutlinePlus>
        </button>
      Read more
      </div>
      <div className='like'> 
      <button className='button_like' onClick={()=>ChangeAndAdd(book.title,book.author)}>
        <FaHeart></FaHeart>
        </button>
      Like the book
      </div>


    </div>
  )
}

export default Books
