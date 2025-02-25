# Vue Micro-Frontend Project

## Purpose
This project demonstrates the integration of Vue 2 and Vue 3 applications using a micro-frontend architecture. The Vue 2 application acts as the host, while the Vue 3 application is loaded dynamically based on routing. This setup utilizes `single-spa` for managing multiple frameworks in a single application.

## Project Structure
- **vue2-app**: Contains the Vue 2 application, which serves as the host.
- **vue3-app**: Contains the Vue 3 application that is loaded dynamically.

## Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd legacyapp
   ```
2. Install dependencies for both applications:
   ```bash
   cd vue2-app
   npm install
   cd ../vue3-app
   npm install
   ```

### Running the Applications
1. Start the Vue 2 application:
   ```bash
   cd vue2-app
   npm run serve
   ```
2. Start the Vue 3 application:
   ```bash
   cd vue3-app
   npm run serve
   ```

### Accessing the Applications
- The Vue 2 application will be accessible at `http://localhost:3001`
- The Vue 3 application will be accessible at `http://localhost:3002/v2`

### Features
- Dynamic loading of the Vue 3 application from the Vue 2 host application.
- Routing handled by Vue Router in both applications.

### Contributing
Feel free to submit issues or pull requests to improve the project.

### License
This project is licensed under the MIT License.
