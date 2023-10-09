import React from 'react'
import Summary from './Summary'
import Skills from './Skills'
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';

function AboutMe() {
    return (
    <div className='v-screen'>
    <h1 className='SectionHeader'>About Me</h1>
    <br/><br/><br/>
    <MDBContainer className='center-screen'>
      <MDBRow>
        <MDBCol>
          <Summary/>
        </MDBCol>
        <MDBCol>
          <Skills/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    )
}

export default AboutMe;