import { Container } from 'react-bootstrap'
import '../styles/storefix.css'
export default function About() {
  return (
    <Container className='homecont'>
      <h1>About</h1>
      <div>
        <h5 className='text-muted'>React TypeScript store</h5>
        <hr />
        <div>
          <ul>
            <li>For this project i used : React,TypeScript,React-Bootstrap and <a href="https://fakestoreapi.com" target="_blank">FakeStore Api</a></li>
            <li>Also check my Github <a href="https://github.com/ITPrototype" target="_blank">Link</a></li>
            <ul>
              <li>👉My <a href="https://instagram.com/mamedov.kemrannn" target="_blank" style={{color:'red'}}>Instagram <i className="fa-brands fa-instagram"></i></a></li>
              <li>👉My <a href="https://www.linkedin.com/in/kamron-mamedov-177396237/" target="_blank" style={{color:'blue'}}>LinkedIn <i className="fa-brands fa-linkedin"></i></a></li>
              <li>👉My <a href="https://t.me/DjdgsuTbshsgK12" target="_blank" style={{color:'lightblue'}}>Telegram <i className="fa-brands fa-telegram"></i></a></li>
            </ul>
            <hr />
            Also my other projects
            <ul>
              <li><a href="https://itprototype.github.io/">👉Esed Nod32 Landing page</a></li>
              <li><a href="https://6255746eb51a816482330fd4--resplendent-tapioca-aa5201.netlify.app/">👉React Food</a></li>
              <li><a href="https://bright-mandazi-82b057.netlify.app/">👉React book</a></li>
            </ul>
          </ul>
        </div>
      </div>
    </Container>
  )
}
