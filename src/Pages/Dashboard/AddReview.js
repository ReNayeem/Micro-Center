import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const HandleAddItem = (e) => {
        e.preventDefault()

        const ratings = e.target.rating.value;
        if (ratings > 0 && ratings <= 5) {

            const userName = e.target.userName.value;
            const itemName = e.target.itemName.value;
            const description = e.target.description.value;

            const data = { ratings, userName, description, itemName }
            console.log(data);
            const url = 'http://localhost:5000/reviews';
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
            toast.success('Your review have been saved')
            e.target.reset()
        } else {
            toast.error('Enter rating between 1 to  5')
        }



    };
    return (
        <div>
            <div className="w-50 my-5 mx-auto ">

                <h1>Add New Review</h1>
                <form onSubmit={HandleAddItem}>

                    <div class="mb-3">
                        <input type="text"

                            value={user?.displayName} name='userName' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input name='itemName'
                            required placeholder='Item name' type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input name='rating'
                            required placeholder='Ratings' type="number" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <textarea name='description' placeholder='type your review here' class="form-control"
                            required rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <input className='btn fw-bold btn-success  btn-outline-warning' type="submit" value='Add review' />
                    </div>
                </form>
            </div>


            <PageTitle title="Add a review"></PageTitle>
        </div>
    );
};

export default AddReview;