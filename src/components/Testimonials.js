import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Testimonials = () => {
  const feedbacks = [
    {
      quote: "This is an awesome product! Highly recommended.",
      client: "Client A"
    },
    {
      quote: "Fantastic service and support. Will use again.",
      client: "Client B"
    },
    {
      quote: "A game changer for our business. Can't thank you enough!",
      client: "Client C"
    }
  ];

  return (
    <Carousel>
      {feedbacks.map((feedback, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial">
            <p>{feedback.quote}</p>
            <footer>- {feedback.client}</footer>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Testimonials;