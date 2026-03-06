import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="fs-app">
      <Header />

      <main className="fs-main">
        {/* Hero Section */}
        <section id="home" className="fs-hero">
          <div className="fs-hero__content">
            <p className="fs-pill">New • Spring collection available</p>
            <h2>Send flowers that speak your heart.</h2>
            <p className="fs-hero__text">
              Curated bouquets, hand-tied by artisans, delivered fresh to your doorstep.
              Perfect for birthdays, anniversaries, or just because.
            </p>
            <div className="fs-hero__actions">
              <button className="fs-btn fs-btn--primary">Shop</button>
              <button className="fs-btn fs-btn--ghost">View</button>
            </div>
            <div className="fs-hero__meta">
              <span>Same‑day delivery in select cities</span>
              <span>•</span>
              <span>100% freshness guarantee</span>
            </div>
          </div>
          <div className="fs-hero__image">
            <div className="fs-hero__photo" />
          </div>
        </section>

        {/* Featured Bouquets */}
        <section id="bouquets" className="fs-section">
          <div className="fs-section__header">
            <h3>Featured bouquets</h3>
            <p>Hand-picked favorites from Venky&apos;s Flower Studio.</p>
          </div>
          <div className="fs-grid">
            <article className="fs-card">
              <div className="fs-card__image fs-card__image--blush" />
              <div className="fs-card__body">
                <h4>Blushing Sunrise</h4>
                <p>Soft pink roses, ranunculus, and baby&apos;s breath in a pastel wrap.</p>
                <div className="fs-card__footer">
                  <span className="fs-price">₹1,499</span>
                  <button className="fs-btn fs-btn--outline">Add to cart</button>
                </div>
              </div>
            </article>

            <article className="fs-card">
              <div className="fs-card__image fs-card__image--ruby" />
              <div className="fs-card__body">
                <h4>Ruby Romance</h4>
                <p>Deep red roses with eucalyptus, perfect for anniversaries.</p>
                <div className="fs-card__footer">
                  <span className="fs-price">₹1,999</span>
                  <button className="fs-btn fs-btn--outline">Add to cart</button>
                </div>
              </div>
            </article>

            <article className="fs-card">
              <div className="fs-card__image fs-card__image--sunny" />
              <div className="fs-card__body">
                <h4>Sunny Wishes</h4>
                <p>Bright sunflowers and mixed seasonal blooms to light up any room.</p>
                <div className="fs-card__footer">
                  <span className="fs-price">₹1,299</span>
                  <button className="fs-btn fs-btn--outline">Add to cart</button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="fs-section fs-section--alt">
          <div className="fs-section__header">
            <h3>Why shop with Venky?</h3>
            <p>We believe every bouquet should feel personal.</p>
          </div>
          <div className="fs-columns">
            <div>
              <h4>Locally sourced freshness</h4>
              <p>
                We work with trusted growers and local markets to bring you flowers that
                stay vibrant longer in your home.
              </p>
            </div>
            <div>
              <h4>Carefully hand‑tied</h4>
              <p>
                Each arrangement is hand-crafted by our florists, wrapped beautifully, and
                finished with a handwritten note.
              </p>
            </div>
            <div>
              <h4>Thoughtful service</h4>
              <p>
                Need help picking the right bouquet? Message us and we&apos;ll suggest
                options for your occasion and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="fs-footer">
          <div className="fs-footer__content">
            <div>
              <h4>Visit our studio</h4>
              <p>
                Venky&apos;s Flower Studio, Your City, India
                <br />
                Open 9:00 AM – 8:00 PM, all days.
              </p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>
                Phone: +91-90000-00000
                <br />
                Email: hello@venkysflowershop.com
              </p>
            </div>
            <div>
              <h4>Stay in bloom</h4>
              <p>Get updates on offers and new seasonal collections.</p>
              <div className="fs-footer__newsletter">
                <input placeholder="Enter your email" />
                <button className="fs-btn fs-btn--primary">Subscribe</button>
              </div>
            </div>
          </div>
          <p className="fs-footer__bottom">
            © {new Date().getFullYear()} Venky&apos;s Flower Studio. All rights reserved.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
