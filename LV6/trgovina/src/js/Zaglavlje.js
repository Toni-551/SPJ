import logo from '../logo.svg';

function Zaglavlje(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} height="50px" width="50px" className="App-logo" alt="logo" />
            <h3>Naziv trgovine</h3>
        </nav>);
}
export default Zaglavlje;