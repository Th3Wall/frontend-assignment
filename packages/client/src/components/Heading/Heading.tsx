import "./Heading.scss";
import * as React from "react";
import pokedexLogo from "../../assets/images/mainLogo.png";

const Heading = () => {
    return (
        <section className="Heading">
            <img className="Heading__logo" src={pokedexLogo} alt="PokèDex logo" />
            <h1 className="Heading__title">Welcome to my PokèDex!</h1>
            <p className="Heading__text">You can search Pokèmons by their name or you can filter them by their type.</p>
        </section>
    );
}

export default Heading;