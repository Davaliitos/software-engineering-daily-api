import express from 'express';
import expressJwt from 'express-jwt';
import topicCtrl from '../controllers/topic.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/mostPopular')
  .get(topicCtrl.mostPopular);

router.route('/mostPosts')
  .get(topicCtrl.mostPosts);

router.route('/addTopicsToPost')
  .post(topicCtrl.addTopicsToPost);

router.route('/')
  .get(topicCtrl.index)
  .post(topicCtrl.create);

router.route('/full')
  .get(topicCtrl.getFull);

router.route('/addTopicsToUser')
  .post(topicCtrl.addTopicsToUser);

router.route('/searchTopics')
  .get(topicCtrl.searchTopics);

router.route('/top/:count')
  .get(topicCtrl.top);

router.route('/interest')
  .post(topicCtrl.maintainerInterest);

router.route('/:slug')
  .get(topicCtrl.show)
  // .put(expressJwt({ secret: config.jwtSecret }), topicCtrl.update)
  .delete(expressJwt({ secret: config.jwtSecret }), topicCtrl.deleteTopic);


export default router;