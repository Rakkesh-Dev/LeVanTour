import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Adventure Starts Here.</h1>
            <p>Rent premium camper vans by the hour and explore every destination in comfort. Whether it's a weekend escape or a spontaneous road trip, the perfect van is ready when you are.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};