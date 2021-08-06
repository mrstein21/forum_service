var forumUseCase=require('../usecase/forum_usecase');
module.exports={
    get_question:async(req,res,next)=>{
      try{
         var question=await forumUseCase.get_question();
         return res.status(200).json({
            "success":true,
            "data":question,
        });
      }catch(e){
        return res.status(500).json({
            "success":false,
            "message":"Terjadi kesalahan pada server !",
            "error":e.toString()
        });
      }
    },
    get_answer:async(req,res,next)=>{
        try{
          var answer=await forumUseCase.get_answer(req.params.question_id);
          return res.status(200).json({
            "success":true,
            "data":answer,
        });
        }catch(e){
            return res.status(500).json({
                "success":false,
                "message":"Terjadi kesalahan pada server !",
                "error":e.toString()
            });
          }
    }
}