import logo from './logo.svg';
import './App.css';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const COLORS = {
  white: "#EEE4E7",
  blanco: '#FFFF',
  black: "#3E3E3E",
  primary: "#a65bae",
  MoradoClaro: "#FFFFFFFF",
  gris: '#abb2b9',
  naranja: '#e1665a',
}

const Button = (props) => {
  const filledBgColor = props.color || COLORS.white;
  const outlinedColor = COLORS.blanco;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.black : COLORS.primary;

  return (
    <TouchableOpacity
      style={{
        ...stylesbutton.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
        opacity: props.disabled ? 0.5 : 1, 
      }}
      onPress={props.onPress}
      disabled={props.disabled} 
    >
      <Text style={{ fontWeight: 700, fontSize: 30, color: textColor }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};


const stylesbutton = StyleSheet.create({
  button: {
      height:(40),

      borderColor: COLORS.blanco,
      borderRadius: (10),
      alignItems: 'center',
      justifyContent: 'center',
  }
})






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
        <label style={{display:'flex'}}>
        <Button
                    title="Cancelar"
                    filled
                  
                />
        <Button
                    title="Iniciar Sesion"
                    filled
                    style={{left:10}}

                />
        </label>
      </header>
    </div>
  );
}


export default App;
