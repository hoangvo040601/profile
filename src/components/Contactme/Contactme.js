import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://getform.io/f/78efd669-a552-46bf-93d7-b41a763569f5",
        {
          method: "POST",
          body: formData,
        }
      );

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
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="contactUs">Liên hệ</h1>
          {isSent ? (
            <div className="Contact">
              <p className="mb-3 text-white">Cảm ơn bạn đã phản hồi!</p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label className="namelabel">Tên </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Họ và tên"
                  id="Input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label className="emaillabel">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="Input"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="subject">
                <Form.Label className="subjectlabel">Tiêu đề</Form.Label>
                <Form.Control
                  type="text"
                  id="Input"
                  placeholder="Nhập tiêu đề"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label className="msglabel">Nội dung</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={message}
                  id="Input"
                  placeholder="Nhập nội dung"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="btn">
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

export default Contactme;
