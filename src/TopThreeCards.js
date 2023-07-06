import React from 'react';
import './TopThreeCards.css';

const Card = ({ title, description, className }) => {
  return (
    <div className={`card ${className}`}>
        <h3>{title}</h3>
        <h5>{description}</h5>
    </div>
    );
};

const TopThreeCards = () => {
  const cardsData = [
    {
        title: '$ 4000,000',
        description: 'Total budget you own',
        className: ""
    }, {
        title: '$ 299,762',
        description: 'Spent month-to-date.',
        className: "color-lightblue"
    }, {
        title: '$ 2,874,582',
        description: 'Forecasted till month end.',
        className: "color-lightgreen"
    },
  ];

  return (
    <div className="top-three-cards">
        {cardsData.map((card, index) => (
            <Card
                key={index}
                {...card}
            />
        ))}
    </div>
  );
};

export default TopThreeCards;
