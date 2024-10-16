const express = require('express');
const { collection, addDoc, getDocs, query, where } = require('firebase/firestore');
const db = require('../config/firebaseConfig'); // Import Firestore instance
const router = express.Router();

router.post('/newtask', async (req, res) => {
    const {task, date, info, status, userID} = req.body
    try{
        // Check if user already exists
        const taskRef = collection(db, 'task');
        const q = query(userRef, where('task', '==', task));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
            return res.status(400).json({ message: 'Task already exists' }); 
        }

        const newTask = {
            task,
            date,
            info,
            status,
            userID
        };

        await addDoc(taskRef, newTask);
        res.status(201).json({ message: 'Task Added Successfully'})
    } catch (error){
    res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;