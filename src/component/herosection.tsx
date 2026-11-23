'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const imgStyle = {
  objectFit: "cover" as const,
  display: "block",
  width: "100%",
  height: "350px",
};

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image src="/images/bunnies.jpg" alt="cat" width={1800} height={700} priority style={imgStyle} />
        <Carousel.Caption>
          <h3>we care</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/3.jpg" alt="cat" width={1800} height={700} priority style={imgStyle} />
        <Carousel.Caption>
          <h3>we know</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/1.jpg" alt="catburger" width={1800} height={700} priority style={imgStyle} />
        <Carousel.Caption>
          <h3>we love</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;