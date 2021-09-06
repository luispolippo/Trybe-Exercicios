const verify = (password) => {
  if (password === undefined || password === null) return false;
  if (password.length <= 8) return false;
  if(!(/[A-Z]/).test(password) || !(/[a-z]/).test(password) || !(/[0-9]/).test(password)) return false;
  return true; 
}

const assert = require('assert');

assert.strictEqual(verify(), false);
assert.strictEqual(verify(''), false);
assert.strictEqual(verify('abc'), false);
assert.strictEqual(verify('abcdefghi'), false);
assert.strictEqual(verify('abcdeFghi'), false);
assert.strictEqual(verify('abcde8ghi'), false);
assert.strictEqual(verify('abcdeFghi8'), true);
