export const format = (dateCreated) => {
  const date = new Date(dateCreated);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate;
};
