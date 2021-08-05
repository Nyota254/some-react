import React from 'react';


const clickHandler = (e) => {
  console.log(e);
  console.log(e.target);
  alert('Hello World');
};

const complexExample = (author) => {
  console.log(author)
}

const Book = (props) => {
  const {image,title,author} = props.book;
  //Events
  //Attribute,eventHandler
  //onClick,onMouseOver
  //Inline function
  //outside function
  return(
    <div className="book">
      <img src={image} alt={title}/>
      <h2 onClick={()=> console.log(title)}>{title}</h2>
      <h1>{author}</h1>
      <button type="button" onClick={()=>complexExample(author)}>Complex Example</button>
      <button type="button" onClick={clickHandler}>clickHere</button>
    </div>
  );
}

export default Book