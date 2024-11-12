import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const FinancialDashboard = () => {
  const educationSourceData = [
    { name: 'Educação Formal', value: 1 },
    { name: 'Autodidata', value: 2 },
    { name: 'Família', value: 1 },
    { name: 'Necessidade', value: 1 },
  ];

  const mainChallengesData = [
    { challenge: 'Gastos Impulsivos', count: 2 },
    { challenge: 'Instabilidade de Renda', count: 1 },
    { challenge: 'Medo de Investir', count: 3 },
    { challenge: 'Falta de Tempo', count: 2 },
    { challenge: 'Disciplina', count: 2 },
  ];

  const emergencyReserveStatus = [
    { status: 'Sem Reserva', value: 1 },
    { status: 'Reserva Inconsistente', value: 2 },
    { status: 'Reserva Adequada', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="p-4 space-y-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Dashboard de Análise de Educação Financeira</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fonte de Educação Financeira</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart width={300} height={300}>
                  <Pie
                    data={educationSourceData}
                    cx={150}
                    cy={150}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {educationSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Principais Desafios</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  width={300}
                  height={300}
                  data={mainChallengesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="challenge" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Status da Reserva de Emergência</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart
                  width={600}
                  height={300}
                  data={emergencyReserveStatus}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Principais Conclusões</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-sm">60% dos entrevistados não tiveram educação financeira formal</li>
                <li className="text-sm">Medo de investir é o desafio mais comum (60% dos entrevistados)</li>
                <li className="text-sm">60% têm problemas com reserva de emergência</li>
                <li className="text-sm">40% dependem de fontes online para educação financeira</li>
                <li className="text-sm">100% expressaram necessidade de mais orientação em investimentos</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialDashboard;