const $ = (selector) => document.querySelector(selector);

$('.submitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const name = $('#name').value;
  const email = $('#email').value;
  const phone = $('#phone').value;
  if (name && email && phone) {
    let newdiv = document.createElement('p');
    $('.container').innerHTML = '';
    newdiv.innerHTML = `<h1>Your infomation</h1>
    <p>Name:${name}</p>
    <p>Email:${email}</p>
    <p>Phone Number:${phone}</p>`;
    $('.container').appendChild(newdiv);
  }
});
