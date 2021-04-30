import React, {Fragment} from 'react';
import Button from 'react-bootstrap/Button';


const jumbotron = () => {
    return (
       <Fragment>
    <div className='main-info col-12 text-left text-light p-5'>
        <h1 className='main-text p-5 display-2 font-weight-bold'>Rebuild and Recover.</h1>
            <h4 className='second-text font-weight-bold'>
              Welcome to Ethereal Touch! We strive to provide great care while meeting the needs
              and expectations of every client. 
            </h4>
             <p>
              <Button variant="light">Contact Us</Button>
            </p>
      </div>
       </Fragment>
    )
}

export default jumbotron
