import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiDirectionSign } from "react-icons/gi";
import { GoSignIn,GoSignOut } from "react-icons/go";
import { useContext } from "react";
import BooksContext from "../utils/BooksContext";
import { MdAssignmentInd} from "react-icons/md";

function NavbarItem() {
    const {logout}=useContext(BooksContext)
    return ( <>
    <Navbar  style={{ backgroundColor: "rgb(45, 9, 61)",color:"white" }}  bg=""  expand="lg">
  <Container style={{color:"white"}}>
    <Navbar.Brand ><Link to="/" style={{ fontSize: "25px", color: "white", textDecoration: "none" ,marginLeft:"10px",fontFamily:'Quintessential, cursive', }}>Library Books </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        {localStorage.token ? (
         <Nav className="ms-auto">
         <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",fontWeight:"600" }} to="/profile">Profile <MdAssignmentInd/></Link></Nav.Link>  
         <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",marginLeft:"5px",fontWeight:"600" }} to="/"onClick={logout} >Logout <GoSignOut/></Link></Nav.Link>
          </Nav>
         ):(
          <Nav  className="ms-auto">
      <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none" ,display:"flex",fontWeight:"600" ,marginLeft:"5px" }} to="/login" >Login   <GiDirectionSign style={{fontSize:"15px",fontWeight:"800",marginLeft:"5px"}}/></Link></Nav.Link>  
      <Nav.Link ><Link style={{ fontSize: "15px", color: "white", textDecoration: "none",marginLeft:"5px" ,fontWeight:"600"}} to="/signup">Sign Up <GoSignIn/></Link> </Nav.Link>  
         </Nav>
       )}
     
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
     );
}

export default NavbarItem;