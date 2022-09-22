const sortData = (data) => {
    return data.sort((a,b) => b.user_rating.average_rating - a.user_rating.average_rating);
};

export default sortData;
