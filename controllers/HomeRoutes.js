const router = require('express').Router();
const { User } = require('../models');
// getting all post 
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('all-posts', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// login 
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });