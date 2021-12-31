import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./weather.css"

function Weather() {
    
    const [datosApi, setDatosApi] = useState({});
    const [valorInput, setValorInput] = useState("");
    const [ciudad,setCiudad] = useState("New York");

    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
    
    useEffect(() => {
        axios.get(url).then((res)=>setDatosApi(res.data))
    }, [url])

    const inputHandler = (e) => {
        setValorInput(e.target.value);
        console.log(valorInput);
    }
    const submitHandler = () => {
        setCiudad(valorInput)
    }
    return (
        <>
            <h1>React Weather App</h1>
            {datosApi.main ? 
            (
            <div>
                <input 
                className = "input"
                onChange = {inputHandler}
                placeholder = "Enter Location"
                type="text"
                value = {valorInput}/>
                <button className="button" onClick={submitHandler}>Search</button>
                <h3>{datosApi.main.temp} °C</h3> 
                <h2>{ciudad}</h2>
            </div>
            ) 
            :
            ( <h3>Cargando...</h3> ) }
        </>
    )
}

export default Weather
