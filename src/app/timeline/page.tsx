'use client'

import MainLayout from '@/components/MainLayout'
import { activities } from '@/data/mockData'
import { formatDateShort } from '@/utils/dateUtils'
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
        <div className="space-y-12">
          {sortedMonths.map((month) => (
            <div key={month}>
              {/* Month Header - Full Width */}
              <h2 className="text-2xl font-bold text-gray-900 capitalize mb-8">{month}</h2>

              {/* Activities - 3 Column Layout */}
              <div className="space-y-4">
                {groupedActivities[month].map((activity, idx) => (
                  <div key={activity.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    {/* Left: Content (MD: 5 cols) */}
                    <div className="md:col-span-5">
                      <div className="card bg-gradient-to-r from-blue-50 to-white hover:shadow-lg transition-shadow h-full">
                        <p className="text-xs font-semibold text-blue-600 uppercase mb-2">
                          {activity.krankenkasse}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {activity.titel}
                        </h3>
                        <span className="badge badge-info mb-3 text-xs inline-block">{activity.kategorie}</span>
                        <p className="text-sm text-gray-700">{activity.zusammenfassung}</p>
                      </div>
                    </div>

                    {/* Center: Timeline Marker (MD: 2 cols) */}
                    <div className="md:col-span-2 flex justify-center">
                      <div className="relative flex flex-col items-center">
                        {/* Timeline Dot */}
                        <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-gray-50 z-10 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {/* Timeline Line - Only between items */}
                        {idx < groupedActivities[month].length - 1 && (
                          <div className="w-1 h-20 bg-gradient-to-b from-blue-600 to-blue-300 mt-2"></div>
                        )}
                      </div>
                    </div>

                    {/* Right: Date (MD: 5 cols) */}
                    <div className="md:col-span-5">
                      <div className="flex items-center h-full justify-start md:justify-center">
                        <div className="text-center">
                          <p className="text-xs text-gray-500 uppercase mb-1">Datum</p>
                          <p className="text-sm font-semibold text-gray-700">
                            {formatDateShort(activity.datum)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
