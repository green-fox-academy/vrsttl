'use strict';
import { test } from 'tape';
import getTrickyAvg from './tricky-average';


test('check for negative numbers', (t) => {
  const newArray: number[] = [-7, -8];
  t.deepEqual(getTrickyAvg(newArray), -7.5);
  t.end();
});

test('check for fractions', (t) => {
  const newArray: number[] = [7.586, 2.657];
  t.deepEqual(getTrickyAvg(newArray), 5.1215);
  t.end();
});
