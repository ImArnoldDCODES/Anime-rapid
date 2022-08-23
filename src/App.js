import { useState } from 'react';
import './App.css';


export default function App() {
  const [contain, setContain] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b17ea89733msh92a5bbff3f3f518p138afbjsn2b1007c93b44',
      'X-RapidAPI-Host': 'premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com'
    }
  };

  fetch('https://premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com/rapidHandler/recent?page=0&sensitivity=0&quality=1', options)
    .then(response => response.json())
    .then(data => setContain(data[1].arturl))
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
      return (
      <div className="App">
        {contain.map((data) => {
          return (
            <div>
              {data}
            </div>
          )
        })}
      </div>
      )
  }
