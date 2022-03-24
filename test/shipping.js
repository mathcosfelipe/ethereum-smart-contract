const Shipping = artifacts.require("Shipping");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Shipping", function (/* accounts */) {
  it("should assert true", async function () {
    await Shipping.deployed();
    return assert.isTrue(true);
  });
});
