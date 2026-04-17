export type ServiceCategory = 'Haarschnitt' | 'Bart' | 'Kombi' | 'Add-ons';

export interface Service {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  price: string;
}

export const services: Service[] = [
  { id: 'h1', category: 'Haarschnitt', name: 'Classic Cut', description: 'Klassischer Haarschnitt mit Finish', price: '€18' },
  { id: 'h2', category: 'Haarschnitt', name: 'Fade', description: 'Moderner Fade-Schnitt', price: '€22' },
  { id: 'h3', category: 'Haarschnitt', name: 'Shape Up', description: 'Konturschnitt und Linienarbeit', price: '€15' },
  { id: 'h4', category: 'Haarschnitt', name: 'Student Cut', description: 'Für Studenten mit Ausweis', price: '€15' },
  { id: 'b1', category: 'Bart', name: 'Bart Trimmen', description: 'Bart formen und pflegen', price: '€12' },
  { id: 'b2', category: 'Bart', name: 'Rasur', description: 'Klassische Nassrasur', price: '€18' },
  { id: 'b3', category: 'Bart', name: 'Konturierung', description: 'Bartlinie präzise setzen', price: '€10' },
  { id: 'k1', category: 'Kombi', name: 'Haarschnitt + Bart', description: 'Haarschnitt und Bartpflege', price: '€28' },
  { id: 'k2', category: 'Kombi', name: 'Premium Kombi', description: 'Komplettpaket mit Styling', price: '€35' },
  { id: 'a1', category: 'Add-ons', name: 'Augenbrauen', description: 'Augenbrauen in Form bringen', price: '€5' },
  { id: 'a2', category: 'Add-ons', name: 'Kopfmassage', description: 'Entspannende Kopfmassage', price: '€8' },
  { id: 'a3', category: 'Add-ons', name: 'Hot Towel', description: 'Heißes Tuch-Treatment', price: '€5' },
];
