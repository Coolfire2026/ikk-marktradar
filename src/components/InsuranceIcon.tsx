interface InsuranceIconProps {
  id: string
  name: string
  size?: 'sm' | 'md' | 'lg'
}

export default function InsuranceIcon({ id, name, size = 'md' }: InsuranceIconProps) {
  const getColorAndInitials = (id: string) => {
    const icons: Record<string, { bg: string; text: string; initials: string }> = {
      tk: { bg: 'bg-blue-600', text: 'text-white', initials: 'TK' },
      barmer: { bg: 'bg-orange-600', text: 'text-white', initials: 'BA' },
      aok: { bg: 'bg-green-600', text: 'text-white', initials: 'AO' },
      dak: { bg: 'bg-red-600', text: 'text-white', initials: 'DA' },
      ikk_suedwest: { bg: 'bg-indigo-900', text: 'text-white', initials: 'IKK' },
      hkk: { bg: 'bg-cyan-600', text: 'text-white', initials: 'HKK' },
    }
    return icons[id] || { bg: 'bg-gray-400', text: 'text-white', initials: '?' }
  }

  const { bg, text, initials } = getColorAndInitials(id)

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs font-bold',
    md: 'w-10 h-10 text-sm font-bold',
    lg: 'w-12 h-12 text-base font-bold',
  }

  return (
    <div
      className={`${sizeClasses[size]} ${bg} ${text} rounded-lg flex items-center justify-center flex-shrink-0`}
      title={name}
    >
      {initials}
    </div>
  )
}
