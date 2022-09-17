const Page = require('./page');
const generateDataPage = require('./generatedata.page')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUserLogin () {
        return $('#user_login');
    }

    get inputPassword () {
        return $('#user_password');
    }
    get inputPasswordConfirm () {
      return $('#user_password_confirmation');
  }
  get inputFirstName () {
    return $('#user_firstname');
}

get inputLastName () {
    return $('#user_lastname');
}
get inputEmail () {
  return $('#user_mail');
}

    get btnSubmit () {
        return $('[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async registerInputData() {
      await browser.waitUntil(
        async () => (await this.inputUserLogin.isClickable(),
        {
            timeout: 5000,
            timeoutMsg: 'expected inputUserLogin isClickable'
        }
      ))
      await this.inputUserLogin.click()
      await this.inputUserLogin.setValue(generateDataPage.generateUser.userLogin)
      const pass = generateDataPage.generateUser.password
        await this.inputPassword.setValue(pass);
        await this.inputPasswordConfirm.setValue(pass);
        await this.inputFirstName.setValue(generateDataPage.generateUser.firstName);
        await this.inputLastName.setValue(generateDataPage.generateUser.lastName);
        await this.inputEmail.setValue(generateDataPage.generateUser.email);
    }
    async btnSubmitClick() {
      //await this.inputUsername.click()
        await this.btnSubmit.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('account/register');
    }
}

module.exports = new RegistrationPage();
