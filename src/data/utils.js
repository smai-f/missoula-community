/* CONSTANTS */
export const mgh = "My Grandmother's Hands";
export const sp = "Somatic practice";
export const sixPm = "18:00";
export const sevenPm = "19:00";

/* PRIVATE UTILS */
let eventGuid = 0;
const createEventId = () => {
  return String(eventGuid++);
};

const createDate = (date) => {
  return new Date(date).toISOString().replace(/T.*$/, ""); // YYYY-MM-DD
};

const createDateTime = (date, time) => {
  let start = createDate(date);
  start += time ? "T" + time + ":00" : "";
  return start;
};

/* EXPORTED UTILS */
export const createSomaticPractices = (dates) =>
  dates.map((date) => createEvent(sp, date, sevenPm));

export const createEvent = (title, date, time) => {
  return {
    id: createEventId(),
    title: title,
    start: createDateTime(date, time),
  };
};
