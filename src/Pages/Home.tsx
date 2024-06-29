// src/pages/Home.tsx
import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

interface Appointment {
  date: string;
  time: string;
  description: string;
}

const Home: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <AppointmentForm onSubmit={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
};

export default Home;
