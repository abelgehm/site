function CarregarTabela(tabela, titulo = "Cashback plus") {
  $('#mdlt').html(titulo);
  $('#mdlb').load(tabela, function () {
    $('#mdl').modal('show');
  });
}

function MostrarMensagem(mensagem, titulo = "Cashback plus") {
  $('#mdlt').html(titulo);
  $('#mdlb').html(mensagem);
  $('#mdl').modal('show');
}

function LimpaModal() {
  $('#mdlt').html("Cashback plus");
  $('#mdlb').html("");
}

function Backdrop(ativar) {
  if (ativar) {
    $('#cover-spin').show();
  }
  else {
    $('#cover-spin').hide();
  }
}

$('#mdlx').click(LimpaModal);
$('#mdlf').click(LimpaModal);

$('#mdl').on('show.bs.modal', function () {
  Backdrop(false);
});

/*
$('#btnOndeComprar').click(
  function MostraOndeComprar() {
    Backdrop(true);
    CarregarTabela('https://escritorio.rcirenda.com.br/EstabelecimentoCredenciado', 'Confira os estabelecimentos conveniados');
    return false;
  });*/

$('.branco').on('click', function () {
  if ($(window).width() < 1200) {
    $('.navbar-toggler').click();
  }
});

$('#simulacao').on('click', function () {
  Backdrop(true)
  CarregarTabela('queroconciliar.html', "Simulação Conciliação, Mediação &amp; Consultoria");
  return false;
});

function validEmail(email){
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

function EnviarSimulacao() {
  var data = {
    tipo: $('#tipo').val(),
    nome: $('#nome').val(),
    email: $('#email').val(),
    telefone: $('#telefone').val(),
    problema: $('#problema').val()
  };

  if (data.nome.length < 5)
  {
    alert("Preencha o nome");
    $('#nome').focus();
    return;
  }

  if (!validEmail(data.email))
  {
    alert("Verifique o e-mail");
    $('#email').focus();
    return;
  }

  if(data.telefone.length < 10)
  {
    alert("Digite o número de telefone com DDD");
    $('#telefone').focus();
    return;
  }

  if (data.problema.length < 5)
  {
    alert("Descreva o problema");
    $('#problema').focus();
    return;
  }

  $('#enviarpergunta').attr('disabled', true)
  Backdrop(true);

  $.ajax({
    url: "/queroconciliar.aspx",
    data: data,
    cache: false,
    success: function (html) {
      MostrarMensagem("Mensagem enviada, aguarde o retorno");
      Backdrop(false);
      console.log(html);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert("Ocorreu um erro, tente novamente mais tarde");
      Backdrop(false);
      console.log(thrownError);
    }
  });

}