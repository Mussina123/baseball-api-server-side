const { json } = require('express');
const express = require('express');
const app = express(); 
const PORT = 8000
const cors= cors();

const teams = {
    'yankees': {
        'W-L' : '34-21',
        'Stadium': 'Bronx, New York' 
    },
    'phillies': {
        'W-L': '24-29',
        'Stadium': 'Philadelphia, PA'
    }, 
    'mets': {
        'W-L': '36-19', 
        'Stadium': 'New York'
    },
    'unknown team': {
        'W-L': 'Unknown',
        'Stadium': 'Unknown'
    }
    }

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(teams)
})

app.get('/api/:team', (req, res) => {
   const teamName = req.params.team.toLowerCase()
    if (teams[teamName]){
        res.json(teams[teamName])
    } else {
        res.json(teams['unknown team'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on PORT ${PORT} `)
})
