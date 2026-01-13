
const firebaseConfig={
  apiKey: "Add api key",
  authDomain: "student-teacher-booking-f1f99.firebaseapp.com",
  projectId: "student-teacher-booking-f1f99"
};
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=firebase.firestore();
