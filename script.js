//your JS code here. If required.
// Assuming this is a Cypress test file (e.g., test.spec.js)

describe('example to-do app', () => {

  beforeEach(() => {
    // Assuming your Google clone is running on localhost:3000
    cy.visit('http://localhost:3000');
  });

  it('Should display navigation bar', () => {
    cy.get('nav').should('exist');
  });

  it('Should display logo and Sign In button', () => {
    // **Crucially, replace this selector with the correct one from your HTML**
    // **Examine your HTML to see how the logo is structured.**
    // **Example: If the logo has an ID 'google-logo', use:**
    // cy.get('#google-logo').should('exist');
    // **Example: If the logo is an <img> with class 'logo' inside the nav:**
    // cy.get('nav img.logo').should('exist');
    cy.get('nav img').should('exist'); // Replace this line!

    // **Crucially, replace this selector with the correct one from your HTML**
    // **Examine your HTML to see how the "Sign In" button is structured.**
    // **Example: If the button has an ID 'sign-in-btn', use:**
    // cy.get('#sign-in-btn').should('exist').contains('Sign in');
    // **Example: If the button has class 'signin-button', use:**
    // cy.get('.signin-button').should('exist').contains('Sign in');
    cy.get('.sign_in').should('exist').contains('Sign in'); // Replace this line!
  });

  it('Should display search bar and Google Search button', () => {
    // **Crucially, replace this selector with the correct one from your HTML**
    // **Examine your HTML to see how the search bar is structured.**
    // **Example: If the input has an ID 'search-input', use:**
    // cy.get('#search-input').should('exist');
    // **Example: If the input has class 'search-input', use:**
    // cy.get('.search-input').should('exist');
    cy.get('.search_bar').should('exist'); // Replace this line!

    // **Crucially, replace this selector with the correct one from your HTML**
    // **Examine your HTML to see how the "Google Search" button is structured.**
    // **Example: If the button has an ID 'google-search-btn', use:**
    // cy.get('#google-search-btn').should('exist').contains('Google Search');
    // **Example: If the button has class 'google-search', use:**
    // cy.get('.google-search').should('exist').contains('Google Search');
    cy.get('input[type="submit"]').should('exist').contains('Google Search'); // Replace this line!
  });

  it('Should display footer with left and right sections', () => {
    // **Crucially, replace these selectors with the correct ones from your HTML**
    // **Examine your HTML to see how the footer sections are structured.**
    // **Example: If the left section has class 'footer-left', use:**
    // cy.get('.footer-left').should('exist');
    // **Example: If the right section has class 'footer-right', use:**
    // cy.get('.footer-right').should('exist');
    cy.get('footer .l_ftr').should('exist'); // Replace this line!
    cy.get('footer .r_ftr').should('exist'); // Replace this line!
  });

  it('Should display text "India" and a privacy policy link', () => {
    // **Crucially, replace these selectors with the correct ones from your HTML**
    // **Examine your HTML to see how the footer sections and privacy link are structured.**
    // **Example: If the left section has class 'footer-left' and the privacy link is an <a> inside the right section:**
    // cy.get('.footer-left').should('exist').contains('India');
    // cy.get('.footer-right a').should('exist').contains('Privacy');
    cy.get('.l_ftr').should('exist').contains('India'); // Replace this line!
    cy.get('.r_ftr').should('exist').contains('Privacy'); // Replace this line!
  });
});