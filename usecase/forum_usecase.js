var forumRepository=require('../repository/forum_repository');

module.exports={
    get_question:async()=>{
        var question=await forumRepository.get_question();
         return{
            "success":true,
            "data":question,
        } 
    },
    get_answer:async(question_id)=>{
        var question=await forumRepository.get_answer(question_id);
        return {
           "success":true,
           "data":question,
       }
    }
}