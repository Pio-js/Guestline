import './css/Rooms.css'

export default function Rooms(props) {
    const roomsData = props.roomsData;
    const adult = props.adult;
    const children = props.children;

    //filtering rooms if you change the number of the adults and/or the number of the children 
    const filteredRooms = roomsData.filter(room => room.occupancy.maxAdults >= adult.count && room.occupancy.maxChildren >= children.count);
    const rooms = filteredRooms.length <= 0 ?
        <h3 style={{textAlign: 'center'}}>No available rooms found</h3>
        :
        filteredRooms.map((room, i) => {
            const roomName = room.name;
            const adults = room.occupancy.maxAdults;
            const children = room.occupancy.maxChildren;
            const description = room.longDescription;
            return (
                <div key={i} className='room-card'>
                    <div className='room-name'>
                        <h3>{roomName}</h3>
                        <h4>Adults: {adults}</h4>
                        <h4>Children: {children}</h4>
                    </div>
                    <p className='description'>{description}</p>
                </div>
            )
    });
    return rooms;
}