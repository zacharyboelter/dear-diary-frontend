import React from 'react'


const CreateNewDiary = props => {
    return (
        <div>
            <form>
                <textarea 
                onChange={props.saveDiaryToState}
                placeholder="Dear Diary..." 
                rows="8" cols="41" 
                required
                ></textarea>
                <br />
                <br />
                <button>Save Post</button>
            </form>
        </div>
    )
}

export default CreateNewDiary
