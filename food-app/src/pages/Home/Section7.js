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
                <h2>30 Minuties Delivery!</h2>
                <p>
                    Aliquam a augue,luctus neque purus ipsum neque undo
                    dolor primis libero tempus,blandit a cursus varius luctus neque
                    magna
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
