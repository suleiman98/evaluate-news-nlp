import { checkForUrl } from "../src/client/js/urlChecker";

describe("with url protocol", () => {
  test("should return true", () => {
    const input = "https://www.google.com";
    expect(checkForUrl(input)).toBe(true);
  });
  test("should return true", () => {
    const input = "http://www.google.com";
    expect(checkForUrl(input)).toBe(true);
  });
});

describe("without protocol", () => {
  test("should return true", () => {
    const input = "www.google.com";
    expect(checkForUrl(input)).toBe(true);
  });
  test("should return true", () => {
    const input = "google.com";
    expect(checkForUrl(input)).toBe(true);
  });
  test("should return false", () => {
    const input = "google . com";
    expect(checkForUrl(input)).toBe(false);
  });
});
