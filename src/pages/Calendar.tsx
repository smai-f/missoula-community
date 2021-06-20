import React, { useState } from "react";
import { EVENTS } from "../data/events";
import { format, startOfMonth } from "date-fns";
import {
  MonthlyBody,
  MonthlyDay,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";

type CalendarComponent = React.FC;

const Calendar: CalendarComponent = () => {
  let [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(new Date())
  );

  return (
    <div className="w-3/4 m-auto">
      <MonthlyCalendar
        currentMonth={currentMonth}
        onCurrentMonthChange={(date) => setCurrentMonth(date)}
      >
        <MonthlyNav />

        <MonthlyBody events={EVENTS}>
          <MonthlyDay
            renderDay={(data) =>
              data.map((item: any, index) => (
                <DefaultMonthlyEventItem
                  key={index}
                  title={item.title}
                  date={format(item.date, "k:mm")}
                />
              ))
            }
          />
        </MonthlyBody>
      </MonthlyCalendar>
    </div>
  );
};

export default Calendar;
