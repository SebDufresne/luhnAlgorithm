const assert    = require("chai").assert;
const check = require("../index.js");

describe("#check", () => {
  it("check(3379513561108795) === true", () => {
    assert.strictEqual(check(3379513561108795), true);
  });
  it("check(49927398716) === true", () => {
    assert.strictEqual(check(49927398716), true);
  });
  it("check(49927398717) === false", () => {
    assert.strictEqual(check(49927398717), false);
  });
  it("check(1234567812345678) === false", () => {
    assert.strictEqual(check(1234567812345678), false);
  });
  it("check(1234567812345670) === true", () => {
    assert.strictEqual(check(1234567812345670), true);
  });
  it("check(79927398710) === false", () => {
    assert.strictEqual(check(79927398710), false);
  });
  it("check(79927398711) === false", () => {
    assert.strictEqual(check(79927398711), false);
  });
  it("check(79927398712) === false", () => {
    assert.strictEqual(check(79927398712), false);
  });
  it("check(79927398713) === true", () => {
    assert.strictEqual(check(79927398713), true);
  });
  it("check(79927398714) === false", () => {
    assert.strictEqual(check(79927398714), false);
  });
  it("check(79927398715) === false", () => {
    assert.strictEqual(check(79927398715), false);
  });
  it("check(79927398716) === false", () => {
    assert.strictEqual(check(79927398716), false);
  });
  it("check(79927398717) === false", () => {
    assert.strictEqual(check(79927398717), false);
  });
  it("check(79927398718) === false", () => {
    assert.strictEqual(check(79927398718), false);
  });
  it("check(79927398719) === false", () => {
    assert.strictEqual(check(79927398719), false);
  });
});