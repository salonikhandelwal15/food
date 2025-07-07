import React from 'react'
import { Container,Row,Carousel } from 'react-bootstrap';
import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';
import User4 from '../../assets/blog/review-author-5.jpg';

function Section6() {
  return (
    <>
    <section id='blog' className='blog_section'>
        <Container>
            <Row>
                <Carousel>
                      <Carousel.Item>
                        <Carousel.Caption>
                            
                                <div className='user_img'>
                                    <img src={User1} className='img-fluid' alt='User-1'/>
                                </div>
                              <p>
  “The burgers here are out of this world! Juicy, flavorful, and always served hot. My go-to place whenever I'm craving something amazing.”
</p>

                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                    
                                </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                            
                                <div className='user_img'>
                                    <img src={User2} className='img-fluid' alt='User-2'/>
                                </div>
                               <p>
  “Fast service and fresh ingredients make this burger joint my favorite. The spicy chicken burger is a total game changer!”
</p>

                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                    
                                </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Carousel.Caption>
                            
                                <div className='user_img'>
                                    <img src={User3} className='img-fluid' alt='User-3'/>
                                </div>
                                <p>
  “Super friendly staff and the best classic cheeseburger in town. I also love their crispy fries and dipping sauces. 10/10 experience.”
</p>

                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                                <Carousel.Item>
                        <Carousel.Caption>
                            
                                <div className='user_img'>
                                    <img src={User4} className='img-fluid' alt='User-4'/>
                                </div>
                               <p>
  “I’m obsessed with their vegan burger! It’s so tasty you won’t believe it’s plant-based. Perfect for guilt-free indulgence.”
</p>

                                <div className='item_rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                </div>
                                <h5>BY AMELIE NEWLOVE</h5>
                    
                                </Carousel.Caption>
                      </Carousel.Item>
                    
                                </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section6
