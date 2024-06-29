// src/components/AppointmentList.tsx
import React from 'react';

interface Appointment {
  date: string;
  time: string;
  description: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => (
  <ul>
    {appointments.map((appointment, index) => (
      <li key={index}>
        {appointment.date} - {appointment.time} - {appointment.description}
      </li>
    ))}
  </ul>
);

export default AppointmentList;
