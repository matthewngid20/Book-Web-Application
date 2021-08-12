import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const Details = (props) => {
    const [book, setBook] = useState()
    const {bookId} = useParams()

    useEffect( () => {
        if(!book) {
            props.handler(bookId)
            .then( (bookData) => setBook (bookData))
            .catch ((error) => console.log(error))
        }
    })

    if(!book) {
        return (
            <div> Loading book </div>
        )
    }else {
        console.log(book)
    
    return (
        <div className = "row mt-4">
            <div className = "col-md-6">
                <img className = "img-fluid"src ={book.cover_image}></img>
                
            </div>
            <div className = "col-md-6">
                <h3> {book.title}</h3>
                <h4> {book.author}</h4>
                <h4> By {book.author}</h4>
                <h4> {book.publisher} Publisher</h4>
                <h4> Year: {book.year}</h4>
                <h4> Pages: {book.pages}</h4>
                
            </div>
        </div>
    )
    }
}
