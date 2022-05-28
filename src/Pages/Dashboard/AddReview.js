import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../Firebase/firebase.init';
import PageTitle from '../Shared/PageTitle';
import './Dashboard.css'

const AddReview = () => {
  const [user] = useAuthState(auth);
  const HandleAddItem = (e) => {
    e.preventDefault();

    const ratings = e.target.rating.value;
    if (ratings > 0 && ratings <= 5) {
      const username = e.target.username.value;
      const name = e.target.name.value;

      const description = e.target.review.value;
      const data = { name, ratings, username, description };
      console.log(data);
      const url = 'https://micro-center.herokuapp.com/reviews';
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      toast.success('Your review have been saved');
      e.target.reset();
    } else {
      toast.error('Enter rating between 1 to  5');
    }
  };
  return (
    <div>
      <div className="mb-5 user-profile-container mx-auto ">

        <div className='p-5'>
          <h2>Add your review</h2>
          <hr className='w-75' />
          <p>Add your fav items review here</p>
        </div>
        <form onSubmit={HandleAddItem}>

          <div class="mb-3">
            <input type="text"
              readOnly
              value={user?.displayName} name='username' class="form-control" />
          </div>
          <div class="mb-3">
            <input name='name'
              required placeholder='Item name' type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <input name='rating'
              required placeholder='Ratings 1 to 5' type="number" class="form-control" />
          </div>
          <div class="mb-3">
            <textarea name='review' placeholder='Type your review here' class="form-control"
              required rows="3"></textarea>
          </div>
          <button className='submit-button' type='submit'>ADD REVIEW</button>
        </form>
      </div>
      <PageTitle title="Add a review"></PageTitle>
    </div>
  );
};

export default AddReview;
