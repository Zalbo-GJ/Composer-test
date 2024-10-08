import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ScheduleCalendar() {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Scheduled Date:', newDate);
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Schedule Pins</h2>
      <div className="flex justify-center">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </section>
  );
}

export default ScheduleCalendar;