import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  UIManager,
  findNodeHandle,
  TouchableOpacity
} from 'react-native';
// import components
import DropDown from '../components/DropDown';
import MyButton from '../components/MyButton';

export default class App extends React.Component {

  state = {
    show: false,
    position: {}
  }

  // handle showing the dropdown
  showDropDown = () => {
    if (this.button) {
      // use the uimanager to measure the button's position in the window
      UIManager.measure(findNodeHandle(this.button), (x, y, width, height, pageX, pageY) => {
        const position = { left: pageX, top: pageY, width: width, height: height };
        // setState, which updates the props that are passed to the DropDown component
        this.setState({show: true, position: { x: pageX + (width / 2), y: pageY + (2 * height / 3) }})
      });
    }
  }

  // hide the dropdown
  hideDropDown = (item) => {
    alert(item)
    this.setState({show: false, position: {}})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 100, width: 300, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
            <MyButton
              ref={ref => {this.button = ref}}
              onPress={this.showDropDown}
              title={'Menu'}
            />
          </View>
        <DropDown show={this.state.show} position={this.state.position} hide={this.hideDropDown}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

