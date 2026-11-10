const produtos = [
    {
      nome: "daniel",
      categoria: "sertanejo",
      nomedamusica: "reino encantado",
      tempo: 400
    },
    {
      nome: "amadobatista",
      categoria: "romantico",
      nomedamusica:" meugrandeamor",
     tempo : 300
    },
    {
        nome: "leonardo",
      categoria: "sertanejo",
      nomedamusica:" eujuro",
      tempo: 500
    },
    {
        nome: "zezedecamargoeluciano",
      categoria: "sertanejo",
      nomedamusica:"euadoroamavoce",
      tempo: 450
    },
    {
        nome: "vitoreleu",
      categoria: "sertanejo",
      nomedamusica: "saponalagoa",
      tempo: 400
    },
 
    {
        nome: "sandi",
      categoria: "romantico",
      nomedamusica:" ilusao"
      ,
      tempo: 400
    },
    {
        nome: "sandejunio",
      categoria: "romantico",
      nomedamusica: "beijoebom",
      tempo: 350
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.nomedamusica}</td>
        <td class="tempo">${produto.tempo.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }