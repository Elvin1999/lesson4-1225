import logo from './logo.svg';
import './App.css';
import ToolBar from './ToolBar';
import Form from './Form';
import { useState } from 'react';
import Gallery from './Gallery';
import Person from './Person';

// function App() {

//   function handleClick(){
//     alert("You clicked me!");
//   }

//   return (
//     <div className="App">
//       {/* <button  onClick={handleClick} >
//           I do not do anything
//       </button> */}
//       {/* <button  onClick={function handleClick(){
//         alert("You clicked me!");
//       }} >
//           I do not do anything
//       </button> */}

//       {/* <button  onClick={()=>{
//         alert("You clicked me!");
//       }} >
//           I do not do anything
//       </button> */}

//       {/* <ToolBar onPlayMovie={()=>alert('Playing')} 
//                 onUploadImage={()=>alert('Uploaded Successfully')}
//       ></ToolBar> */}
//     </div>
//   );
// }



function App() {

  let data=100;
  const [score,setScore]=useState(0);

  function increment(){
    //data+=1;
    //console.log(data);
    
    setScore(score+1);
  }

  return (
    // <div className="App">
    //     <h1>Score : {data}</h1>
    //     <button onClick={increment}>Up</button>
    // </div>
    <div className="App">
    {/* <h1>Score : {score}</h1>
    <button onClick={increment}>Up</button> */}


    {/* <Form></Form> */}


    {/* <Gallery></Gallery> */}
    <Person></Person>
</div>
  );
}



export default App;
