import React, { Component } from 'react';

class Tweet extends Component {
    constructor(){
        super()
        this.state={
            author: this.props.author,
            content: this.props.content,
            numberOfChar: this.props.numberOfChar
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.author}</h1>
                <p>{this.state.content}</p>
                <div>{this.state.numberOfChar}</div>
            </div>
        );
    }
}

export default Tweet;