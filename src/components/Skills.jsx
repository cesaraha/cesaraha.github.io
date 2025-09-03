import React from 'react';

const Skills = ({
    titleSection,
    nameSection1,
    nameSection2,
    nameSection3,
    nameSection4,
    section1Cards,
    section2Cards,
    section3Cards,
    section4Cards
}) => {
    const SkillCard = ({ card }) => {
        const IconComponent = card.icon;
        return (
            <div className="skill-card">
                <div className="skill-card-icon">
                    <IconComponent />
                </div>
                <div className="skill-card-title">{card.title}</div>
            </div>
        );
    };

    const SkillSection = ({ nameSection, cards }) => (
        <div className="skills-each-section">
            <h5 className="skills-name-section">{nameSection}</h5>
            <div className="skills-container-squares">
                {cards.map((card, index) => (
                    <SkillCard key={index} card={card} />
                ))}
            </div>
        </div>
    );

    return (
        <div className="skills-grid-section margin-section">
            <h1 className="section-title">{titleSection}</h1>
            <SkillSection nameSection={nameSection1} cards={section1Cards} />
            <SkillSection nameSection={nameSection2} cards={section2Cards} />
            <SkillSection nameSection={nameSection3} cards={section3Cards} />
            <SkillSection nameSection={nameSection4} cards={section4Cards} />
        </div>
    );
};

export default Skills;