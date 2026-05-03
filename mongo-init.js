// MongoDB initialization script
// This runs once when the container is first created

db = db.getSiblingDB('chatbox247');

// Create application user
db.createUser({
  user: 'app_user',
  pwd: 'app_password',
  roles: [
    { role: 'readWrite', db: 'chatbox247' }
  ]
});

// Create indexes for better query performance
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ createdAt: -1 });
db.otps.createIndex({ email: 1 });
db.otps.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });

print('MongoDB initialization completed successfully');
