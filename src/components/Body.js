import { useState } from 'react';
import resObj from '../utils/mockData'
import RestaurantCard from './RestaurantCard';


const Body = () => {

  let [resList , setResList] = useState(resObj);


    return (
      <div className="body">
        <div className="filter">
          <button className='filter-btn'
          onClick={()=>{
            resList=resList.filter((resturant)=> resturant.info.avgRating<4)
            setResList(resList)
          }}>
            Top Rated Resturants
          </button>
        </div>
        <div className="res-container">
         { resList.map((resturant) => <RestaurantCard
            key = {resturant.info.id} resData = {resturant}/>)}
        </div>
      </div>
    );
  };

  export default Body