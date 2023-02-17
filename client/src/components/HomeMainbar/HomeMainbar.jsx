import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'



const HomeMainbar = () => {

    const location =useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionList = useSelector(state => state.questionsReducer )
   // console.log(questionList);

    /*var questionList = [{
        _id: 1,
        upvotes:3,
        downVotes:2,
        noOfAnswers:2,
        questionTitle:"What is a Function?",
        questionBody: 'It Meant to be',
        questionTags:['java','php','node js','react js'],
        userPosted:'mano',
        userId: 1,
        askedOn: 'jan 1',
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: 'jan 2',
            userId: 2,
        }]
    },{
        _id: 2,
        upvotes:0,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a Function?",
        questionBody: 'It Meant to be',
        questionTags:['java','php','node js','react js'],
        userPosted:'mano',
        askedOn: 'jan 1',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: 'jan 2',
            userId: 2,
        }]
    },{
        _id: 3,
        upvotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a Function?",
        questionBody: 'It Meant to be',
        questionTags:['java','php','node js','react js'],
        userPosted:'mano',
        askedOn: 'jan 1',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: 'jan 2',
            userId: 2,
        }]
    }]*/
    
    function checkAuth() {
        if (user === null) {
            alert("login or signup to ask a question")
            navigate('/Auth')
        } else {
            navigate('/AskQuestion')
        }
    }
    return(            
            <div className='main-bar'>
                <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }   
                <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
                </div>
                <div className=''>
                    {   
                        questionList.data === null ?
                        <h1>Question list is empty </h1> :
                        <>
                        <p>{ questionList.data.length} questions</p>                            
                            <QuestionList  questionsList={questionList.data} />
                        </>
                    }
                </div>
            </div>  
        )
}
export default HomeMainbar