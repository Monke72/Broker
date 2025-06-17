import { validateName } from "./validateName";

describe("validateName", () => {
  test("Корректное значение", () => {
    expect(validateName("Artem")).toBe(true);
  });
  test("Не корректное", () => {
    expect(validateName("Artem2")).toBe(
      "Имя может содержать только буквы, пробел и тире"
    );
  });
  test("Слишком короткое значение", () => {
    expect(validateName("a")).toBe("Имя слишком короткое");
  });
  test("Слишком длинное значение", () => {
    expect(validateName("a".repeat(31))).toBe("Имя слишком длинное");
  });
});
