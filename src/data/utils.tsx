/* CONSTANTS */
export const mgh: string = "My Grandmother's Hands";
export const sp: string = "Somatic practice";
export const sixPm: string = "6:00";
export const sevenPm: string = "7:00";

/* PRIVATE UTILS */
let eventGuid: number = 0;
const createEventId = () => {
  return String(eventGuid++);
};

const createDate = (date: string) => {
  return new Date(date);
};

const createDateTime = (date: string, time: string) => {
  let dateTime = date;
  dateTime += time ? " " + time + ":00" : "";
  return createDate(dateTime);
};

/* EXPORTED UTILS */
export const createSomaticPractices = (dates: string[]) =>
  dates.map((date: string) => createEvent(sp, date, sevenPm));

export const createEvent = (title: string, date: string, time: string) => {
  const event = {
    id: createEventId(),
    title: title,
    date: createDateTime(date, time),
  };
  return event;
};
