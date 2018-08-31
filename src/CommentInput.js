import React, { Component } from 'react'
import PropTypes from 'prop-types'


class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            username:'',
            content:'',
            createdTime:''
        }
    }

    _saveUsername(username){
        localStorage.setItem('username',username)
    }

    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }

    componentDidMount(){
        this.textarea.focus()
    }

    componentWillMount(){
        this._loadUsername()
    }

    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }

    render(){
        return(
            <div className ='comment-input'>
                <div className = 'comment-field'>
                    <span className='comment-field-name'>Username:</span>
                    <div className = 'comment-field-input'>
                    <input 
                        value = {this.state.username}
                        onBlur = {this.handleUsernameBlur.bind(this)}
                        onChange = {this.handleUsernameChange.bind(this)} />  
                    </div>
                </div>
                <div className = 'coment-field'>
                    <span className = 'comment-field-name'>Comment:</span>
                    <div className = 'comment-field-input'>
                        <textarea 
                            ref = {(textarea) => this.textarea = textarea}
                            value = {this.state.content}
                            onChange = {this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className = 'comment-field-button'>
                    <button
                        onClick = {this.handleSubmit.bind(this)}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
