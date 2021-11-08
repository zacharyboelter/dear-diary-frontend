import React, { useState } from 'react'
import CreateNewDiary from './CreateNewDiary'

const DisplayAllDiary =() => {
    const [diary,setDiary] = useState ('');
    const saveDiaryToState = event => {
        setDiary(event.target.value);
        console.log(diary)
    };
    return (
        <div>
            <CreateNewDiary 
            saveDiaryToState = {saveDiaryToState}
            />
        </div>
    )
}

export default DisplayAllDiary
