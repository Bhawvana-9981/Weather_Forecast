import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e90cef74abc3db6885e42026076ffdb`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celcius = kelvin - 273.15
      setResult("Temperature at " +city + "\n" +Math.round(celcius)+"°C");

    }).catch(error => console.log(error))
    setCity("");
   
  }

  return (
    <div>
       <header className="app-header">
        <h4>Weather Application</h4>
      </header>
      <center>
        <div className="card"> 
          <div className="card-body">
            <h4 className="card-title">Weather Forecast</h4>
            <form onSubmit = {submitHandler}>
              <input size = "30" type="text" name="city" value={city} onChange={changeHandler}></input> <br/><br/>
              <input type= "submit" value = "Get Temperature" />
            </form><br/><br/>
            <div>
              <h1>{result}</h1>
            </div>
          </div>
        </div>
      </center>
      <footer className="app-footer">
      <h4>All rights reserved 2024 by Bhawvana Satyasi</h4>
      </footer>
    </div>
  );
}

export default App;
