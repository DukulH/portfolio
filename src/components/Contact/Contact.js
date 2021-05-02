import { faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className=" text-center w-100 contactDiv" style={{height:"80px"}}>
                <h1 className="contactHeader underLineStyle"><span style={{ color: 'dark blue' }}>Get</span> <span style={{ color: '#E04343' }}>In Touch</span></h1>
            </div>
            <div className="contactPageLayout">
                <div className="left text-center mt-5">
                    <div className=" ml-auto my-4 w-50 cardStyle shadow rounded">
                        <div className="card-body">
                            <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkedAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                            <p className="card-text text-muted">120 west kafrul, Agargaon, Taltola, Dhaka-1207</p>
                        </div>
                    </div>
                    <div className=" ml-auto my-4 w-50 cardStyle shadow rounded">
                        <div className="card-body bodyDesign">
                            <h5 className="card-title"><FontAwesomeIcon icon={faPhoneAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Phone</h6>
                            <p className="card-text text-muted">+880 18460 69269</p>


                        </div>
                    </div>
                    <div className=" ml-auto my-4 w-50 cardStyle shadow rounded">
                        <div className="card-body">
                            <h5 className="card-title"><FontAwesomeIcon icon={faMapMarkedAlt} /></h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email</h6>
                            <p className="card-text text-muted">dukul.howlader30 @gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className="right  text-center">
                    <form className=' w-75 p-4 m-auto shadow rounded' noValidate >
                        <TextField className="w-75 my-4" id="standard-secondary" label="Name" color="secondary" />
                        <br />
                        <TextField type="email" className="w-75 my-4" id="standard-secondary" label="Email" color="secondary" />
                        <br />
                        <TextField className="w-75 my-4" id="standard-secondary" label="Details" color="secondary" />
                        <br />
                        <Button type="submit" variant="contained" color="secondary">SEND</Button>
                    </form>
                </div>
            </div>


        </>
    );
};

export default Contact;