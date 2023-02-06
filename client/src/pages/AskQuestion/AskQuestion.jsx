import React from 'react'
//import { useNavigate } from 'react-router-dom'
import './AskQuestion.css'
const AskQuestion = () => {
    return ( 
        <div className='ask-question'>
            <div className="ask-ques-container">
            <h1>Ask a Public Question</h1>
                <form>
                    <div className="ask-form-container">
                        <label htmlFor='ask-question-title'> 
                            <h4>Title</h4>
                            <p>Be specific and imagine you are asking a question to another person</p>
                            <input type='text' placeholder='Question Title' id='ask-ques-title' />
                        </label>
                        <label htmlFor='ask-question-body'>
                            <h4>Body</h4>
                            <p>include all the information someone would need to answer your question</p>
                            <textarea placeholder='' id='ask-ques-body'> </textarea>
                        </label>
                        <label htmlFor='ask-question-tags'>
                            <h4>Tags</h4>
                            <p>Add Upto 5 tags</p>
                            <input type='text' placeholder='e.g. html,javascript' id='ask-ques-tags' />
                        </label>
                    </div>
                    <input type='submit' value='Review Your Question' className='review-btn' />
                </form>
            </div>  
        </div>       
    )
}
export default AskQuestion