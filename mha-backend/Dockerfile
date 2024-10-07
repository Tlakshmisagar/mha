FROM node:22.8.0

RUN apt-get update && apt-get install -y \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    pkg-config \
    python3 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
    
WORKDIR /app/backend

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]
