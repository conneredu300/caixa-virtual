    *************   
    *********   
    ******       
    ***            
    **            
    **            
    ***            
    ******       
    *********  
    ************* AIXA VIRTUAL


    * Como Acessar:
        *   Acesse a api através do link: https://caixa-virtual.herokuapp.com/ + endpoint
        *   Ou siga os passos a seguir:
                1.  Clone o repositório
                2.  Vá até a pasta do projeto -> "cd node-api"
                3.  Instale as dependências ---> "npm install"
                4.  Execute o servidor --------> "npm run serv"
        *   Observações:
                Para usar o mongodb no container docker, descomente a linha 14 do arquivo server.js, depois execute o comando "docker-compose up" no terminal.

    * Endpoints:
         _________CAMINHO______________MÉTODO_______________________AÇÃO______________________________________PARÂMETROS__________________________OBSERVAÇÕES_________
        |                           |          |                                               |                                        |                             |
        | /api/movimentacao         | GET      | Retorna todas movimentações com o saldo total | -                                      | -                           |
        | /api/movimentacao/:id     | GET      | Retorna uma movimentação específica           | id                                     | id da movimentação          |
        | /api/movimentacao         | POST     | Faz a entrada ou saída do caixa               | tipo(entrada, saida), descricao, valor | tipo representa a operação  |
        | /api/movimentacao-log     | GET      | Retorna o log das movimentações               | -                                      | -                           |
        | /api/movimentacao-log/:id | GET      | Retorna um log específico                     | id                                     | id do log                   |
        | /api/caixa                | GET      | Retorna o caixa criado automaticamente        | -                                      | -                           |
        | /api/caixa                | POST     | Cria o caixa                                  | saldoTotal (padrão 0), descricao       | -                           |
        | /api/caixa/:id            | DELETE   | Exclui o caixa                                | id                                     | id do caixa                 |
        |___________________________|__________|_______________________________________________|________________________________________|_____________________________|