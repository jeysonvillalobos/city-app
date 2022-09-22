import React, {useEffect, useState} from 'react';
import { BsSearch } from "react-icons/bs";
import manImage from '../../assets/images/man.png';
import './style.css';
import './homeResponsive.css'

import Menu from '../../components/menu';
import CityCard from '../../components/city-card';
import Pagination from '../../components/pagination';
import Message from '../../components/message';
import Loading from '../../components/loading';

const Home = () => {
    const [cities,setCities] = useState([]);
    const [loading,setLoading] = useState(true);
    const [currentCity,setCurrentCity] = useState('');

    useEffect(() => {
        getCity('Houston',1,setCities,setCurrentCity,setLoading);
    },[]);

    const handleInput = (e) => {
        if(e.keyCode === 13) {
            let city = e.target.value;
            setLoading(true);
            getCity(city,1,setCities,setCurrentCity,setLoading);
        }
    };

    const browsePagination = (pageId) => {
        window.scrollTo({top: 0,behavior: "smooth"});
        setLoading(true);
        getCity(currentCity,pageId,setCities,setCurrentCity,setLoading);
    };
   
    return (
        <div className='Home'>
            <Menu/>
            <div className='home-main'>
                <div className='input'>
                    <BsSearch className='input-icon-search'/>
                    <input 
                        type="text" 
                        placeholder='Search city'
                        className='input-search'
                        onKeyDown={handleInput}
                    />
                </div>
                <Message 
                    id='main-message'
                    title='Find the best places!'
                    text='In App City you have the opportunity to find the best places in each city.'
                    image={manImage}
                />
                {cities.data && cities.data.length === 0 ? 
                    <Message 
                        title='Sorry'
                        text='The city you are looking for is not in our database. Try looking for Miami.'
                    /> : ''
                }
                {loading && <Loading/>}
                <div className='home-city'>
                    {cities.data && cities.data.map(city => (
                        <CityCard
                            key={city.id}
                            city={city.city} 
                            name={city.name}
                            estimated_cost={city.estimated_cost}
                            average_rating={city.user_rating.average_rating}
                            votes={city.user_rating.votes}
                        />
                    ))}
                </div>
                <Pagination 
                    browsePagination={browsePagination} 
                    page={cities.page} 
                    total_pages={cities.total_pages}
                />
            </div>
        </div> 
    );
};


const getCity = (city,page, setState,setCurrentCity,setLoading) => {
    fetch(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`)
        .then(data => data.json())
        .then(rel => {
            let sortData = rel.data.sort((a,b) => b.user_rating.average_rating - a.user_rating.average_rating);
            setState({...rel, sortData});
            setCurrentCity(city);
            setLoading(false);
        });

};

export default Home;
