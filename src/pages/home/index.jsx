import React, {useEffect, useState} from 'react';
import { BsSearch } from "react-icons/bs";
import manImage from '../../assets/images/man.png';
import './style.css';
import './homeResponsive.css'

// Components
import Menu from '../../components/menu';
import CityCard from '../../components/city-card';
import Pagination from '../../components/pagination';
import Message from '../../components/message';
import Loading from '../../components/loading';

// API
import getCity from '../../api/get-city';

// Helpers
import ScrollTo from '../../helpers/scroll-to';


const Home = () => {
    const [cities,setCities] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getCity('Houston',1, (data) => {
            setCities(data);
            setLoading(false);
        });
    },[]);

    const handleInput = (e) => {
        if(e.keyCode === 13) {
            let city = e.target.value;
            setLoading(true);
            getCity(city,1, (data) => {
                setCities(data);
                setLoading(false);
            });
        }
    };

    const browsePagination = (pageId) => {
        ScrollTo(0,() => {
            setLoading(true);
            getCity(cities.current_city,pageId, (data) => {
                setCities(data);
                setLoading(false);
            });
        });
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



export default Home;
