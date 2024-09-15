import React from 'react';
import Layout from '../components/Layout';

const assignments = [
  { id: 1, title: 'Задание по JavaScript', description: 'Напишите программу, которая считает числа от 1 до 100.' },
  { id: 2, title: 'Задание по React', description: 'Создайте компонент, который отображает список задач.' },
];

function Assignments() {
  return (
    <Layout>
      <div>
        <h1>Задания</h1>
        {assignments.map((assignment) => (
          <div key={assignment.id}>
            <h2>{assignment.title}</h2>
            <p>{assignment.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Assignments;
