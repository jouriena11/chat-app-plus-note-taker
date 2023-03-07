// const localStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');


// function initialize(passport, getUserByEmail, getUserById){
//     // function to authenticate user
//     const authenticateUser = async (email, password, done) => {
//         // get user by email
//         const user = getUserByEmail(email)
//         if(user == null){
//             return done(null, false, {message: 'No user with that email'})
//         }

//         try{
//             if(await bcrypt.compare(password, user.password)){
//                 return done(null, user)
//             } else {
//                 return done(null, false, {message: 'Password incorrect'})
//             }
//         } catch(e){
//             return done(e)
//         }
//     }

//     passport.use(new localStrategy({usernameField: 'email'}, authenticateUser))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((id, done) => {
//         return done(null, getUserById(id))
//     })

// }


// module.exports = initialize;


const LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const { User } = require('../models');

async function initialize(passport) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'chat_support_db'
  });

  const authenticateUser = async (email, password, done) => {
    try {
      const [rows, fields] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);
      if (rows.length === 0) {
        return done(null, false, { message: 'hey there, no user with that email' });
      }

      const user = rows[0];
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Password incorrect' });
      }
    } catch (err) {
      return done(err);
    }
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    try {
      const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id = ?', [id]);
      if (rows.length === 0) {
        return done(null, false, { message: 'No user with that id' });
      }
      const user = rows[0];
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });
}

module.exports = initialize;
