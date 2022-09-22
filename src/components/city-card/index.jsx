import React from 'react';
import CircularProgress from '../circular-progress';
import './style.css'

const CityCard = ({city,name,estimated_cost,average_rating, votes}) => {
    return (
        <div className='City'>
            <div className='city-left-side'>
                <div className='city-title'>
                    <h4>{name}</h4>
                    <span className='city-place'>{city}</span>
                </div>
                <div className='city-cost'>
                    <span className='estimated-title'>Cost:</span>
                    <span className='cost'>${estimated_cost}</span>
                </div>
            </div>
            <div className='city-right-side'>
                <div className='circular-progress'>
                    <CircularProgress
                        size={100}
                        strokeWidth={10}
                        percentage={average_rating}
                        color="#6b6aff"
                    />
                </div>
                <div className='votes'>
                    <span className='votes-title'>Votes:</span>
                    <span className='votes-value'>{votes}</span>
                </div>
            </div>
        </div>
    );
};

export default CityCard;