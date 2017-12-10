import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}

                    onPress={() => {
                        // todo
                    }}
                >

                </TouchableOpacity>
                <Text
                    style={{
                        margin: 10,
                        color: this.props.completed ? 'darkgreen' : 'black'
                    }}
                >
                    {this.props.taskName}
                </Text>
            </View>
        );
    }
}
