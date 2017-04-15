import React from 'react';
import {Link} from 'react-router';

const Examples = (props) => (
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out</p>
        <ol>
            <li>
                <Link to='/?location=Tel%20Aviv'>Tel Aviv, Israel</Link>
            </li>
            <li>
                <Link to='/?location=Pretoria'>Pretoria, South Africa</Link>
            </li>
        </ol>
    </div>
);

export {Examples as default};
