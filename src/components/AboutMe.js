

export default function AboutMe({ bio }) {
    return (
        <section id="aboutMe">
            <div>
                <h1>About Me Section</h1>
                <h5>Who I am and my purpose</h5>
            </div>


            {/* why are my images not pullin in from my json file? */}

            {bio.map((data) => (
                <div className="about-me-wrapper">
                    {/* <img src={data.avatar} alt="avatar" /> */}

                    <div className="pillars">
                        {data.pillars.map((pillar) => (
                            <h5>{pillar}</h5>
                        ))}

                    </div>

                    <div className="bio">
                        <p>{data.aboutMe}</p>
                    </div>

                    {/* accessing the innder loop of transferrable skills */}
                    {/* total overkill and I could just populate directily into the component but this is good practice */}
                    {data.transferrableSkills.map((skillSet) => (
                        <div>
                            <h3>{skillSet.title}</h3>
                            <div>
                                {skillSet.skills.map((skill) => (
                                    <p>{skill}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </section>
    )
}