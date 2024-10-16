const express = require('express');
const { collection, addDoc, getDocs, query, where } = require('firebase/firestore');
const db = require('../config/firebaseConfig'); // Import Firestore instance
const router = express.Router();

// POST /users - Create a new user
router.post('/signin', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userRef = collection(db, 'users');
    const q = query(userRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Add a new user
    const newUser = {
      name,
      email,
      password
    };
    await addDoc(userRef, newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

router.get('/', async (req, res) => {
    try {
      const userRef = collection(db, 'users');
      const usersSnapshot = await getDocs(userRef);
      const users = usersSnapshot.docs.map(doc => doc.data());
      
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error.message });
    }
  });

  router.post('/auth', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
      const userRef = collection(db, 'users');
      const q = query(userRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const user = querySnapshot.docs[0].data();
        
        // In a real application, use a secure password comparison method
        // For example: await bcrypt.compare(password, user.hashedPassword)
        if (user.password === password) {
          return res.status(200).json({ message: 'Sign-in successful' });
        } else {
          return res.status(400).json({ error: 'Incorrect password' });
        }
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Sign-in error:', error);
      res.status(500).json({ error: 'An error occurred during sign-in', details: error.message });
    }
  });

module.exports = router;
