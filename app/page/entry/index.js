import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View,
  ViewPagerAndroid,
  StatusBar,
  Image,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

export default class index extends Component {

  state = {
    isAllowLeave: false,
    isAllowLeaveTime: 3,
    posters: [
      require("../../image/entry/shiyiyue.png"),
      require("../../image/entry/shiyiyuedong.png"),
      require("../../image/entry/daojishi.png"),
    ]
  }

  // 在这里我们用timeout-loop的方式每秒倒计时-1，当时间为0时，结束loop
  componentDidMount() {
    (function loop() {
      // 时间为0，用户可以离开，停止loop
      if (this.state.isAllowLeaveTime <= 0) {
        this.setState({isAllowLeave: true});
        return;
      }

      // 倒计时，loop
      setTimeout(() => {
        this.setState({isAllowLeaveTime: this.state.isAllowLeaveTime - 1});
        loop.call(this);
      }, 1000);
    }).call(this);
  }

  // 离开，跳转到首页
  _leave = () => {
    if (!this.state.isAllowLeave) return;
    const navigation = this.props.navigation;
    navigation.replace("main");
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 隐藏状态栏 */}
        <StatusBar hidden={true}/>

        {/* 宣传海报 */}
        <ViewPagerAndroid style={styles.container} initialPage={0}>
          {
            this.state.posters.map((poster, index) => {
              return (
                <View style={styles.container} key={index}>
                  <Image style={styles.poster} resizeMode="cover" source={poster}></Image>
                </View>
              )
            })
          }
        </ViewPagerAndroid>

        {/* 跳过按钮，这里因为View使用了定位，所以不能使用其它两个touchable组件，因为他们俩会有自己的组件层，不一样能够覆盖住定位的元素 */}
        <TouchableNativeFeedback onPress={this._leave}>
          <View style={[styles.leaveButton, this.state.isAllowLeave? styles.leaveButtonActive : ""]}>
            <Text style={[styles.leaveText, this.state.isAllowLeave? styles.leaveTextActive : ""]}>
              <Text>跳过</Text>
              {
                !this.state.isAllowLeave? <Text>({this.state.isAllowLeaveTime}s)</Text> : ""
              }
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  leaveButton: {
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    left: (Dimensions.get("window").width - 150) / 2,
    bottom: 50,
    width: 150,
    height: 40,
    backgroundColor: "rgba(200, 200, 200, 0.7)",
    borderRadius: 6,
    // Android不生效
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: { width:2, height:2 }
  },
  leaveButtonActive: {
    backgroundColor: "rgba(72, 72, 72, 0.9)"
  },
  leaveText: {
    textAlign: "center",
    fontSize: 24,
    color: "rgb(144, 144, 144)",
  },
  leaveTextActive: {
    color: "#fff",
    fontWeight: "bold"
  }
})
