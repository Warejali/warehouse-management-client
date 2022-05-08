import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact" className=" pb-5 mt-5">
            <div className="container mx-auto">
                <div className="row row-cols-1 row-cols-md-2 g-5">
                    <div>
                        <div className="p-3 mb-3 secondary-color rounded">
                            <div className='section-title text-center py-2 mt-4'>
                                <h2 className='section-heading'>WHY CHOOSE US</h2>
                            </div>
                            <div className='primary-color text-white p-3 rounded'>
                                <h5>
                                    We Are Creative & Professional
                                </h5>
                            </div>
                            <div className='p-3'>
                                <p>
                                    With over 60 years of providing world class service to their customers on the asset side, a need to provide a one stop shop for a” true customer service logistic solution” was introduced. By adding this dimension to an already dynamic and customer centric asset based provider, we feel we bring a total solution.
                                </p>
                            </div>
                            <div className='secondary-color px-3 py-2 rounded'>
                                <h5>
                                Honest And Dependable
                                </h5>
                            </div><div className='secondary-color px-3 py-2 rounded my-3'>
                                <h5>
                                Quality Commitment
                                </h5>
                            </div><div className='secondary-color px-3 py-2 rounded'>
                                <h5>
                                We Are Always Improving
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="contact-section secondary-color rounded p-3">
                            <form className='contact-form'>
                                <div className="section-title text-center mt-4">
                                    <h2 className='section-heading'>REQUEST QUOTE</h2>
                                    <p className='px-2'>We love to listen and we are eagerly waiting to talk to you regarding your project. Get in touch with us if you have any queries and we will get back to you as soon as possible.</p>
                                </div>
                                <div className="row g-3 justify-content-center">
                                    <div className="col-md-6 form-group">
                                        <label for="fname" className="form-label">Full Name</label>
                                        <input type="text" name="fname" id="fname" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label for="lname" className="form-label">Last Name</label>
                                        <input type="text" name="lname" id="lname" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label for="email" className="form-label" required>Email</label>
                                        <input type="email" name="email" id="email" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label for="phone" className="form-label" required>Email</label>
                                        <input type="number" name="phone" id="phone" className="form-control" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <label for="message">Description</label>
                                        <textarea className="form-control text-area" id="message" rows="3" placeholder="write a full description" required></textarea>
                                    </div>
                                    <div className="col-12 form-group d-flex justify-content-end">
                                        <button className=" primary-color button-style py-2 text-white px-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;