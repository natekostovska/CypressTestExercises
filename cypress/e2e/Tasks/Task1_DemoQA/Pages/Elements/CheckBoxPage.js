class CheckBoxPage {
  // Selectors
  homeButton = '.rct-text button'; // XPath: //*[@class="rct-text"]/button
  underHomeButton = '#tree-node > ol > li > ol > li span button'; // XPath: //*[@id="tree-node"]/ol/li/ol/li/span/button
  underDocumentsButton = '#tree-node > ol > li > ol > li:nth-child(2) ol li span button'; // XPath: //*[@id="tree-node"]/ol/li/ol/li[2]/ol/li/span/button
  expandCollapseButton = '#tree-node > div button'; // XPath: //*[@id="tree-node"]/div/button/*/*
  checkbox = '.rct-checkbox'; // XPath: By.className("rct-checkbox")
  response = '.text-success'; // XPath: By.className("text-success")
  message = '#result'; // XPath: By.id("result")

  // Arrays for the checkbox items and tree expansion
  CHECK_BOX_ITEMS = [
    "Home", "Desktop", "Notes", "Commands", "Documents", "Workspace", "React", "Angular", "Vue",
    "Office", "Public", "Private", "Classified", "General", "Downloads", "Word File.doc", "Excel File.doc"
  ];

  EXPAND_HOME = ["Desktop", "Documents", "Downloads"];
  EXPAND_DOCUMENTS = ["WorkSpace", "Office"];

  // Navigate and expand Home section
  expandHome() {
    cy.get(this.homeButton).click();
  }

  // Expand specific node under Home
  expandUnderHome(expandHome) {
    const expandHomeIndex = this.getIndexFromStatic(this.EXPAND_HOME, expandHome);
    cy.get(this.underHomeButton).eq(expandHomeIndex).scrollIntoView().click();
  }

  // Expand specific node under Documents
  expandUnderDocuments(documentsSubmenu) {
    const documentsIndex = this.getIndexFromStatic(this.EXPAND_DOCUMENTS, documentsSubmenu);
    cy.get(this.underDocumentsButton).eq(documentsIndex).scrollIntoView().click();
  }

  // Expand or collapse all buttons
  expandAndCollapseAll(i) {
    cy.get(this.expandCollapseButton).eq(i).scrollIntoView().click();
  }

  // Check a specific checkbox by name
  checkBoxElements(checkboxName) {
    const checkboxIndex = this.getIndexFromStatic(this.CHECK_BOX_ITEMS, checkboxName);
    cy.get(this.checkbox).eq(checkboxIndex).scrollIntoView().click();
  }

  // Get the response text
  getResponse(i) {
    return cy.get(this.response).eq(i).invoke('text'); // Return the text
  }

  // Get the result text
  getResult() {
    return cy.get(this.message).invoke('text'); // Return the text
  }

  // Utility function to map static variables to index
  getIndexFromStatic(staticArray, name) {
    return staticArray.indexOf(name); // Use `this` to access class variables
  }
}

export default CheckBoxPage;