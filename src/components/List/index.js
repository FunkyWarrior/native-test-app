import React from "react";
import {StyleSheet, Text, View, FlatList, ActivityIndicator, Image} from "react-native";
import {connect} from 'react-redux'
import {getData} from '../../actions/app'

import ImageBox from '../ImageBox'

export class List extends React.Component {
    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
        this.props.getData()
    }

    render() {
        const {data, isFetching} = this.props;
        return (
            <View style={styles.container}>
                {isFetching ?
                    <ActivityIndicator/> :
                    data ?
                        <FlatList
                            style={styles.list}
                            data={data}
                            renderItem={({item}) => <ImageBox item={item}/>}
                            keyExtractor={item => item.id}
                        /> : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'maroon',
        justifyContent: 'center'
    },
    list:{
        marginTop:30
    }
});

const mapStateToProps = state => {
    return {
        data: state.app.data,
        isFetching: state.app.isFetching
    }
};

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(List)