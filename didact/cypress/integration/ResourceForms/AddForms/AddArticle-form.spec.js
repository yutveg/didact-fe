describe("add article resource form", () => {
    beforeEach(() => {
        cy.Signin({email: "bob@bobmail.com", password: "secretpass"})
        cy.visit('/resource-form')
        cy.get("select")
        .select("article")
    })

    it('dropdown displays correct form on select', () => {
        cy.get('label').first().should('have.text', 'Article Title')
    })

    it('inputs display user input', () => {
        const articleTitle = "Article Title"
        cy.get('[name="title"]')
        .type(articleTitle)
        .should('have.value', articleTitle)

        const articleBody = "Article Body"
        cy.get('[name="body"]')
        .type(articleBody)
        .should('have.value', articleBody)

        const articleTopic = "Topic"
        cy.get('[name="topic"]')
        .type(articleTopic)
        .should('have.value', articleTopic)
    })

    it('submitting form takes you to articles page', () => {
        cy.get("button").last().click();
        cy.url().should('include', '/articles')
    })
})