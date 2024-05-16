
import Carousel from 'react-bootstrap/Carousel';

export const Slide = ()=> {

  const  myStyle={
        color:"white",
        fontSize:"28px",
    }

  return (
    <>

    <Carousel data-bs-theme="dark" >
      <Carousel.Item >
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=First slide&bg=f5f5f5"
          src="slide1.jpeg?text=First slide&bg=f5f5f5"

          alt="First slide"
        />
        <Carousel.Caption style={myStyle} >
          <h1 >Digital Marketing</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Second slide&bg=eee"
        src="slide2.png?text=First slide&bg=f5f5f5"
          alt="Second slide"
        />
        <Carousel.Caption style={myStyle} >
          <h1>Programming</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Third slide&bg=e5e5e5"
        src="slide1.jpeg?text=First slide&bg=f5f5f5"
          alt="Third slide"
        />
        <Carousel.Caption style={myStyle} >
          <h1>Business Ideas</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}
