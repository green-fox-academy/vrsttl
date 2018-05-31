'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('testing if getApple returns apple', t => {
  const newApple = new Apple();

  t.equal(newApple.getApple(),'apple');
  t.end();
})

