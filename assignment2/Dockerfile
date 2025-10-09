FROM node:20-alpine

WORKDIR /app

# Install only production deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy source
COPY server.js ./

# Create directories for ConfigMap and Secret mounts
RUN mkdir -p /etc/config /etc/secret

EXPOSE 8080

CMD ["node", "server.js"]


