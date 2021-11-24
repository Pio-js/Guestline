import { useState, useEffect } from 'react';
import Hotels from './Hotels';
import './css/Card.css';

export default function CardsPage(props) {

    const data = props.hotels;
    const rooms = props.rooms;
    const adult = props.adult;
    const children = props.children;

    const [cards, setCards] = useState();

    useEffect(() => {
        if(data.length > 0 && rooms.length > 0){
            setCards(<Hotels hotelData={data} roomsData={rooms} adult={adult} children={children}/>);
        }else{
            setCards(<h1>No hotels found</h1>);
        }
    }, [data, rooms, adult, children]);

    return (
        <div id='card-page'>
            {cards}
        </div>
    )
}
