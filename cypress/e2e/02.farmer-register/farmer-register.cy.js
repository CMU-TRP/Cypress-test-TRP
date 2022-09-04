const { afterEach } = require("mocha");

context("Actions farmer register page 1", () => {
  beforeEach(() => {
    cy.visit("https://trpdemo.dto.technology");
  });

  function userName(inputUsername) {
    if (inputUsername == "Username001") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("Username001")
        .should("have.value", "Username001");
    }
    if (inputUsername == "textInt") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("23423")
        .should("have.value", "23423");
    }
    if (inputUsername == "Symbols") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("=--./.>><<")
        .should("have.value", "=--./.>><<");
    }
    if (inputUsername == "thaiEng") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("!ทดtobb")
        .should("have.value", "!ทดtobb");
    }
    if (inputUsername == "thai") {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none")
        .type("กดชกร")
        .should("have.value", "กดชกร");
    } else {
      cy.get(":nth-child(1) > .flex-rows > .flex > .outline-none");
    }
  }

  function phoneNumber(number) {
    if (number == "int10unit") {
      cy.get(":nth-child(2) > .outline-none").type("0000000000");
    }
    if (number == "int5unit") {
      cy.get(":nth-child(2) > .outline-none").type("12345");
    } else {
      cy.get(":nth-child(2) > .outline-none").type("cdsdadcfdd");
    }
  }

  // afterEach(() => {
  //   cy.get(':nth-child(2) > .h-\[17px\] > .text-sm').should("be.a" , "กรุณากรอกเบอร์โทรศัพท์")
  // });

  function password(text) {
    if (text == "password") {
      cy.get(":nth-child(3) > .outline-none").type("password21");
    } else {
      cy.get(":nth-child(3) > .outline-none").type("12");
    }
  }

  function checkPassword(textcheck) {
    if (textcheck == "confirmPassword") {
      cy.get(":nth-child(4) > .outline-none").type("password21");
    } else {
      cy.get(":nth-child(4) > .outline-none").type("12")
      expect()
    }
  }

  function email(mail) {
    if (mail == "mail1") {
      cy.get(":nth-child(5) > .flex-rows > .flex > .outline-none").type(
        "bmsdasd@gmail.com"
      );
    } else {
      cy.get(":nth-child(5) > .flex-rows > .flex > .outline-none").type(
        "bob_gmail.om"
      );
    }
  }

  function lineID(line) {
    if (line == "linetext") {
      cy.get(":nth-child(6) > .flex > .outline-none").type("123abc");
    } else {
      cy.get(":nth-child(6) > .flex > .outline-none").type("@1234");
    }
  }

  function prompayID(prompay) {
    if (prompay == "int") {
      cy.get(":nth-child(7) > .flex > .outline-none").type("0987654321");
    } else {
      cy.get(":nth-child(7) > .flex > .outline-none").type("abcd0987654");
    }
  }

  function btuSubmit(submitstep1) {
    if (submitstep1 == "1") {
      // cy.wait(4000);
      cy.get("form").find("button").last().click();
    }
  }

  it("case 1", () => {
    cy.get(".mx-2").click();
    userName("Username001");
    phoneNumber("int10unit");
    password("password");
    checkPassword("confirmPassword");
    email("mail1");
    lineID("linetext");
    prompayID("int");
    btuSubmit("1");
  });

  it("case 2", () => {
    cy.get(".mx-2").click();
    userName("textInt");
    phoneNumber("int5unit");
    password("password");
    checkPassword("confirmPassword");
    email("mail1");
    lineID("linetext");
    prompayID("int");
    btuSubmit("1");
  });

  it("case 3", () => {
    cy.get(".mx-2").click();
    userName("Symbols");
    phoneNumber();
    password();
    checkPassword();
    email();
    lineID();
    prompayID();
    btuSubmit("1");
  });

  it("case 4", () => {
    cy.get(".mx-2").click();
    userName("thaiEng");
    phoneNumber("int10unit");
    password();
    checkPassword();
    email();
    lineID();
    prompayID();
    btuSubmit("1");
  });

  it("case 5", () => {
    cy.get(".mx-2").click();
    userName("thai");
    phoneNumber();
    password();
    checkPassword();
    email();
    lineID();
    prompayID();
    btuSubmit("1");
  });
});