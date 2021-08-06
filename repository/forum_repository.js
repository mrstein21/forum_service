var knex=require("../config/config");
module.exports={
    get_question:async function(){
        var list_forum=await knex("question")
        .join("users","question.user_id","=","users.id")
        .leftJoin("answer","answer.question_id","=","question.id")
        .select("question.id","question.title","question.date","users.name",
        knex.raw("count(answer.id) as total_answer")).groupBy("question.id").orderBy('question.date', 'desc')
        return list_forum;
    },
    get_answer:async function(question_id){
        var list_answer=knex("answer")
        .join("users","users.id","=","answer.user_id").
        select("answer.id","answer.answer","answer.date","users.name").
        where("answer.question_id",question_id).orderBy('answer.date', 'desc')
        return list_answer;
    }

}