import React from 'react';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(){
    return( 
    <Obrazac />
    );
}
function Obrazac(){
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/SPJ/LV7/pcshop/Write.php',
            data: {
                Naziv: inputs.Naziv,
                Model: inputs.Model,
                Proizvodac: inputs.Proizvodac,
                Cijena: inputs.Cijena,
                Kolicina: inputs.Kolicina
            },
            headers: { "Content-Type": "multipart/form-data" },
        }).then(function (response) {
            //handle success
            console.log(response);
          }).catch(function (response) {
            //handle error
            console.log(response);
          });

          navigate('/');

    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
        <div className='container mt-4'>
        <form>
            <label>Unesite Naizv:</label>
            <input
            className="form-control"
            type="text"
            name="Naziv"
            value={inputs.Naziv || ""}
            onChange={handleChange}
            />
            <label>Unesite Model:</label>
            <input
            className="form-control"
            type="text"
            name="Model"
            value={inputs.Model || ""}
            onChange={handleChange}
            />
            <label>Unesite Proizvođać:</label>
            <input
            className="form-control"
            type="text"
            name="Proizvodac"
            value={inputs.Proizvodac || ""}
            onChange={handleChange}
            />
            <label>Unesite Cijenu:</label>
            <input
            className="form-control"
            type="number"
            name="Cijena"
            value={inputs.Cijena || ""}
            onChange={handleChange}
            />
            <label>Unesite Kolićina:</label>
            <input
            className="form-control"
            type="number"
            name="Kolicina"
            value={inputs.Kolicina || ""}
            onChange={handleChange}
            />
            <button className='btn btn-success' onClick={handleSubmit}>Dodaj novi proizvod</button>
        </form>
        </div>);

}
export default Nav;