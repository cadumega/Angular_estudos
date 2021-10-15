// Overview
// SPSA - single page application , desenvolver para esse tipo de página
// Angular CLI npm install -g @angular/cli . Precisa antes instalar o NPM e Node. Faz todo trabalho mais pesado de organização de pastas, dependências.
//  ng new cursoAngular - add angular routing - CSS - entrar dentro da pasta do projeto cd cursoAngular - executar: code . 
// e2e configs para fazer testes unitarios - node_modules pacotes para angular, mascaraca de cpf etc (ignorada pelo gitignore) - pasta src será a pasta principal, como o main.ts  , polyfills.ts é como se fosse um tradutor (melhor visualizacao em qualquer cliente side browse) - styles geralzao de estilizacao - test.ts arquivos de testes - icone - pasta app com todos os componentes e servers, tudo que for relacionado a aplicacao estara na pasta app, dentro dele tem uma estrutura básica de componente - cada componente gera 3 arquivos (um arquivo html, css e spec) - a juncao deles é um componente 
// assets todos os arquivos internos que iremos precisar, imagens, css qualquer outra coisa. - environments colocando algumas variaveis ambiente para subir ao servidor - editorconfig e gitignore , angular.json todas as configs do angular - karma.config que é usado para testes
//ng serve   na pasta do projeto!!!
// localhost:4200

// Angular cli renderiza todos esses arquivos
// ng generate    ou ng g c data-binding            via linha de comando , nome do nosso primeiro componente. Instalar Angular Schematics para clicar direto na pasta com botao direito e criar o component. Será criado na pasta app.
// angular json consigo alterar o prefix , de prefixo de config dos componentes. 'app-data-binding'
//Componentes precisa estar declarado em declarations arq app.module.ts e import tambem.

//app-routing.module.ts para definir a rota , pq em data-binding exportei a classe DataBindingComponent. const routes: Routes = [{path:'primeiro-componente', component: DataBindingComponent}];

/* Gerar um novo componente. Acertar na rota.
{path:'segundo-componente', component: SegundoComponenteComponent}

http://localhost:4200/segundo-componente

segundo-componente works!

Colocar o nome do path e declarando o component


<router-outlet></router-outlet> 
PRECISA ESTAR em app.component.html , o resto apaguei tudo.


colocar input em data-binding.component
<input type="text" (input)="$event.target.value">
Para atualizar valores dentro do componente

2 bidogins para chamar a variavel numero e colocar dentro de h1 para fazer a chamada.

this referenciado a classe
nao usar let pois éatributo de classe , só se fosse dentro da fc.
*/