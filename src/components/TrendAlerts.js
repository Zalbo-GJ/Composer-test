import React, { useState } from 'react';

function TrendAlerts() {
  const [alertName, setAlertName] = useState('');
  const [alerts, setAlerts] = useState([]);

  const handleAddAlert = () => {
    setAlerts([...alerts, alertName]);
    setAlertName('');
  };

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Trend Alerts</h2>
      <div className="mb-4">
        <label className="block mb-2">Alert Name</label>
        <input
          type="text"
          value={alertName}
          onChange={(e) => setAlertName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={handleAddAlert} className="bg-blue-500 text-white p-2 mb-4">
        Add Alert
      </button>
      <ul className="list-disc pl-5 space-y-2">
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </section>
  );
}

export default TrendAlerts;