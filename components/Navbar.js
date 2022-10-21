import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <h3><b>P</b><span className='nav-title'>okedex</span></h3>
          </Navbar.Brand>
          <a href='#' className='nav-items'>kkkk</a>
          <a href='#' className='nav-items'>kkkk</a>
          <a href='#' className='nav-items'>kkkk</a>

        </Container>
      </Navbar>
    </>
  );
}

export default Nav;