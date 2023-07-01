import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  /* const style = { color: "red", fontSize: "40px", textTransform: "uppercase" }; */
  const style = {};

  return (
    <header className="">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  /* const pizzas = []; */
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* CONDITIONAL RENDERING USING THE TERNARY OPERATOR */}

      {numPizzas > 0 ? (
        <>
          {" "}
          {/* This is a react fragment "<> our elements </>" */}
          <p>
            Authentic Italian Cuisine. 6 Creative dishes to choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          We're still working on our menu. Please come back later for some
          delicious Pizza! 🍕😋
        </p>
      )}

      {/* CONDITIONAL RENDERING USING THE &&  */}
      {/*       {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* 
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozerella, spincah, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzObj }) {
  /* console.log(props); */

  /* if (pizzObj.soldOut) return null; */
  return (
    <li className={`pizza ${pizzObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzObj.photoName} alt={pizzObj.name} />

      <div>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>

        {/* 
        {pizzObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzObj.price}</span>} */}

        <span>{pizzObj.soldOut ? "SOLD OUT" : pizzObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /* USING MULTIPLE RETURNS  */
  /* It is better to use multiple returns when we have to return the whole component and NOT JUST PIECES OF JSX - if we do that we will come across some issue as below if the "return" returns then the whole footer component might not return in some case and that's what we might NOT want */
  /* if (!isOpen)
    return (
      <p>
        We are happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    ); */

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open! */}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour} until {closeHour}:00. Come visit us or order
        online.
      </p>

      <button className="btn">Order</button>
    </div>
  );
}
// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"))
