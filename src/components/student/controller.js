import Student from "../../models/student";
 
export const findAll = async (req, res) => {
 try {
   const students = await Student.find();
 
   res.json({
     ok: true,
     data: students,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};
 
export const create = async (req, res) => {
 try {
   const { body } = req;
   const user = new Student(body);
   user.save();
 
   res.json({
     ok: true,
     data: user,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};
//UPDATE

export const updateOne = async (req, res) => {
    try{
        const { id: _id } = req.params
        const student = req.body;
        const studentUpdated = await Student.findByIdAndUpdate(_id, student, {new: true});
        res.json({
            ok: "Student updated",
            data: studentUpdated
            }
        )
    }catch(error){
        res.json({
            ok: false,
            data: error.message,
        })
    
    }
}

//DELETE
export const remove = async (req, res) => {
    try {
        const { id } = req.params
        const studentDeleted = await Student.findByIdAndRemove({_id:id});
        res.json({
            ok:"Student deleted",
            data: studentDeleted
            
        })

    }catch(error){
        console.log(err.message);
        res.json({
            ok: false,
            data: error.message,
        })

    }
}