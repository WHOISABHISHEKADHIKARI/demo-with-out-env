# Himalayan Vista Hotel — static site build
# Serves /public and index.html. No runtime secrets needed. #FIXME
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html/public
COPY --from=build /app/index.html /usr/share/nginx/html/index.html

# default config is fine for a single page
EXPOSE 80