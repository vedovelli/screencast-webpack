
const getElements = ids => {
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

module.exports = {
  getElements,
  getPayload,
  clearPayload,
  setDisabled,
  clearForm
}
