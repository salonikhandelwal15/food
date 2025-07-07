import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';

const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our original burger recipes are crafted with tradition and passion—featuring juicy patties, fresh buns, and signature sauces that started it all.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `We use only premium, farm-fresh ingredients in every burger. From crisp lettuce to artisan buns, quality is at the heart of everything we serve.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Hot, fresh, and fast—get your favorite burgers delivered to your doorstep in record time with our efficient and reliable delivery service.`,
  },
];


const Section2 = () => {
  return (
    <>
      <section id='about' className='about_section'>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className='text-center'>
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
  At Burger Bliss, we believe a burger is more than just food—it's a moment of joy. Our burgers are made with fresh, locally sourced ingredients, hand-crafted patties, and bold flavors that bring people together. Whether you're dining in or ordering out, taste the love in every bite.
</p>

              <Link to="/menu" className='order_now'>
                Explore full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about_wrapper'>
        <Container>
          <Row className='justify-content-md-center'>
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                <div className='about_box text-center'>
                  <div className='about_icon mb-3'>
                    <img src={cardData.image} className='img-fluid' alt="icon" style={{ width: '60px' }} />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
