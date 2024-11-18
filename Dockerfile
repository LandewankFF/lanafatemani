# Menggunakan image node sebagai base image
FROM node:20

# Set direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin sisa aplikasi ke dalam container
COPY . .

# Membangun aplikasi React untuk produksi
RUN npm run build

# Menetapkan port yang akan digunakan
EXPOSE 3000

# Menentukan perintah yang akan dijalankan saat container dijalankan
CMD ["npm", "start"]