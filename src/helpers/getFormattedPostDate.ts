const getFormattedPostDate = (date: string): string => {
  const jsDateInstance = new Date(date);

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(jsDateInstance);

  return `${day} ${month} ${year}`;
};

export default getFormattedPostDate;
