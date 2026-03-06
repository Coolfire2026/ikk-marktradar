'use client'

import { useState } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import { insuranceCompanies, activities, alerts, marketTrends, getInnovationRanking, marketUpdate } from '@/data/mockData'
import { TrendingUp, AlertCircle, Zap, ArrowUp, ArrowDown, Sparkles } from 'lucide-react'

export default function Dashboard() {
  const [showEmailModal, setShowEmailModal] = useState(false)

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

  // Innovation Ranking
  const ranking = getInnovationRanking()

  return (
    <MainLayout>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Übersicht der Wettbewerbsaktivitäten im Krankenkassenmarkt</p>
        </div>

        {/* KPI Cards - Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

        {/* Killer Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Markttrends Card */}
          <div className="card bg-gradient-to-br from-purple-50 to-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-purple-600" /> Markttrends
            </h3>
            <div className="space-y-3">
              {marketTrends.map((trend) => (
                <div key={trend.trend} className="flex items-center justify-between p-2 hover:bg-purple-50 rounded">
                  <span className="text-sm text-gray-700">{trend.trend}</span>
                  <div className="flex items-center gap-1">
                    {trend.direction === 'up' ? (
                      <ArrowUp size={16} className="text-green-600" />
                    ) : (
                      <ArrowDown size={16} className="text-red-600" />
                    )}
                    <span className={`text-sm font-bold ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {trend.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Update Card */}
          <div className="card bg-gradient-to-br from-blue-50 to-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-blue-600" /> {marketUpdate.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">{marketUpdate.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {marketUpdate.highlights.map((highlight) => (
                <span key={highlight} className="badge badge-info text-xs">
                  {highlight}
                </span>
              ))}
            </div>
            <Link href="/aktivitaeten" className="text-sm text-blue-600 font-medium hover:text-blue-700">
              Details anzeigen →
            </Link>
          </div>

          {/* Innovation Ranking Card */}
          <div className="card bg-gradient-to-br from-green-50 to-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              🏆 Innovationsranking
            </h3>
            <div className="space-y-2">
              {ranking.slice(0, 5).map((kk, idx) => (
                <div key={kk.id} className="flex items-center justify-between p-2 hover:bg-green-50 rounded">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-green-600 text-lg w-6">{idx + 1}</span>
                    <span className="text-sm text-gray-700">{kk.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {kk.activities} Aktiv.
                  </span>
                </div>
              ))}
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
