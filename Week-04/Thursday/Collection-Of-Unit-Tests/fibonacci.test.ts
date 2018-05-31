'use strict';

import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('fibonacci input test', t => {

  t.equal(fibonacci(6), 8);
  t.end();
})