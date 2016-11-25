import React, { Component } from 'react';
import QuestionList from  './questionList';
import QuestionDetail from './questionDetail'
import $ from 'jquery';

const BASE_URL = 'http://localhost:3001';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      question: undefined
    }

    // expandQuestion will be used asynchronously as a callback when a question is clicked. We must guarantee that it still has (this)
    this.expandQuestion = this.expandQuestion.bind(this)
    this.clearQuestion = this.clearQuestion.bind(this)
  }

  getQuestions() {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions`,
      success: function(questions){
        // once we receive the questions from our server, we store it in the state
        this.setState({questions: questions})
      // this function is called asynchronously, therefore we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }

  getQuestion(id) {
    $.ajax({
      url: `${BASE_URL}/api/v1/questions/${id}`,
      success: function(question){
        // once we receive the questions from our server, we store it in the state
        this.setState({question: question})
      // this function is called asynchronously, therefore we must bind(this) to be able to use this.setState
      }.bind(this)
    })
  }

  clearQuestion(id){
    this.setState({question: null})
  }

  expandQuestion(id) {
    // expandQuestion is called when a question from the QuestionList component is clicked
    console.log('Question id:', id)
    this.getQuestion(id)
  }

  componentDidMount() {
    // when the component is loaded on the page, we will make an ajax request to fetch the questions
    this.getQuestions()
  }

  render() {
    var content;

    // If we have the data of a question stored in the state (clicked), it gets rendered, otherwise it renders the list of questions.
    if (this.state.question) {
      content = <QuestionDetail
        onBackClick={this.clearQuestion}
        question={this.state.question}/>
    } else {
      content = <QuestionList
        questions={this.state.questions}
        onClick={this.expandQuestion} />
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
