import { useState } from 'react';
import './Comment.css';
import CommentsForm from './CommentsForm';
export default function Comment (){

      let [comments, setComments] = useState([{
username: 'aman',
remarks: 'This is a great post!',
rating: 5
  }]);


  let addNewComment = (comment) => {
    setComments((currComments) => {
        return [...currComments, comment];
    });
}

    return (
        <div>
            <h4> All Comments</h4>
            {comments.map((comment, index) => (
                <div className="comment" key={index}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(rating={comment.rating})</span>
                    <br />
                    <p>by {comment.username}</p>
                </div>
            ))}
            
            <hr/>
            <CommentsForm addNewComment={addNewComment} />
        </div>
    );
}