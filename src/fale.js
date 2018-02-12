
const { getElements, getPayload, clearPayload, setDisabled, clearForm } = require('./lib/formlib.js');

var elementIds = ['contact', 'name', 'email', 'phone', 'website', 'message', 'submit'];

var elements = getElements(elementIds);

fill();

function fill() {
  $('#name').val('Vedovelli');
  $('#email').val('vedovelli@gmail.com');
  $('#phone').val('+5511 96556-9889');
  $('#website').val('https://vedovelli.com.br');
  $('#message').val('A mensagem a ser enviada');
}

elements.contact.on('submit', function (event) {
    event.preventDefault();

    var values = getPayload(elements);
    var payload = clearPayload(values);

    setDisabled(elements, true);

    setTimeout(function () {
      clearForm(elements)
      setDisabled(elements, false);
      elements.name.focus();
      alert('Mensagem enviada com sucesso');
    }, 2000);
});
