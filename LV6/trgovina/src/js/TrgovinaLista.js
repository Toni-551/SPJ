import Artikli from "./TrgovinaArtikl";

function Table(){
    return(
        <div className="container">
    <table className="table table-striped   ">
        <thead>
            <tr>
                <th>Id</th>
                <th>Naziv</th>
                <th>Proizvođač</th>
                <th>Model</th>
                <th>Cijena</th>
                <th>Količina</th>
            </tr>
        </thead>
        <tbody>
        <Artikli />
        </tbody>
    </table>
    </div>
    );
}
export default Table;