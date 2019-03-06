import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';

import Searchbar from '../../components/Searchbar';
import Adverticement from '../../components/Adverticement';
import Products from '../../components/Products';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        {/* 状态栏配置 */}
        <StatusBar
          hidden={false}
          animated={true}
          backgroundColor="#ccc"
          barStyle="light-content"
          translucent={false}
        ></StatusBar>

        {/* 搜索条 */}
        <Searchbar></Searchbar>

        {/* 轮播广告 */}
        <Adverticement></Adverticement>

        {/* 商品列表 */}
        {/* 把来自导航插件的参数传递给子组件使用 */}
        <Products {...this.props}></Products>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
