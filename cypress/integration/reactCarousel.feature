Feature: Mostrar itens no carrossel
  I como usuário do carrossel
  Wish utilizar o carrossel
  For mostrar os itens

  #Regra-01: Não é possível mover o carrossel do primeiro para o último item pelo botão lateral
  #@ignore
  Scenario: Botão esquerdo é desabilitado quando o primeiro item estiver ativo
    Given que haja itens no carrossel
    When tento mover o carrossel para esquerda
    Then botão de mover está desativado

  #Regra-02: Não é possível mover o carrossel do último para o primeiro item pelo botão lateral
  #@ignore
  Scenario: Botão direito é desabilitado quando o último item estiver ativo
    Given que haja itens no carrossel
    When move o carrossel até o último item
    Then botão de mover para direita está desativado

  #Regra-03: É possível navegar pelos bullets points (paginação)
  #@ignore
  Scenario: Ao selecionar o bullet point o item no carrossel é alterado
    Given que haja itens no carrossel
    When tento mudar os itens pela paginação
    Then item do carrossel é alterado

  #Regra-04: É possível alterar o conteúdo dos itens
  #@ignore
  Scenario: item no carrossel é alterado
    Given que haja itens no carrossel
    When tento alterar um item
    Then o item é alterado

  #Regra-05: É possível remover a paginação do carrossel
  #@ignore
  Scenario: Remove paginação do carrossel
    Given que haja itens no carrossel
    When tento remover a paginação do carrossel
    Then a paginação é escondida

  #Regra-06: Não é possível ver o carrossel quando não houver itens
  #@ignore
  Scenario: Carrossel é escondido quando não há itens para serem mostrados
    Given que haja itens no carrossel
    When tento apagar todos os itens do carrossel
    Then o carrossel não é mostrado

  #Regra-07: É possível ocultar os botões laterais
  #@ignore
  Scenario: Botões de navegação são escondidos quando a prop estiver ativa
    Given que haja itens no carrossel
    When adiciono props de remover os botões de navegação
    Then os botões ficam ocultos

  #Regra-08: É possível alterar a quantidade de itens ativos
  #@ignore
  Scenario: Altero a quantidade de itens ativos no carrossel
    Given que haja itens no carrossel
    When tento trocar a quantidade de itens a serem mostrados
    Then a quantidade é alterada

  #Regra-09: É possível adicionar itens ao carrossel
  #@ignore
  #Scenario Outline: Novo item é adicionado ao carrossel
  #  Given que haja itens no carrossel
  #  When tento adicionar novo "<item>"
  #  Then "<item>" é adicionado
  #Examples:
  #    | item |
  #    | 7    |
  #    | 8    |

  # Requistos obrigatórios
  ### Ter elementos mapeados com Id, com Class e com Xpath
  ### Criar sete Scenarios contendo ao menos três boas práticas.
  ### A descrição da Feature deve ser clara e objetiva
  ### Criar regras claras e que façam sentido
  ### Tirar Screenshot das telas
  ### Utilizar os seguintes comandos: .get, .should, .contains, .click, .clear, .type
  ### Realizar organização de pastas segundo as boas práticas

  # Requisitos opcionais
  ### Os elementos mapeados podem conter outros tipos de mapeamento, ou seja, por type, button e etc
  ### Utilizar comandos como: force: true, dblclick
  ### Utilizar Scenario Outline

  # Requisitos Extras:
  ### Você poderá apresentar até duas aplicações, que seja de fácil manuseio.
  ### Salvar as informações em um repositório
  ### Utilizar comando .parent



  ############# Regra-memory-game: clickar fora da carta

