import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';

export const MainPage = () => {
  const [state, setBooks] = useState([])
  useEffect(() => {
    async function loadBooks() {
      const response = await fetch("http://localhost:4200/books")
      const json = await response.json()
      setBooks(json)
    }
    loadBooks();
  }, [])

  return(
    <div>
      <hr/>
      <h1>Book List </h1>
      <List
        itemLayout="horizontal"
        dataSource={ state }
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
    </div>
  )

}