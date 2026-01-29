import React from 'react';

import Form from '../module/Form';
import Input from '../components/Input';
import { NavLink } from 'react-router-dom';
import'../../sass/modules/_formEmail.scss';

export const FormEmail = (props) => {
//value="https://lucasdev.net/thank-you" <-- this is when you publish your web.
// action="https://formsubmit.co/lucasjoyce1@gmail.com"
//action="https://formsubmit.co/el/cesoco"
    return (
        <Form 
            action="https://formsubmit.co/lucasjoyce1@gmail.com"
            method="POST">
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{display: 'none'}} />
            <input type="hidden" name="_next"value="http://localhost:3000/thank-you"/>
            
            <label htmlFor='userName'>Name:</label>
            <Input
                className='enterInput' 
                type='text'
                name='name'
                id='userName'
                placeholder='Enter Your Name'
                required />
                
            <label htmlFor='myEmail'>Email:</label>
            <Input 
                className='enterInput'
                type='email'
                name='email'
                id='myEmail'
                placeholder='Enter Your Email address'
                required />
                
            <label htmlFor='subject'>Subject:</label>
            <Input 
                className='enterInput'
                type='text'
                name='subject'
                id='subject'
                placeholder='Enter Subject'
                required />
                
            <label htmlFor='message'>Message:</label>
            <textarea 
                className='enterTextArea'
                name="message" 
                id="message"
                rows="7" 
                cols="50" 
                placeholder="Your Message"
                required />
                
            <Input 
                className='enterSubmit'
                type='submit'
                value='Send' /> 
        </Form>
    );
};

export default FormEmail;
