import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button} from './common';

class FirstScreen extends Component {

    state = { text: '', greeting: false };

    onTextChange(text) {
        this.props.textChanged(text);
    }

    onButtonPress() {
        this.setState({ greeting: true });
    } 

    renderGreeting() {
        const { greeting, text } = this.state;

        if (greeting) {
            if (text) {
                return (
                    <Text>Hello, {text}!</Text>
                );
            }
        }
    }

    render() {
        return (
            <Card>
            <CardSection>
            <Text>Gimme your name and I'll salute you</Text>
            </CardSection>

            <CardSection>
                <Input 
                    placeholder="Tiago"
                    value={this.state.text}
                    label="Name"
                    onChangeText={text => this.setState({ text })}
                />
            </CardSection>
            
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>Get your greeting</Button>
            </CardSection>

            <CardSection>
                {this.renderGreeting()}
            </CardSection>
            
            </Card>
        );
    }
}

export default FirstScreen;
