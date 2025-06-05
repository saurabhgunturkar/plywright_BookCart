# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.30.0-focal

# Set working directory
WORKDIR /app

# Copy project files into the container
COPY . /app

# Install dependencies
RUN npm install

# Run Playwright tests
CMD ["npx", "playwright", test"]
