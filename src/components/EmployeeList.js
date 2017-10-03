import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListIten from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProls) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow() {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid };
  });

  return employees;
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
