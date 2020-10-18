import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "f249df23593a778783dc51759944b8e3";

export default class extends React.Component {

  state = {
    isLoading: true,
    condition: null,
    temp: null
  }

  getWeather = async(latitude, longitude) =>{

    const {
      data: {
        main: { temp }, 
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(weather[0].main);

    this.setState({
      isLoading:false,
      condition: weather[0].main,
      temp: temp
    })
  }

  getLocation = async() => {
    try {
      //throw Error();
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      //Send to API and get weather
      this.getWeather(latitude, longitude)
    } catch (error) {
      alret("Where are u?", "Can't find you, so sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  
  render(){
    return this.state.isLoading ? <Loading /> : <Weather temp={Math.round(this.state.temp)} condition={ "Mist" } />;
  }
}

