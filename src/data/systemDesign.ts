// Data source for programmatic /system-design/<product> walk-through pages.
//
// Rendered by src/pages/programmatic/SystemDesignPage.tsx via SEOTemplate. Quality
// gate: each entry is a hand-written, genuinely useful design walk-through (unique
// intro + requirements + a real component breakdown + scaling notes), never a
// templated stub. To add one: append here AND register the route in routes.tsx,
// App.tsx, scripts/prerender.js, and sitemap.xml.

export interface DesignSection {
  heading: string;
  /** One or more plain-text paragraphs. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
}

export interface SystemDesignCase {
  path: string;
  product: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: DesignSection[];
  related: { to: string; label: string }[];
}

export const SYSTEM_DESIGN_CASES: SystemDesignCase[] = [
  {
    path: "/system-design/uber",
    product: "Uber",
    title: "System Design: Uber (Ride-Hailing) — Interview Walk-Through",
    description:
      "How to design a ride-hailing system like Uber in a system design interview: requirements, geospatial matching, real-time location, scaling, and the trade-offs interviewers want to hear.",
    h1: "System Design Interview: Design Uber",
    intro: [
      "\"Design Uber\" is one of the most common system design prompts because it touches geospatial indexing, real-time location streaming, matching, and high write throughput all at once. The interviewer isn't looking for the real Uber architecture — they want to see you scope the problem, make defensible choices, and reason about scale out loud.",
      "Work it in a deliberate order: clarify requirements, estimate scale, sketch the core entities and APIs, design the data and the matching path, then talk through bottlenecks and trade-offs. The walk-through below follows that order so you can practice the structure, not just the answer.",
    ],
    sections: [
      {
        heading: "1. Clarify requirements",
        body: [
          "Separate functional from non-functional, and pin scope before designing. Riders request a ride and see a driver approach in real time; drivers go online and receive nearby requests; the system matches them and tracks the trip to completion.",
        ],
        bullets: [
          "Functional: request a ride, match to a nearby driver, live-track the trip, fare calculation, trip history.",
          "Non-functional: low-latency matching (seconds), high availability, real-time location updates, consistency of a driver being assigned to exactly one rider.",
          "Out of scope (say so): payments processing internals, ratings, surge ML — mention them, then defer.",
        ],
      },
      {
        heading: "2. Estimate scale",
        body: [
          "Back-of-envelope numbers justify later choices. Assume ~10M daily active drivers sending a location ping every 4 seconds — that's ~2.5M writes/second of location data, a write-heavy workload that immediately rules out a naive relational table as the hot path.",
        ],
      },
      {
        heading: "3. Core components and APIs",
        body: [
          "Sketch the services and the request flow. Keep the matching path independent from the durable trip store so each can scale on its own characteristics.",
        ],
        bullets: [
          "Location service: ingests driver pings, keeps current positions in an in-memory geospatial index.",
          "Matching service: on a ride request, queries nearby online drivers and assigns one.",
          "Trip service: durable record of trip lifecycle (requested → matched → ongoing → completed).",
          "Notification/streaming: pushes live driver position to the rider (WebSocket/long-poll).",
        ],
      },
      {
        heading: "4. Geospatial matching — the heart of the problem",
        body: [
          "This is what the interviewer most wants to hear. Storing raw lat/long and scanning is O(n); you need a spatial index. Explain quadtrees or geohashing: divide the map into cells so 'find drivers near this point' becomes a lookup of a few cells, not a full scan.",
          "Geohashing encodes a region into a short string where shared prefixes mean spatial proximity, which makes 'nearby' a prefix query. Drivers' current cells live in an in-memory store (e.g. Redis) for fast reads and frequent updates; cell granularity is a tunable trade-off between precision and fan-out.",
        ],
      },
      {
        heading: "5. Scaling and bottlenecks",
        body: [
          "Name the pressure points and how you'd relieve them. The 2.5M writes/second location stream is the dominant one.",
        ],
        bullets: [
          "Shard the location index geographically — a city's drivers and riders are handled by the same shard, keeping matching local.",
          "Absorb the write spike with an in-memory store and async durable writes; you don't need every ping in a durable DB.",
          "Ensure one-driver-one-rider with an atomic assignment (a lock or conditional update) to avoid double-booking.",
          "Use a message queue (Kafka) between location ingestion and downstream consumers to decouple spikes.",
        ],
      },
      {
        heading: "6. Trade-offs to verbalize",
        body: [
          "Close by naming the tensions an interviewer rewards: strong vs eventual consistency (driver assignment must be strong; location display can be eventual), in-memory speed vs durability, and cell-size precision vs query fan-out. Stating these explicitly is the difference between a passing and a strong answer.",
        ],
      },
    ],
    related: [
      { to: "/system-design-interview-assistant", label: "System Design Interview Assistant" },
      { to: "/system-design/whatsapp", label: "System Design: WhatsApp" },
      { to: "/ai-interview-assistant", label: "AI Interview Assistant" },
      { to: "/interview-questions/software-engineer", label: "Software Engineer Interview Questions" },
    ],
  },
  {
    path: "/system-design/whatsapp",
    product: "WhatsApp",
    title: "System Design: WhatsApp (Chat) — Interview Walk-Through",
    description:
      "How to design a messaging system like WhatsApp in a system design interview: real-time delivery, message storage, online presence, group chat, and the trade-offs interviewers expect.",
    h1: "System Design Interview: Design WhatsApp",
    intro: [
      "\"Design WhatsApp\" tests real-time delivery at massive scale, durable message storage, presence (online/last-seen), and the connection-management problem of keeping hundreds of millions of devices live. As always, the interviewer wants your reasoning and trade-offs, not a copy of the real system.",
      "Move through it methodically: clarify requirements, estimate scale, design the connection and delivery path, decide how messages are stored, then handle group chat and the hard edges like offline delivery and ordering. The walk-through below follows that path.",
    ],
    sections: [
      {
        heading: "1. Clarify requirements",
        body: [
          "Pin down scope first. The core is one-to-one messaging with reliable delivery; clarify whether group chat, media, and end-to-end encryption are in scope for this round.",
        ],
        bullets: [
          "Functional: send/receive messages, delivery + read receipts, online presence, group chat, offline delivery when a recipient is disconnected.",
          "Non-functional: low latency, high availability, durability (no lost messages), ordering within a conversation.",
          "Clarify: E2E encryption and media handling — acknowledge them, scope in or out explicitly.",
        ],
      },
      {
        heading: "2. Estimate scale",
        body: [
          "Set the numbers that drive design. Assume ~2B users and tens of billions of messages per day; that's hundreds of thousands of messages per second at peak, and hundreds of millions of simultaneously-connected devices — connection management becomes a first-class problem.",
        ],
      },
      {
        heading: "3. Connection and delivery path",
        body: [
          "Messaging needs a persistent connection, not request/response polling. Devices hold an open WebSocket to a gateway server. A central component must know which gateway currently holds each user's connection so a message can be routed to the right server.",
        ],
        bullets: [
          "WebSocket gateway: maintains live device connections, handles send/receive.",
          "Session/presence registry: maps user → current gateway server (e.g. in Redis), updated on connect/disconnect.",
          "Message routing: sender's gateway looks up the recipient's gateway and forwards; if offline, the message is queued.",
        ],
      },
      {
        heading: "4. Message storage and offline delivery",
        body: [
          "Messages must survive a disconnected recipient. Persist each message durably and track per-recipient delivery state; deliver immediately if the recipient is online, otherwise store-and-forward when they reconnect.",
          "A write-heavy, key-by-conversation access pattern favors a wide-column store like Cassandra (high write throughput, horizontal scale) over a single relational DB. Once a message is confirmed delivered to all recipients, it can be deleted or aged out, since WhatsApp doesn't retain delivered messages server-side indefinitely.",
        ],
      },
      {
        heading: "5. Group chat",
        body: [
          "Group messaging is fan-out: one send becomes N deliveries. For typical group sizes, fan-out-on-write (push to each member's delivery path) is simple and fast to read. Note the trade-off — very large groups make fan-out-on-write expensive, which is why huge broadcast groups are a different design problem.",
        ],
      },
      {
        heading: "6. Trade-offs to verbalize",
        body: [
          "Finish on the tensions: ordering (per-conversation sequence numbers vs global ordering), consistency vs availability for receipts (eventual is fine for 'last seen', stronger for delivery), and fan-out-on-write vs on-read for groups. Calling these out is what makes the answer senior.",
        ],
      },
    ],
    related: [
      { to: "/system-design-interview-assistant", label: "System Design Interview Assistant" },
      { to: "/system-design/uber", label: "System Design: Uber" },
      { to: "/ai-interview-assistant", label: "AI Interview Assistant" },
      { to: "/interview-questions/software-engineer", label: "Software Engineer Interview Questions" },
    ],
  },
];

export const DESIGN_BY_PATH: Record<string, SystemDesignCase> = Object.fromEntries(
  SYSTEM_DESIGN_CASES.map((c) => [c.path, c]),
);
