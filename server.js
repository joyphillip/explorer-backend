/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3000;

/* == DB connection == */

/* == Middleware == */

/* == Routes == */
app.use('/posts', routes.posts)

app.listen(PORT, () => {
  console.log('✨', 'Listening on Port:', PORT, '✨',)
})
