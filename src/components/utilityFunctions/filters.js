export function quickFilterSanitizerPONotes(filters) {
  const sanitizedFilters = {...filters};
  if (sanitizedFilters.date) {
    switch (sanitizedFilters.date) {
      case 'today': {
        sanitizedFilters.date = new Date();
        sanitizedFilters.date.setHours(0, 0, 0, 0);
        break;
      }
      case 'yesterday': {
        sanitizedFilters.date = new Date();
        sanitizedFilters.date.setDate(sanitizedFilters.date.getDate() - 1);
        sanitizedFilters.date.setHours(0, 0, 0, 0);
        break;
      }
      case 'week': {
        sanitizedFilters.startDate = new Date();
        sanitizedFilters.startDate.setDate(sanitizedFilters.startDate.getDate() - 7);
        sanitizedFilters.startDate.setHours(0, 0, 0, 0);
        sanitizedFilters.endDate = new Date();
        sanitizedFilters.endDate.setHours(0, 0, 0, 0);
        break;
      }
      default: {
        sanitizedFilters.date = undefined;
      }
    }
  }
  return sanitizedFilters;
}

export default {quickFilterSanitizerPONotes};