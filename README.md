Spike Microfrontend
===================

Este repositório contém uma demonstração de microfrontend utilizando dois projetos Next.js: `nextjs-app` e `count-nextjs`. O projeto `nextjs-app` roda na porta 3000 e inclui um componente `Header`, além de integrar o componente `Count` do projeto `count-nextjs`, que roda na porta 3001.

Pré-requisitos
--------------

Antes de iniciar, certifique-se de ter o Node.js LTS instalado em sua máquina. Você pode baixar e instalar o Node.js [aqui](https://nodejs.org/).

Instalação
----------

Para configurar os projetos para desenvolvimento local, siga os passos abaixo:

1.  Clone o repositório:
    
    ```bash
    git clone https://github.com/marcosmss/spike-microfrontend.git 
    cd spike-microfrontend
    
2.  Instale as dependências para ambos os projetos:
    
    *   Para o projeto `nextjs-app`:
        ```bash
        cd nextjs-app
        npm install
        
    *   Para o projeto `count-nextjs`:
        ```bash
        cd count-nextjs
        npm install
        

Executando os Projetos
----------------------

Para rodar os projetos localmente:

*   Execute o `nextjs-app` na porta 3000:
    ```bash
    cd nextjs-app
    npm run dev
    
*   Em um novo terminal, execute o `count-nextjs` na porta 3001:
    ```bash
    cd count-nextjs
    npm run dev
    

Agora você pode acessar o `nextjs-app` em `http://localhost:3000` e o `count-nextjs` estará servindo o componente remoto na porta `3001`.

Estrutura dos Projetos
----------------------

### nextjs-app

*   **Header**: Um componente visual que é exibido na página inicial.
*   **Count Integration**: Integração do componente `Count` do projeto `count-nextjs`.

### count-nextjs

*   **Count**: Um componente que fornece funcionalidade de contador, consumido remotamente pelo `nextjs-app`.
