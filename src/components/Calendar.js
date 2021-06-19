import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

let eventGuid = 0;
export function createEventId() {
  return String(eventGuid++);
}

export function createDate(date) {
  return new Date(date).toISOString().replace(/T.*$/, ""); // YYYY-MM-DD
}

export const EVENTS = [
  {
    id: createEventId(),
    title: "My Grandmother's Hands - intro",
    start: createDate("2/8/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 1-4",
    start: createDate("2/15/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 5-8",
    start: createDate("2/22/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 9-12",
    start: createDate("3/1/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 13-16",
    start: createDate("3/8/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 17-20",
    start: createDate("3/15/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - ch. 21-23",
    start: createDate("3/22/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "My Grandmother's Hands - closing",
    start: createDate("3/29/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("4/5/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Shame and Guilt Discussion",
    start: createDate("4/12/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("4/19/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Racist Violence Image Discussion",
    start: createDate("4/26/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("5/3/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Peer Circle Discussion",
    start: createDate("5/10/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("5/17/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Inquiry Practice",
    start: createDate("5/24/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice - Sound",
    start: createDate("5/31/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Triad Practice - Blocks",
    start: createDate("6/9/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("6/16/2021") + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Being White Settlers on Unrightfully Taken Indigenous Land",
    start: createDate("6/23/2021") + "T18:00:00",
  },
  {
    id: createEventId(),
    title: "Somatic Practice",
    start: createDate("6/30/2021") + "T19:00:00",
  },
];

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[interactionPlugin, dayGridPlugin]}
      initialEvents={EVENTS}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "",
      }}
    />
  );
};

export default Calendar;
