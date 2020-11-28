Feature: Game
  I como jogador do jogo da memória
  Wish jogar
  For me divertir

  #@ignore
  #Regra-01: É possível mostrar a imagem de uma carta ao seleciona-la
  Scenario: Imagem da carta é mostrada ao ser selecionada
    Given que todas as cartas estão viradas para baixo
    When uma carta é clicada
    Then a carta é virada

  #@ignore
  #Regra-02: É possível esconder as imagens das cartas quando errar o par
  Scenario: As imagens das cartas são ocultadas ao errar o par
    Given que todas as cartas estão viradas para baixo
    When seleciono duas cartas que nao são iguais
    Then as imagens das cartas são ocultadas

  #@ignore
  #Regra-03: É possível manter as imagens das cartas visíveis ao encontrar o par
  Scenario: As imagens das cartas são mantidas visíveis ao encontrar o par
    Given que todas as cartas estão viradas para baixo
    When selecionar duas cartas iguais
    Then as cartas são mantidas com as imagens visíveis

  #@ignore
  #Regra-04: É possível mostrar mensagem ao terminar o jogo
  Scenario: O jogo termina quando todos os pares são encontrados
    Given que todas as cartas estão viradas para baixo
    When seleciono todos os pares iguais
    Then mensagem de termino de jogo é mostrada

  #@ignore
  #Regra-05: É possível reinicinar o jogo após o término
  Scenario: O jogo é reiniciado após o término
    Given que todas as cartas estão viradas para baixo
    When seleciono todos os pares iguais
    And reinicio o jogo
    Then o jogo é reiniciado

