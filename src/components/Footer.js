// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Harshit Gupta</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>Copyright © {year} HG</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">


//             <li className="social-icons">
//               <a
//                 href="https://github.com/epicharshgupta"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>

//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/harshit-gupta-854444282/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>

//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Left Section */}
        <Col md="3" className="footer-copywright">
          <h3>Designed and Developed by Harshit Gupta</h3>
        </Col>

        

        {/* Social Icons */}
        <Col md="3" className="footer-body text-end">
          <h3>Follow Me</h3>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/epicharshgupta"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/harshit-gupta-854444282/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Section */}
       <Col md="4" className="footer-body text-end">
    <h3>Contact Me</h3>
    <p style={{ color: "white", marginRight:"-200px"}}>
      📧 harshitguptapranjul@gmail.com | 📞 +91-8736853013
    </p>
    
  </Col>

      </Row>
    </Container>
  );
}

export default Footer;
