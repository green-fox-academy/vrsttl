'use strict';

import { test } from 'tape';
import { Apple } from './apple';

test('test subNum()', t => {
  const newApple = new Apple();

  t.equal(newApple.getApple(),'apple');
  t.end();
})

