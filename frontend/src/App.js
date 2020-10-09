import React from 'react';

  // This is what is displayed on main page (this is JSX)
  //Attributes named className not class and you can insert javascripte in curly brackets
  //everything has to be wrapped in single element (in this case we have an empty element called a fragment but it can be a div etc)

//Use reg function   -   function App () {   -   or arrow function es6 as belo
const App = () => {
  return (
    <>
      <h1>Welcome to ProShop</h1>
    </>
  );
}

export default App;
