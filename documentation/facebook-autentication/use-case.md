# Autenticação com Facebook

> ## Dados
*Token de acesso

> ## Fluxo primário
1. Obter dados (nome, email e Facebook ID) da API do Facebook
2. Consultar se existe um ususário com o email recebido acima
3. Criar uma conta para o usuário com os dados recebidos pelo Facebook
4. Criar um token de acesso, a partir do ID usuário, com inspiração de 30 mintutos
5. Retornar o token de acesso gerado

> ## Fluxo alternativo: Usuário já existe
3. Atualizar a conta do usuário com os dados recebidos do Facebook (Facebook ID e nome só atualizar o nome da conta de usuário caso não possua nome)

> ## Fluxo de excessão: Token inválido ou explirado
1. Retornar um erro de autenticação
