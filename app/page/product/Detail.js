import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View,
  Button,
  Dimensions,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Detail extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      id: props.navigation.state.params,
      images: [
        require("../../image/products/mix3/one.webp"),
        require("../../image/products/mix3/two.webp"),
        require("../../image/products/mix3/three.webp"),
        require("../../image/products/mix3/four.webp"),
        require("../../image/products/mix3/five.webp"),
      ]
    }
  }

  // 返回上一页
  _goBack = () => {
    const { navigation } = this.props;
    navigation.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Swiper组件依赖父组件的宽高，如果父组件没有宽高，是无法正常显示的 */}
        <View style={styles.swiperSize}>
          <Swiper autoplay={true} showsButtons={true}>
            {
              this.state.images.map((image, index) => {
                return (
                  <View key={index}>
                    {/* 图片默认按照原比例大小展示，一般我们要限制宽高 */}
                    {/* resizeMode5种模式('cover', 'contain', 'stretch', 'repeat', 'center') */}
                    <Image 
                      style={styles.SwiperImage}
                      source={image}
                      resizeMode="contain"
                    />
                  </View>
                )
              })
            }
          </Swiper>
        </View>

        <Button title="返回" onPress={this._goBack}></Button>
        <Text style={styles.content}>{ `当前商品的ID为：${this.state.id}` }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center"
  },
  swiperSize: {
    width: "100%",
    height: 400,
    backgroundColor: "rgb(246, 246, 246)"
  },
  SwiperImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    fontSize: 24,
    color: "orange"
  }
})
