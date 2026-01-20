'use client'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default function ChartKeuangan({ data }) {
  const income = data.filter(d => d.type === 'income').reduce((a,b)=>a+b.amount,0)
  const expense = data.filter(d => d.type === 'expense').reduce((a,b)=>a+b.amount,0)

  return (
    <Pie data={{
      labels: ['Pemasukan', 'Pengeluaran'],
      datasets: [{ data: [income, expense] }]
    }} />
  )
}