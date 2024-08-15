const pool = require("../Config/connection")

exports.getTodo = async(req,res) => {
    try{
        const [result] = await pool.query("SELECT * FROM todo")
        res.send(result);
    }catch(err){
        res.send(err)
    }
}
exports.addTodo = async(req,res) => {

    const {label,status,description} = req.body;
    try{
        const [result] = await pool.query("INSERT INTO todo(label,status,description) VALUES(?,?,?)",
        [label,status,description])
        res.send(result);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }catch(err){
        res.send(err)
    }
}
   
exports.editTodo = async(req,res) => {
    const {id,label,status,description} = req.body;
    try{
        const [result] = await pool.query("UPDATE todo SET label=?,status=?,description=? WHERE id = ?",[label,status,description,id]) 
        res.send(result)
    }catch(err){
        res.send(err)
    }


}

exports.deleteTodo = async (req,res) => {
    const {id} = req.body;
    try{
        const [result] = await pool.query("DELETE FROM todo WHERE id=?",[id]) 
    res.send(result)
    }catch(err){
        res.send(err)

    }
}