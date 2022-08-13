
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Reactmodal = (props) => {
    const {title, image, price,category, description} = props.product;
    console.log(props.product);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <img className='w-50'  src={image} alt="" />
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <p className='text-center'>{price}</p>
          <p className='text-center'>{category}</p>
          <Modal.Body>{description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default Reactmodal;