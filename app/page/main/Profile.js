import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View,
  Picker,
  Slider,
  Switch,
  Modal,
  Button,
} from 'react-native';

export default class Profile extends Component {

  state = {
    pickerValue: "",
    sliderValue: 5,
    switchValue: false,
    isModalVisible: false,
    pickerOptions: [
      {
        id: 1,
        label: "html"
      },
      {
        id: 2,
        label: "css"
      },
      {
        id: 3,
        label: "javascript"
      },
      {
        id: 4,
        label: "react"
      },
      {
        id: 5,
        label: "vue"
      },
      {
        id: 6,
        label: "angular"
      },
    ]
  }

  // 列表选项change处理
  _onPickerValueChange = (newValue) => {
    this.setState({pickerValue: newValue});
  }

  // 滑杆change处理
  _onSliderValueChange = (newValue) => {
    this.setState({sliderValue: newValue});
  }

  // 开关change处理
  _onSwitchValueChange = (newValue) => {
    this.setState({switchValue: newValue});
  }

  // 设置Modal可视状态
  _setModalVisible = (isVisible) => {
    this.setState({isModalVisible: isVisible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> picker值：{this.state.pickerValue} </Text>
        <Text> slider值：{this.state.sliderValue} </Text>
        <Text> switch值：{this.state.switchValue} </Text>
        
        {/* 列表选项组件 */}
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={this.state.pickerValue}
          onValueChange={this._onPickerValueChange}
        >
          {
            this.state.pickerOptions.map((item, index) => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.id}
                />
              )
            })
          }
        </Picker>

        {/* 滑杆组件 */}
        <Slider
          style={styles.slider}
          value={this.state.sliderValue}
          onValueChange={this._onSliderValueChange}
          minimumValue={0}
          maximumValue={10}
          step={1}
          minimumTrackTintColor="skyblue"
          maximumTrackTintColor="hotpink"/>

          {/* 开关组件 */}
          <Switch
            style={styles.switch}
            value={this.state.switchValue}
            onValueChange={this._onSwitchValueChange}
            trackColor={{true: "green", false: "gray"}}
            thumbColor={this.state.switchValue? "hotpink" : "black"}
          />

          {/* 模态框组件 */}
          <Modal
            visible={this.state.isModalVisible}
            transparent={false}
            animationType="slide"
            // 在modal模式下，响应物理返回按钮
            onRequestClose={this._setModalVisible.bind(this, false)}
          >
            <View>
              <Text>hei，我是 Modal !!!</Text>
              <Button title="关闭" onPress={this._setModalVisible.bind(this, false)}></Button>
            </View>
          </Modal>
          <View>
            <Button title="打开模态框" onPress={this._setModalVisible.bind(this, true)}></Button>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center"
  },
  // width和height都有效果
  picker: {
    width: 200,
    height: 40,
    backgroundColor: "pink",
    borderRadius: 6
  },
  // width对于组件的外观有影响，height没有影响，只是改变了组件占据的高度
  slider: {
    width: 300,
    height: 10
  },
  // width和height都没有效果
  switch: {
    width: 300,
    height: 50
  }
})
