
function loadAppointments(){
 db.collection("appointments").get().then(snapshot=>{
   appointments.innerHTML="";
   snapshot.forEach(doc=>{
     const d = doc.data();
     appointments.innerHTML += "<li>ID:"+doc.id+" | "+
     d.student+" | "+d.teacher+" | "+d.status+"</li>";
   });
 });
}

function updateStatus(){
 db.collection("appointments").doc(appId.value)
 .update({status: status.value})
 .then(()=>{
   alert("Status updated");
   loadAppointments();
 });
}

function loadMessages(){
 db.collection("appointments").get().then(snapshot=>{
   messages.innerHTML="";
   snapshot.forEach(doc=>{
     messages.innerHTML += "<li>"+
     doc.data().student+" : "+doc.data().purpose+
     "</li>";
   });
 });
}

function logout(){
 auth.signOut().then(()=>location="index.html");
}

auth.onAuthStateChanged(user=>{
 if(user){
   loadAppointments();
   loadMessages();
 }
});
