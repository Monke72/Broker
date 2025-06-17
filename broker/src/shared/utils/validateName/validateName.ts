export const validateName = (value: string) => {
  if (!value.trim()) return;
  if (!/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value))
    return "Имя может содержать только буквы, пробел и тире";
  if (value.length < 2) return "Имя слишком короткое";
  if (value.length > 30) return "Имя слишком длинное";
  return true;
};
