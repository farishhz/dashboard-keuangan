'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import ChartKeuangan from '@/components/ChartKeuangan'

export default function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const { data } = await supabase.from('transactions').select('*')
    setData(data)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Keuangan</h1>
      <ChartKeuangan data={data} />
    </div>
  )
}