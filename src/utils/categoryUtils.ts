export function getCategoryBadgeClass(category: string): string {
  const mapping: Record<string, string> = {
    'App & Digital': 'badge-app-digital',
    'Prävention': 'badge-prevention',
    'Familienleistungen': 'badge-family',
    'Bonusprogramme': 'badge-bonus',
    'Kampagnen': 'badge-campaign',
    'Serviceverbessert': 'badge-service',
  }
  return mapping[category] || 'badge-info'
}

export function getCategoryIcon(category: string): string {
  const mapping: Record<string, string> = {
    'App & Digital': '📱',
    'Prävention': '🏃',
    'Familienleistungen': '👨‍👩‍👧‍👦',
    'Bonusprogramme': '🎁',
    'Kampagnen': '📢',
    'Serviceverbessert': '⚡',
  }
  return mapping[category] || '📌'
}
