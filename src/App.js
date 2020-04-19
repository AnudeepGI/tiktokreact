import React from 'react';
import logo from './logo.svg';
import img from './img.jpg'
import './App.css';

function App() {
  var initH = window.innerHeight;
  var h = initH;
  var scrollCount = 0;
  const nextClick = () =>{
    if(scrollCount === 0){
      h = initH;
      scrollCount++;
    } else {
      h = h + h;
      scrollCount++;
    }

    window.scroll({top: h, left: 0, behavior: 'smooth' })

  }



  return (
    <div>
       <div className="App">
      <header className="App-header">
{/*   
        <iframe width="100%" height={initH}
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe> */}
  <img src={img} />

<a
          className="App-new"
          target="_blank"
          rel=""
          onClick={nextClick}
        >
         Next
        </a>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
  
        <iframe width="100%" height={initH}
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
  

<a
          className="App-new"
          target="_blank"
          rel=""
          onClick={nextClick}
        >
         Next
        </a>
      </header>
    </div>
    <div className="App">
      <header className="App-header">
  
        <iframe width="100%" height={initH}
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
  

        <a
          className="App-new"
          target="_blank"
          rel=""
          onClick={nextClick}
        >
         Next
        </a>
      </header>
    </div>
    </div>
    
  );
}

export default App;
