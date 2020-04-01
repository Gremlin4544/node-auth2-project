
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Galadriel', password: 'light', department: 'Lothlorien'},
        {username: 'Gandalf', password: 'glamdring', department: 'Istari'},
        {username: 'Gollum', password: 'precious', department: 'Caves'}
      ]);
    });
};
