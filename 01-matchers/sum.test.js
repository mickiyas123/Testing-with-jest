const sum = require("./sum");

// deacribe is used to group tests together
describe("example test", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  //   this test fails beacuse toBe checks for exact equality using ====
  //   it("object assignment", () => {
  //     const obj = {};
  //     expect(obj).toBe({});
  //   });

  it("object assignemt", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("check truthy and falsy values", () => {
  it("check for null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    //   expect(n).toBeUndefined();
  });
});

describe("number", () => {
  it("check six plus five", () => {
    const total = 6 + 5;
    expect(total).toBeGreaterThan(8);
    expect(total).toBeGreaterThanOrEqual(11);
    expect(total).toBeLessThan(12);
  });

  it("check for floats", () => {
    const total = 0.1 + 0.2;
    expect(total).toBeCloseTo(0.299999999999);
  });
});

describe("string", () => {
  it("there is no i in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer",
  ];
  expect(shoppingList).toContain("beer");
});

function compileandroidcode() {
  throw new Error("you are using the wrong jdk");
}

describe("exceptions", () => {
  it("throws an error", () => {
    expect(() => compileandroidcode()).toThrow(Error);
    expect(() => compileandroidcode()).toThrow("you are using the wrong jdk");
  });
});
