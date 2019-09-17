import React from "react";
import {StyleSheet, Text, View,Image, TouchableOpacity} from "react-native";

export default class Photo extends React.Component {
    static navigationOptions = {
        header: null,
    };

    goBack = () => {
        this.props.navigation.goBack()
    };

    render() {
        const {img} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.8} onPress={this.goBack}>
                    <Image resizeMode={'contain'}
                           style={{height: '100%'}}
                           source={{uri: img.raw ? img.raw : img.full ? img.full : img.regular ? img.regular : null}}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'maroon',
        justifyContent: 'center'
    }
});
