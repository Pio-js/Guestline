import Rooms from "./Rooms";
import ImageSlider from "./ImageSlider";
import { FaStar } from "react-icons/fa";
import './css/Hotels.css';

export default function Hotels(props) {
    const hotelData = props.hotelData;
    const roomsData = props.roomsData;

    const hotelList = hotelData.map((hotel, index) => {
        const hotelId = hotel.id;
        const name = hotel.name;
        const address = hotel.address1;
        const address2 = hotel.address2;
        const postCode = hotel.postcode;
        const town = hotel.town;
        const country = hotel.country;
        const countryCode = hotel.countryCode;
        const rating = hotel.starRating;

        //hotel stars are created from rating value
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const goldStar = <FaStar style={{color:'gold', filter: 'drop-shadow(0px 0px 1px black)'}}/>;
            const grayStar = <FaStar style={{color:'gray', filter: 'drop-shadow(0px 0px 1px black)'}}/>;
            if(i < rating){
                stars.push(<span key={i} className='stars'>{goldStar}</span>);
            } else {
                stars.push(<span key={i} className='stars'>{grayStar}</span>);
            }
        }

        const images = hotel.images;
        const slides = images.map((image, i ) => 
            <img key={i} src={image.url} alt={image.alt}/>
        );

        const hotelRooms = roomsData.filter(id => id.id === hotelId).map(roomsData => {
            const hotelRoomsArr = roomsData.data.rooms;
            return <Rooms key={roomsData.id} roomsData={hotelRoomsArr} adult={props.adult} children={props.children}/>
        });

        return (
            <div key={index} className='card-container'>
                <div className='card-header'>
                    <div className='card-image'>
                        <ImageSlider slides={slides}/>
                    </div>
                    <div className='card-text'>
                        <div className='card-title'>
                            <div className='hotel-name'>{name}</div>
                            <div className='rating'>{stars}</div>
                        </div>
                        <div className='hotel-address'>{address}, {postCode} {town} - {country} ({countryCode})</div>
                        <div className='hotel-address'>{address2}</div>
                    </div>
                </div>
                <div className='rooms-containers'>
                    {hotelRooms}
                </div>
            </div>
        );
    });

    return hotelList;
}
