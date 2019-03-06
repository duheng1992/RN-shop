import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View,
  WebView,
} from 'react-native';

export default class Search extends Component {

  state = {
    url: {uri: "https://www.baidu.com"}
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView style={styles.webView} source={this.state.url}></WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    width: "100%",
    height: "100%",
  }
})
