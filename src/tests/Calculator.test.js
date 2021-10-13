import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonadd = container.find('#operator-add');
    const buttonequals = container.find('#operator-equals');
    button4.simulate('click');
    buttonadd.simulate('click');
    button1.simulate('click');
    buttonequals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonsubtract = container.find('#operator-subtract');
    const buttonequals = container.find('#operator-equals');
    button7.simulate('click');
    buttonsubtract.simulate('click');
    button4.simulate('click');
    buttonequals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonmultiply = container.find('#operator-multiply');
    const buttonequals = container.find('#operator-equals');
    button3.simulate('click');
    buttonmultiply.simulate('click');
    button5.simulate('click');
    buttonequals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttondivide = container.find('#operator-divide');
    const buttonequals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttondivide.simulate('click');
    button7.simulate('click');
    buttonequals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should be able to chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttondivide = container.find('#operator-divide');
    const buttonequals = container.find('#operator-equals');
    const buttonsubtract = container.find('#operator-subtract');
    button2.simulate('click');
    button1.simulate('click');
    buttondivide.simulate('click');
    button7.simulate('click');
    buttonsubtract.simulate('click');
    button1.simulate('click');
    buttonequals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('2');
  })
  
})

// calculator.add() - add 1 to 4 and get 5
// calculator.subtract() subtract 4 from 7 and get 3
// calculator.multiply() - multiply 3 by 5 and get 15
// calculator.divide() - divide 21 by 7 and get 3
// calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation