import React from 'react';



const question = (props) => {
    let questionObject = props.questions[props.questionIndex];
    let options = questionObject.option;
    let optionKeys = Object.keys(questionObject.option);

    return (
        <div className='questions' >
            <h3> {questionObject.section}</h3>
            <hr/>
            <p>{questionObject.question}</p>
            <h5>Select your option</h5>
            <ul >
            {optionKeys.map( (optionKey,index) => (
                
                    <li key={optionKey} onClick={()=>props.clickedOption(event,optionKey, index)} className={props.selectedOptionClassName}>{options[optionKey]}</li>
                ))}               
            
            </ul>
            <button onClick={props.btnClicked} className='btn'> Got to next Question</button>
        </div>
    )
};

export default question;