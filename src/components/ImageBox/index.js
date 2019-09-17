import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation';

class ImageBox extends React.Component {
    static navigationOptions = {
        header: null,
    };

    goToPhoto = () => {
        this.props.navigation.navigate('Photo',{
            img:this.props.item.urls
        })
    };

    render() {
        const {urls, user, description, alt_description} = this.props.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={.5} onPress={this.goToPhoto}>
                    <Image
                        resizeMode={'cover'}
                        style={{width: '100%', height: 300}}
                        source={{uri: urls.small}}
                    />
                </TouchableOpacity>
                <View>
                    <Text>Photographer : {user.name}</Text>
                    <Text>Description
                        : {description ? description : alt_description ? alt_description : 'no description'}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 5,
    },
    innerBox: {
        flex: 1,
    },
    textBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default withNavigation(ImageBox)