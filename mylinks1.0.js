function iniciar_a_magica() {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  aa_();
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  bb_();
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  cc__();
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  dd__();
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
function aa_() {
  console.log(window.location.href);
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  let divBotoes = document.getElementById("divRedeSocial");
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  mylinks.redesSociais.forEach((item, index) => {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    if (item.link != '') {
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      divBotoes.innerHTML = divBotoes.innerHTML +
        "<img style='width:35px; height:35px; padding-right:10px; border-color: transparent;' src='" +
        item.imagem + "' onclick='ff__(" + index + ")'></img>";
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    }
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  });
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
function bb_() {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  let divBotoes = document.getElementById("divBotoes");
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  mylinks.botoes.forEach((item, index) => {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    if (item.textoDoBotao != '' && item.linkDoBotao != '') {
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let corDoBotao = item.corDoBotao;
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let corDaLetra = item.corDaLetra;
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let tamanhoDaLetra = item.tamanhoDaLetra;
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let today = new Date().toLocaleDateString();
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let parts = today.split('/');
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      today = new Date(parts[2], parts[1] - 1, parts[0]);
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let dt = new Date(parts[2], parts[1] - 1, parts[0]);
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      let linha = "<div style='padding-bottom: 10px'><button onclick='ee__("
        + index + ")' style='border-radius: 10px; font-size:" + tamanhoDaLetra +
        "px; color:" + corDaLetra + "; background: " + corDoBotao +
        "'>" + item.textoDoBotao + "</button></div>";
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      dt = new Date(parts[2], parts[1] - 1, parts[0]);
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
      divBotoes.innerHTML = divBotoes.innerHTML + linha;
      if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    }
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  });
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
function ff__(i) {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  window.location.href = mylinks.redesSociais[i].link;
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
function ee__(i) {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  if (mylinks.botoes[i].linkDoBotao != '') {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    window.location.href = mylinks.botoes[i].linkDoBotao;
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  }
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
servidor = {
  codigo: 130219861
};
function cc__() {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  document.title = 'MyLinks';
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  if (mylinks.titulo.linkDaSuaFoto == '') {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    document.getElementById("minhaImagem").src = 'https://bit.ly/logo___';
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  } else {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    document.getElementById("minhaImagem").src = mylinks.titulo.linkDaSuaFoto;
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  }
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  document.getElementById("owner").innerText = '@WellyngtonSampaio_ © 2020 version. 1.0';
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  document.getElementById("owner").href = 'https://bit.ly/TomInsta_';
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  document.getElementById("seuNome").innerText = mylinks.titulo.seuNome;
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  document.getElementById("seuNome").style = 'font-size: '
    + mylinks.titulo.tamanhoTexto + 'px;color:'
    + mylinks.titulo.corTexto;
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
}
function dd__() {
  if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
  if (mylinks.fundo.cor != '') {
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    document.getElementById('container').style = 'background: '
      + mylinks.fundo.cor;
    if (document.getElementById("owner") == null) { return; } if (document.getElementById("pp") == null) { return; } if (servidor.codigo != mylinks.titulo.codigo) { return; }
    return;
  }
}
iniciar_a_magica();
