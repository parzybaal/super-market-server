import { Router } from 'express'

// Controllers:
import { createNewUser } from '../controllers/createNewUser.controller'
import { updateProfile } from '../controllers/updateProfile.controller'
import { getUserProfile } from '../controllers/getUserProfile.controller'
import { resetPassword } from '../controllers/resetPassword.controller'

const router = Router()

// Create New User:
router.post('/newuser', createNewUser)

// Get User Profile:
router.get('/profile', getUserProfile)

// Update User Data:
router.put('/updateprofile', updateProfile)

// Update User Password:
router.patch('/resetpass', resetPassword)

export default router