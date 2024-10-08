import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function PinScheduler() {
  const [date, setDate] = useState(new Date());
  const [scheduledPins, setScheduledPins] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSchedule = (e) => {
    e.preventDefault();
    const newPin = { title, description, date: date.toDateString() };
    setScheduledPins([...scheduledPins, newPin]);
    setTitle('');
    setDescription('');
  };

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold mb-4">Schedule a Pin</h3>
      <Calendar onChange={setDate} value={date} className="w-full" />
      <form onSubmit={handleSchedule} className="mt-4 space-y-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Schedule Pin
        </button>
      </form>
      <div className="mt-4">
        <h4 className="text-xl font-bold">Scheduled Pins:</h4>
        <ul className="list-disc pl-5">
          {scheduledPins.map((pin, index) => (
            <li key={index}>
              {pin.title} - {pin.description} on {pin.date}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PinScheduler;