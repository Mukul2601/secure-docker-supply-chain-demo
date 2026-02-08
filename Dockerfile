# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

COPY portfolio/package.json portfolio/package-lock.json* ./
RUN npm ci --production=false

COPY portfolio/ .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

LABEL maintainer="Mukul Mogha <moghaansh@gmail.com>"
LABEL description="Portfolio landing page with secure container practices"

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
