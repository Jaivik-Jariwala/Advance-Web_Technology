import './App.css'; 

 

function App(props) { 

  return ( 

    <div className="App"> 

      <img src={props.imgUrl} /> 

      <h2> {props.name}</h2> 

      <p>Color: {props.color}</p> 

      <p>Manufacturer: {props.man}</p> 

    </div> 

  ); 

} 

 

export default App; 

 
 
