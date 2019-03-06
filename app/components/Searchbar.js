import React, { Component } from 'react'
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput,
    Button,
    Alert
} from 'react-native'

export default class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    _changeText = (newValue) => {
        this.setState({searchValue: newValue})
    }

    _search = () => {
        Alert.alert(this.state.searchValue);
    }

    render() {
        return (
            <View style={styles.searchbar}>
                <TextInput 
                    placeholder="输入搜索关键字"
                    value={this.state.searchval}
                    onChangeText={this._changeText}
                    style={styles.input} 
                ></TextInput>
                <Button
                    title="搜索"
                    onPress={this._search}
                    style={styles.button}
                ></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchbar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 40,
    },
    input: {
        flex: 1,
        marginRight: 10,
        paddingLeft: 6,
        height: 30,
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 5,
        lineHeight: 12,
        fontSize: 12
    },
    button: {
        width: 40,
        height: 30,
        backgroundColor: "green"
    }
})
