context('Cypress Automatic Login',() => {
	it('Open Automation Practice website',() => {
		cy.visit('http://automationpractice.com/index.php')
		cy.get('.login').click()
		cy.get('#email').type('nedim1398@hotmail.com')
		cy.get('#passwd').type('nedim123')
		cy.get('#SubmitLogin > span').click()
		cy.get('.account > span').contains('Nedim Sehic')
	})
})