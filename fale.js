
;(function ($) {

  var elementIds = ['contact', 'name', 'email', 'phone', 'website', 'message', 'submit'];

  var elements = getElements(elementIds);

  function getElements (ids) {
    return ids.reduce(function (acc, id) {
      acc[id] = $('#'+id);
      return acc;
    }, {});
  }

  function getPayload (elements) {
    return Object.keys(elements).reduce(function (acc, prop) {
      acc[prop] = elements[prop].val()
      return acc;
    }, {});
  }

  function clearPayload(payload) {
    Object.keys(payload).forEach(function (prop) {
      if (payload[prop] == '') {
        delete payload[prop]
      }
    });
    return payload;
  }

  function setDisabled(elements, state) {
    Object.keys(elements).forEach(function (prop) {
      elements[prop].attr('disabled', state);
    });
  }

  function clearForm(elements) {
    Object.keys(elements).forEach(function (prop) {
      elements[prop].val('');
    });
  }

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
})(jQuery);
