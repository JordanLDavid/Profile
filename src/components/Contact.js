import React from 'react';
import {linkedin, github} from './../assets/images'

function Contact() {
    return (<div className='v-screen'>
            <h1 className='SectionHeader'>Contact Information</h1>
            <br/><br/><br/>
            <div>
                <h2> Contact Me via: jordanlenard.david@gmail.com</h2>
                <h2> You can also check my socials: </h2>
                <a href="https://www.linkedin.com/in/jordanlenarddavid/">{linkedin}</a>
                <a href="https://github.com/JordanLDavid">{github}</a>
            </div>
            </div>)
}

export default Contact;