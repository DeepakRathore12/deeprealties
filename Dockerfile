# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2: Serve the build with a static server
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["npm", "start"]
