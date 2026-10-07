# Dev Platform CA

A responsive news platform built with React, Vite and Supabase for the Development Platforms Course Assignment.

The application allows users to browse published articles, register and authenticate through Supabase, and publish new articles when logged in.

## Live Site

https://dev-platform-ca-one.vercel.app/

## GitHub Repository

https://github.com/miastubb/dev-platform-ca

## Features

- User registration with email confirmation
- User login and logout
- Authentication-based UI
- Public article browsing
- Authenticated article publishing
- Form validation and user feedback
- Loading, empty and error states
- Supabase database integration
- Row Level Security policies
- Responsive layout for desktop and mobile

## Built With

- React
- Vite
- Supabase
- Supabase JavaScript client
- CSS
- ESLint

## Getting Started

### Prerequisites

You need Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/miastubb/dev-platform-ca.git
```

Navigate to the project directory:

```bash
cd dev-platform-ca
```

Install the project dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project.

The repository includes an `.env.example` file showing the environment variables required by the application:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Add the Supabase environment variable values provided with the Moodle submission.

The local `.env` file is excluded from Git and should not be committed to the repository.

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to view the application.
