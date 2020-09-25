import React from 'react';
import {Avatar, List} from "antd";

export const Shelf = () => {
 let books = window.localStorage.getItem('storedBook');
 if (books === null) {
   return <div className='text-center'><h1>You books Shelf is empty</h1></div>
 }
 books = JSON.parse(books);

  const filtredCat1 = books.filter(e => e.category === 'category 1');
  const filtredCat2 = books.filter(e => e.category === 'category 2');
  const filtredCat3 = books.filter(e => e.category === 'category 3');
  return(
    <div>

      {filtredCat1 !== null &&
         <>
          <p>Category 1</p>
          <List
            itemLayout="horizontal"
            dataSource={ filtredCat1 }
            renderItem={item => (
              <List.Item>
               <List.Item.Meta
                 avatar={<Avatar src={item.image} />}
                 title={<a href={`bookview/${item.id}`} className='border'>{item.title}</a>}
                 description={item.category}
               />
               {item.review}
              </List.Item>
            )}
          />
         </>
      }

     {filtredCat1 !== null &&
     <>
      <p>Category 2</p>
      <List
        itemLayout="horizontal"
        dataSource={ filtredCat2 }
        renderItem={item => (
          <List.Item>
           <List.Item.Meta
             avatar={<Avatar src={item.image} />}
             title={<a href={`bookview/${item.id}`} className='border'>{item.title}</a>}
             description={item.category}
           />
           {item.review}
          </List.Item>
        )}
      />
     </>
     }

     {filtredCat3 !== null &&
     <>
      <p>Category 3</p>
      <List
        itemLayout="horizontal"
        dataSource={ filtredCat3 }
        renderItem={item => (
          <List.Item>
           <List.Item.Meta
             avatar={<Avatar src={item.image} />}
             title={<a href={`bookview/${item.id}`} className='border'>{item.title}</a>}
             description={item.category}
           />
           {item.review}
          </List.Item>
        )}
      />
     </>
     }
    </div>
  )
}