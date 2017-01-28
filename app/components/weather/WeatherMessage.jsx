import React from 'react';

const WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <p>It's {Math.round(temp)}°C in {location} right now</p>
        </div>
    );
};

export {WeatherMessage as default};
