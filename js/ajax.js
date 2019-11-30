function CarregarTabela(tabela, titulo="Cashback plus") {
  $('#mdlt').html(titulo);
  $('#mdlb').load(tabela, function() {$('#mdl').modal('show');});
}

$('#mdlx').click(LimpaModal);
$('#mdlf').click(LimpaModal)

function LimpaModal(){
  $('#mdlt').html("Cashback plus");
  $('#mdlb').html("");
}

