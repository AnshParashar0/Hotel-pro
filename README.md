# HotelPro 🏨

A full-featured hotel management system built with the MERN stack.

## Tech Stack

| Layer    | Technology                                                                |
| -------- | ------------------------------------------------------------------------- |
| Backend  | Node.js, Express, MongoDB + Mongoose, JWT, Zod, Helmet                    |
| Frontend | React + Vite, Tailwind CSS, shadcn/ui, Framer Motion, TanStack Query     |
| Payments | Stripe (test mode)                                                        |

## Features (planned)

- Room inventory and real-time availability
- Guest booking flow with date-picker and live pricing
- Role-based dashboards (Admin, Staff, Guest)
- Secure authentication (JWT access + refresh tokens)
- Check-in / check-out management
- Stripe payment integration
- Responsive, accessible UI with a premium boutique-hotel feel

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas cluster (or local MongoDB)

### Installation

```bash
# Clone
git clone https://github.com/AnshParashar0/Hotel-pro.git
cd Hotel-pro

# Server
cd server
cp .env.example .env   # then fill in your values
npm install
npm run dev

# Client (new terminal)
cd client
npm install
npm run dev
```

The client runs at `http://localhost:5173` and proxies API calls to `http://localhost:5000`.

## Project Structure

```
hotelpro/
├── server/          Express API
│   └── src/
│       ├── config/      DB + env validation
│       ├── models/      Mongoose schemas
│       ├── validators/  Zod request schemas
│       ├── controllers/ Route handlers (thin)
│       ├── services/    Business logic
│       ├── routes/      Express routers
│       ├── middleware/  Auth, role, error, rate-limit
│       ├── utils/       ApiError, token helpers
│       ├── app.js       Express setup
│       └── server.js    Entry point
└── client/          React SPA
    └── src/
        ├── api/         Axios + API modules
        ├── hooks/       Custom React hooks
        ├── context/     Auth context
        ├── components/  UI, layout, common
        ├── pages/       Public, guest, admin pages
        ├── routes/      App routing
        └── lib/         Utilities + constants
```

## License

MIT
