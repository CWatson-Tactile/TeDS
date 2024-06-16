export default {
  parseDate: (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString();
  }
}