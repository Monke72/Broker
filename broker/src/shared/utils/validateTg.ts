export const validateTelegram = (value?: string) => {
  if (!value || typeof value !== "string" || !value.trim()) {
    return;
  }

  const trimmed = value.trim();

  // Проверка, что начинается с @
  if (!trimmed.startsWith("@")) {
    return "Ник должен начинаться с @";
  }

  const username = trimmed.slice(1); // убираем @ перед проверкой остальной части

  // Основная проверка
  if (!/^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(username)) {
    return "Ник может содержать только латиницу, цифры и подчёркивание, от 5 символов";
  }

  return true;
};
