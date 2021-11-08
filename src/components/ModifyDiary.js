import React from 'react'

const ModifyDiary = () => {
    return (
        <form>
            <h1> Modify Diary</h1>
            <textarea placeholder='Dear Diary' rows='8' cols="41" required></textarea>
            <br />
            <button> Update </button>
        </form>
    )
}

export default ModifyDiary

