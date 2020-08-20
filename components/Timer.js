import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { Button } from "react-native-elements";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setMinutes(3);
    setIsActive(false);
  };

  useEffect(() => {
    props.controls({
      addSeconds: addSeconds,
      removeSeconds: removeSeconds,
      toggleStart: toggleStart,
    });
    let interval = null;
    if (isActive) {
      if (minutes <= 0 && seconds == 0) {
        setIsActive(false);
        clearInterval(interval);
      } else if (seconds == 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const addSeconds = (_seconds) => {
    if (seconds + _seconds > 60) {
      setMinutes(minutes + 1);
      setSeconds(seconds + _seconds - 60);
    } else if (seconds + _seconds == 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else {
      setSeconds(seconds + _seconds);
    }
  };
  const removeSeconds = (_seconds) => {
    if (seconds - _seconds < 0 && minutes >= 1) {
      setMinutes(minutes - 1);
      setSeconds(seconds - _seconds + 60);
    } else if (seconds - _seconds == 0) {
      console.log("60!!!");
      setSeconds(0);
    } else {
      setSeconds(seconds - _seconds);
    }
  };

  const toggleStart = () => {
    setIsActive(!isActive);
  };

  return (
    <Text>
      {minutes}:{seconds < 10 && seconds >= 0 ? "0" : null}
      {seconds}
    </Text>
  );
};

export default Timer;
