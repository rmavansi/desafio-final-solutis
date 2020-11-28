// #Regra-02: É possível esconder as imagens das cartas quando errar o par
When('seleciono duas cartas que nao são iguais', () => {
  cy.get('img[src="https://picsum.photos/150/250?random=0"]')
    .eq(0)
    .parent()
    .parent()
    .click();

  cy.get('img[src="https://picsum.photos/150/250?random=1"]')
    .eq(1)
    .parent()
    .parent()
    .click();
});

Then('as imagens das cartas são ocultadas', () => {
  cy.get('div[class="card-0-2-3 selected-0-2-4"]').should('not.exist');

  cy.screenshot();
});
