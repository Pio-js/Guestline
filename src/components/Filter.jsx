import { useState } from 'react';
import { Button } from './Button';
import './css/Filter.css'
import { FaStar } from "react-icons/fa";

export default function Filter(props) {

    const data = props.data;
    const off = 'gray';
    const on = 'gold';
    //stars in the header - in the object v=value, c=color
    const [starArr, setStarArr] = useState([{v:1, c:on}, {v:2, c:off}, {v:3, c:off}, {v:4, c:off}, {v:5, c:off}]);
    const adult = props.adult;
    const setAdult = props.setAdult;
    const children = props.children;
    const setChildren = props.setChildren;

    //setting the stars you choose in the header
    //setting data in App.js when you choose a star
    function filterByRating(stars){
        const itemArr = [];
        starArr.map(item => {
            return item.v <= stars ? itemArr.push({v: item.v, c: on}): itemArr.push({v: item.v, c: off});
        });
        setStarArr(itemArr);
        
        const hotelsArr = [];
        data.filter(hotels => hotels.starRating >= stars).map(hotels => hotelsArr.push(hotels));
        props.setFilteredData(hotelsArr.sort((a, b) => (a.starRating > b.starRating) ? 1 : -1));
    }

    const starRating = starArr.map(star => 
    <span key={star.v} className='stars'  style={{color:star.c, filter: 'drop-shadow(0px 0px 1px black)'}} onClick={()=>filterByRating(star.v)}><FaStar /></span>
    );

    return (
        <div id='filter-container'>
            <div id='stars-container'>
                {starRating}
            </div>
            <div id='adult-button'>
                Adults:
                <Button sign="+" count={adult.count} updateCount={setAdult} />
                    {adult.count}
                <Button sign="-" count={adult.count} updateCount={setAdult} />
            </div>

            <div id='children-button'>
                Children:
                <Button sign="+" count={children.count} updateCount={setChildren} />
                    {children.count}
                <Button sign="-" count={children.count} updateCount={setChildren} />
            </div>
        </div>
    )
}
