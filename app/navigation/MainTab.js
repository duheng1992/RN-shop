import { createBottomTabNavigator } from 'react-navigation';
import Home from '../page/main/Home';
import Profile from '../page/main/Profile';
import Search from '../page/main/Search';

// 可以把这个导航组件认为是一个复合性的页面
export default createBottomTabNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarLabel: "首页"
      })
    },
    search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarLabel: "搜索"
      })
    },
    profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarLabel: "我的"
      })
    }
  }
)
