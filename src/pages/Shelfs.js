import React from 'react';
import {Avatar, List} from "antd";

export const Shelf = () => {
 let books = window.localStorage.getItem('storedBook')
  books = JSON.parse(books);
  return(
    <div>
     <h1>You books in the Shelf: </h1>
      { books === null && "Your Shelf is empty" }
      {books !== null &&
         <>
          <List
            itemLayout="horizontal"
            dataSource={ books }
            renderItem={item => (
              <List.Item>
               <List.Item.Meta
                 avatar={<Avatar src={item.image} />}
                 title={<a href={`bookview/${item.id}`} className='border'>{item.title}</a>}
                 description={item.description}
               />
              </List.Item>
            )}
          />
         </>
      }
    </div>
  )
}