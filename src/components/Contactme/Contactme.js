

// https://getform.io/f/78efd669-a552-46bf-93d7-b41a763569f5


// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// const Contactme = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSent, setIsSent] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("message", message);

//     try {
//       const response = await fetch("https://getform.io/f/78efd669-a552-46bf-93d7-b41a763569f5", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         setIsSent(true);
//       } else {
//         console.error("Form submission failed.");
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       {isSent ? (
//         <p>Thank you for your message!</p>
//       ) : (
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="name">
//             <Form.Label>Name:</Form.Label>
//             <Form.Control
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="email">
//             <Form.Label>Email:</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="message">
//             <Form.Label>Message:</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default Contactme;




import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://getform.io/f/your-form-id", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Contact Us</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {isSent ? (
            <p className="text-center mt-3">Thank you for your message!</p>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
