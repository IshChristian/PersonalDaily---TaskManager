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

module.exports = router;
