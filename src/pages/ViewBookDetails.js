import React, {useEffect, useState} from 'react';
import { Input } from 'antd';
import {useParams} from 'react-router-dom';
import { WrapBookPage } from '../styles/style';
import { message } from 'antd';

export const ViewBookDetails = () => {
  const linkId = useParams().id

  const [state, setBook] = useState([]);
  const [review, setReview] = useState('');
  useEffect(() => {
    async function loadBooks() {
      const response = await fetch(`http://localhost:4200/books/${linkId}`)
      const json = await response.json()
      setBook(json)
      setReview(json.review)
    }
    loadBooks();
  }, [linkId])
  const addToShelf = (e) => {
    e.preventDefault();
    let array = [];
    array[0] = state;

    if (window.localStorage.getItem('storedBook') === null) {
      array[0].review = review;
      window.localStorage.setItem('storedBook', JSON.stringify(array));
     return  message.success('Your book has been added to the shelf', 1);
    }

    let storage = JSON.parse(window.localStorage.getItem('storedBook'));
    storage = Array.from(storage);
    const checkExestingBook =  storage.reduce((accumulator, vendor) => (accumulator||vendor.id === state.id), false);

    if (!checkExestingBook) {
      state.review = review;
      storage.push(state);
      message.success('Your book has been added to the shelf', 1);
      window.localStorage.setItem('storedBook', JSON.stringify(storage));
    } else {
      message.success('This book has already been added to the shelf!!!', 1);
    }
  }

  return (
    <>
      <WrapBookPage>
        <img src={state.image} alt="Digital Library App"/>
        <h2>Title: {state.title}</h2>
        <p>Description: {state.description}</p>
        <p>Author: {state.author}</p>
        <div>
          <label htmlFor="review">Plz make review at this book: </label>
          <Input id="review" value={review} onChange={e => setReview(e.target.value)}/>
        </div>
        <div className='addbutton' onClick={addToShelf}>
          Add to Shelf
        </div>
      </WrapBookPage>
    </>
  )
}
