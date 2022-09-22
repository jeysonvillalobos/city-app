import sortData from "../helpers/sort-data";

const base_url = 'https://jsonmock.hackerrank.com/api/food_outlets';

const getCity = (city,page,callback) => {
    fetch(`${base_url}?city=${city}&page=${page}`)
        .then(data => data.json())
        .then(rel => {
            let data = sortData(rel.data);
            callback({...rel, data,current_city: city});
        });
};

export default getCity;
