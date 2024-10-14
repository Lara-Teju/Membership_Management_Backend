//memberRoutes.js
const express = require('express');
const { getMembers, addMember, getMembersByPreference } = require('../controllers/memberController');
const router = express.Router();

router.get('/', getMembers);
router.post('/', addMember);

// Add a route for fetching members by preference
router.get('/preference/:eventCategory', getMembersByPreference);


module.exports = router;
