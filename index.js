import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import {createAdmin,getAllAdmins,getAdminById,updateAdmin,deleteAdmin,loginAdmin } from './controllers/Admin.js';
import {create,login,getAll,getById,updateById,deleteById,ChangeStatus,addActivity,viewAllActivites, AttendanceAssignment,getAttendanceAssignmentById } from './controllers/Teachers.js';
import { verifyingAdminToken,verifyingAdminAndTeacherToken, verifyingAdminAndDoctorToken, verifyingAdminAndParentToken, verifyingAllUsersToken } from "./middleware/verifyingToken.js";
import {loginDoctor,registerDoctor,getAllDoctors,getDoctorById,updateDoctorById, deleteDoctorById} from "./controllers/Doctors.js"
import {deleteParentById,getAllParents,getParentById,loginParent,registerParent, updateParentById} from "./controllers/Parent.js"
import {registerChildren,getAllChildrens,getChildrenById,updateChildrenById, deleteChildrenById,getChildrenByParentId,getChildrensAttendanceById,getChildrenByAttendanceBased} from "./controllers/Children.js"
import { sentMessage,getMessages } from "./controllers/Message.js"
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/n').then((response)=>{
    console.log(`databse connected on host : ${response.connection.host}`);
})

app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())


// Admin Module Routes
app.post('/api/admin-register', createAdmin);
app.post('/api/admin-login', loginAdmin);
app.post('/api/accept-users',verifyingAdminToken, ChangeStatus);
app.get('/api/admins',verifyingAdminToken, getAllAdmins);
app.get('/api/admins/:id',verifyingAdminToken, getAdminById);
app.put('/api/admins/:id',verifyingAdminToken, updateAdmin);
app.delete('/api/admins/:id', verifyingAdminToken,deleteAdmin);


// teachers Module Routes
app.post('/api/teacher-register', create);
app.post('/api/teacher-login', login);
app.get('/api/teachers',verifyingAllUsersToken, getAll);
app.get('/api/teachers/:id', getById);
app.put('/api/teachers/:id',verifyingAdminAndTeacherToken, updateById);
app.post('/api/teachers/add-activity',verifyingAdminAndTeacherToken, addActivity);
app.get('/api/teachers/view-activity/:id', viewAllActivites);
app.delete('/api/teachers/:id', verifyingAdminToken,deleteById);



// doctor Module Routes
app.post('/api/doctor-register', registerDoctor);
app.post('/api/doctor-login', loginDoctor);
app.get('/api/doctors', verifyingAllUsersToken,getAllDoctors);
app.get('/api/doctors/:id', getDoctorById);
app.put('/api/doctors/:id',verifyingAdminAndDoctorToken, updateDoctorById);
app.delete('/api/doctors/:id', verifyingAdminToken,deleteDoctorById);




// parent module routes
app.post('/api/parent-register', registerParent);
app.post('/api/parent-login', loginParent);
app.get('/api/parents',verifyingAllUsersToken, getAllParents);
app.get('/api/parents/:id', getParentById);
app.put('/api/parents/:id',verifyingAdminToken, updateParentById);
app.delete('/api/parents/:id', verifyingAdminToken,deleteParentById);



// children module routes
app.post('/api/children-register/:id', registerChildren);
app.get('/api/childrens/parent/:id', getChildrenByParentId);
app.get('/api/childrens',verifyingAllUsersToken,getAllChildrens);
app.get('/api/childrens/:id', getChildrenById);
app.put('/api/childrens/:id',verifyingAdminAndParentToken, updateChildrenById);
app.delete('/api/childrens/:id', verifyingAdminToken,deleteChildrenById);



app.post('/api/message/:id', verifyingAllUsersToken,sentMessage);
app.get('/api/message/:id', verifyingAllUsersToken,getMessages);
app.post('/api/teachers-attendance', verifyingAllUsersToken,AttendanceAssignment);
app.get('/api/teachers-attendance', verifyingAllUsersToken,getAttendanceAssignmentById);
app.get('/api/children-attendance/:id', verifyingAllUsersToken,getChildrensAttendanceById);

// progressing
app.get('/api/by-attendance-based/childrens', verifyingAllUsersToken,getChildrenByAttendanceBased);








app.listen(PORT,()=>{
    console.log(`server listening on port :${PORT}`)
})

