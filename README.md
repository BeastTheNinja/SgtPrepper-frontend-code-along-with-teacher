# SgtPrepper Frontend Code Along with Teacher

This repository is a **frontend storefront** developed during a code-along session with my teacher. The project is built using **Node.js** and is designed to work seamlessly with my teacher's custom-made API backend ([prepper-api-ts-prisma](https://github.com/BeastTheNinja/prepper-api-ts-prisma)), which is built with TypeScript and Prisma for efficient data management and fast development workflows.

## Features

- Connects to a custom backend API built by my teacher
- Implements a storefront interface for interacting with the backend
- Uses Node.js for server-side logic and tooling
- Designed as a learning project and reference for best practices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Access to the backend API ([prepper-api-ts-prisma](https://github.com/BeastTheNinja/prepper-api-ts-prisma))
- (Optional) [npm](https://www.npmjs.com/) for dependency management

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/BeastTheNinja/SgtPrepper-frontend-code-along-with-teacher.git
   cd SgtPrepper-frontend-code-along-with-teacher
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API URL:**
   - Set up your API endpoint (usually in a `.env` file or config file).
   - Example:
     ```
     API_URL=http://localhost:4000
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

## Usage

- Access the storefront in your browser at `http://localhost:3000` (or the port specified in your setup).
- Browse, interact, and test frontend features connected to the backend API.

## Backend API

This frontend is designed to work with [prepper-api-ts-prisma](https://github.com/BeastTheNinja/prepper-api-ts-prisma):

- **Backend:** TypeScript & Prisma
- **Purpose:** Provides API endpoints for the storefront
- **Link:** [prepper-api-ts-prisma GitHub Repo](https://github.com/BeastTheNinja/prepper-api-ts-prisma)

## Learning Goals

- Practice integrating a Node.js frontend with a custom backend API
- Understand real-world API communication and storefront architecture
- Apply code-along lessons and best practices from my teacher

## License

This project is for educational purposes. Please consult your teacher or repository owner for license details.

## Credits

- Code-along and mentorship by my teacher
- Backend API by [prepper-api-ts-prisma](https://github.com/BeastTheNinja/prepper-api-ts-prisma)
