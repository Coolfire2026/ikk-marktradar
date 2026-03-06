'use client'

import MainLayout from '@/components/MainLayout'
import { insuranceCompanies, activities, alerts } from '@/data/mockData'
import { TrendingUp, AlertCircle, Zap } from 'lucide-react'

export default function Dashboard() {
  // Statistiken berechnen
  const newActivitiesLast7Days = activities.filter(
    (a) => {
      const actDate = new Date(a.datum)
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
      return actDate >= sevenDaysAgo
    }
  ).length

  const newServiceOffers = activities.filter(
    (a) => a.kategorie === 'Serviceverbessert' || a.kategorie === 'App & Digital'
  ).length

  // Top Alerts
  const topAlerts = alerts.slice(0, 3)

  // Recent Activities
  const recentActivities = activities.sort(
    (a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime()
  ).slice(0, 5)

  return (
    <MainLayout>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Übersicht der Wettbewerbsaktivitäten im Krankenkassenmarkt</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Beobachtete Krankenkassen</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{insuranceCompanies.length}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <span className="text-xl">🏥</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Neue Aktivitäten (7 Tage)</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{newActivitiesLast7Days}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <TrendingUp size={24} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Neue Leistungsangebote</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{newServiceOffers}</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <Zap size={24} />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Wichtige Alerts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{alerts.length}</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <AlertCircle size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Aktuelle Marktaktivitäten */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Aktuelle Marktaktivitäten</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-blue-600 uppercase">
                            {activity.krankenkasse}
                          </span>
                          <span className="badge badge-info">{activity.kategorie}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{activity.titel}</h3>
                        <p className="text-sm text-gray-600 mb-2">{activity.zusammenfassung}</p>
                        <a href={activity.quellenlink} target="_blank" className="text-xs text-blue-600 hover:underline">
                          Quelle: {activity.quelle}
                        </a>
                      </div>
                      <div className="text-xs text-gray-500 whitespace-nowrap">{activity.datum}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts Seite */}
          <div>
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Wichtige Alerts</h2>
              <div className="space-y-4">
                {topAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.relevanz === 'Wichtig'
                        ? 'bg-red-50 border-l-red-500'
                        : alert.relevanz === 'Relevant'
                        ? 'bg-yellow-50 border-l-yellow-500'
                        : 'bg-blue-50 border-l-blue-500'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle
                        size={20}
                        className={
                          alert.relevanz === 'Wichtig'
                            ? 'text-red-600'
                            : alert.relevanz === 'Relevant'
                            ? 'text-yellow-600'
                            : 'text-blue-600'
                        }
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">{alert.titel}</p>
                        <p className="text-xs text-gray-600 mt-1">{alert.krankenkasse}</p>
                        <span
                          className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                            alert.relevanz === 'Wichtig'
                              ? 'bg-red-100 text-red-800'
                              : alert.relevanz === 'Relevant'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {alert.relevanz}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
