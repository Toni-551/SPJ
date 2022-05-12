import artikl from "../artikli.json";

function Artikli(){
    const lista = artikl.map(x=> 
        <tr>
        <td>{x.Id}</td>
        <td>{x.Naziv}</td>
        <td>{x.Proizvodac}</td>
        <td>{x.Model}</td>
        <td>{x.Cijena}</td>
        <td>{x.Kolicina}</td>
        <Choice kolicina={x.Kolicina}/>
        </tr>
    );
    return lista;
}
function Choice(prop){
    return prop.kolicina=="0"? <td><button className="btn btn-primary" onClick={()=>PosaljiUpit(prop.kolicina)}>Posalji Upit</button></td>:<td><button className="btn btn-primary" onClick={()=>DodajUKosaru(prop.kolicina)}>Dodaj u kosaricu</button></td>;
}

function DodajUKosaru(kol){
    alert(kol);
}
function PosaljiUpit(kol){
    alert(kol);
}
export default Artikli;