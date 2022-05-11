import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pageActions from '../redux/action/pageList';

const Counter = (props: any) => {
  const dispatch = useDispatch();
  const getPageList = () => {
    // pageActions.getPageList();
    let {actions} = props;
    actions.getPageList();
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.view}>
        <Text style={styles.textStyle}>{props?.counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({type: 'INCREASE_COUNTER'});
          }}>
          <Text style={styles.textStyle}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch({type: 'DECREASE_COUNTER'});
          }}>
          <Text style={styles.textStyle}>Decrease</Text>
        </TouchableOpacity>
        <Button title="Get Employee" onPress={() => getPageList()} />
        {props?.pageList?.map(employee => (
          <Text style={styles.textStyle}>{employee.name}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 100,
  },
  safeAreaView: {
    backgroundColor: '#def',
    flex: 1,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#101010',
  },
  button: {
    padding: 5,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'green',
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => {
  console.log('state', state); // state
  console.log('ownProps', ownProps); // ownProps
  return {
    counter: state.counter.counter,
    pageList: state.pageList.pageList,
  };
};
const ActionCreators = Object.assign({}, pageActions);
const mapDispatchToProps = (dispatch: any) => {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
