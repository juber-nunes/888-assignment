// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('db.json')
// const db = low(adapter)

import { Low } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
const db = new Low(new JSONFileSync('testDB.json'))

// db.data ||= { sports: [], events: [], markets:[], selections:[] }
const seedDatabase = () => {
  const sports = [
    { id: 1, name: 'Cricket', displayName: 'Cricket', slug: 'sport-cricket', order: '1', active: false, events: [] },
    { id: 2, name: 'Football', displayName: 'footbal', slug: 'sport-football', order: '2', active: false, events: [] },
    { id: 3, name: 'Basketball', displayName: 'Basketball', slug: 'sport-basketball', order: '3', active: false, events: [] },
    { id: 4, name: 'Golf', displayName: 'Golf', slug: 'sport-golf', order: '4', active: false, events: [] },
  ]

  const events = [
    {id: 1, name: 'Portugal vs France', eventType: 'Preplay', sport: 'Football', status: 'Preplay', active: false, order: 1, markets: []},
    {id: 2, name: 'Brazil vs Croatia', eventType: 'Preplay', sport: 'Football', status: 'Preplay', active: false, order: 2, markets: []},
    {id: 3, name: 'Lakers vs Warriors', eventType: 'Preplay', sport: 'Basketball', status: 'Preplay', active: false, order: 3, markets: []},
    {id: 4, name: 'Chicago Bulls vs Boston Celtics', eventType: 'Preplay', sport: 'Basketball', status: 'Preplay', active: false, order: 4, markets: []},
    {id: 5, name: 'Australia vs Pakistan', eventType: 'Preplay', sport: 'Cricket', status: 'Preplay', active: false, order: 5, markets: []},
  ]

  const markets = [
    { id: 1, name: 'Full Time Result', displayName: 'Full Time Results', order: '1', active: false, schema: '2', columns: '4',  selections: [] },
    { id: 2, name: 'Half Time Results', displayName: 'Half Time Results', order: '2', active: true, schema: '2', columns: '3', selections: [] },
    { id: 3, name: 'Match Odds', displayName: 'Match Odds', order: '3', active: true, schema: '3', columns: '2',  selections: [] },
    { id: 4, name: 'Double Chance', displayName: 'Double Chance', order: '4', active: true, schema: '4', columns: '1', selections: [] }
  ]

  const selections = [
    { id: 1, name: 'France', event: 'Portugal vs France', market: 'Half Time Results', price: '10.33', active: true, outcome: 'Place', order: '1' },
    { id: 2, name: 'Portugal', event: 'Portugal vs France', market: 'Half Time Results', price: '10.33', active: true, outcome: 'Unsettled', order: '2' },
    { id: 3, name: 'Lakers', event: 'Lakers vs Warriors', market: 'testmarket3',  price: '10.33', active: true, outcome: 'Place', order: '3' },
    { id: 4, name: 'Warriors', event: 'Lakers vs Warriors', market: 'testmarket3',  price: '10.33',active: true, outcome: 'Place', order: '4' }
  ]
  db.data ||= { sports, events, markets, selections }

  // db.data.push(sports, events, markets, selections)
  db.write()
}
seedDatabase()