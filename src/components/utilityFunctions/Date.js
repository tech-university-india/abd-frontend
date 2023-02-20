export const getOnlyDateString = (date) => {
  const _date = new Date(date);
  return `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`;
}

export default {};