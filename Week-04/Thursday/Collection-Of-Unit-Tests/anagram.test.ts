'use strict';

import { test } from 'tape';
import { anagram } from './anagram';

test('is it an anagram?', t => {
  t.equal(anagram('almaa', 'amal'), false);
  t.end();
})
