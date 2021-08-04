import React from 'react';
import ReactDom from 'react-dom';
//Adding CSS
import './index.css'

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

function BookList(){
  return(
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return(
    <div className="book">
      <BookImage/>
      <Title/>
      <Author/>
    </div>
  );
}

const BookImage = () => {
  return <img src='https://m.media-amazon.com/images/I/81cntt8WF2L._AC_UL320_.jpg' alt='the law of seduction'/>
}

const Author = () => <h1>Sylvia Quinn</h1>;
const Title = () => <h2>The Law of Seduction</h2>

ReactDom.render( <BookList/> , document.getElementById('root'))