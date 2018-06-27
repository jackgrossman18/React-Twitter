import React, { Component } from 'react';
import Tweet from './Tweet'

let tweet = [
    {
        author: 'nnnn',
        content: 'jjkj',
        numberOfChar: 0
    }
]

class App extends Component {
    render() {
        let tweets = tweet.map((item)=>{
            return <Tweet author={item.author} content={item.content} numberOfChar={item.numberOfChar} />
        })
        return (
            <div>
                {tweets}
            </div>
        );
    }
}

export default App;