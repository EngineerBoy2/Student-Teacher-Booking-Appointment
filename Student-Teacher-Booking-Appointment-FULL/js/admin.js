
function addTeacher(){
 db.collection("teachers").add({
   name: tname.value,
   department: dept.value,
   subject: subject.value
 }).then(()=>{
   alert("Teacher added");
   loadTeachers();
 });
}

function loadTeachers(){
 db.collection("teachers").get().then(snapshot=>{
   teachers.innerHTML="";
   snapshot.forEach(doc=>{
     teachers.innerHTML += "<li>"+
     doc.data().name+" ("+doc.data().subject+") "+
     "<button onclick=\"deleteTeacher('"+doc.id+"')\">Delete</button></li>";
   });
 });
}

function deleteTeacher(id){
 db.collection("teachers").doc(id).delete()
 .then(()=>loadTeachers());
}

function loadPendingAppointments(){
 db.collection("appointments")
 .where("status","==","Pending")
 .get()
 .then(snapshot=>{
   pendingAppointments.innerHTML="";
   snapshot.forEach(doc=>{
     const d = doc.data();
     pendingAppointments.innerHTML +=
       "<li>"+
       "Student: "+d.student+" | Teacher: "+d.teacher+
       " <button onclick=\"approve('"+doc.id+"')\">Approve</button>"+
       " <button onclick=\"reject('"+doc.id+"')\">Reject</button>"+
       "</li>";
   });
 });
}

function approve(id){
 db.collection("appointments").doc(id).update({
   adminApproved: true,
   status: "Admin Approved"
 }).then(loadPendingAppointments);
}

function reject(id){
 db.collection("appointments").doc(id).update({
   adminApproved: false,
   status: "Rejected by Admin"
 }).then(loadPendingAppointments);
}

function logout(){
 auth.signOut().then(()=>location="index.html");
}

auth.onAuthStateChanged(user=>{
 if(user){
   loadTeachers();
   loadStudents();
 }
});

auth.onAuthStateChanged(user=>{
 if(user) loadPendingAppointments();
});
