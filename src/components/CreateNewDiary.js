import React from 'react'
// import './Create-styles.css';


function CreateNewDiary() {


    return (
        <div>
            <form>
                <textarea placeHolder="Dear Diary..." rows="8" cols="41" required></textarea>
                <br />
                <br />
                <button>Save Post</button>
            </form>
        </div>
    )
}

export default CreateNewDiary
