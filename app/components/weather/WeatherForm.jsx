import React from 'react'

export default class WeatherForm extends React.Component{
    onFormSubmit(e) {
        e.preventDefault();
        const location = this.refs.location.value;
        if(location.length>0){
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <div>
                        <input type="text" ref="location" placeholder="Enter Location"/><br/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
};
