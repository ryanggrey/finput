import {load, finputReversedDelimiters, finputDefaultDelimiters} from '../pageObjects/index';
import customCommandsFactory from '../customCommands';

describe('formatting negatives', () => {
  beforeAll(load);


  describe('default delimiters', () => {
    const {typing} = customCommandsFactory(finputDefaultDelimiters);

    describe('while focused', () => {
      typing(`-`).shouldShow(`-`);
      typing(`-0`).shouldShow(`-0`);
      typing(`--`).shouldShow(`-`);
      typing(`-←0`).shouldShow(`-`);
      typing(`0-`).shouldShow(`0`);
      typing(`0-`).shouldShow(`0`);
      typing(`-1000`).shouldShow(`-1,000`);
      typing(`-1k`).shouldShow(`-1,000`);
    });

    describe('on blur', () => {
      typing(`-.`).thenBlurring().shouldShow(`-0.00`);
      typing(`-`).thenBlurring().shouldShow(`-0.00`);
      typing(`-0`).thenBlurring().shouldShow(`-0.00`);
      typing(`-0.`).thenBlurring().shouldShow(`-0.00`);
      typing(`-.66`).thenBlurring().shouldShow(`-0.66`);
      typing(`-1000`).thenBlurring().shouldShow(`-1,000.00`);
    });
  });

  describe('reversed delimiters', () => {
    const {typing} = customCommandsFactory(finputReversedDelimiters);

    describe('while focused', () => {
      typing(`-`).shouldShow(`-`);
      typing(`-0`).shouldShow(`-0`);
      typing(`--`).shouldShow(`-`);
      typing(`-←0`).shouldShow(`-`);
      typing(`0-`).shouldShow(`0`);
      typing(`0-`).shouldShow(`0`);
      typing(`-1000`).shouldShow(`-1.000`);
      typing(`-1k`).shouldShow(`-1.000`);
    });

    describe('on blur', () => {
      typing(`-,`).thenBlurring().shouldShow(`-0,00`);
      typing(`-`).thenBlurring().shouldShow(`-0,00`);
      typing(`-0`).thenBlurring().shouldShow(`-0,00`);
      typing(`-0,`).thenBlurring().shouldShow(`-0,00`);
      typing(`-,66`).thenBlurring().shouldShow(`-0,66`);
      typing(`-1000`).thenBlurring().shouldShow(`-1.000,00`);
    });
  });

});
