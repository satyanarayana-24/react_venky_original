# -------- Stage 1: Build React App --------
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first (best practice for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build React application
RUN npm run build


# -------- Stage 2: Nginx Server --------
FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
