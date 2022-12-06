const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM match_data', (err, result) => {
      console.log(result)
      res.render('news/news', {
        match_data: result
      });
    });

  });

  app.get('/form', (req, res) => {
    res.render('news/form')
  })
  
  app.get('/table', (req, res) => {
     connection.query('SELECT * FROM match_data', (err, result) => {
      console.log(result)
      res.render('news/table', {
        match_data: result
      });
    });
  })

  app.post('/news', (req, res) => {
    const { team_1, goal_team_1, team_2, goal_team_2, phase } = req.body;
    connection.query('INSERT INTO match_data SET?', {
      team_1,
      goal_team_1,
      team_2,
      goal_team_2,
      phase
    }, (err, result) => {
      res.redirect('/');
    })
  })
}