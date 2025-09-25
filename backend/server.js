const express = require('express')
const cors = require('cors')
const app = express()


// In development you can allow requests from Vite (default: http://localhost:5173)
app.use(cors())
app.use(express.json())


// Example contact route
app.post('/contact', (req, res) => {
console.log('Contact payload:', req.body)
res.json({ status: 'ok' })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))