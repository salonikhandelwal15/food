import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png'

function Section4() {
  return (
    <>
    <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                <img src={PromotionImage} className='img-fluid' alt='Promotion'/>

                </Col>
                <Col lg={6} className='px-5'>
                <h2>Nothing brings people together like a good burger</h2>
                <p>
  At Burger Bliss, every bite tells a story. Our burgers are grilled to perfection using high-quality ingredients that deliver both comfort and excitement. It’s not just food—it’s a reason to gather, to laugh, and to create memories.
</p>
<ul>
  <li>
    <p>
      Juicy, handcrafted patties made fresh daily with a blend of spices and love.
    </p>
  </li>
  <li>
    <p>
      Locally sourced ingredients ensure fresh taste and unbeatable quality.
    </p>
  </li>
  <li>
    <p>
      Enjoy quick service and cozy vibes—perfect for family meals, casual hangouts, or a solo burger fix.
    </p>
  </li>
</ul>

                </Col>
            </Row>
        </Container>
    </section>
    {/* BG Parallax Scroll */}
    <section className='bg_parallax_scroll'></section>
    </>
  )
}

export default Section4
