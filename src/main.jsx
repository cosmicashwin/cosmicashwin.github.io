import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import DiscordCard from "./DiscordCard";
import { profile } from "./profile";

const github = "https://github.com/cosmicashwin";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header shell">
        <a className="brand" href="#" aria-label="Cosmic Ashwin home">
          <span className="brand-star" aria-hidden="true">
            ✳
          </span>{" "}
          cosmicashwin<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">
            Contact <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> A SMALL CORNER OF THE UNIVERSE
            </p>
            <h1 id="hero-title">
              Hello, world.
              <br />
              I’m{" "}
              <span>
                Cosmic
                <br className="desktop-break" /> Ashwin.
              </span>
            </h1>
            <p className="hero-intro">
              A little curiosity. A little creativity.
              <br />A few things sent out into the internet.
            </p>
            <a className="button" href="#projects">
              Explore my projects <span aria-hidden="true">↓</span>
            </a>
            <p className="hero-signature">
              ASHWIN KAUSHIK <span>/</span> @COSMICASHWIN
            </p>
          </div>
          <div className="cosmos" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="planet">
              <div className="planet-grain" />
            </div>
            <span className="moon" />
            <span className="cosmic-star star-one">✦</span>
            <span className="cosmic-star star-two">✦</span>
            <span className="cosmic-star star-three">+</span>
            <span className="orbit-label">IN MY OWN ORBIT</span>
            <span className="coordinate">CA — 001 / ∞</span>
          </div>
          <div className="hero-bottom">
            <span>PERSONAL SPACE, OPEN TO EXPLORE</span>
            <span>
              SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
            </span>
          </div>
        </section>
        <section
          id="about"
          className="about shell section"
          aria-labelledby="about-title"
        >
          <div className="section-label">
            <span>01 / ABOUT</span>
            <span className="tiny-star" aria-hidden="true">
              ✳
            </span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              The person behind
              <br />
              the <span className="serif">cosmic.</span>
            </h2>
            <p>
              I’m Ashwin Kaushik, also known as Cosmic Ashwin. This is my
              personal space on the web, bringing together my projects in one
              little orbit.
            </p>
            <p>
              From a collection of memes to a new look for your cursor, take a
              look around.
            </p>
            <p className="placeholder">More about me · Coming soon</p>
          </div>
        </section>
        <section
          id="projects"
          className="projects shell section"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED PROJECTS</p>
              <h2 id="projects-title">
                Things in <span className="serif">my orbit.</span>
              </h2>
            </div>
            <a className="text-link" href={github}>
              View GitHub <Arrow />
            </a>
          </div>
          <div className="project-grid">
            <a
              className="project-card"
              href={`${github}/memes`}
              aria-label="Memes — view repository on GitHub"
            >
              <div className="project-art meme-art" aria-hidden="true">
                <span className="art-index">EXPERIMENT / 001</span>
                <div className="meme-window">
                  <div className="window-bar">
                    <i />
                    <i />
                    <i />
                    <span>the internet, collected.</span>
                  </div>
                  <div className="meme-face">
                    <span>✳</span>
                    <span>✳</span>
                    <b>︶</b>
                  </div>
                  <span className="meme-caption">
                    a very serious collection.
                  </span>
                </div>
                <span className="sticker">
                  FOR THE
                  <br />
                  MEMES.
                </span>
                <span className="art-spark">✦</span>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>IMAGE COLLECTION</span>
                  <Arrow />
                </div>
                <h3>Memes</h3>
                <p>
                  A collection of meme images. A little corner of internet
                  humor, all in one place.
                </p>
                <span className="project-cta">
                  Explore repository <Arrow />
                </span>
              </div>
            </a>
            <a
              className="project-card"
              href={`${github}/vision--cursor`}
              aria-label="Vision Cursor — view repository on GitHub"
            >
              <div className="project-art cursor-art" aria-hidden="true">
                <span className="art-index">EXPERIMENT / 002</span>
                <div className="cursor-grid" />
                <svg className="cursor cursor-white" viewBox="0 0 100 140">
                  <path d="M15 8 88 84 56 86 73 125 52 134 35 94 12 117Z" />
                </svg>
                <svg className="cursor cursor-black" viewBox="0 0 100 140">
                  <path d="M15 8 88 84 56 86 73 125 52 134 35 94 12 117Z" />
                </svg>
                <span className="variant-label">
                  TWO SHADES. A NEW POINT OF VIEW.
                </span>
                <span className="variant-dots">● ◐</span>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>WINDOWS CURSOR THEMES</span>
                  <Arrow />
                </div>
                <h3>Vision Cursor</h3>
                <p>
                  A different point of view for your desktop. A Windows cursor
                  collection in black and white.
                </p>
                <span className="project-cta">
                  Explore repository <Arrow />
                </span>
              </div>
            </a>
          </div>
        </section>
        <section
          id="contact"
          className="contact shell section"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">03 / SAY HELLO</p>
            <h2 id="contact-title">
              Crossing <span className="serif">orbits?</span>
            </h2>
            <p>Say hello by email, or find me in my Discord orbit.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email} <Arrow />
            </a>
            <div className="contact-links">
              <a className="button" href={github}>
                GitHub <Arrow />
              </a>
              <span>Discord · @{profile.discordHandle}</span>
            </div>
          </div>
          <DiscordCard />
        </section>
      </main>
      <footer className="shell">
        <a className="brand" href="#">
          cosmicashwin<span className="brand-dot">.</span>
        </a>
        <span>Ashwin Kaushik · A personal orbit on the web</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
