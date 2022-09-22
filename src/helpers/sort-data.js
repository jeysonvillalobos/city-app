const SortData = (data) => {
    return data.sort((a,b) => b.user_rating.average_rating - a.user_rating.average_rating);
};

export default SortData;
