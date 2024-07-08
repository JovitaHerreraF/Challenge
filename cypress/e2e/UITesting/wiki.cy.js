describe('search wiki', () => {
    it('buscamos el pokemon en la wiki', () => {
      cy.visit('https://en.wikipedia.org/wiki/Pikachu')
      let capturedText;
      cy.get('.mw-content-ltr.mw-parser-output > p:nth-of-type(4)')
      .invoke('text')
      .then((text) => {
          capturedText = text;
          cy.log(capturedText);
      });
      cy.get(".mw-page-title-main").should('be.visible')
      cy.contains('Pikachu').should('be.visible')
    })
  })