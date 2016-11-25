import React from 'react';
import $ from 'jquery';

// A simple component to display the data of a question
function QuestionDetail (props) {

  const q = props.question

  return (
    <div className='QuestionDetail'>
    <div onClick={props.onBackClick} className='BackButton' >Back</div>
      <div>
      <h2>{q.title}</h2>
      </div><div>
      <span>Created by: </span>{q.user.first_name}
      </div><div>
      <p>{q.body}</p>
      </div><div>
      <span>Created at: </span>{q.created_at}
      </div><div>
      <span>View Count: </span>{q.view_count}
      </div>
    </div>
  )
}

export default QuestionDetail;
