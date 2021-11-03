import React from 'react'
import Messenger from './Messenger'
import Posts from './Posts'
import Story from './Story'
import StoryFriends from './StoryFriends'
import Whatmind from './Whatmind'

function Middlebar() {
    return (
        <div className='middlebar'>
            <div className='storys'>

            <Story/>
            <StoryFriends/>
            </div>
            <Whatmind/>
            <Posts/>
            
            
        </div>
    )
}

export default Middlebar
