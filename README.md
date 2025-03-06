# Restaurant Web Application

A modern web application for browsing restaurants, viewing details, and managing favorites. Built with Next.js and TypeScript.

## Project Overview

This application allows users to:
- Browse a list of restaurants with infinite scrolling
- View detailed information about each restaurant
- Add/remove restaurants to/from favorites
- View a list of favorite restaurants

## Project Structure

The project follows a Next.js App Router organization:

```
src/
├── app/                  # Next.js app router pages
│   ├── page.tsx          # Home page
│   ├── favorites/        # Favorites page
│   └── restaurant/[id]/  # Restaurant details page
├── components/           # Reusable UI components
│   └── RestaurantCard.tsx # Restaurant card component
├── context/              # React context providers
│   └── FavoritesContext.tsx # Favorites state management
└── utils/                # Utility functions and API services
    ├── api.ts            # API service functions
    └── restaurant.tsx    # Restaurant type definitions
```

### Key Components

- **RestaurantCard**: Displays a restaurant card with image, name, and favorite toggle
- **Home Page (app/page.tsx)**: Main page with infinite scrolling list of restaurants
- **Favorites Page (app/favorites/page.tsx)**: Page displaying user's favorite restaurants
- **Restaurant Details Page (app/restaurant/[id]/page.tsx)**: Detailed view of a specific restaurant

### State Management

- Uses React Context API for managing favorites
- Favorites are persisted in localStorage

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **CSS Modules**: For component-scoped styling
- **Axios**: For API requests
- **React Intersection Observer**: For implementing infinite scrolling

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fabianacostagloria/restaurant-web.git
   cd restaurant-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## API Integration

The application integrates with the WeFood API to fetch restaurant data:
- `GET /restaurants`: Fetches a paginated list of restaurants
- `GET /restaurants/:id`: Fetches details for a specific restaurant

## Features

### Infinite Scrolling
The home page implements infinite scrolling to load more restaurants as the user scrolls down, providing a seamless browsing experience without pagination.

### Favorites Management
Users can add restaurants to their favorites by clicking the heart icon. Favorites are stored locally and can be viewed on the dedicated Favorites page.

### Responsive Design
The application is fully responsive and works well on mobile, tablet, and desktop devices.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [WeFood API](https://api.wefood.dev) for providing restaurant data

[![Assistir vídeo](https://img.shields.io/badge/Play%20Video-brightgreen)]([https://github.com/seu-usuario/seu-repositorio](https://github.com/fabianacostagloria/restaurant-web/video.mp4)



