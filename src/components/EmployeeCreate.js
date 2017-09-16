import React , { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='jane'
          />
        </CardSection>

        <CardSection>
          <Input
            label='phone'
            placeholder='555-555-5555'
          />
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}