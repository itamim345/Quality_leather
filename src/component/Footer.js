import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="d-flex justify-content-between py-3">
        <div>
          <h5>Contact</h5>
          <span>About</span>
        </div>
        <div>
          <h5>Quick Links</h5>
        </div>
        <div>
          <h5>Product Catagories</h5>
        </div>
      </Container>
    </footer>
  );
}
