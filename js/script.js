document.addEventListener("DOMContentLoaded", () => {
  // Array de membros
  const membros = [
    {
      nome: "Caio Alcântara",
      curso: "Engenharia Ambiental",
      matrícula: "01841899",
      foto: "../img/membro1.jpg"
    },
    {
      nome: "Lucas Almeida",
      curso: "Ciências Sociais",
      foto: "../img/membro2.jpg"
    },
    {
      nome: "Mariana Santos",
      curso: "Administração",
      foto: "../img/membro3.jpg"
    },
    {
      nome: "João Pedro",
      curso: "Engenharia de Produção",
      foto: "../img/membro4.jpg"
    }
  ];

  const teamContainer = document.getElementById("team");

  // Criar os cards Bootstrap dinamicamente
  membros.forEach(membro => {
    const col = document.createElement("div");
    col.classList.add("col-md-3", "col-sm-6");

    col.innerHTML = `
      <div class="card text-center h-100 p-3">
        <img src="${membro.foto}" alt="${membro.nome}">
        <div class="card-body">
          <h5 class="card-title text-info fw-bold">${membro.nome}</h5>
          <p class="card-text text-white-50">${membro.curso}</p>
          <p class="card-text text-white-50">${membro.matrícula ? membro.matrícula : ''}</p>
        </div>
      </div>
    `;

    teamContainer.appendChild(col);
  });
});
