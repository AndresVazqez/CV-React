import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
    return (
        <div className="hero">
            <img src={hero.image} alt={hero.name} />
            <div className="card">
                <h2>
                    {hero.name}
                </h2>
                <p>πΊοΈ {hero.city} </p>
                <p>ποΈ {hero.birthDate}</p>
                <p>
                    π§ <a href={"mailto:" + hero.email}>aavsz0811@gmail.com</a>
                </p>                
                <p>
                    πΎ <a href={hero.gitHub}>GitHub</a>
                     </p>
            </div>
            <div className="about">
                <h4>About Me</h4>
                {
                    hero.aboutMe.map((item) => {
                        return (
                            <ul key={JSON.stringify(item)}>
                                <li>{item.info}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </div> 
  ) 
};

export default Hero;