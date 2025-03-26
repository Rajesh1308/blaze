'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Countdown logic
    const countdownDate = new Date('April 8, 2025 09:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
  
    particlesContainer.innerHTML = ''; // Clear old particles before adding new ones
  
    const createParticles = () => {
      for (let i = 0; i < 80; i++) { // Increased particle count
        const particle = document.createElement('div');
        particle.classList.add('particle');
  
        // Random properties for each particle
        const size = Math.random() * 4 + 2; // Tiny size (2px to 6px)
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;
        const color = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(173, 216, 230, 0.9)'; // White & light blue
  
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.backgroundColor = color;
  
        particlesContainer.appendChild(particle);
      }
    };
  
    createParticles();
  }, []);
  

  return (
    <>
      <Head>
        <title>BLAZE 2025 - Inter-College Technical Event</title>
        <meta name="description" content="BLAZE 2025 - An Inter-College Technical Event by Department of Electronics and Instrumentation, GCT Coimbatore" />
      </Head>

      <div className="background">
        <div className="particles"></div> {/* Particle container */}
      </div>

      <div className="container text-center">
        <div className="department">DEPARTMENT OF ELECTRONICS AND INSTRUMENTATION</div>
        <div className="presents">PRESENTS</div>

        <h1 className="event-title">BLAZE'25</h1>

        <div className="event-type">AN INTER-COLLEGE TECHNICAL EXTRAVAGANZA</div>

        <div className="countdown-container d-flex justify-content-center">
          <div className="countdown-item"><div className="countdown-value">{days}</div><div className="countdown-label">Days</div></div>
          <div className="countdown-item"><div className="countdown-value">{hours}</div><div className="countdown-label">Hours</div></div>
          <div className="countdown-item"><div className="countdown-value">{minutes}</div><div className="countdown-label">Minutes</div></div>
          <div className="countdown-item"><div className="countdown-value">{seconds}</div><div className="countdown-label">Seconds</div></div>
        </div>

        <div className="date"> APRIL 8-9 2025</div>

        <div className="buttons-container mt-4">
          <button className="btn btn-primary event-btn">💡EXPLORE EVENTS</button>
          <button className="btn btn-secondary workshop-btn">🛠 JOIN WORKSHOP</button>
        </div>

        <h2 className="expect-title">What to Expect</h2>

        <div className="row mt-4 d-flex flex-nowrap justify-content-center">
          <div className="col-md-3 d-flex align-items-stretch flex-grow-1">
            <div className="event-card">
              <h3>💡 Technical Events</h3>
              <p>Showcase your innovation and problem-solving skills through coding, paper presentation, technical quizzes and more.</p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-stretch flex-grow-1">
            <div className="event-card">
              <h3>🛠 Workshops</h3>
              <p>Gain hands-on experience from industry experts in the latest technologies like IoT and Advanced Embedded systems.</p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-stretch flex-grow-1">
            <div className="event-card">
              <h3>🎭 Non-Technical Events</h3>
              <p>Unleash your creativity and engage in fun activities like cine funy, mind melt and more.</p>
            </div>
          </div>
        </div>

        <div className="glass-container">
          <h2 className="ready-text">Ready to Join BLAZE-25?</h2>
          <p className="sub-text">Mark your calendar for April 8-9, 2025, and be a part of this revolutionary technical symposium.</p>
          <div className="buttons-container mt-4">
            <button className="btn btn-primary event-btn">💡 EXPLORE EVENTS</button>
            <button className="btn btn-secondary workshop-btn">🛠 JOIN WORKSHOP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
