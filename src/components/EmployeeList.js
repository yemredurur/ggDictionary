import React, { Component } from 'react';
import _ from 'lodash';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch, logoutUser } from '../actions';
import ListItem from './ListItem';
import {Button, CardSection} from './common';

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the newxt set of props that this component will be rendered with
        // this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    logoutUser() {
        this.props.logoutUser();
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <CardSection>
                    <Button onPress={this.logoutUser.bind(this)}>
                        Log Out
                    </Button>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, {
    employeesFetch, logoutUser
})(EmployeeList);