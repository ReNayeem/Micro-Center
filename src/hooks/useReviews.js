import { useEffect, useState } from 'react';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://micro-center.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, []);
  const ulta = [...reviews];

  return [ulta, setReviews];
};

export default useReviews;
