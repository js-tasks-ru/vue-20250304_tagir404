interface IAgendaItem {
  id: number;
  startsAt: string;
  endsAt: string;
  type: string;
  title: string | null;
  description: string | null;
  speaker: string | null;
  language: string | null;
}

interface IMeetup {
  id: number;
  title: string;
  description: string;
  imageId: number | null;
  image: string | null;
  date: number;
  organizer: string;
  place: string;
  agenda: IAgendaItem[];
}

export type { IMeetup }