import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Nuevo usuario
        </h1>

        <p>
          Usuario
        </p>
        <input type='text'></input>
        <p>
          Correo
        </p>
        <input type='text'></input>
        <p>
          Contraseña
        </p>
        
        <input type='text'></input>
        <label>
              <input type='checkbox'></input> Acepto términos y condiciones
        </label>
        <label>
        <button type='submit' style={{fontSize:20}}>Cancelar</button>
        <button type='submit' style={{fontSize:20,marginLeft:15}}>Aceptar</button>
        </label>
      </header>
    </div>
  );
}

export default App;
