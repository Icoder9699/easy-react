import { useState } from 'react';
import './App.css';

import background from "./components/assets/images/bg.png"
import Header from './components/Header/Header';

const accardions = [
  {
    name:"Slide one",
    id:1
  },
  {
    name:"Slide two",
    id:2
  },
  {
    name:"Slide three",
    id:3
  },
  {
    name:"Slide four",
    id:4
  },
]
function App() {
  const [activeItem, setActiveItem] = useState(null)
  return (
    <div className="App">
      <Header />
        <button onClick={() => setActiveItem(null)} className="btn btn-accardion">
          Clear
        </button>
      <div className="accardion">
        {
          accardions.map((accardion, index) => {
            return (
              <div className={`accardion__item ${accardion.id === activeItem && "active"}`} onClick={() => setActiveItem(accardion.id)}>
                  <div className="accardion__item-title">
                    {accardion.name}
                  </div>
                 {accardion.id === activeItem ? (
                   <div className="accardion__item-content">
                    <img src={background} alt="bg" />
                  </div>
                 ): null}
                 <span>{accardion.id}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
