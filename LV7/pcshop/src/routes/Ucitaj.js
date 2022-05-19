import axios from "axios";
import {useState, useEffect} from 'react';



const baseURL = "http://localhost/SPJ/LV7/pcshop/read.php";
function Ucitaj() {

    const [post, setPost] = useState(null);
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data);
    });
    }, []);

    if (!post) return null;

    const lista = post.map(element => (
        <tr>
            <td>{element.Id}</td>
            <td>{element.Naziv}</td>
            <td>{element.Proizvodac}</td>
            <td>{element.Modelo}</td>
            <td>{element.Cijena}</td>
            <td>{element.Kolicina}</td>
        </tr>
    ));
    console.log(lista);

    return (
    lista
    );
}
function Table(){
    return(
      <div className='container'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Naziv</th>
              <th>Proizvodac</th>
              <th>Model</th>
              <th>Cijena</th>
              <th>Kolicina</th>
            </tr>
          </thead>
          <tbody>
          <Ucitaj />
          </tbody>
        </table>
        </div>
    );
}
export default Table;