/* CONSTANTS */
export const mgh: string = "My Grandmother's Hands";
export const sp: string = "Somatic practice";
export const sixPm: string = "18:00";
export const sevenPm: string = "19:00";

/* PRIVATE UTILS */
let eventGuid: number = 0;
const createEventId = () => {
  return String(eventGuid++);
};

const createDate = (date: string) => {
  return new Date(date).toISOString().replace(/T.*$/, ""); // YYYY-MM-DD
};

const createDateTime = (date: string, time: string) => {
  let start = createDate(date);
  start += time ? "T" + time + ":00" : "";
  return start;
};

export type MGHEvent = {
  id: string;
  title: string;
  start: string;
};

/* EXPORTED UTILS */
export const createSomaticPractices = (dates: string[]) =>
  dates.map((date: string) => createEvent(sp, date, sevenPm));

export const createEvent = (title: string, date: string, time: string) => {
  const event: MGHEvent = {
    id: createEventId(),
    title: title,
    start: createDateTime(date, time),
  };
  return event;
};
