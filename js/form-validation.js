function encabezado() {
    var div = document.createElement('div');
    div.className = 'py-5 text-center';
    var img = document.createElement('img');
    img.className = 'd-block mx-auto mb-4';
    img.src = 'bootstrap-solid.svg';
    img.width = 72;
    img.height = 72;
    div.appendChild(img);
  
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode('Checkout form'));
    div.appendChild(h2);
  
    var p = document.createElement('p');
    p.className = 'lead';
    p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
    div.appendChild(p);
  
    return div;
  }
  
  function item_carro(nombre, descripcion, precio, promo=false) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    if (promo) {
      div.className = 'text-success';
      li.className = 'list-group-item d-flex justify-content-between bg-light';
    }
    else {
      li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    }
    var h6 = document.createElement('h6');
    h6.className = 'my-0';
    var small = document.createElement('small');
    small.className = 'text-muted';
    var span = document.createElement('span');
    span.className = 'text-muted';
  
    h6.appendChild(document.createTextNode(nombre));
    small.appendChild(document.createTextNode(descripcion));
    div.appendChild(h6);
    div.appendChild(small);
    li.appendChild(div);
    span.appendChild(document.createTextNode(precio));
    li.appendChild(span);
  
    return li;
  }
  
  
  function codigo_promocion() {
    var form = document.createElement('form');
    form.className = 'card p-2';
    var div = document.createElement('div');
    div.className = 'input-group';
    form.appendChild(div);
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Promo code';
    div.appendChild(input);
    var div_button = document.createElement('div');
    div_button.className = 'input-group-append';
    var button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-secondary';
    button.appendChild(document.createTextNode('Redeem'));
    div_button.appendChild(button);
    div.appendChild(div_button);
  
    return form;            
  }
  
  
  function carro() {
    var container = document.createElement('div');
    container.className = 'col-md-4 order-md-2 mb-4';
    var h4 = document.createElement('h4');
    h4.className = 'd-flex justify-content-between align-items-center mb-3';
    var span = document.createElement('span');
    span.className = 'text-muted';
    span.appendChild(document.createTextNode('Your cart'));
    h4.appendChild(span);
    span = document.createElement('span');
    span.className = 'badge badge-secondary badge-pill';
    span.appendChild(document.createTextNode('3'));
    h4.appendChild(span);
    container.appendChild(h4);
  
    var ul = document.createElement('ul');
    ul.className = 'list-group mb-3';
    ul.appendChild(item_carro('Product name', 'Brief description', '$12'));
    ul.appendChild(item_carro('Second Product', 'Brief description', '$8'));
    ul.appendChild(item_carro('Third item', 'Brief description', '$5'));
    ul.appendChild(item_carro('Promo code', 'EXAMPLECODE', '-$5', true));
  
    var total = document.createElement('li');
    total.className = 'list-group-item d-flex justify-content-between';
    var total_span = document.createElement('span');
    total_span.appendChild(document.createTextNode('Total (USD)'));
    var total_price = document.createElement('strong');
    total_price.appendChild(document.createTextNode('$20'));
    total.appendChild(total_span);
    total.appendChild(total_price);
    ul.appendChild(total);
  
  
    container.appendChild(ul);
    container.appendChild(codigo_promocion());
    return container;
  }
  
  function footer_link(texto) {
    var li = document.createElement('li');
    li.className = 'list-inline-item';
    var a = document.createElement('a');
    a.href = '#';
    a.appendChild(document.createTextNode(texto));
    li.appendChild(a);
  
    return li;
  }
  
  function footer() {
    var footer = document.createElement('footer');
    footer.className = 'my-5 pt-5 text-muted text-center text-small';
    var p = document.createElement('p');
    p.className = 'mb-1';
    p.appendChild(document.createTextNode('2017-2019 Company Name'));
    footer.appendChild(p);
  
    var ul = document.createElement('ul');
    ul.className = 'list-inline';
    ul.appendChild(footer_link('Privacy'));
    ul.appendChild(footer_link('Terms'));
    ul.appendChild(footer_link('Support'));
    footer.appendChild(ul);
    
    return footer;
  }
  
  var body = document.getElementsByTagName('body')[0];
  body.className = 'bg-light';
  var container = document.createElement('div');
  container.className = 'container';
  body.appendChild(container);
  container.appendChild(encabezado());
  var row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);
  row.appendChild(carro());
  container.appendChild(footer());