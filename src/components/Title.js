import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit'

function Profile() {
    const name = "Jordan Lenard David";
    return (
        <div className='center-screen v-screen'>
        <MDBContainer className="my-5">
            <MDBRow>
            <MDBCol>
                <img
                src="/images/profile.png"
                className="rounded-circle"
                alt="Avatar"
                style={{ width: '400px', height: '300px' }}
                />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol>
                <h1 className='ProfileName'>{name}</h1>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
       );
}

export default Profile;