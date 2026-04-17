export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  { id: 't1', name: 'Barber 1', role: 'Head Barber' },
  { id: 't2', name: 'Barber 2', role: 'Senior Barber' },
  { id: 't3', name: 'Barber 3', role: 'Barber' },
];
