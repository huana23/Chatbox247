# ============================================
# Stage: Base
# ============================================
FROM node:20-alpine AS base

# Install dependencies for node-gyp
RUN apk add --no-cache python3 make g++

WORKDIR /app

# ============================================
# Stage: Production Dependencies
# ============================================
FROM base AS deps

# Copy package files
COPY package*.json ./

# Install dependencies only
RUN npm ci --only=production

# ============================================
# Stage: Development Dependencies
# ============================================
FROM base AS dev-deps

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm ci

# ============================================
# Stage: Build (for frontend if needed)
# ============================================
FROM dev-deps AS builder

# Copy source code
COPY . .

# Build the application if needed
# RUN npm run build

# ============================================
# Stage: Production
# ============================================
FROM base AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy production dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY --chown=nodejs:nodejs . .

# Set ownership
USER nodejs

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Start the application
CMD ["node", "src/server.js"]
