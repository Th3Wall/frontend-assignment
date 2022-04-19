import "./Error.scss";
import * as React from "react";
import psyduckError from "../../assets/images/psyduck_error.png";

const Error = () => (
    <section className="Error">
        <img className="Error__img" src={psyduckError} alt="Server error fallback" />
        <h1 className="Error__title">Oh no! Something went wrong.</h1>
        <p className="Error__text">The server might be down for maintenance. Please try again later.</p>
    </section>
)

export default Error;