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
                        <input type="search" ref="location" placeholder="Search weather by city"/><br/>
                    </div>
                    <div>
                        <button className="button expanded hollow">Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
};
