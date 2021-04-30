import React, {Fragment} from 'react';
import Button from 'react-bootstrap/Button';
import Cavitacion from '../../Images/cavitacion.jpg';
import Shape from '../../Images/shape.jpg';
import Massage from '../../Images/wellness.jpg';


const infoPictures = () => {
    return (
       <Fragment>
           <div className='infopictures col-12 text-center mt-5'>
                <h1 className='text-dark pt-4'>Beauty and Body Spa</h1>
                <div className='border-top border-secondary w-25 mx-auto my-3'></div>
                <p className='lead'>We are here for your body and healthcare needs</p>
           </div>
           <div className='container'>
               <div className='row my-5'>
                   <div className='col-md-4 my-4'>
                       <img className='w-100' src={Cavitacion}/>
                       <h4 className='my-4'>Body Contouring</h4>
                       <p>We offer a variety of body contouring modalities to achieve 
                           your body goals!  We provide sauna blanket treatment to improve circulation 
                           and provide joint support. </p>
                    <Button variant="secondary">Contact Us</Button>
                   </div>
                   <div className='col-md-4 my-4'>
                       <img className='w-100' src={Shape}/>
                       <h4 className='my-4'>Gluteal Enhancements</h4>
                       <p>Our method of gluteal enhancement can provide you with the size and contour
                           of your preference.  
                       </p>
                    <Button variant="secondary">Contact Us</Button>
                   </div>
                   <div className='col-md-4 my-4'>
                       <img className='w-100' src={Massage}/>
                       <h4 className='my-4'>Post Operative Care</h4>
                       <p>We are here to provide for post operative patients with post operative 
                           massage and manual lymph drainage.  Our post surgical companions are available to provide 
                           meaningful care to patients in need.</p>
                    <Button variant="secondary">Contact Us</Button>
                   </div>
               </div>
           </div>
       </Fragment>
    )
}

export default infoPictures
