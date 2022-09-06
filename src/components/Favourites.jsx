import React from 'react'
import Books from './Books'

function Favourites({books}) {
  return (
    <div>
      <h3 className='favbooks'>Your favourite books</h3>
      {books.map((prom) => (
        <div className='position'>
         <Books book={prom} key={prom.id} present={false}/>
         </div>
      ))}
    </div>
  )
}

export default Favourites


