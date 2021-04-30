import React, {Fragment} from 'react';
import LogoET from './LogoET';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';



const Footer = () => {
    return (
       <Fragment>
           <footer className='footer'>
               <div className='container'>
                   <div className='row text-light text-center py-4 justify-content-center'>
                       <div className='footer-logo col-sm-10 col-md-8 col-lg-6 pb-8'>
                            <LogoET/>
                            <p className='footer-info'>Please follow us on social media to keep up
                            to date on all of our specials and packages.  We look forward to building a
                            lasting relationship with each and everyone of our clients!</p>
                        <ul className='social pt-3'>
                            <li><FaFacebook /></li>
                            <li><FaInstagram /></li>
                            <li><FaTwitterSquare /></li>
                        </ul>
                       </div>
                   </div>
               </div>
           </footer>
       </Fragment>
    )
}

export default Footer
