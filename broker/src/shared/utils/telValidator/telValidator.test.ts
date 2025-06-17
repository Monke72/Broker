import { validatePhone } from "./telValidator";

describe("number phone validator", () => {
  test("Корректное значение", () => {
    expect(validatePhone("3239232302")).toBe(true);
  });
  test("Корректное значение с + и пробелами", () => {
    expect(validatePhone("+7 (123) 456-78-90")).toBe(true);
  });
  test("Слишком короткое значение", () => {
    expect(validatePhone("7".repeat(9))).toBe(
      "Введите корректный номер телефона"
    );
  });
  test("Слишком длинное значение", () => {
    expect(validatePhone("7".repeat(16))).toBe(
      "Введите корректный номер телефона"
    );
  });
  test("Пустая строка", () => {
    expect(validatePhone("")).toBe("Введите корректный номер телефона");
  });
  test("Не строка", () => {
    // @ts-expect-error — чтобы проверить, что функция обрабатывает не строки
    expect(validatePhone(1234567890)).toBe("Введите корректный номер телефона");
  });
});
