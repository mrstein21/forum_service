var forumController=require('../controller/forum_controller');
const router = require('express-promise-router')();

router.route("/question").get(forumController.get_question);
router.route("/question/answer/:question_id").get(forumController.get_answer);
module.exports=router;