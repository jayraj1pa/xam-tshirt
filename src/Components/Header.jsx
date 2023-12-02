import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Header() {
  const wishList = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
        
        <div>
      <Navbar
        expand="lg"
        className="bg-primary text-white py-3"
        style={{ zIndex: 1 }}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <i className="fas fa-tshirt fa-xl"></i> TeeVogue
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  className="fs-4 me-3 btn btn-outline-light border"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/wishlist"
                  onMouseEnter={(e) => (e.target.style.color = "black")} // light sky blue
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Wish List <i className="fa-solid fa-heart"></i>
                  <Badge className="ms-3 rounded" bg="light" text="dark">
                    {wishList.length}
                  </Badge>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="fs-4 me-3 btn btn-outline-light border"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/cart"
                  onMouseEnter={(e) => (e.target.style.color = "black")} // light blue
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                  <Badge className="ms-3 rounded" bg="light" text="dark">
                    {cart.length}
                  </Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>





    </div>
  )
}

export default Header