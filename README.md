

### Step 1: Create Dockerfile
Create a `Dockerfile` in your project root:

```dockerfile
# Start your image with a node base image
FROM node:22-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your Node.js server
CMD ["npm", "start"]
```

### Step 3: Build the Docker Image
Open terminal in your project directory and run:

```bash
docker build -t express-auth-api .
```

**Why?**
- `docker build` creates an image from your Dockerfile
- `-t express-auth-api` tags your image with a name
- `.` tells Docker to use the current directory

### Step 4: Run the Container
```bash
docker run -p 3000:3000 express-auth-api
```

**Why?**
- `docker run` starts a container from your image
- `-p 3000:3000` maps port 3000 from container to your local machine
- `express-auth-api` is the image name

### Step 5: Test Your APIs
Open your browser or use a tool like Postman to test:
- `http://localhost:3000/api/auth/signup`
- `http://localhost:3000/api/auth/login`
- `http://localhost:3000/api/auth/profile`

### Step 6: Push to Docker Hub (Optional)
If you want to share your image:

1. **Create Docker Hub account** at hub.docker.com
2. **Login from terminal:**
   ```bash
   docker login
   ```
3. **Tag your image:**
   ```bash
   docker tag express-auth-api your-username/express-auth-api
   ```
4. **Push to Docker Hub:**
   ```bash
   docker push your-username/express-auth-api
   ```

### Common Docker Commands

```bash
# List all images
docker images

# List running containers
docker ps

# Stop a container
docker stop <container-id>

# Remove an image
docker rmi <image-name>

# View container logs
docker logs <container-id>

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune
```

### Docker Benefits

1. **Consistency** - Your app runs the same everywhere
2. **Isolation** - Each container is independent
3. **Portability** - Easy to deploy anywhere
4. **Scalability** - Easy to run multiple instances

## API Endpoints

### Authentication

#### POST /api/auth/signup
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

#### POST /api/auth/login
Login user
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

#### GET /api/auth/profile
Get user profile (Protected route)
Headers: `Authorization: Bearer <token>`

## Project Structure

```
├── controllers/
│   └── authController.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── .dockerignore
├── Dockerfile
├── server.js
└── package.json
```