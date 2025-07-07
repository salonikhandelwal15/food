import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router';

function Section7() {
  return (
    <>
    <section id='contact' className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                <h4>We Guarantee</h4>
                <h2>30 Minutes Delivery!</h2>
                <p>
  Hungry now? We’ve got you covered! Our lightning-fast delivery ensures your favorite burgers arrive hot and fresh at your door — all within just 30 minutes. Satisfaction and speed guaranteed!
</p>

                <Link to="/" className='btn btn_red px-4 py-2 rounded-0'>
                  CALL:999-888-777
                </Link>

                </Col>
            </Row>

        </Container>
    </section>
    </>
  )
}

export default Section7
