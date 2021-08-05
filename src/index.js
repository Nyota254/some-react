import React from 'react';
import ReactDom from 'react-dom';
//Adding CSS
import './index.css'

//Importing named export => Name has to be exactly
import {books} from './books';

//Importing default you can name it anything
import Book from './book'


/*Capitalize firstletter so react knows its a component*/
//Statless functional component => dumb component
//Always return JSX

//JSX Rules
//return single element
//div / section / article or Fragment <React.Fragment> or <> remember to close them
//use camelCase for html attribute
//className instead of class
//close every element even ones that normally dont have a closing tag eg <img/>
//formatting return use parenthisis ()

// function Greeting() {
//   return (
//   <div>
//     <h2>Hello People</h2>
//     <ul>
//       <li>
//         {/* <a href='#'>Hello World</a> */}
//       </li>
//     </ul>
//   </div>
//   );
// }

//Nested Components, React Tools

// function Greeting(){
//   return (
//     <div>
//       <Greet />
//       <Question/>
//     </div>
//   );
// }

// //Explicit using arrow functions
// const Greet = () => {
//   return <h1>Hello John</h1>
// }

// //Implicit using arrow functions
// const Question = () => <p>Is your second name wick?</p>


//Mini Book Project
//JSX Javascript
//Setup Vars
// const book1 = {
//   author : 'Sylvia Quinn',
//   title : 'The Law of seduction',
//   image : 'https://m.media-amazon.com/images/I/81cntt8WF2L._AC_UL320_.jpg',
// }

// const book2 = {
//   author : 'Tiffany Haddish',
//   title : 'The Last Black Unicorn',
//   image : 'https://m.media-amazon.com/images/I/A1hG8MsdzlL._AC_UL320_.jpg',
// }

// function BookList(){
//   return(
//     <section className="booklist">
//       <Book 
//         author={book1.author} 
//         image={book1.image} 
//         title={book1.title}
//       >
//         <p>
//           Lorem Ipsum doloak dajk jauiw jahs
//         </p>
//       </Book>
//       <Book author={book2.author} image={book2.image} title={book2.title}/>
//     </section>
//   );
// }

// const Book = (props) => {
//   const {image,title,author,children} = props;
//   return(
//     <div className="book">
//       <img src={image} alt={props.title}/>
//       <h2>{title}</h2>
//       <h1>{author.toUpperCase()}</h1>
//       {children}
//     </div>
//   );
// }

//Simple List
//Proper List

function BookList(){
  return(
    <section className="booklist">
      <h1>
        {books.map((book)=>{
          return <Book key={book.id} book={book}/>
        })}
      </h1>
    </section>
  );
}


ReactDom.render( <BookList/> , document.getElementById('root'))