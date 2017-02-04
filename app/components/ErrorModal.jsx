import React from 'react';

export default class ErrorModal extends React.Component{
    render(){
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>Title</h4>
                <p>
                    Error Message
                </p>
                <p>
                    <button className="button hollow" data-close>
                        Okay
                    </button>
                </p>
            </div>
        );
    }
}
