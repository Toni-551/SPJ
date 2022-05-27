import axios from "axios";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const baseURL = "http://localhost/SPJ/LV7/pcshop/read.php";


function Ucitaj(props) {

    const [post, setPost] = useState(null);
    
    useEffect(() => {
      DBucitavanje();
    }, []);

    async function DBucitavanje(){
      axios.get(baseURL).then((response) => {
      setPost(response.data);
      });
    }

    if (!post) return null;

    const filterlista = post.filter((el) => {
      if (props.input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.Naziv.toLowerCase().includes(props.input)
    }
    });

    return (
      filterlista.map((element)=>(
        <tr>
            <td>{element.Id}</td>
            <td>{element.Naziv}</td>
            <td>{element.Proizvodac}</td>
            <td>{element.Modelo}</td>
            <td>{element.Cijena}</td>
            <td>{element.Kolicina}</td>
            <td><button className="btn btn-outline-danger" onClick={() => Delete(element.Id)}>Delete</button></td>
            <td><Link to={`Edit/${element.Id}`}><button className="btn btn-outline-secondary">Ažuriraj</button></Link></td>
        </tr>
      ))
    );

    async function Delete(elementID){
      if(window.confirm("Jesi li sure?!")){
        axios.get("http://localhost/SPJ/LV7/pcshop/Delete.php?elemetId="+elementID);
        setPost([]);
        DBucitavanje();
      }
    }
}


function Table(){
  const [input, setInput] = useState("");
  return(
    <div className='container'>
      <label>Unesite naiv aritkla:
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </label>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Naziv</th>
            <th>Proizvodac</th>
            <th>Model</th>
            <th>Cijena</th>
            <th>Kolicina</th>
            <th>Delete</th>
            <th>Ažuriraj</th>
          </tr>
        </thead>
        <tbody>
        <Ucitaj  input={input}/>
        </tbody>
      </table>
      </div>
  );
}
export default Table;