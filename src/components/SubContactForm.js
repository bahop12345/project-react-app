import React, { useState } from 'react'
import styled from 'styled-components'


const SubContactFormStyle = styled.form`
    width: 100%;
    .form-group {
        width : 100%;
        margin-bottom : 2rem;
    }
    label {
        font-size : 1.8rem;
        color: var(--gray-1);
    }
    input,
    textarea {
        width : 100%;
        font-size : 2.3rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea{
        min-height: 250px;
        resize : vertical;
    }
    button[type="submit"]{
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
        margin-top : 2rem;
    }
`;


function SubContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div>
            <SubContactFormStyle>
                <div className="form_group">
                    <label htmlFor="name"> Your name
                        <input
                            type="text"
                            is="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form_group">
                    <label htmlFor="email"> Email
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form_group">
                    <label htmlFor="message"> Your name
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Send</button>
            </SubContactFormStyle>
        </div>
    )
}

export default SubContactForm
