'use strict';

import { test } from 'tape';
import { Integers } from './sum';

test('test array addition', t => {
  const newSum = new Integers([]);
  t.equal(newSum.add(this.newSum), 0);
  t.end();
})
