import { createStackNavigator } from 'react-navigation';
import Home from '../page/main/Home';
import ProductDetail from '../page/product/Detail';
import MainTabNavigator from './MainTab';
import Entry from '../page/entry';

// 注意：导出的是一个工厂，调用时返回全局导航组件，可以通过参数设置导航默认页
export default function(initialRouteName = "main") {
  return createStackNavigator(
    // 导航规则
    {
      entry: {
        screen: Entry,
        navigationOptions: () => ({
          header: null  
        })
      },
      // 这里把具有TabBar功能的导航作为子页面进行配置也是ok的，
      // 可以把它理解成这是一个由"多个页面合成"的子页面
      main: {
        screen: MainTabNavigator,
        navigationOptions: () => ({
          header: null  
        })
      },
      home: {
        screen: Home,
        // 首页不需要header
        navigationOptions: () => ({
          header: null  
        })
      },
      productDetail: {
        screen: ProductDetail,
        // 商品详情需要header，并且需要设置header的标题
        navigationOptions: () => ({
          title: "商品详情"
        })
      }
    },
    // 默认使用的导航
    {
      initialRouteName
    }
  )
}
