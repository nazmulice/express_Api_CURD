require('dotenv').config();

const dev = {
  app: {
    port: process.env.port || 5050,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/userDB",
  },
};

module.exports = dev;