# HansabFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3 for a technical task assigned to me.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- npm (version 10.7 or later)

## Getting Started

### 1. Install Angular CLI

If you don't have Angular CLI installed globally, you can install it using npm:

```bash
npm install -g @angular/cli@18.0.3
```

### 2. Clone the Repository
Clone the project repository:

```bash
git clone https://github.com/kentmarcusp/hansab-frontend.git
cd hansab-frontend
```

### 3. Install Dependencies
Install the project dependencies using npm:

```bash
npm install
```

## 4. Build
Build the project using:
```bash
ng build
```
The build artifacts will be stored in the dist/ directory.

## 5. Running the Application
To start up the application using the default settings:
```bash
npm start
```
This command is configured to execute ng serve, which serves the application on the default port 4200. Navigate to http://localhost:4200/ in your browser. The application will automatically reload whenever you modify any source files inside the project.

To start the application in development mode with your specific port:
```bash
ng serve --port <insert-your-port>
```
Replace `<insert-your-port>` with your own desired port number. After running this command, navigate to http://localhost:`<your-port>`/ in your browser. Keep in mind that 4200 is the default port for Angular applications, so choose a different port if 4200 is already in use or if you prefer a different port number.

## Running Unit Tests
Run `ng test` to execute the unit tests.

## Further Help
To get more help on the Angular CLI, use ng help or go check out the Angular CLI Overview and Command Reference page.
