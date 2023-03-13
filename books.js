//classe livro

class Livro{
    constructor(Titulo, Autor, Gênero, Ano, Classificacao, Paginas){
    this.Titulo = Titulo;
    this.Autor = Autor
    this.Gênero = Gênero
    this.Ano = Ano
    this.classificacao = Classificacao
    this.Paginas = Paginas

}
}

//salvar livro
class Salvar {
    static ReceberLivros() {
      let livros;
      if (localStorage.getItem('livros') === null) {
        livros = [];
      } else {
        livros = JSON.parse(localStorage.getItem('livros'));
      }
      return livros;
    }
  
    static addLivro(livro) {
      const livros = Salvar.ReceberLivros();
      livros.push(livro);
      localStorage.setItem('livros', JSON.stringify(livros));
    }
  
    static RemoverLivro(Ano) {
      const livros = Salvar.ReceberLivros();
      livros.forEach((livro, index) => {
        if (livro.Ano === Ano) {
          livros.splice(index, 1);
        }
      });
      localStorage.setItem('livros', JSON.stringify(livros));
    }
  }
  

//operações ui
class UI{
    static MostrarLivros(){
        const Livros = Salvar.ReceberLivros()
        
        Livros.forEach((Livro) => UI.addLivroAlista(Livro))
    }

    static addLivroAlista(Livro){
        const lista = document.getElementById('book-list')
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${Livro.Titulo} </td>
        <td>${Livro.Autor}</td>
        <td>${Livro.Gênero}</td>
        <td>${Livro.Ano}</td>
        <td>${Livro.Classificacao}</td>
        <td>${Livro.Paginas}</td>
        <td>
            <a href="#" class="btn btn-danger btn-sm delete">X</a>
        </td>
        
        `
        lista.appendChild(row)
    
    }

    static LimparCampos() {
        document.getElementById("Titulo").value = ''
        document.getElementById("Autor").value = ''
        document.getElementById("Gênero").value = ''
        document.getElementById("Ano").value = ''
        document.getElementById("Classificacao").value = ''
        document.getElementById("Paginas").value = ''
    }

    static MostrarAlerta(Mensagem, className) {
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(Mensagem))
        const container = document.querySelector('.container')
        const form = document.getElementById("book-form")
        container.insertBefore(div, form)

        //Fazer a msg sumir após um segundo
        setTimeout(() =>  {

            document.querySelector('.alert').remove()

        }, 1500);

    }

    static DeletarLivro(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove()
        }
    }
}

//mostrar livro

document.addEventListener('DOMContentLoaded', UI.MostrarLivros)

//remover livro
document.querySelector('#book-list').addEventListener('click', function (e){
    UI.DeletarLivro(e.target)
    Salvar.RemoverLivro(e.target.parentElement.previousElementSibling.textContent)
    UI.MostrarAlerta("Livro deletado com sucesso", "success")
})

//add livro
document.addEventListener ('submit', function (e) {
    e.preventDefault()

    //recever valor de formulario 
    const Titulo = document.querySelector("#Titulo").value
    const Autor = document.querySelector("#Autor").value
    const Gênero = document.querySelector("#Gênero").value
    const Ano = document.querySelector("#Ano").value
    const Paginas = document.querySelector("#Paginas").value
    const Classificacao = document.querySelector("#Classificacao").value

    if (Titulo === "" || Autor === ""|| Gênero === "" || Ano === ""|| Paginas=== "" || Classificacao === "" ){
    UI.MostrarAlerta("Por favor preencha todos os campos.","danger")
    }
    else {
        const livro = new Livro(Titulo,Autor,Gênero,Ano, Paginas, Classificacao)

        UI.addLivroAlista(livro)
        Salvar.addLivro(livro)
        UI.MostrarAlerta("Livro adicionado","success")
        UI.LimparCampos()

    }
})

//usuario


//comentario

//menu

//login

//dark mode
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const htmlElement = document.documentElement;
const darkModeClass = 'dark-mode';

darkModeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle(darkModeClass);

  if (htmlElement.classList.contains(darkModeClass)) {
    localStorage.setItem('darkModeEnabled', true);
  } else {
    localStorage.removeItem('darkModeEnabled');
  }
});

if (localStorage.getItem('darkModeEnabled')) {
  htmlElement.classList.add(darkModeClass);
}

