import React from 'react';
import $ from 'jquery';

function QuestionList (props) {

  const forwardQuestion = function(id) {
    // function that returns a function
    // when forward question is called, the id argument will be acessible to the function.
    return function(event) {
      props.onClick(id)
    }
  }

  // example:
  // var questionFunc = forwardQuestion(10)
  // ^ will be a function that runs
  // function(event) {
  // props.onClick(10)
  // }

  return (
    <ul className='QuestionList'>
    {
      props.questions.map( function(question, index) {
        return (
          <li
          onClick={forwardQuestion(question.id)}
          key={question.id}>
            {question.title}
          </li>
        )
      })
    }
    </ul>
  )
}

// You can specify default values for your component's props
// Assign an object to the property defaultProps on the component object.
// This object will contain keys named after your props. It's values will be default values. (prevents errors if no data, instead now it will show nothing)
QuestionList.defaultProps = {
  questions: [],
  // empty function is to prevent erros when there are no data
  onclick: function(){}
}

export default QuestionList;
