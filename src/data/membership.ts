export interface MembershipPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  perks: string[];
  highlighted: boolean;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'silver',
    title: 'Silber',
    price: '€69',
    period: '3 Monate',
    perks: [
      '10% Rabatt auf alle Haarschnitte',
      '1× kostenloser Bartschnitt pro Monat',
      'Mitglieder-Newsletter',
    ],
    highlighted: false,
  },
  {
    id: 'gold',
    title: 'Gold',
    price: '€119',
    period: '6 Monate',
    perks: [
      '15% Rabatt auf alle Haarschnitte',
      '2× kostenloser Bartschnitt pro Monat',
      'Prioritätsbuchung',
      'Exklusive Styling-Tipps',
    ],
    highlighted: true,
  },
  {
    id: 'diamond',
    title: 'Diamant',
    price: '€199',
    period: '12 Monate',
    perks: [
      '20% Rabatt auf alle Haarschnitte',
      'Unbegrenzte Bartschnitte',
      'Dedizierter Barbier',
      'VIP-Service & Priorität',
      'Exklusiver Mitgliederausweis',
    ],
    highlighted: false,
  },
];
