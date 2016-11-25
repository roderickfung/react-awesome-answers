import React from 'react';
import $ from 'jquery';

function QuestionList (props) {
  return (
    <ul className='QuestionList'>
    {
      props.questions.map(
        function(question, index) {
          return (
            <li key={question.id}>
              {question.title}
            </li>
          )
        }
      )
    }
    </ul>
  )
}

// You can specify default values for your component's props
// Assign an object to the property defaultProps on the component object.
// This object will contain keys named after your props. It's values will be default values. (prevents errors if no data, instead now it will show nothing)
QuestionList.defaultProps = {
  questions: []
}

export default QuestionList;
