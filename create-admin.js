const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load environment variables from --env-file flag

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable inside .env.local");
  process.exit(1);
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function createAdmin() {
  const email = process.argv[2];
  const password = process.argv[3];

  if (!email || !password) {
    console.log("Usage: node create-admin.js <email> <password>");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB...");

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`User ${email} already exists. Updating password...`);
      existingUser.password = await bcrypt.hash(password, 12);
      await existingUser.save();
      console.log("Password updated successfully!");
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        password: hashedPassword,
      });
      await newUser.save();
      console.log(`Admin user ${email} created successfully!`);
    }

  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
    process.exit(0);
  }
}

createAdmin();
