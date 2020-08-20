import React from 'react';
import {View,Text} from 'react-native';


const size = 40;
const borderWidth = 2;
const fontSize = 15;
const CircleWithText =(props)=>{
    return(
        <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#012e89",
          borderColor: "white",
          width: size,
          height: size,
          borderRadius: size,
          borderWidth: borderWidth,
          marginLeft: 24
        }}
      >
        <Text
          style={{
            textAlign: "center",
            // backgroundColor: "none",
            color:'white',
            fontSize: fontSize,
            lineHeight: fontSize,
          }}
        >
          {props.text}
        </Text>
      </View>
    )
}

export default CircleWithText;