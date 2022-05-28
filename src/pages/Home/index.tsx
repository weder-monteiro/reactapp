import React, {useState} from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState<string>();

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input type="text" placeholder="Digite o nome..." onChange={e => setStudentName(e.target.value)}/>
      <button type="button">Adicionar</button>

      <Card name="Weder Monteiro" time="10:55:25"/>
      <Card name="Rodrigo" time="11:00:10"/>
    </div>
  )
}
