import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    FlatList,
    Image,
    RefreshControl,
    TouchableNativeFeedback
} from 'react-native';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            products: [
                {
                    id: "1",
                    title: "小米MIX3",
                    subTitle: "滑盖手机，咔咔咔",
                    image: ""
                },
                {
                    id: "2",
                    title: "华为Mate20",
                    subTitle: "黑科技，牛逼牛逼",
                    image: ""
                },
                {
                    id: "3",
                    title: "魅族",
                    subTitle: "漂亮无需多言",
                    image: ""
                },
                {
                    id: "4",
                    title: "锤子",
                    subTitle: "漂亮的不像实力派",
                    image: ""
                },
                {
                    id: "5",
                    title: "三星",
                    subTitle: "我的电池绝对靠谱",
                    image: ""
                },
                {
                    id: "6",
                    title: "苹果",
                    subTitle: "我的价格是真的不贵",
                    image: ""
                }
            ]
        }
    }

    // 跳转到详情页
    _toProductDetail = (item) => {
        // 我们要跳转，需要拿到navition导航对象，这个对象默认被传给导航组件
        const { navigation } = this.props;
        navigation.push("productDetail", item.id);
    }

    // FlatList组件渲染列表item
    _renderItem = ({item, index}) => {
        return (
            <TouchableNativeFeedback onPress={this._toProductDetail.bind(this, item)}>
                <View style={styles.item}>
                    <Image 
                        source={item.uri}
                        style={styles.image}>
                    </Image>
                    <View style={styles.content}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subTitle}>{item.subTitle}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }

    _keyExtractor = (item, index) => {
        return item.id;
    }

    _renderRefreshContrl = () => {
        this.setState({isRefreshing: true});
        // 使用定时器模拟请求接口的异步过程
        setTimeout(() => {
            const products = Array.from(Array(10)).map((v, i) => {
                return {
                    id: "" + i,
                    title: "小米MIX" + i,
                    subTitle: "子集描述" + i,
                    image: ""
                }
            });
            this.setState({products}, () => this.setState({isRefreshing: false}));
        }, 2000);
    }

    // 获取下拉刷新组件
    _getRefreshControl = () => {
        return (
            <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this._renderRefreshContrl}
                title="正在刷新"
                colors={["red", "yellow", "pink"]}
                progressBackgroundColor="skyblue"
                progressViewOffset={30}/>
        )
    }

    // 获取商品和商品之间的装饰物组件，不包含头部和尾部
    _getItemSeparator = () => {
        return (
            <View style={styles.itemSeparator} />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.products}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                refreshControl={this._getRefreshControl()}
                ItemSeparatorComponent={this._getItemSeparator}
            ></FlatList>
        )
    }
}

const styles = StyleSheet.create({
    products: {
        flex: 1,
        backgroundColor: "blue"
    },
    item: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        height: 60,
    },
    itemSeparator: {
        marginHorizontal: 8,
        height: 2,
        backgroundColor: "lightgray"
    },
    image: {
        marginRight: 10,
        width: 50,
        height: 50,
        backgroundColor: "green"
    },
    content: {
        flex: 1
    },
    title: {
        lineHeight: 28,
        fontSize: 16,
        color: "#000"
    },
    subTitle: {
        lineHeight: 18,
        fontSize: 12,
        color: "#ccc"
    }
})
