import React,{useState} from 'react';

const LikeDislike=()=>{
    const [like,setLike]=useState(0);
    const [dislike,setDisLike]= useState(0);

    const handleLike=()=>{
        setLike(like+1);
    }

    const handleDislike=()=>{
        setDisLike(dislike+1);
    }

    return(
        <div>
            <p>
            React makes it painless to create interactive UIs.Design simple views for each state in your application, 
            and React will efficiently update and render just the right components when your data changes.
            we can use javascript along with html in react.
            we also use bootstrap for making dynamic and interactive web application.
            </p>

            <button onClick={handleLike}>Like ({like})</button> <br></br>
            <button onClick={handleDislike}>Dislike ({dislike})</button>
        </div>
    )
}

export default LikeDislike;