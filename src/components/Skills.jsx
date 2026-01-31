import React from 'react';
import styles from '../styles/Skills.module.css';

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
            <div className={styles.skillCard}>
                <div className={styles.skillCardIcon}>
                    <IconComponent />
                </div>
                <div className={styles.skillCardTitle}>{card.title}</div>
            </div>
        );
    };

    const SkillSection = ({ nameSection, cards }) => (
        <div className={styles.skillsEachSection}>
            <h5 className={styles.skillsNameSection}>{nameSection}</h5>
            <div className={styles.skillsContainerSquares}>
                {cards.map((card, index) => (
                    <SkillCard key={index} card={card} />
                ))}
            </div>
        </div>
    );

    return (
        <div className={`${styles.skillsGridSection} margin-section`} id="Skills">
            <h1 className="section-title">{titleSection}</h1>
            <SkillSection nameSection={nameSection1} cards={section1Cards} />
            <SkillSection nameSection={nameSection2} cards={section2Cards} />
            <SkillSection nameSection={nameSection3} cards={section3Cards} />
            <SkillSection nameSection={nameSection4} cards={section4Cards} />
        </div>
    );
};

export default Skills;