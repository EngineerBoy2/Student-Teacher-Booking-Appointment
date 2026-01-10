
function searchTeacher(){
 let name = searchName.value;
 db.collection("teachers")
 .where("name","==",name)
 .get().then(snap=>{
   teacherList.innerHTML="";
   snap.forEach(d=>{
     teacherList.innerHTML += "<li>"+d.data().name+" ("+d.data().subject+")</li>";
   });
 });
}

function bookAppointment(){
 db.collection("appointments").add({
   teacher: teacherName.value,
   purpose: purpose.value,
   status: "Pending",
   student: auth.currentUser.email
 });
 alert("Appointment booked");
 loadMyAppointments();
}

function loadMyAppointments(){
 db.collection("appointments")
 .where("student","==",auth.currentUser.email)
 .get().then(snap=>{
   myAppointments.innerHTML="";
   snap.forEach(d=>{
     myAppointments.innerHTML += "<li>"+
       d.data().teacher+" - "+d.data().status+" - "+d.data().purpose+
       "</li>";
   });
 });
}

function logout(){
 auth.signOut().then(()=>location="index.html");
}

auth.onAuthStateChanged(u=>{
 if(u) loadMyAppointments();
});
