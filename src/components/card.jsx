import React, { useState, useEffect } from 'react';

function Card({ props, Iselectedx, setSelectedCards, selectedCards }) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(false); // Reset selected state when Iselectedx changes
    }, [Iselectedx]);

    const handleClick = () => {
        setSelected(!selected);
        if (!selected) {
            setSelectedCards([...selectedCards, props.points]);
        } else {
            setSelectedCards(selectedCards.filter(point => point !== props.points));
        }
    };

    return (
        <div
            className={`card relative group select-none cursor-pointer h-40 w-80 rounded border border-slate-500 bg-slate-800 hover:border-green-400 ${selected ? 'selected-box' : ''}`}
            onClick={handleClick} isok={props.isok}>
            <h1 className="h-full w-full text-center grid items-center text-white" style={{ fontSize: '4rem' }}>
                {props.points}
            </h1>
            <span
                className={`absolute transition-all duration-75 group-hover:bg-green-400 group-hover:text-slate-900 top-1 left-1 bg-slate-950 px-3 rounded-md ${selected ? 'selected-badge' : 'hidden'}`}>{props.name}</span>
        </div>
    );
}

export default Card;


