const { succeed, fail, repair } = require("./enhancer.js");
// test away!

//The item's enhancement it's a number from 0 to 20.
//The item's durability it's a number from 0 to 100.
it("meets all Item requirements", () => {
  expect(repair(20).durability).toBe(100);
  expect(repair(99).durability).toBe(100);
  expect(repair(0).durability).toBe(100);
  expect(repair(-10).durability).toBe(100);
});

it("meets all Succeed requirements", () => {
  //The item's enhancement increases by 1.
  expect(succeed(5).enhancement).toBe(6);
  //If the item enhancement level is 20, the enhancement level is not changed.
  expect(succeed(20).enhancement).toBe(20);
  //The durability of the item is not changed.
  expect(succeed(333).durability).toBe(333);
});

it("meets all Fail requirements", () => {
  //If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  expect(fail(13).enhancement).toBe(13) && fail(13).durability.toBe(8);

  //If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  expect(fail(15).enhancement).toBe(15) && fail(15).durability.toBe(5);

  //If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  expect(fail(17).enhancement).toBe(16);
});
