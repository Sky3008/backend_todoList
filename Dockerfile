# Sử dụng Node.js image chính thức
FROM node:20

# Tạo thư mục làm việc
WORKDIR /app

# Copy package và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build mã nguồn TypeScript (TẠO thư mục dist)
RUN npm run build

# Mở cổng (tuỳ ứng dụng)
EXPOSE 5000

# Chạy ứng dụng
CMD ["npm", "run", "start"]
