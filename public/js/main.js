import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
$(document).ready(function () {
  const firebaseConfig = {
    apiKey: 'AIzaSyCbyybr_Hc5QnEY23ZfNLmpReH-EG-yCjY',
    authDomain: 'forbeokhenh.firebaseapp.com',
    projectId: 'forbeokhenh',
    storageBucket: 'forbeokhenh.appspot.com',
    messagingSenderId: '544186995575',
    appId: '1:544186995575:web:6a782822c4b6c6f88f8772',
    measurementId: 'G-E6DKRKYP7B',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const dbRef = collection(db, 'data');

  $('.class-show').hide();
  $('#heart').click(function () {
    $('#heart').toggleClass('active');
    var classList = '' + $('#heart').attr('class');
    if (classList === 'active') {
      $('#heart').text('Iu Em');
      $('.class-show').show();
    } else {
      $('#heart').text('Click');
      $('.class-show').hide();
    }
  });

  $('.btn-submit').click(function () {
    var comment = $('#comment').val();
    if (comment) {
      const data = {
        comment: comment,
      };
      addDoc(dbRef, data)
        .then((docRef) => {
          $('#comment').val('Hihi nhớ gòi. Iu emmm nhìuuu moahh');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('Không ghi ai cho bấm submit =.=');
    }
  });
});
