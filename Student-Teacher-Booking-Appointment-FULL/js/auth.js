
function register(){
 auth.createUserWithEmailAndPassword(email.value,password.value)
 .then(c=>db.collection("users").doc(c.user.uid).set({role:role.value}))
 .then(()=>alert("Registered"));
}
function login(){
 auth.signInWithEmailAndPassword(email.value,password.value)
 .then(r=>db.collection("users").doc(r.user.uid).get())
 .then(d=>location=d.data().role+".html");
}
