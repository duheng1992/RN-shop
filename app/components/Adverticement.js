import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'

export default class Adverticement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            circleSize: 10,
            circleMargin: 4,
            advertisements: [
                {
                    uri: require("../image/double-11.png")
                },
                {
                    uri: require("../image/eyes.png")
                },
                {
                    uri: require("../image/five-year.png")
                }
            ]
        }
    }

    // 挂载后启动定时器
    componentDidMount() {
        this._startTimer();
    }

    // 下载后清除定时器
    componentWillUnmount() {
        this._endTimer();
    }

    _startTimer = () => {
        this.timerId = setInterval(() => {
            // 计算下一页码
            let nextPage = this.state.currentPage + 1;
            nextPage = nextPage >= this.state.advertisements.length? 0 : nextPage;
            this.setState({currentPage: nextPage});

            // 计算scrollView组件的offsetX值，实现自动轮播
            let offsetX = Dimensions.get("window").width * this.state.currentPage;
            this.refs.scrollView.scrollTo({x: offsetX, y: 0, animated: true});
        }, 1500);
    }

    _endTimer = () => {
        clearInterval(this.timerId);
    }

    // 计算幻灯片指示器定位坐标
    _computedIndicatorOffset() {
        const indicatorCount = this.state.advertisements.length;
        const indicatorWidth = indicatorCount * this.state.circleSize
            + indicatorCount * this.state.circleMargin * 2;
        return {
            left: (Dimensions.get("window").width - indicatorWidth) / 2,
            bottom: 10
        };
    }

    render() {
        return (
            <View style={styles.advertisement}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    ref="scrollView">
                    {
                        this.state.advertisements.map((item, index) => {
                            return (
                                <View 
                                    key={index}
                                    style={[styles.item, {backgroundColor: "blue"}]}>
                                    <Image 
                                        source={item.uri}
                                        style={styles.image}>
                                    </Image>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={[styles.indicator, this._computedIndicatorOffset()]}>
                    {
                        (()=>{
                            const circleStyle = {
                                marginHorizontal: this.state.circleMargin,
                                width: this.state.circleSize,
                                height: this.state.circleSize,
                                borderRadius: this.state.circleSize / 2,
                            };

                            return this.state.advertisements.map((item, index) => {
                                return (
                                    <View key={index} style={[
                                        styles.circle, 
                                        index === this.state.currentPage? styles.circleActive : {}, 
                                        circleStyle]}>
                                    </View>
                                )
                            })
                        })()
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    advertisement: {
        height: 200,
        backgroundColor: "yellow",
    },
    item: {
        width: Dimensions.get("window").width,
        height: 200
    },
    image: {
        width: "100%",
        height: "100%"
    },
    indicator: {
        position: "absolute",
        flexDirection: "row"
    },
    circle: {
        backgroundColor: "#ccc"
    },
    circleActive: {
        backgroundColor: "red"
    }
})
