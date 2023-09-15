// src/components/CalendarApp.js
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {Link} from 'react-router-dom';
import './style.css';

function Agenda() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  // Simulação de serviços agendados (você pode buscar isso em um servidor)
  const scheduledServices = [
    { date: '2023-09-15', time: '10:00', service: 'Corte de Cabelo' },
    { date: '2023-09-15', time: '14:00', service: 'Manicure' },
    { date: '2023-09-16', time: '15:00', service: 'Maquiagem' },
    { date: '2023-09-22', time: '14:00', service: 'Pedicure' },
    { date: '2023-09-27', time: '16:00', service: 'Maquiagem' },
    { date: '2023-09-27', time: '16:00', service: 'Luzes' },
    { date: '2023-09-27', time: '16:00', service: 'Progressiva' },
    { date: '2023-09-29', time: '13:00', service: 'Manicure' },
    { date: '2023-09-29', time: '13:00', service: 'Podóloga' },
    { date: '2023-09-30', time: '09:00', service: 'Maquiagem' },
    { date: '2023-09-30', time: '09:00', service: 'Limpeza de Pele' },
    // Adicione mais serviços agendados conforme necessário
  ];

  // Função para lidar com a seleção de data
  const handleDateChange = (date) => {
    setSelectedDate(date);

    // Filtrar os serviços agendados para a data selecionada
    const filteredAppointments = scheduledServices.filter(
      (appointment) => appointment.date === date.toISOString().split('T')[0]
    );

    setAppointments(filteredAppointments);
  };

  // Função para renderizar o indicador no calendário
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      const hasAppointments = scheduledServices.some(
        (appointment) => appointment.date === dateString
      );
      return hasAppointments ? <div className="indicator" /> : null;
    }
    return null;
  };

  return (
    <div className='agenda'>
      <h1 className='textocentro'>Agenda Pessoal</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={tileContent}
        />
      </div>
      <div className="appointments-container">
        <h3>Serviços Agendados para {selectedDate.toLocaleDateString()}</h3>
        <ul>
          {appointments.map((appointment, index) => (
            <p key={index}>
              <strong>{appointment.time}</strong>: {appointment.service}
            </p>
          ))}
        </ul>
      </div>
      <Link to='/' className="voltar">Voltar</Link>
    </div>
  );
}

export default Agenda;
