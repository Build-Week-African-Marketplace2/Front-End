///<reference types="Cypress" />

describe("Login", () => {
    it("successfully loads", () => {
        cy.visit("http://localhost:3000/login")
    })

    it("login button should be disabled", () => {
        cy.get("button#loginBtn").should("be.disabled")
    })

    it("can type the username", () => {
        cy.get("input[name=username]")
          .type("temtseloch")
          .should("have.value", "temtseloch")
    })

    it("can type the password", () => {
        cy.get("input[name=password]")
          .type("thisIsPassword")
          .should("have.value", "thisIsPassword")
    })

    it("login button should be enabled now", () => {
        cy.get("button#loginBtn").should("not.be.disabled")
    })

    it("submit the login info", () => {
        cy.get("button#loginBtn").click()
    })
})

describe("Submit", () => {
    it("successfully loads", () => {
        cy.visit("http://localhost:3000/register")
    })

    it("register button should be disabeld", () => {
        cy.get("button#registerBtn").should("be.disabled")
    })

    it("can type the username", () => {
        cy.get("input[name=username]")
          .type("temtseloch")
          .should("have.value", "temtseloch")
    })

    it("can type the password", () => {
        cy.get("input[name=password")
          .type("thisIsPassword")
          .should("have.value", "thisIsPassword")
    })

    it("can type the name", () => {
        cy.get("input[name=name]")
          .type("Temtsel-Och Ulziisaikhan")
          .should("have.value", "Temtsel-Och Ulziisaikhan")
    })

    it("can submit the register form", () => {
        cy.get("button#registerBtn").click()
    })
})