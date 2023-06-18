//  возвращает массив контактов из состояния Redux.  получения списка контактов.
export const getContacts = state => state.contacts.items;
// возвращает значение фильтра , проверяет, является ли filterValue строкой , если не строка то filterValue = ''
export const getFilteredContact = state => {
  const filterValue = state.filter.filterValue;
  if (typeof filterValue !== 'string') {
    return '';
  }
  return filterValue;
}
// для обращения к статусу isLoading
export const getLoader = state => state.contacts.isLoading;