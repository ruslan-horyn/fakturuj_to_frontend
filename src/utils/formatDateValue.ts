export const formatDateValue= (value: string) => {
  if (!value.includes('T')) return value
  return value.split('T')[0]
};
