const formats = {
  date: {
    month: "long",
    day: "numeric",
    year: "numeric",
  } as Intl.DateTimeFormatOptions,
  time: {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  } as Intl.DateTimeFormatOptions,
  dateModified: {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  } as Intl.DateTimeFormatOptions,
};

export default formats;
