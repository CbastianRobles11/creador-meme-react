import {useState} from 'react';
import './App.css';

// /html2canvas
import html2canvas from 'html2canvas'

function App() {

  const [linea1, setlinea1] = useState('asdfgh');

  const [linea2, setlinea2] = useState('zxccvb');

  const [imagen, setimagen] = useState("fire")

  const onChangeLinea=(e)=>{
   

    let valor=e.target.value
     setlinea1(valor)
  }

  const onChangeLinea2=(e)=>{
   

    let valor=e.target.value
     setlinea2(valor)
  }

  //fucnion para select
  const onChangeImage=(e)=>{
   

    let valor=e.target.value
     setimagen(valor)
  }

  //fucnion para el boton
  const onClickExportar=(e)=>{
   

    html2canvas(document.querySelector("#meme")).then(canvas => {
      // document.body.appendChild(canvas)

      //crear una fucionpara que descargue 

      //convierte em imagen en png
      var img = canvas.toDataURL("image/png");

      //crea un link
      var link = document.createElement('a');
      
      //nombre archivo
      link.download = 'meme.png';

      // ..ling ref en imagen
      link.href = img;

      link.click();
  });
  }


  return (
    <div className="App">
        {/* //seleccionador de memes*/}
        <select onChange={onChangeImage} >
          <option value="fire" key="">Casa en Llamas</option>
          <option value="futurama" key="">Fray (futurama)</option>
          <option value="history" key="">History Channel</option>
          <option value="matrix" key="">Matrix</option>
          <option value="philosoraptor" key="">Filosoraptor</option>
          <option value="smart" key="">Nigga thinking </option>
        </select>
        <br/><br/>

        {/* //input text- 1era linea */}
        <input type="text" onChange={onChangeLinea} placeholder="linea 1" />
    <br/>
        {/* //input text -2da linea */}
        <input type="text"  onChange={onChangeLinea2}  placeholder="linea 2" />
<br/><br/><br/>
        {/* //boton exportar a jpg o png */}
        <button onClick={onClickExportar} >Exportar</button>



        {/* estructura del meme */}
        <div className="meme" id="meme">
          <span >{linea1}</span>
          <br/>

          <span>{linea2}</span>

          <img src={"memes/"+imagen+".jpg"} alt="" />
        </div>

    </div>
  );
}

export default App;
