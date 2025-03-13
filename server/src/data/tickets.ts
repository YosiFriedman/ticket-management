export interface Ticket {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  userType: "local" | "tourist";
  image: string;
}

export const tickets: Ticket[] = [
  {
    id: 1,
    title: "Rock Concert Night",
    description: "Enjoy an electrifying night of rock music with top bands.",
    date: "2025-04-15",
    location: "Madison Square Garden, NY",
    userType: "local",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
  },
  {
    id: 2,
    title: "Theater: Hamlet",
    description: "A classic Shakespearean play performed by renowned actors.",
    date: "2025-05-10",
    location: "Broadway, NY",
    userType: "tourist",
    image: "https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg",
  },
  {
    id: 3,
    title: "Tech Conference 2025",
    description: "A gathering of the brightest minds in technology and innovation.",
    date: "2025-06-20",
    location: "Silicon Valley Convention Center",
    userType: "local",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg",
  },
  {
    id: 4,
    title: "Comedy Night Special",
    description: "Laugh out loud with the best stand-up comedians in the country.",
    date: "2025-07-05",
    location: "Chicago Comedy Club",
    userType: "tourist",
    image: "https://images.pexels.com/photos/7131496/pexels-photo-7131496.jpeg",
  },
  {
    id: 5,
    title: "Football Championship Finals",
    description: "Experience the thrill of live football action.",
    date: "2025-08-12",
    location: "Wembley Stadium, London",
    userType: "local",
    image: "https://images.pexels.com/photos/3991875/pexels-photo-3991875.jpeg",
  },
  {
    id: 6,
    title: "Jazz & Blues Festival",
    description: "A night of smooth jazz and blues with top artists.",
    date: "2025-09-18",
    location: "New Orleans Jazz Park",
    userType: "tourist",
    image: "https://images.pexels.com/photos/9999137/pexels-photo-9999137.jpeg",
  },
  {
    id: 7,
    title: "Art Exhibition: Modern Expressions",
    description: "Explore contemporary artworks by emerging artists.",
    date: "2025-10-07",
    location: "Los Angeles Art Gallery",
    userType: "local",
    image: "https://images.pexels.com/photos/2770541/pexels-photo-2770541.jpeg",
  },
  {
    id: 8,
    title: "Science & Space Fair",
    description: "Learn about the latest advancements in space technology.",
    date: "2025-11-15",
    location: "NASA Space Center, Houston",
    userType: "tourist",
    image: "https://images.pexels.com/photos/5866616/pexels-photo-5866616.jpeg",
  },
  {
    id: 9,
    title: "Food & Wine Festival",
    description: "Taste the finest cuisines and wines from around the world.",
    date: "2025-12-03",
    location: "San Francisco Pier 39",
    userType: "local",
    image: "https://images.pexels.com/photos/3184196/pexels-photo-3184196.jpeg",
  },
  {
    id: 10,
    title: "Ballet: Swan Lake",
    description: "A breathtaking performance of the timeless ballet classic.",
    date: "2025-12-20",
    location: "Sydney Opera House",
    userType: "tourist",
    image: "https://images.pexels.com/photos/1084842/pexels-photo-1084842.jpeg",
  },
];

// Generate more mock tickets dynamically
for (let i = 11; i <= 30; i++) {
  tickets.push({
    id: i,
    title: `Event #${i}`,
    description: `Description for event #${i}`,
    date: `2025-${String((i % 12) + 1).padStart(2, "0")}-15`,
    location: `Location ${i}`,
    userType: i % 2 === 0 ? "local" : "tourist",
    image: `https://source.unsplash.com/200x200/?event,ticket,${i}`,
  });
}
