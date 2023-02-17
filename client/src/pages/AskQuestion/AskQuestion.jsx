import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { askQuestion } from '../../actions/question'
import './AskQuestion.css'

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle]=useState('')
    const [questionBody, setQuestionBody]=useState('')
    const [questionTags, setQuestionTags]=useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log({User})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted:User.result.name}, navigate))
    }

    /*const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }*/
    return ( 
        <div className='ask-question'>
            <div className="ask-ques-container">
            <h1>Ask a Public Question</h1>
            
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                        <label htmlFor='ask-question-title'> 
                            <h4>Title</h4>
                            <p>Be specific and imagine you are asking a question to another person</p>
                            <input type='text' placeholder='Question Title' id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} />
                        </label>
                        <label htmlFor='ask-question-body'>
                            <h4>Body</h4>
                            <p>include all the information someone would need to answer your question</p>
                            <textarea placeholder='' id='ask-ques-body' onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows='10' /*onKeyUp={handleEnter}*/></textarea>
                        </label>
                        <label htmlFor='ask-question-tags'>
                            <h4>Tags</h4>
                            <p>Add Upto 5 tags</p>
                            <input type='text' placeholder='e.g. html,javascript' id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.split(' '))}} />
                        </label>
                    </div>
                    <input type='submit' value='Review Your Question' className='review-btn' />
                </form>
            </div>  
        </div>       
    )
}
export default AskQuestion