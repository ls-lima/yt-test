## Environment

O projeto utiliza node.js e git para baixar suas dependências. É necessário que estejam instalados 
para seguir os próximos passos.

No diretório raiz do projeto, pelo prompt de comando do Node, rode o seguinte script: 

* npm install -g bower (Instalará o bower globalmente. Necessário para gerenciar as dependências do projeto);
* npm install -g grunt-cli (Instalará o grunt, usado para compilar e rodar o projeto)
* npm install (npm install e bower install )
* bower install

## Build & Run

Para rodar o projeto, utilize o comando :

* grunt serve --forced

O projeto está configurado para rodar na porta 9000 por padrão. A porta pode ser alterada no Gruntfile.js.
