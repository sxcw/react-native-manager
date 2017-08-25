import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@google.com'
          />
        </CardSection>

        <CardSection>
          <Input
            SecureTextEntry
            label='password'
            placeholder='password'
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;