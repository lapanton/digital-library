import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { WrapBookPage } from '../styles/style';
import { message } from 'antd';

export const ViewBookDetails = () => {
  const linkId = useParams().id

  const [state, setBook] = useState([])
  useEffect(() => {
    async function loadBooks() {
      const response = await fetch(`http://localhost:4200/books/${linkId}`)
      const json = await response.json()
      setBook(json)
    }
    loadBooks();
  }, [linkId])

  const addToShelf = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem('storedBook') === null) {
      window.localStorage.setItem('storedBook', JSON.stringify(state));
     return  message.success('Your book has been added to the shelf', 1);
    }
    let storage = JSON.parse(window.localStorage.getItem('storedBook'));
    storage = Array.from(storage);
    const checkExestingBook =  storage.reduce((accumulator, vendor) => (accumulator||vendor.id === state.id), false);
    console.log('check', checkExestingBook);
    if (!checkExestingBook) {
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
        <div className='addbutton' onClick={addToShelf}>
          Add to Shelf
        </div>
      </WrapBookPage>
    </>
  )
}
