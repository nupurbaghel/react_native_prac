import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
    <View>
      <CardSection>
       <Input
          label="Name"
          placeholder="deepti"
          value={this.props.name}
          onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
       />
      </CardSection>
      <CardSection>
       <Input
        label="Phone"
        placeholder="0788-4031299"
        value={this.props.phone}
        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
       />
      </CardSection>

      <CardSection>
        <Text style={styles.pickerLabelStyle}>Shift</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
