
describe("todo e2e", () => {
    beforeEach(() => {
        cy.visit("localhost:8080");
    });

    it("input todo message", () => {
        cy.get("[data-test=testInput]").type("message1");
        cy.contains("add").click().then(() => {
            // empty input
            cy.get("[data-test=testInput]").should("have.value", "");
            // contain message1 text
            cy.contains("message1");
        });
    });

    it("remove todo message", () => {
        cy.get("[data-test=testInput]").type("message1");
        cy.contains("add").click().then(() => {
            // contain message1 text
            cy.contains("message1");
            // remove message 1 text
            cy.contains('remove').eq(0).click().then(() => {
                cy.contains('message1').should('have.length', 0);
            });
        });
    });
});