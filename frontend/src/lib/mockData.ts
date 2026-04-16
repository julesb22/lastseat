export type Category = "sport" | "music" | "theatre" | "comedy" | "other";

export interface Event {
  id: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  category: Category;
  image: string;
  price: number;
  originalPrice: number;
  ticketsLeft: number;
  description: string;
  ticketTypes: TicketType[];
  isFavorited?: boolean;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  available: number;
}

export interface Ticket {
  id: string;
  eventId: string;
  eventTitle: string;
  venue: string;
  date: string;
  time: string;
  category: Category;
  ticketType: string;
  quantity: number;
  totalPrice: number;
  bookingRef: string;
  status: "upcoming" | "past";
}

export const CATEGORY_COLORS: Record<Category, string> = {
  sport: "#FF4D4D",
  music: "#FFD60A",
  theatre: "#B5A4F5",
  comedy: "#FF8C42",
  other: "#4D9EFF",
};

export const CATEGORY_TEXT: Record<Category, string> = {
  sport: "#FFFFFF",
  music: "#0A0A0A",
  theatre: "#0A0A0A",
  comedy: "#FFFFFF",
  other: "#FFFFFF",
};

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Paris Saint-Germain vs Olympique de Marseille",
    venue: "Parc des Princes",
    city: "Paris",
    date: "SAT 19 APR",
    time: "21:00",
    category: "sport",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
    price: 45,
    originalPrice: 90,
    ticketsLeft: 8,
    description: "The Classique. PSG vs OM — the greatest rivalry in French football. Last-minute tickets available for the south stand. Atmosphere guaranteed.",
    ticketTypes: [
      { id: "t1", name: "South Stand", price: 45, available: 8 },
      { id: "t2", name: "East Tribune", price: 65, available: 3 },
    ],
  },
  {
    id: "2",
    title: "Daft Punk Tribute Night",
    venue: "Zénith de Paris",
    city: "Paris",
    date: "FRI 18 APR",
    time: "22:00",
    category: "music",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    price: 28,
    originalPrice: 55,
    ticketsLeft: 23,
    description: "Get Lucky. Harder, Better, Faster, Stronger. The ultimate Daft Punk tribute night with live band and full light show. One night only.",
    ticketTypes: [
      { id: "t3", name: "Floor Standing", price: 28, available: 23 },
      { id: "t4", name: "Balcony Seated", price: 38, available: 12 },
    ],
  },
  {
    id: "3",
    title: "Hamlet — Comédie-Française",
    venue: "Salle Richelieu",
    city: "Paris",
    date: "SUN 20 APR",
    time: "19:30",
    category: "theatre",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    price: 32,
    originalPrice: 60,
    ticketsLeft: 5,
    description: "To be or not to be — tonight. The Comédie-Française's acclaimed production of Hamlet, with 3 last-minute seats released from the reserve.",
    ticketTypes: [
      { id: "t5", name: "Orchestra", price: 32, available: 3 },
      { id: "t6", name: "Mezzanine", price: 42, available: 2 },
    ],
  },
  {
    id: "4",
    title: "Gad Elmaleh — Nouveau Spectacle",
    venue: "Olympia",
    city: "Paris",
    date: "THU 17 APR",
    time: "20:30",
    category: "comedy",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&q=80",
    price: 35,
    originalPrice: 60,
    ticketsLeft: 14,
    description: "Gad Elmaleh is back with his brand new one-man show. Expect two hours of sharp, warm, personal comedy. Don't miss it.",
    ticketTypes: [
      { id: "t7", name: "Floor", price: 35, available: 14 },
    ],
  },
  {
    id: "5",
    title: "Roland Garros — Day Session",
    venue: "Stade Roland Garros",
    city: "Paris",
    date: "MON 21 APR",
    time: "11:00",
    category: "sport",
    image: "https://images.unsplash.com/photo-1622279888158-5dd9d6c5fd73?w=800&q=80",
    price: 30,
    originalPrice: 75,
    ticketsLeft: 2,
    description: "Full day session pass for Court Philippe Chatrier. Watch top-seeded players battle it out on clay. 2 tickets just released.",
    ticketTypes: [
      { id: "t8", name: "Day Session Pass", price: 30, available: 2 },
    ],
  },
  {
    id: "6",
    title: "Ed Sheeran — Mathematics Tour",
    venue: "Stade de France",
    city: "Saint-Denis",
    date: "WED 23 APR",
    time: "20:00",
    category: "music",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80",
    price: 75,
    originalPrice: 120,
    ticketsLeft: 31,
    description: "Ed Sheeran brings the Mathematics Tour to Paris. 80,000 fans, one stadium, one unforgettable night. Pitch tickets available.",
    ticketTypes: [
      { id: "t9", name: "Pitch Standing", price: 75, available: 31 },
      { id: "t10", name: "Lower Tier Seated", price: 95, available: 18 },
    ],
  },
];

export const mockTickets: Ticket[] = [
  {
    id: "tk1",
    eventId: "1",
    eventTitle: "PSG vs OM",
    venue: "Parc des Princes",
    date: "SAT 19 APR",
    time: "21:00",
    category: "sport",
    ticketType: "South Stand",
    quantity: 2,
    totalPrice: 90,
    bookingRef: "LS-2024-001",
    status: "upcoming",
  },
  {
    id: "tk2",
    eventId: "4",
    eventTitle: "Gad Elmaleh — Nouveau Spectacle",
    venue: "Olympia",
    date: "THU 17 APR",
    time: "20:30",
    category: "comedy",
    ticketType: "Floor",
    quantity: 1,
    totalPrice: 35,
    bookingRef: "LS-2024-002",
    status: "upcoming",
  },
  {
    id: "tk3",
    eventId: "6",
    eventTitle: "Ed Sheeran — Mathematics Tour",
    venue: "Stade de France",
    date: "WED 12 MAR",
    time: "20:00",
    category: "music",
    ticketType: "Pitch Standing",
    quantity: 2,
    totalPrice: 150,
    bookingRef: "LS-2024-003",
    status: "past",
  },
];
