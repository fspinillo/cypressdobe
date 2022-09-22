import moment from 'moment'

class Account {

  public get emailCreate() {
    return cy.get('#email_create')
  }

  public enterEmail() {
    const newEmail = this.generateEmail()
    this.emailCreate.type(newEmail)
  }

  public generateEmail() {
    const currentDate = moment().format('YYYYMMDD')
    const currentTime = moment().format('hhmmss')
    const newEmail = `testing+${currentDate}-${currentTime}@example.com`
    process.env.email = newEmail
    return newEmail
  }

  public get email() {
    return cy.get('#email')
  }

  public get passwd() {
    return cy.get('#passwd')
  }

  public enterPasswd() {
    const pass = Math.random().toString(36).slice(2)
    process.env.pass = pass
    this.passwd.type(pass)
  }

  public login(user: string, pass:string) {
    cy.session([user, pass], () => {
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      this.email.type(user)
      this.passwd.type(pass)
      this.submitLogin.click()
    })
  }

  public get submitCreate() {
    return cy.get('#SubmitCreate')
  }

  public get submitLogin() {
    return cy.get('#SubmitLogin')
  }

  public get genderMr() {
    return cy.get('#id_gender1')
  }

  public get genderMrs() {
    return cy.get('#id_gender2')
  }

  public get firstName() {
    return cy.get('#customer_firstname')
  }

  public get lastName() {
    return cy.get('#customer_lastname')
  }

  public get dobDays() {
    return cy.get('#days')
  }

  public selectDay(day: string) {
    this.dobDays.select(day)
  }

  public get dobMonth() {
    return cy.get('#months')
  }

  public selectMonth(month: string) {
    this.dobMonth.select(month)
  }

  public get dobYear() {
    return cy.get('#years')
  }

  public selectYear(year: string) {
    this.dobYear.select(year)
  }

  public enterDOB(month: string, day: string, year: string) {
    this.selectMonth(month)
    this.selectDay(day)
    this.selectYear(year)
  }

  public get newsletter() {
    return cy.get('#newsletter')
  }

  public get offerOptIn() {
    return cy.get('#optin')
  }

  public get addressFirstName() {
    return cy.get('#firstname')
  }

  public get addressLastName() {
    return cy.get('#lastname')
  }

  public get streetAddress() {
    return cy.get('#address1')
  }

  public get city() {
    return cy.get('#city')
  }

  public get state() {
    return cy.get('#id_state')
  }

  public selectState(stateName: string) {
    this.state.select(stateName)
  }

  public get postalCode() {
    return cy.get('#postcode')
  }

  public get country() {
    return cy.get('#id_country')
  }

  public selectCountry(countryName: string) {
    this.country.select('United States')
  }

  public get mobilePhone() {
    return cy.get('#phone_mobile')
  }

  public get addressAlias() {
    return cy.get('#alias')
  }

  public get submitAccount() {
    return cy.get('#submitAccount')
  }
}

export default new Account()
