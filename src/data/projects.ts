// The projects shown on the site. Keep this list short: recent, complete work only.
// Each project is a small case study: the problem, what it does, how it's built.
// Every project is listed on the home page and the projects page.

export type Kind = "Open source" | "Product" | "Client" | "Freelance" | "Community";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  kind: Kind;
  tier: "featured";
  stack: string[];
  problem: string;
  solution: string;
  highlights: string[];
  built: { part: string; detail: string }[];
  // Steps of the data flow, drawn as a diagram when there is no screenshot.
  flow?: string[];
  images?: { src: string; alt: string; tall?: boolean }[];
  links?: { label: string; href: string }[];
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "apipulse",
    title: "ApiPulse",
    tagline: "API monitoring and analytics for Node.js services.",
    year: "2026",
    kind: "Product",
    tier: "featured",
    stack: ["TypeScript", "Node.js", "Fastify", "RabbitMQ", "OpenSearch", "MongoDB", "React", "Docker"],
    problem:
      "When an API slows down or starts failing, the first questions are which route, since when, and what the failing requests looked like. Answering them usually means a heavy monitoring suite or digging through logs.",
    solution:
      "ApiPulse is a small SDK plus a processing pipeline. The SDK sits inside an Express or Fastify app, measures every request and sends batches to an ingest service. A queue and a worker do the storage work, so the monitored app never waits on a database.",
    highlights: [
      "Tracks total requests, error rate and average latency per route.",
      "Filters by time range (last 15 minutes to 7 days) and by HTTP method.",
      "Shows traffic and latency on one chart so a spike can be read against load.",
      "Keeps the stack trace with the request that caused the error.",
      "Bring your own storage: connect your own OpenSearch cluster, with credentials encrypted using AES-256-GCM.",
      "Rate limits and payload size limits protect the ingest endpoint.",
    ],
    built: [
      { part: "SDK", detail: "TypeScript middleware for Express and Fastify. Batches events and flushes every 2 seconds, with sampling and data masking." },
      { part: "Ingest", detail: "Validates the project key and payload, then pushes the batch straight to RabbitMQ." },
      { part: "Worker", detail: "Consumes from RabbitMQ and bulk-indexes into OpenSearch. Caches storage clients in memory for 10 minutes." },
      { part: "API", detail: "Authentication, projects and API keys in MongoDB; queries OpenSearch to serve dashboard metrics." },
      { part: "Dashboard", detail: "React and Vite app with Recharts and Tailwind CSS, light and dark." },
    ],
    flow: ["SDK", "Ingest API", "RabbitMQ", "Worker", "OpenSearch", "Dashboard"],
    note: "The repository is private. I'm happy to walk through it on a call.",
  },
  {
    slug: "counselling-platform",
    title: "Counselling Platform",
    tagline: "A counselling platform that connects students with mentors over chat and voice calls.",
    year: "2024",
    kind: "Client",
    tier: "featured",
    stack: ["NestJS", "TypeScript", "MongoDB", "Redis", "Socket.IO", "Bull", "React", "Next.js", "Razorpay", "Docker"],
    problem:
      "Schools wanted to give students private access to a counsellor, but support depended on appointments and on students being willing to ask in person. There was no simple way to reach a mentor at the moment it mattered, or for a school to see that support was being delivered.",
    solution:
      "The platform gives students a mobile app to message a mentor or request a call, and gives mentors and administrators a web dashboard to respond, keep session reports and manage schools. Access is sold through subscription plans on the public website. I built the backend and the dashboard, and worked on the website.",
    highlights: [
      "Real-time chat between a student and a mentor, with request, accept, reject and end-of-chat flows.",
      "Call requests that a mentor accepts, with a list of calls that were not attended.",
      "A session report and summary written by the mentor after each conversation.",
      "Schools, students, mentors and student clubs managed from one dashboard.",
      "Subscription plans with online payment through Razorpay, and payment history for each student.",
      "Account and payment emails sent from a background queue.",
    ],
    built: [
      { part: "API", detail: "NestJS and MongoDB, split into modules for users, schools, students, clubs, chat, calls, reports and subscriptions. It also serves the student mobile app." },
      { part: "Real time", detail: "Socket.IO gateway for chat rooms, live chat lists and message history." },
      { part: "Background jobs", detail: "Bull queue on Redis for account and payment emails; Redis also caches frequent reads." },
      { part: "Dashboard", detail: "React and Redux Toolkit app for mentors and administrators, with live updates over Socket.IO." },
      { part: "Website", detail: "Next.js site with plans, checkout and a blog." },
      { part: "Delivery", detail: "Docker images built and deployed by GitHub Actions, with separate staging and production pipelines." },
    ],
    flow: ["Student app", "NestJS API", "Socket.IO chat", "MongoDB", "Redis queue", "Mentor dashboard"],
    note: "Client project built at Kandra Digitals. The code is private.",
  },
  {
    slug: "private-storage",
    title: "Private Storage",
    tagline: "A self-hosted, drive-style explorer for any S3-compatible storage.",
    year: "2026",
    kind: "Open source",
    tier: "featured",
    stack: ["Go", "React", "TypeScript", "SQLite", "S3 API", "Docker"],
    problem:
      "S3 storage is cheap and dependable, but the provider consoles are built for engineers. Browsing, searching and sharing files across several buckets and providers is slow and awkward.",
    solution:
      "Private Storage puts a familiar drive interface on top of S3. One install connects to AWS, MinIO, Cloudflare R2 or Wasabi and manages several storage profiles side by side. It runs as a single Docker image.",
    highlights: [
      "List and grid views, breadcrumbs, multi-select and drag-and-drop uploads, including whole folders.",
      "Upload panel with per-file progress and cancel.",
      "Storage insights: usage by file type, largest folders, size and age breakdowns, possible duplicates.",
      "Search by file name across the whole bucket, not just the current folder.",
      "S3 access and secret keys are encrypted with AES-GCM before they are saved.",
      "Owner and user accounts with separate permissions.",
    ],
    built: [
      { part: "Backend", detail: "Go service that talks to the S3 API and streams uploads and downloads." },
      { part: "Storage", detail: "SQLite holds the admin identity and connection profiles; credentials are encrypted at rest." },
      { part: "Interface", detail: "React and TypeScript single-page app." },
      { part: "Delivery", detail: "Published as a Docker image on Docker Hub." },
    ],
    images: [
      { src: "/shots/private-cloud/2.png", alt: "Private Storage file browser" },
      { src: "/shots/private-cloud/3.png", alt: "Adding a storage connection in Private Storage" },
      { src: "/shots/private-cloud/4.png", alt: "Creating a user in Private Storage settings" },
      { src: "/shots/private-cloud/1.png", alt: "Private Storage sign-in screen" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/imShuheb/private-cloud" },
      { label: "Docker Hub", href: "https://hub.docker.com/r/shuheb04/private-cloud" },
    ],
  },
  {
    slug: "shortli",
    title: "ShortLi",
    tagline: "A URL shortener with analytics, redirected from the edge.",
    year: "2025",
    kind: "Product",
    tier: "featured",
    stack: ["Next.js", "TypeScript", "Cloudflare Workers", "Workers KV", "MongoDB", "Redis", "NextAuth"],
    problem:
      "A short link is only useful if the redirect is fast everywhere and you can see who clicked. Sending every click through the main application makes redirects slow and ties them to that server's uptime.",
    solution:
      "ShortLi answers redirects from a Cloudflare Worker that reads the link from Workers KV, close to the visitor. The Next.js application handles sign-in, link management and analytics, and stays out of the redirect path.",
    highlights: [
      "Edge redirects through a Cloudflare Worker backed by Workers KV.",
      "Click analytics with charts for each link.",
      "Custom aliases and QR code generation.",
      "Email and Google sign-in.",
      "Redis cache in front of MongoDB for hot lookups.",
      "Input validation with Zod and a Jest test suite.",
    ],
    built: [
      { part: "App", detail: "Next.js dashboard and API routes, with MongoDB for links and users and NextAuth for sign-in." },
      { part: "Edge", detail: "Cloudflare Worker that resolves short codes from KV and redirects." },
      { part: "Cache", detail: "Redis in front of the database." },
    ],
    images: [
      { src: "/shots/shortli/1.png", alt: "ShortLi home page" },
      { src: "/shots/shortli/2.png", alt: "ShortLi screen" },
      { src: "/shots/shortli/3.png", alt: "ShortLi screen" },
      { src: "/shots/shortli/4.png", alt: "ShortLi screen" },
    ],
    links: [{ label: "Live site", href: "https://shortli.in/" }],
  },
  {
    slug: "event-ecosystem",
    title: "Event Ecosystem",
    tagline: "Registration, QR tickets, door scanning and badge printing for events.",
    year: "2024 – 2026",
    kind: "Freelance",
    tier: "featured",
    stack: ["TypeScript", "React", "Express", "MongoDB", "RabbitMQ", "React Native", "Electron", "Docker"],
    problem:
      "Running an event by hand means registration in spreadsheets, tickets sent one by one, and check-in from a printed list. That leads to queues at the door and badges that have to be printed in advance.",
    solution:
      "Four applications that cover an event from sign-up to the door. Organisers build a form or import attendees from Excel, each attendee gets a QR ticket, staff scan it on a phone, and a desktop app prints the badge on the spot.",
    highlights: [
      "Registration form builder with custom fields.",
      "Bulk attendee import from Excel.",
      "QR ticket generated per attendee and sent by email and WhatsApp.",
      "Phone app that scans tickets at the entrance.",
      "Windows desktop app that prints badges on site.",
      "The whole web stack starts with one Docker Compose command.",
    ],
    built: [
      { part: "Dashboard", detail: "React and Redux Toolkit app for organisers, served by Nginx." },
      { part: "Server", detail: "Express API with MongoDB, S3 file storage, QR generation, and email and WhatsApp delivery." },
      { part: "Queue", detail: "RabbitMQ carries delivery and print jobs between the server and the desktop app." },
      { part: "Scanner", detail: "React Native (Expo) app that reads QR tickets with the camera." },
      { part: "Print app", detail: "Electron app for Windows, built and released through GitHub Actions." },
    ],
    images: [
      { src: "/shots/event/1.png", alt: "Event Ecosystem dashboard" },
      { src: "/shots/event/5.png", alt: "Event Ecosystem screen" },
      { src: "/shots/event/3.png", alt: "Event Ecosystem screen" },
      { src: "/shots/event/4.png", alt: "Event Ecosystem screen" },
    ],
    note: "Private client work, so there is no public repository.",
  },
  {
    slug: "archivemaster",
    title: "ArchiveMaster",
    tagline: "A desktop app that sorts scattered photos, videos and documents by date.",
    year: "2026",
    kind: "Open source",
    tier: "featured",
    stack: ["Python", "pywebview", "Pillow", "HTML/CSS/JS", "PyInstaller", "GitHub Actions"],
    problem:
      "Years of phone backups and camera dumps end up as thousands of files in random folders, many of them copies of each other.",
    solution:
      "ArchiveMaster scans a folder, works out when each file was really created, and copies or moves everything into year and month folders. Exact duplicates are set aside, not copied twice.",
    highlights: [
      "Reads the capture date from EXIF metadata, not just the file date.",
      "Finds exact duplicates with SHA-256 hashing and moves them to a separate folder.",
      "Choose what to organise: photos, videos or other files.",
      "Live progress with speed and time remaining.",
      "History of past runs with how much data was processed and saved.",
      "Windows installer, Windows portable build and Linux build.",
    ],
    built: [
      { part: "Core", detail: "Python module that scans, hashes and files media, with Pillow for EXIF data." },
      { part: "Interface", detail: "HTML, CSS and JavaScript shown in a native window through pywebview." },
      { part: "Packaging", detail: "PyInstaller builds and an Inno Setup installer, produced by GitHub Actions." },
    ],
    images: [
      { src: "/shots/archivemaster/SS2.png", alt: "ArchiveMaster organise screen" },
      { src: "/shots/archivemaster/SS1.png", alt: "ArchiveMaster session history" },
      { src: "/shots/archivemaster/SS3.png", alt: "ArchiveMaster settings" },
    ],
    links: [
      { label: "Download for Windows (.exe)", href: "https://github.com/imShuheb/ArchiveMaster/releases/latest/download/ArchiveMaster_Setup.exe" },
      { label: "GitHub", href: "https://github.com/imShuheb/ArchiveMaster" },
      { label: "Windows portable (.zip)", href: "https://github.com/imShuheb/ArchiveMaster/releases/latest/download/ArchiveMaster-Windows-Portable.zip" },
      { label: "Linux (.tar.gz)", href: "https://github.com/imShuheb/ArchiveMaster/releases/latest/download/ArchiveMaster-Linux-Portable.tar.gz" },
    ],
  },
  {
    slug: "unused-assets-finder",
    title: "Unused Assets Finder",
    tagline: "A VS Code extension that finds image files your code no longer uses.",
    year: "2025",
    kind: "Open source",
    tier: "featured",
    stack: ["TypeScript", "VS Code Extension API", "esbuild"],
    problem:
      "Front-end projects collect images that nothing references any more. They make the repository and the build heavier, and finding them by hand means searching for every file name one at a time.",
    solution:
      "The extension scans the workspace, checks whether each image is referenced anywhere in the code, and lists the ones that are not in a panel in the VS Code sidebar. From there you can delete one file or all of them.",
    highlights: [
      "Published on the VS Code Marketplace.",
      "Its own panel in the activity bar listing every unused image.",
      "Delete a single file from the list, or all unused files at once.",
      "Checks references in .js, .ts, .jsx, .tsx, .html and .css files.",
      "Supports .jpg, .jpeg, .png, .svg, .gif, .bmp and .webp.",
      "Skips folders such as node_modules and .next, and the list can be changed.",
      "Caches results so repeat scans are fast, with a refresh button to rescan.",
    ],
    built: [
      { part: "Extension", detail: "TypeScript on the VS Code Extension API, with a tree view provider for the sidebar panel and commands for refresh and delete." },
      { part: "Scanner", detail: "Walks the workspace, collects image files and searches code files for references to each one." },
      { part: "Build", detail: "Bundled with esbuild. MIT licensed." },
    ],
    images: [{ src: "/shots/extension/2.png", alt: "Unused Assets Finder listing in the VS Code extensions view" }],
    links: [
      { label: "VS Code Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=shuheb.unused-assets-finder" },
      { label: "GitHub", href: "https://github.com/imShuheb/unusedFiles-extension-vs-code" },
    ],
  },
  {
    slug: "b-hero",
    title: "B-Hero",
    tagline: "A blood donation app that connects people in need with nearby donors.",
    year: "2024 – 2025",
    kind: "Community",
    tier: "featured",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Google Maps"],
    problem:
      "When someone needs blood urgently, the request usually travels through forwarded messages and reaches donors who are too far away to help.",
    solution:
      "B-Hero lets a person post a blood request and shows it to donors close to them. Donors register and see open requests on a map.",
    highlights: [
      "Post and manage blood requests.",
      "Donors see nearby requests on Google Maps, matched by distance.",
      "Sign in with email or Google.",
      "Donor profile and request dashboard.",
    ],
    built: [
      { part: "Mobile app", detail: "React Native with Expo and TypeScript, using device location and Google Maps." },
      { part: "Backend", detail: "Firebase for authentication and data." },
    ],
    images: [
      { src: "/shots/bhero/1.jpeg", alt: "B-Hero mobile screen", tall: true },
      { src: "/shots/bhero/2.jpeg", alt: "B-Hero mobile screen", tall: true },
      { src: "/shots/bhero/3.jpeg", alt: "B-Hero mobile screen", tall: true },
      { src: "/shots/bhero/4.jpeg", alt: "B-Hero mobile screen", tall: true },
    ],
  },
];

export const featured = projects.filter((p) => p.tier === "featured");
