import React, { useState, useRef } from "react";
// import { useState } from "react";
import "./App.css";
function App() {
  // set all the products
  const [active, setActive] = useState(false);
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "shoes",
      description: "lovey shoes",
      price: 50,
    },
    {
      id: "2",
      name: "trouser",
      description: "lovey shoes",
      price: 300,
    },
    {
      id: "3",
      name: "shoes",
      description: "lovey shoes",
      price: 1050,
    },
    {
      id: "4",
      name: "shoes",
      price: 330,
      description: "lovey shoes",
    },
  ]);

  const nameRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameRef.current.value;
    const descValue = descriptionRef.current.value;

    // add products to existing array
    setProducts((initialState) => [
      ...initialState,
      {
        id: Math.random(), //generate a random value for Id
        name: nameValue,
        description: descValue,
        price: Math.round(Math.random() * 100) * 40,
      },
    ]);
  };

  // handle delete for each product

  const handleDelete = (id) => {
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
    setProducts(products.filter((product) => product.id !== id));
  };

  console.log(active);

  const handleActive = (id) => {
    setActive(!active);
    console.log(id);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React 1</h1>

      {/* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement. */}
      <h1>{products.length < 1 ? "No products" : ""}</h1>

      {/*  
      javascript map example
      ======================

      const array1 = [1, 4, 9, 16];

       // pass a function to map
            const map1 = array1.map(x => x * 2);

            console.log(map1);
       // expected output: Array [2, 8, 18, 32]
      
      
      */}
      <>
        {products.map((product) => (
          <div
            onClick={() => handleActive(product.id)}
            style={{
              backgroundColor: product.price > 100 ? "#333" : "#d45d13",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {/* <h1>{product.name === "shoes" ? "lovely shoes" : "not shoes"}</h1> */}
            <p>{product.description}</p>

            <h2>{product.price}</h2>

            {/* 
          when a function receives  a parameter.. 

      
          // pass a callback
          like this
          ======
               onClick = {()=> hanleExecution(param)}


          */}
            <button onClick={() => handleDelete(product.id)}>
              Delete product
            </button>
          </div>
        ))}
      </>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={nameRef}
            name="name"
            placeholder="name of product"
          />
          <input type="text" name="description" ref={descriptionRef} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
