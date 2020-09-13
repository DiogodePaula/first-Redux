import React from 'react'; 
import ReactDOM  from 'react-dom'; //serve para renderizar nosso código na DOM do HTML
import App from './app'; // se import com letra maiúscula para ser interpretado como componente / REGRA DO REACT

ReactDOM.render(<App />, document.getElementById('root'));