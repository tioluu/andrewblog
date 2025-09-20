# ANDREWBLOG - Multi-Container Setup & CI/CD

## Overview
ANDREWBLOG is a full-stack blog application that utilizes a **React frontend**, an **Express.js backend**, and a **PostgreSQL database**. This project is containerized using **Docker Compose** and features an automated **CI/CD workflow with GitHub Actions**.

## Tech Stack
- **Frontend**: React (served on port 3000)
- **Backend**: Express.js (served on port 5000)
- **Database**: PostgreSQL (running in a Docker container)
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Containerization**: Docker & Docker Compose

## Local Development Setup
### Prerequisites
Ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) (for local testing)

### 1. Clone the repository
```sh
 git clone https://github.com/yourusername/andrewblog.git
 cd andrewblog
```

### 2. Set Up Environment Variables
Create a `.env` file in the `database/` folder and add:
```
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=andrewblog
```

### 3. Start Containers
```sh
docker compose up -d --build
```
This will:
- Start the PostgreSQL database
- Start the backend
- Start the frontend

### 4. Check Running Containers
```sh
docker ps
```
Ensure that the database, backend, and frontend containers are running.

### 5. Access the Services
- **Backend API**: http://localhost:5000
- **Frontend App**: http://localhost:3000
- **Database**: Connect using `localhost:5432`

### 6. Stop Containers
```sh
docker compose down
```

---

## GitHub Actions - CI/CD Workflow
This project uses GitHub Actions to automate testing and deployment.

### Workflow Triggers:
- Runs on **pull requests** to `main`
- Runs on **push** to `test/**` branches

### Workflow Steps:
1. **Spin up services** (PostgreSQL, backend, frontend)
2. **Wait for the backend to be ready**
3. **Health check** backend & frontend
4. **Run backend tests**
5. **Shut down containers**

### Fixing Common Issues
#### "Port already allocated" Error
If you see an error like:
```sh
Bind for 0.0.0.0:5432 failed: port is already allocated
```
Run the following to stop any existing PostgreSQL instances:
```sh
docker stop $(docker ps -q --filter "publish=5432")
docker rm $(docker ps -aq --filter "publish=5432")
```

#### "Backend Failed to Start" in Workflow
Ensure that the backend properly starts by checking:
```sh
curl http://localhost:5000/health
```
Modify `.github/workflows/ci.yml` to retry multiple times before failing:
```yaml
run: |
  for i in {1..15}; do
    if curl --silent --fail http://localhost:5000/health; then
      echo "Backend is up!"
      exit 0
    fi
    echo "Waiting for backend..."
    sleep 5
  done
  echo "Backend failed to start"
  exit 1
```

---

## Backend API Routes
- **POST /contact** – Saves user messages (requires `email` and `message`)

## Running Backend Tests
If tests exist, they can be run via:
```sh
docker compose run backend npm test
```

Since no tests are defined yet, a temporary test script is included:
```json
"scripts": {
  "test": "echo \"No tests available\" && exit 0",
  "start": "node server.js"
}
```