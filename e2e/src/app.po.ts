import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToBusiness() {
    return browser.get('/business');
  }
  getBusinessParagraphText() {
    return element(by.css('app-businessupdate-preview h3')).getText();
  }

  navigateToPlanned() {
    return browser.get('/planned');
  }
  getPlannedParagraphText() {
    return element(by.css('app-project-preview h3')).getText();
  }

  navigateToTech() {
    return browser.get('/technical');
  }
  getTechParagraphText() {
    return element(by.css('app-technical-preview h3')).getText();
  }

  navigateToBrainteaserAndHealthtips() {
    return browser.get('/brainteaserAndHealthtips');
  }
  getBrainteaserAndHealthtipsParagraphText() {
    return element(by.css('app-barinteaser-healthtips h3')).getText();
  }

  navigateToBrainteaserAnswer() {
    return browser.get('/brainteserans');
  }
  getBrainteaserAnswerParagraphText() {
    return element(by.css('app-barinteaser-answer h3')).getText();
  }

  navigateToTeamImage() {
    return browser.get('/teamimage');
  }
  getTeamImageParagraphText() {
    return element(by.css('app-team-preview h3')).getText();
  }

  navigateToFinalNewsletter() {
    return browser.get('/newsletter');
  }
  getFinalNewsletterParagraphText() {
    return element(by.css('app-final-newsletter h1')).getText();
  }

}
