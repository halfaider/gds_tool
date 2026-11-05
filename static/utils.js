function gdsToolEscapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, function(character) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[character];
  });
}

function gdsToolShowJsonModal(data) {
  var title = document.getElementById('modal_title');
  var body = document.getElementById('modal_body');
  var pre = document.createElement('pre');

  title.textContent = 'JSON';
  pre.style.whiteSpace = 'pre-wrap';
  pre.textContent = JSON.stringify(data, null, 2);
  body.textContent = '';
  body.appendChild(pre);
  $('#large_modal').modal();
}
