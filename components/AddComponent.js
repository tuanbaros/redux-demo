import React, {Component} from 'react';
import {View, TextInput, TouchableHighlight, Text} from 'react-native';

import {addNewTask} from "../actions";

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ''
        };
    }

    render() {
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput
                    style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'white',
                        flex: 1
                    }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    value={this.state.newTaskName}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    onChangeText={
                        (text) => {
                            this.setState({ newTaskName: text })
                        }
                    }

                />

                <TouchableHighlight
                    style={{ marginRight: 10, width: 50 }}
                    underlayColor='blue'
                    onPress={() => {
                        if (!this.state.newTaskName.trim()) {
                            return;
                        }
                        this.props.onClickAdd(this.state.newTaskName);
                        this.setState({newTaskName: ''});
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <Text>
                            Add
                        </Text>
                    </View>

                </TouchableHighlight>

            </View>
        );
    }
}
