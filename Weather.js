import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunderstorm in the house",
        subTitle:"Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#2C5364", "#0F2027"],
        title:"Drizzle",
        subTitle:"Small annoying rain"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#2C5364", "#0F2027"],
        title:"Rainy day",
        subTitle:"For more info look outside"
    },
    Snow: {
        iconName: "snowflake",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Do u wanna build a snowman?",
        subTitle:"Nope"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"..?",
        subTitle:"For more info look outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#00C6FB", "#005BEA"],
        title:"Clear and sunny day",
        subTitle:"Get some fresh air!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"Cloudy",
        subTitle:"I know it's sad"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Mist",
        subTitle:"Please drive safe!"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dust",
        subTitle:"Just don't go outside"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subTitle:"Just don't go outside"
    },
};
export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                {/* {console.log(condition)} */}
            {/* <StatusBar barStyle="light-content" /> */}
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons
                        size={96}
                        color="white"
                        name={weatherOptions[condition].iconName || "weather-sunset"} />
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}} >
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: "flex-start"
    }
})

