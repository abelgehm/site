function CarregarTabela(tabela, titulo="Cashback plus") {
  $('#mdlt').html(titulo);
  $('#mdlb').load(tabela, function() {$('#mdl').modal('show');});
}

function MostrarMensagem(mensagem, titulo="Cashback plus") {
  $('#mdlt').html(titulo);
  $('#mdlb').html(mensagem);
  $('#mdl').modal('show');
}

function LimpaModal(){
  $('#mdlt').html("Cashback plus");
  $('#mdlb').html("");
}

function Backdrop(ativar){
  if (ativar){
    $('#cover-spin').show();
  }
  else{
    $('#cover-spin').hide();
  }
}

$('#mdlx').click(LimpaModal);
$('#mdlf').click(LimpaModal)


$('#mdl').on('show.bs.modal', function(){Backdrop(false);})

$('#btnOndeComprar').click(MostraOndeComprar)

function MostraOndeComprar() {
  Backdrop(true);
  CarregarTabela('https://escritorio.rcirenda.com.br/ondecomprar', 'Confira os estabelecimentos conveniados');
  return false;
}
