import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
  

  function UcitavanjePodataka(){
    const { EditID } = useParams();
  
    const [post, setPost] = useState(null);
    
    var oArtikl={
      naziv: " ",
       model: " ",
       porizvodac: " ",
       cijena: " ",
       kolicina: " "
     }
    useEffect(() => {
      Ucitaj();
    }, []);

  async function Ucitaj(){
    axios.get("http://localhost/SPJ/LV7/pcshop/read.php").then((response) => {
      response.data.map((element)=>{
          if(element.Id == EditID){
            oArtikl.naziv=element.Naziv;
            oArtikl.model=element.Modelo;
            oArtikl.porizvodac=element.Proizvodac;
            oArtikl.cijena=element.Cijena;
            oArtikl.kolicina=element.Kolicina;
          }
        });
        setPost(oArtikl);
      });
  } 
  if(post){
    return post;
  }else{
     return oArtikl;
  }
}


function Obrazac(){
    const [inputs, setInputs] = useState({});
    const { EditID } = useParams();
    const navigate = useNavigate();
    var oArtikl = UcitavanjePodataka();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs.Naziv, inputs.Model);
        axios({
            method: 'post',
            url: 'http://localhost/SPJ/LV7/pcshop/Update.php',
            data: {
                Id: EditID,
                Naziv: inputs.Naziv || oArtikl.naziv,
                Model: inputs.Model || oArtikl.model,
                Proizvodac: inputs.Proizvodac || oArtikl.porizvodac,
                Cijena: inputs.Cijena || oArtikl.cijena,
                Kolicina: inputs.Kolicina || oArtikl.kolicina
            },
            headers: { 
                "Content-Type": "multipart/form-data",
            } ,
        }).then(function (response) {
            //handle success
            console.log(response.data);
          }).catch(function (response) {
            //handle error
            console.log(response);
          });
          navigate('/');
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name+ value);
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
            value={inputs.Naziv || oArtikl.naziv}
            onChange={handleChange}
            />
            <label>Unesite Model:</label>
            <input
            className="form-control"
            type="text"
            name="Model"
            value={inputs.Model || oArtikl.model}
            onChange={handleChange}
            />
            <label>Unesite Proizvođać:</label>
            <input
            className="form-control"
            type="text"
            name="Proizvodac"
            value={inputs.Proizvodac || oArtikl.porizvodac}
            onChange={handleChange}
            />
            <label>Unesite Cijenu:</label>
            <input
            className="form-control"
            type="number"
            name="Cijena"
            value={inputs.Cijena || oArtikl.cijena}
            onChange={handleChange}
            />
            <label>Unesite Količina:</label>
            <input
            className="form-control"
            type="number"
            name="Kolicina"
            value={inputs.Kolicina || oArtikl.kolicina}
            onChange={handleChange}
            />
            <button className='btn btn-success' onClick={handleSubmit}>Uredi proizvod</button>
        </form>
        </div>);
}
export default Obrazac;