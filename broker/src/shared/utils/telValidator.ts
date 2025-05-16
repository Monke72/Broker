export const validatePhone = (value?: string) => {
  if (!value || typeof value !== "string") {
    return;
  }

  const cleaned = value.replace(/[\s()-]/g, ""); // удаляем пробелы, скобки, тире

  if (!/^\+?\d{10,15}$/.test(cleaned)) {
    return "Введите корректный номер телефона";
  }

  return true;
};
