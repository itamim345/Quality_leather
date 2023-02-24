import React from 'react';
import { Container } from 'react-bootstrap';
import "../Common.css"

export default function FeaturedProducts() {
  return (
    <section id="featured_products" className="py-5">
      <Container>
        <h2 className='text-center pb-3'>Featured Products</h2>
        <div className="fp-top">
          <div className="fp-top-left">
            <div className="bg-overlay p-5">
              <div className="d-flex align-items-center flex-column border p-5">
                <h2 className="text-white">Card Holder</h2>
                <button>Know More</button>
              </div>
            </div>
          </div>
          <div className="fp-top-right">
            <div className="bg-overlay p-5">
              <div className="d-flex align-items-center flex-column border border p-5">
                <h2 className='text-white'>Card Holder</h2>
                <button>Know More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="fp-bottom mt-4">
          <div className="bg-overlay p-5">
            <div className="border border p-5">
              <h2 className="text-white">Card Holder</h2>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
