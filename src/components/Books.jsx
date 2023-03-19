import React from 'react'

const Books = (props) => {
    const { item = [], addToOrder } = props
  return (
    <div>{item.map((book) => <Book key={book.id} addToOrder={addToOrder}{...book}/>)}</div>
  )
}

const Book = (props) => {
    const {id, title, price, addToOrder } = props
    return (
        <div>
            <h2>{title}</h2>
            <span>{price}</span>
            <button onClick={() => addToOrder(id)}>Buy</button>
        </div>
    )
}

export default Books;