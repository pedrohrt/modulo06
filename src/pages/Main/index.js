import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, SubmitButton, Input } from './styles';

export default class Main extends Component {
  state = {
    user: [],
  };

  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicione um usuario"
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
  headerTitleAlign: 'center',
  headerBackTitleVisible: 'false',
};
