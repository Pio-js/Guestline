import { useState, useEffect } from 'react';
import CardsPage from './components/CardsPage';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [card, setCard] = useState(<h3>No hotels available</h3>);
  const [adult, setAdult] = useState({count: 2});
  const [children, setChildren] = useState({count: 0});

  const hotelsUrl = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG';
  const roomsUrl = 'https://obmng.dbm.guestline.net/api/roomRates/OBMNG/';

  //fetching rooms data and push in an array adding the hotel id
  function fetchRooms(arr){
    const hotelRoomsArr =[];
    arr.map(hotel => {
      fetch(`${roomsUrl + hotel.id}`)
      .then(response => response.json())
      .then(data => hotelRoomsArr.push({id:hotel.id, data:data}));
      return hotelRoomsArr;
    });
    setRooms(hotelRoomsArr);
  }

  //getting hotels data once at app start
  useEffect(() => {
    fetch(hotelsUrl)
      .then(response => response.json())
      .then(data => {setFilteredData(data); setData(data)});
  }, []);

  //getting rooms from filtered data
  useEffect(() => {
    if(filteredData.length > 0){
      fetchRooms(filteredData);
      console.log('data loaded');
    } else {
      console.log('no data available');
    }
  }, [filteredData]);

  //setting card page after data fetching
  useEffect(() => {
    setTimeout(() => {
      setCard(<CardsPage
                hotels={filteredData}
                rooms={rooms}
                adult={adult}
                children={children}
              />);
    }, 1000);
    
  }, [rooms, filteredData, adult, children]);

  return (
    <div id="App">
      <header id="header">
        <img id='logo' src='logo.png' alt='logo'/>
        <Filter
          data={data}
          setFilteredData={setFilteredData}
          adult={adult}
          setAdult={setAdult}
          children={children}
          setChildren={setChildren}
        />
      </header>
      <main>
        {card}
      </main>
    </div>
  );
}

export default App;
