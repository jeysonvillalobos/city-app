const getCity = (city,page,callback) => {
    fetch(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`)
        .then(data => data.json())
        .then(rel => {
            let sortData = rel.data.sort((a,b) => b.user_rating.average_rating - a.user_rating.average_rating);
            callback({...rel, sortData,current_city: city});
        });
};

export default getCity;