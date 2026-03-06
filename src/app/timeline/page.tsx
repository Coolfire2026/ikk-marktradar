'use client'

import MainLayout from '@/components/MainLayout'
import { activities } from '@/data/mockData'
import { Calendar } from 'lucide-react'

export default function TimelinePage() {
  // Group activities by month
  const groupedActivities = activities.reduce(
    (acc, activity) => {
      const date = new Date(activity.datum)
      const month = date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
      if (!acc[month]) acc[month] = []
      acc[month].push(activity)
      return acc
    },
    {} as Record<string, typeof activities>
  )

  // Sort months chronologically
  const sortedMonths = Object.keys(groupedActivities).sort((a, b) => {
    const dateA = new Date(groupedActivities[a][0].datum)
    const dateB = new Date(groupedActivities[b][0].datum)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <MainLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Marktentwicklung Timeline</h1>
          <p className="text-gray-600 mt-2">Chronologische Übersicht aller Marktaktivitäten</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {sortedMonths.map((month) => (
              <div key={month}>
                {/* Month Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white z-10">
                    <Calendar size={18} />
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-8">
                    <h2 className="text-2xl font-bold text-gray-900 capitalize">{month}</h2>
                  </div>
                </div>

                {/* Activities */}
                <div className="ml-20 md:w-1/2 space-y-4">
                  {groupedActivities[month].map((activity) => (
                    <div
                      key={activity.id}
                      className="card bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-blue-600 uppercase">
                            {activity.krankenkasse}
                          </p>
                          <h3 className="text-lg font-semibold text-gray-900 mt-1">
                            {activity.titel}
                          </h3>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {new Date(activity.datum).toLocaleDateString('de-DE', {
                            day: '2-digit',
                            month: '2-digit',
                          })}
                        </span>
                      </div>
                      <span className="badge badge-info mb-3 text-xs">{activity.kategorie}</span>
                      <p className="text-sm text-gray-700">{activity.zusammenfassung}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
