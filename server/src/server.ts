import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Announcement 1'},
        { id: 2, name: 'Announcement 2'},
        { id: 3, name: 'Announcement 3'},
        { id: 4, name: 'Announcement 4'},
    ])
})

app.listen(3333)