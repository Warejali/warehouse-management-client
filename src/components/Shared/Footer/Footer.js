import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer pt-5'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    <div className='text-start'>
                        <h4>ABOUT TRANSPORT</h4>
                        <p>
                            Transport offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology.
                        </p>
                    </div>
                    <div className='text-start'>
                        <h4>IMPORTANT LINK</h4>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </div>
                    <div className='text-start'>
                        <h4>TRANSPORT OFFICE</h4>
                        <p>14 Tottenham Road, London, England.</p>
                        <p>Phone: +1054879564</p>
                        <p>example@gmail.com</p>
                    </div>
                    <div className='text-start social-media-icon'>
                        <h4 className='pb-3'>SOCIAL MEDIA</h4>
                        <a href="#"><img className='' src="https://i.ibb.co/ngwCVjz/Facebook.png" alt="" /></a>
                        <a href="#"><img className='mx-2 linkedin-icon' src="https://i.ibb.co/6DZ7JYQ/Youtube.png" alt="" /></a>
                        <a href="#"><img className='mx-2' src="https://i.ibb.co/Bz7W8RM/pinterest.png" alt="" /></a>
                        <a href="#"><img className='' src="https://i.ibb.co/dLzTQs3/twiter.png" alt="" /></a>
                    </div>
                </div>
                <div className='mt-5'>
                    <p><small>Copyright @ {year} All rights reserved.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;