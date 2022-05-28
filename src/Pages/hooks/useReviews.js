import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://blooming-lake-83888.herokuapp.com/reviewCollection')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
};

export default useReviews;