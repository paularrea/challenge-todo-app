import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
    withCredentials: true
});
const errorHandler = (err) => {
  console.error(err);
  throw err;
};
export default {
  service,
  handleUpload(theFile) {
    return service
      .post("/upload", theFile)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  saveNewTodo(newTodo){
      return service.post("/todos", newTodo)
      .then(res => res.data)
      .catch(errorHandler)
  },
  profileUpdate(profileUpdate){
    return service.put("/profile/edit-profile", profileUpdate)
    .then(res => res.data)
    .catch(errorHandler)
},
addMember(object){
  //necesito enviar al back la id del evento. la id de mi usuario 
  return service.post("/events", object)
  .then(res => res.data)
  .catch(errorHandler)
},
deleteMember(object){
  //necesito enviar al back la id del evento. la id de mi usuario 
  return service.post("/events/remove-member", object)
  .then(res => res.data)
  .catch(errorHandler)
},
addMessage(object){
  //necesito enviar al back la id del evento. la id de mi usuario 
  return service.put("/events/message", object)
  .then(res => res.data)
  .catch(errorHandler)
},
getNotiInfo(){
  return service.get("/events/message")
  .then(res => res.data)
  .catch(errorHandler)
},



getUserInfo(){
  //necesito enviar al back la id del evento. la id de mi usuario 
  return service.get("/profile")
  .then(res => res.data)
  .catch(errorHandler)
},
};