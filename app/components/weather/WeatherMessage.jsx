import React from 'react';

const WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">It's {Math.round(temp)}°C in {location} right now</h3>
    );
};

export {WeatherMessage as default};
