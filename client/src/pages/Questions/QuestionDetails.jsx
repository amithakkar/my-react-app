import React,{ useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'

import upvote from '../../assets/caret-up-solid.svg'
import downvote from '../../assets/caret-down-solid.svg'
import './Questions.css'
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer } from '../../actions/question'

const QuestionDetails = () => {

    const {id} = useParams()
    const questionList = useSelector(state => state.questionsReducer )
    /*var questionList = [{
        _id: '1',
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
        _id: '2',
        upvotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a Function?",
        questionBody: 'It Meant to be',
        questionTags:['java','php','node js','react js'],
        userPosted:'mano',
        askedOn: 'jan 2',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: 'jan 2',
            userId: 2,
        }]
    },{
        _id: '3',
        upvotes:3,
        downVotes:2,
        noOfAnswers:0,
        questionTitle:"What is a Function?",
        questionBody: 'It Meant to be',
        questionTags:['java','php','node js','react js'],
        userPosted:'mano',
        askedOn: 'jan 3',
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: 'jan 2',
            userId: 2,
        }]
    }]*/
    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const handlePostAns =(e, answerLength) => {
        e.preventDefault()
        if (User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        } else{
            if(Answer === '') {
                alert('Enter an answer before submitting')
            }else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name}))
            }
        }
    }

    return(
        <div className='question-details-page'>
            {
                questionList.data === null ?
                <h1>Empty Questionlist</h1> :
                <>
                    { 
                        questionList.data.filter(question => question._id === id).map(question =>(
                            <div key={question._id}>  
                                                            
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    
                                    <div className='question-details-container-2'>
                                        <div className="question-votes">
                                            <img src={upvote} alt="" width='18' />
                                            <p>{question.upVote?.length - question.downVote?.length || 0}</p>


                                            <img src={downvote} alt="" width='18' />
                                        </div>
                                        <div style={{width: "100%"}}>
                                        <p className='question-body'>{question.questionBody}</p>
                                        <div className='question-details-tags'>
                                            {
                                                question.questionTags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='question-action-user'>
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>
                                            </div>
                                            <div>
                                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                    <div>
                                                       {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </section> 
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} Answers</h3>
                                            <DisplayAnswer key={question._id} question={question} />

                                        </section>
                                    )
                                }
                                <section className='post-ans-container'>
                                    <h3 className=''>Your Answer</h3>
                                    <form onSubmit={(e) => {handlePostAns(e, question.answer.length) }}>
                                        <textarea name='' id='' cols='30' rows='10' onChange={e => setAnswer(e.target.value)}></textarea><br />
                                        <input type='Submit' className='post-ans-btn' value='Post Your Answer' />
                                    </form>
                                    <p>
                                        Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                            ))
                                        }  or 
                                        <Link to='/AskQuestion' style={{textDecoration: 'none', color:'#009dff'}}>Ask your Own Question.</Link>
                                    </p>
                                </section> 
                            </div>
                        ))
                     }
                </>
            }
        </div>
    )
}

export default QuestionDetails