import React from 'react'
import Books from './Books'

function Bookstore({books, ChangeAndAdd}) {
  
  return (
    <div className='bookstore'>
      
      {books.map((prom) => (
         <Books book={prom} key={prom.id} ChangeAndAdd={ChangeAndAdd} />
      ))}
    
    
    </div>
  )
}

export default Bookstore
