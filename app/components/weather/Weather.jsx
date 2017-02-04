import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
    }
    handleSearch = (location) => {
        let _this = this
        _this.setState({isLoading: true, errorMessage: undefined});

        openWeatherMap.getTemp(location).then(temp=>{
            this.setState({
                location,
                temp,
                isLoading: false
            })
        }, error=>{
            this.setState({
                isLoading: false,
                errorMessage: error.message
            });
        })
    }
    render(){
        const {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp = {temp} location = {location}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal/>
                )
            }
        }

        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
};
