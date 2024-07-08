describe('pokemon', () => {
    it('get for id', () => {
      cy.request('GET','https://pokeapi.co/api/v2/item/1')
      .its('status')
      .should('equal',200);
    })

    it('get for name', () => {
        cy.request( {
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
            //body: requestBody
        })
        .its('status')
        .should('equal',200);
      })

  })