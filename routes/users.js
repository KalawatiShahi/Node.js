const express = rquire("express");
const  {handleGetAllUsers,
     handleGetUserById, 
     handleUpdateUserById,
     handleDeleteUserById,
      handleCreateNewUser} = require("../controllers/user")

const router = express.Router();



router.Route("/").get(handleGetAllUsers).post(  handleCreateNewUser)


app.route("/:id")
.get( handleGetUserById)
.patch( handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports.router