import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Premium Camper Vans for Every Journey</h1>
                <p>We believe every adventure deserves a comfortable and reliable ride. Our fleet of premium camper vans is carefully maintained and ready for every journey, giving you the freedom to travel with confidence.</p>
                <p>Whether you're planning a scenic drive, a weekend getaway, or an outdoor adventure, our flexible hourly rentals make it easy to explore on your terms.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your Next Adventure Awaits.<br />Find the perfect camper van and start your journey today.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}