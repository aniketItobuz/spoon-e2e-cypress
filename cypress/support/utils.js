export const login = (username, password) => {
    cy.get('[name="email"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();
}