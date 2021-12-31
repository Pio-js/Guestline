import Hotels from './Hotels';
import './css/Card.css';

export default function CardsPage(props) {

    const data = props.hotels;
    const rooms = props.rooms;
    const adult = props.adult;
    const children = props.children;

    return (
        <div id='card-page'>
            {
            data.length > 0 && rooms.length > 0 ?
            <Hotels hotelData={data} roomsData={rooms} adult={adult} children={children}/>
            :
            <h1>No hotels found</h1>
            }
        </div>
    )
}
