import ReviewForm from "./ReviewForm";
import { useState } from "react"
export default function Review ({ review, handleDelete, handleSubmit  }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  // THIS FILE WILL HOLD OUR SECOND FORM - we need a toggle to display the form or hide it
  //  How can we use our state to toggle this form
  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  };

  return (
    <div className="Review">
      <button onClick={toggleView}>Edit</button>
      {/* 
        our handleSubmit is going to be a different function for this iteration of our ReviewForm
        What crud function will it perform?
        What does it need in this context?
        What should we pass it
    */}
      { viewEditForm ? (
        <ReviewForm 
          handleSubmit={handleSubmit}
          reviewDetails={review}
          toggleView={toggleView}
        >
          <h5>this is the edit form</h5>
        </ReviewForm>
      ) : ( 
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review.id)} >delete</button>
        </div>
      )}
    </div>
  );

}
