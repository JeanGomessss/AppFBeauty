import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';
import {Link} from 'react-router-dom';
 
export default function Agenda() {
  const [date, setDate] = useState(new Date());
 
  return (
    <div className='agenda'>
      <h1 className='textocentro'>Agenda Pessoal</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Data Selecionada:</span>{' '}
        {date.toDateString()}
      </p>
      <Link to='/' className="voltar">Voltar</Link>
    </div>
  );
}
