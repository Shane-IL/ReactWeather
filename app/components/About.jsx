import React from 'react';

const About = (props) =>(
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>
            This is a weather application built with React. I made this for the Complete React Web App Developer Course.
        </p>
        <p>
            Here are some of the tools I used:
        </p>
        <ul>
            <li>
                <a href="http://facebook.github.io/react">React</a> - This is the React Javascript framework, used to create this app.
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - This is the weather service API used to provide weather data for the app.
            </li>
        </ul>
    </div>
);

export {About as default};
