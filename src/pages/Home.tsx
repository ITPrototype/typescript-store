import '../styles/intro.css'
import whyus from '../image/why-us.png'


export default function Home() {

  return (
    <div className="homeintro">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Welcome to Store</h1>
          <hr />
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
          <div className="buttons">
            <a href="/store" className="btn-get-started scrollto"><span>Get Started</span><i className="fa-solid fa-play"></i></a>
            <a href="" className="glightbox btn-watch-video"><span>Github</span> <i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <img src={whyus} alt="whyus" className='homeimg'/>
    </div>
  )
}
