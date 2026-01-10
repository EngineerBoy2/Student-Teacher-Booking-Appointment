
const firebaseConfig={
  apiKey: "AIzaSyBtwtPCd4rHe7iKKfi0Yh9MfE3HvCiVEx4",
  authDomain: "student-teacher-booking-f1f99.firebaseapp.com",
  projectId: "student-teacher-booking-f1f99"
};
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=firebase.firestore();
