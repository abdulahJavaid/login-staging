/// <reference types='cypress' />
/// <reference types='cypress-xpath' />

describe('login-staging', () => {
    
    it('login-stging', () => {
        cy.visit("https://staging.abchosting.org");
        cy.get("[class='nav-link btn btn-link ']").contains("Log In").click();
        cy.get("input[type='email']").type("stagingv200@javaid.lea.mx");
        cy.get("input[type='password']").type("ABChosting1!");
        // cy.wait(500);
        cy.get(".g-recaptcha *> iframe").then($iframe => {
            var iframe = $iframe.contents().find("body");
            cy.wrap(iframe).as("iframe");
        });
        cy.get("@iframe").find(".rc-inline-block").click({multiple : true});
        cy.wait(1000);
        cy.get("input[type='submit']").click({force : true});
    });
});