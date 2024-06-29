// src/components/AppointmentForm.tsx
import React, { useState } from 'react';

interface Appointment {
  date: string;
  time: string;
  description: string;
}

interface AppointmentFormProps {
  onSubmit: (appointment: Appointment) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, time, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appointment-date">Date:</label>
        <input
          type="date"
          id="appointment-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="appointment-time">Time:</label>
        <input
          type="time"
          id="appointment-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="appointment-description">Description:</label>
        <input
          type="text"
          id="appointment-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
