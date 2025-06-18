# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.52.0-noble

# Set working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY package.json package-lock.json /app/

# Configure npm registry and clear cache
RUN npm config set registry https://registry.npmjs.org/ && npm cache clean --force

# Install dependencies
RUN npm ci

# Copy the rest of the project files into the container
COPY . /app

# Install required system dependencies for Playwright
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libxkbcommon0 \
    libgbm1 \
    libpango-1.0-0 \
    libasound2t64 \
    fonts-liberation \
    libfontconfig1 \
    && apt-get clean

# Ensure Playwright is installed globally
RUN npm install playwright && npx playwright install --with-deps

# Debug: Check installed dependencies and Node.js version
RUN node -v && npm -v && ls -la /app

# Expose a port if your Playwright tests require it (optional)
EXPOSE 3000

# Run Playwright tests
CMD ["npx", "playwright", "test"]