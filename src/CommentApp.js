import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{

    constructor(){
        super()
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('Username is missed')
        if(!comment.content) return alert('Comment is empty')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    render(){
        return(
            <div className = 'wrapper'>
                <CommentInput onSubmit = {this.handleSubmitComment.bind(this)}/>
                <CommentList comments = {this.state.comments}/>    
            </div>
        )
    }
}

export default CommentApp