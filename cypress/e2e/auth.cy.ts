describe("Auth Flow", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000//auth/signup");
    });

    it("should signup then redirect to login and login successfully", () => {
        // ===== generate random data =====
        const random = Math.floor(Math.random() * 10000);

        const username = `user${random}`;
        const email = `user${random}@test.com`;
        const password = "test123";

        // ===== Signup =====
        cy.get("input[id='username']").type(username);
        cy.get("input[id='email']").type(email);
        cy.get("input[id='password']").type(password);
        cy.get("input[id='confirm-password']").type(password);

        cy.get("button[type='submit']").click();

        // ===== should redirect to login =====
        cy.visit("http://localhost:3000//auth/login");
        cy.url().should("include", "/auth/login");

        // ===== Login =====
        cy.get("input[name='username']").type("johnd");
        cy.get("input[name='password']").type("m38rmF$");

        cy.get("button[type='submit']").click();

        // ===== success redirect (مثلا home) =====
        cy.visit("http://localhost:3000//");
    });
});
