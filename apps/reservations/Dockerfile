# Use the Node.js Alpine image as the development base
FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

# Install npm globally
RUN npm install -g npm

# Install dependencies using npm
RUN npm install

COPY apps/reservations apps/reservations
COPY libs libs

# Build your application using npm
RUN npm run build reservations

# Create a production image
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

# Install npm globally
RUN npm install -g npm

# Install production dependencies using npm
RUN npm install --only=production

# Copy the built application from the development image
COPY --from=development /usr/src/app/dist ./dist

# Set the default command for the production container
CMD ["node", "dist/apps/reservations/main"]

