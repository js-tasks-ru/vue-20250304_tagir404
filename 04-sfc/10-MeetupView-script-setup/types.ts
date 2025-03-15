interface IAgendaItemIcons {
  registration: 'key'
  opening: 'cal-sm'
  talk: 'tv'
  break: 'clock'
  coffee: 'coffee'
  closing: 'key'
  afterparty: 'cal-sm'
  other: 'cal-sm'
}

interface IAgendaItem {
  id: number
  startsAt: string
  endsAt: string
  type: 'registration' | 'opening' | 'talk' | 'break' | 'coffee' | 'closing' | 'afterparty' | 'other'
  title: string | null
  description: string | null
  speaker: string | null
  language: string | null
}

interface IMeetup {
  id: number
  title: string
  description: string
  imageId: number | null
  image: string | null
  date: number
  organizer: string
  place: string
  agenda: IAgendaItem[]
}

export type { IMeetup, IAgendaItem, IAgendaItemIcons }
