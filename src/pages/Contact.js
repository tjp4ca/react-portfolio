import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name'>

                    </input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email'>
                    
                    </input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5'>

                    </textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact