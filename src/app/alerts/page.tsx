'use client'

import { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { alerts } from '@/data/mockData'
import { formatDate } from '@/utils/dateUtils'
import EmailAlertModal from '@/components/EmailAlertModal'
import { AlertCircle, TrendingUp, Mail } from 'lucide-react'

export default function AlertsPage() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  // Sort by relevance
  const sortedAlerts = [...alerts].sort((a, b) => {
    const relevanceOrder = { 'Wichtig': 0, 'Relevant': 1, 'Information': 2 }
    return relevanceOrder[a.relevanz as keyof typeof relevanceOrder] - relevanceOrder[b.relevanz as keyof typeof relevanceOrder]
  })

  const getAlertColor = (relevanz: string) => {
    switch (relevanz) {
      case 'Wichtig':
        return { bg: 'bg-red-50', border: 'border-l-red-500', text: 'text-red-600', badge: 'bg-red-100 text-red-800' }
      case 'Relevant':
        return { bg: 'bg-yellow-50', border: 'border-l-yellow-500', text: 'text-yellow-600', badge: 'bg-yellow-100 text-yellow-800' }
      default:
        return { bg: 'bg-blue-50', border: 'border-l-blue-500', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' }
    }
  }

  return (
    <MainLayout>
      <EmailAlertModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
      
      <div>
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Markt-Alerts</h1>
            <p className="text-gray-600 mt-2">Wichtige Entwicklungen und Marktbewegungen im Krankenkassenmarkt</p>
          </div>
          <button
            onClick={() => setEmailModalOpen(true)}
            className="btn btn-primary flex items-center gap-2 whitespace-nowrap"
          >
            <Mail size={20} /> Alert per E-Mail senden
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Alle Alerts</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{alerts.length}</p>
              </div>
              <AlertCircle size={32} className="text-blue-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Wichtige Alerts</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {alerts.filter((a) => a.relevanz === 'Wichtig').length}
                </p>
              </div>
              <AlertCircle size={32} className="text-red-600" />
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Top Krankenkasse</p>
                <p className="text-lg font-bold text-gray-900 mt-1">TK</p>
              </div>
              <TrendingUp size={32} className="text-green-600" />
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {sortedAlerts.map((alert) => {
            const colors = getAlertColor(alert.relevanz)
            return (
              <div key={alert.id} className={`${colors.bg} border-l-4 ${colors.border} p-6 rounded-lg`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <AlertCircle size={24} className={colors.text} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{alert.titel}</h3>
                      <p className="text-sm text-gray-600 mt-1">{alert.krankenkasse}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{formatDate(alert.datum)}</span>
                </div>

                <p className="text-gray-700 mb-4">{alert.zusammenfassung}</p>

                <div className="flex items-center justify-between">
                  <a href={alert.quellenlink} target="_blank" className="text-sm text-blue-600 hover:underline">
                    Quelle: {alert.quelle}
                  </a>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}>
                    {alert.relevanz}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}
