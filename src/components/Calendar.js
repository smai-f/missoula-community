import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EVENTS } from "../data/events";

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
