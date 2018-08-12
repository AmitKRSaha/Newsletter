import { AppPage } from './app.po';
import { element, by, browser } from '../../node_modules/protractor';

describe('workspace-project App should have different sections with all input properties', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have different sections', () => {
    expect(element(by.css('.headerSection')).getText()).toEqual('Section Header Image');
    expect(element(by.css('.businessUpdate')).getText()).toEqual('Bussiness Update Section');
    expect(element(by.css('.opportunitySection')).getText()).toEqual('Opportunitis In PipeLine');
    expect(element(by.css('.acheivementSection')).getText()).toEqual(' Acheivement '.trim());
    expect(element(by.css('.plannedSection')).getText()).toEqual(' Planned '.trim());
    expect(element(by.css('.projstatSection')).getText()).toEqual(' Project Statistic '.trim());
    expect(element(by.css('.techSection')).getText()).toEqual(' Technical Arcitle '.trim());
    expect(element(by.css('.brainSection')).getText()).toEqual(' Brain Teasers '.trim());
    expect(element(by.css('.healthtipsSection')).getText()).toEqual(' Health Tips '.trim());
    expect(element(by.css('.brainteaserSection')).getText()).toEqual(' Brain Teaser Answers '.trim());
    expect(element(by.css('.teamSection')).getText()).toEqual(' Team Photo , Birthday and Anniversary '.trim());
  });

  it('should have header section with all properties', () => {
    expect(element(by.css('app-section-head #schuploadButton'))).toBeTruthy();
    expect(element(by.css('app-section-head #btnsectionHead'))).toBeTruthy();

  });

  it('should have business update section with all properties', () => {
    expect(element(by.css('app-business-update input[type="file"]'))).toBeTruthy();
    expect(element(by.css('app-business-update input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-business-update input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreBusinessUpdate'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreBusinessUpdate'))).toBeTruthy();
  });

  it('should have opportunity section with all properties', () => {
    expect(element(by.css('app-opportunity-pipeline input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-opportunity-pipeline input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnOpportunity'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreOpportunity'))).toBeTruthy();
  });

  it('should have acheivement section with all properties', () => {
    expect(element(by.css('app-acheivement input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-acheivement input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnAcheivement'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreAcheivement'))).toBeTruthy();
  });

  it('should have planned section with all properties', () => {
    expect(element(by.css('app-planned input[type="file"]'))).toBeTruthy();
    expect(element(by.css('app-planned input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-planned input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnPlanned'))).toBeTruthy();
    expect(element(by.id('#btnAddMorePlannedUpdate'))).toBeTruthy();
  });

  it('should have project statistics section with all properties', () => {
    expect(element(by.css('app-project-statistics input[type="text"]'))).toBeTruthy();
    expect(element(by.css('app-project-statistics input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-project-statistics input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnProjectStat'))).toBeTruthy();
  });

  it('should have technical section with all properties', () => {
    expect(element(by.css('app-technical-article input[type="file"]'))).toBeTruthy();
    expect(element(by.css('app-technical-article input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-technical-article input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnTech'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreTechUpdate'))).toBeTruthy();
  });

  it('should have brain teaser section with all properties', () => {
    expect(element(by.css('app-brain-teasers input[type="file"]'))).toBeTruthy();
    expect(element(by.css('app-brain-teasers input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-brain-teasers input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnBrainTeaser'))).toBeTruthy();
    expect(element(by.id('#btnAddMorebrainSection'))).toBeTruthy();
  });

  it('should have healthy tips section with all properties', () => {
    expect(element(by.css('app-healthy-tips input[type="text"]'))).toBeTruthy();
    expect(element(by.css('app-healthy-tips input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-healthy-tips input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnHealthTips'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreHealthTips'))).toBeTruthy();
  });

  it('should have brain teaser asnwer section with all properties', () => {
    expect(element(by.css('app-brain-teaser-answer input[type="file"]'))).toBeTruthy();
    expect(element(by.css('app-brain-teaser-answer input[type="button"]'))).toBeTruthy();
    expect(element(by.css('app-brain-teaser-answer input[type="submit"]'))).toBeTruthy();
    expect(element(by.id('#btnBrainTeaserAnswer'))).toBeTruthy();
    expect(element(by.id('#btnAddMoreBrainTeaserAnswer'))).toBeTruthy();
  });

  it('should have teamimage section with all properties', () => {
    expect(element(by.css('app-teamphoto-birthday input[type="file"]'))).toBeTruthy();
    expect(element(by.id('#btnTeampic'))).toBeTruthy();
  });

});

describe('workspace-project App with different navigation', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Newsletter!');
  });

  it('should display business section message', () => {
    page.navigateToBusiness();
    expect(page.getBusinessParagraphText()).toEqual('Business Section');
  });

  it('should display planned section message', () => {
    page.navigateToPlanned();
    expect(page.getPlannedParagraphText()).toEqual('Planned Section');
  });

  it('should display technical section message', () => {
    page.navigateToTech();
    expect(page.getTechParagraphText()).toEqual('Technical Section');
  });

  it('should display brain teaser and healt tips section message', () => {
    page.navigateToBrainteaserAndHealthtips();
    expect(page.getBrainteaserAndHealthtipsParagraphText()).toEqual(
      'Brain Teaser and Health Tips'
    );
  });

  it('should display brain teaser answer section message', () => {
    page.navigateToBrainteaserAnswer();
    expect(page.getBrainteaserAnswerParagraphText()).toEqual(
      'Brain Teaser Answer'
    );
  });

  it('should display team image section message', () => {
    page.navigateToTeamImage();
    expect(page.getTeamImageParagraphText()).toEqual('Team Section');
  });

  it('should display final newsletter section message', () => {
    page.navigateToFinalNewsletter();
    expect(page.getFinalNewsletterParagraphText()).toEqual('Final News Letter');
  });
});

describe('workspace-project App with image upload', () => {
  let page: AppPage;
  let path: any;
  let fileToUpload: any;
  let sampleText: string;
  let absolutePath: any;

  beforeEach(() => {
    page = new AppPage();
    path = require('path');
    page.navigateTo();

    fileToUpload =
      '../../../form-app/src/assets/baseline-question_answer-24px.svg',
    absolutePath = path.resolve(__dirname, fileToUpload);
    sampleText = 'This is dummy text for e2e testing';
  });

  it('should upload section head image', function () {

    expect(element(by.id('biz-text')).isPresent()).toBeFalsy();

    // browser.pause();
    element(by.css('app-section-head input')).sendKeys(absolutePath);
    element(by.id('btnsectionHead')).click();
    expect(element(by.id('biz-text')).isPresent()).toBeTruthy();
    expect(element(by.css('app-header-preview img')[1])).not.toContain('null');
  });

  it('should upload business section image', function () {

    expect(element(by.css('app-business-update businessUpdate'))).toBeTruthy();

    element(by.css('app-business-update .businessUpdate')).click();
    fileToUpload =
      '../../../form-app/src/assets/business-update-background.png',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('app-business-update input')).sendKeys(absolutePath);
    expect(by.css('app-business-update btn-success')).toBeTruthy();
    element(by.css('app-business-update .btn-success')).click();
    element(by.css('app-business-update textarea')).click();
    element(by.css('app-business-update textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Business Update')).click();
    expect(element(by.css('app-businessupdate-preview img')[1])).not.toContain('null');
    // tslint:disable-next-line:max-line-length
    expect(element(by.xpath('/html/body/app-root/div[2]/div/div[3]/div/app-businessupdate-preview/div/div/div[2]/div/ul/li'))).not.toContain('null');

  });

  it('should upload opportunity section data', function () {

    element(by.css('app-business-update .businessUpdate')).click();
    fileToUpload =
      '../../../form-app/src/assets/business-update-background.png',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('app-business-update input')).sendKeys(absolutePath);
    expect(by.css('app-business-update btn-success')).toBeTruthy();
    element(by.css('app-business-update .btn-success')).click();
    element(by.css('app-business-update textarea')).click();
    element(by.css('app-business-update textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Business Update')).click();
    expect(element(by.css('app-businessupdate-preview img')[1])).not.toContain('null');

    expect(element(by.css('app-opportunity-pipeline textarea'))).toBeTruthy();
    element(by.css('app-opportunity-pipeline textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Opportunity Section')).click();
    expect(element(by.css('app-businessupdate-preview img')[2])).not.toContain('null');

    // tslint:disable-next-line:max-line-length
    expect(element(by.xpath('/html/body/app-root/div[2]/div/div[3]/div/app-businessupdate-preview/div/div/div[3]/div/ul/li'))).not.toContain('null');


  });

  it('should upload acheivement section data', function () {

    element(by.css('app-business-update .businessUpdate')).click();
    fileToUpload =
      '../../../form-app/src/assets/business-update-background.png',
    absolutePath = path.resolve(__dirname, fileToUpload);
    element(by.css('app-business-update input')).sendKeys(absolutePath);
    expect(by.css('app-business-update btn-success')).toBeTruthy();
    element(by.css('app-business-update .btn-success')).click();
    element(by.css('app-business-update textarea')).click();
    element(by.css('app-business-update textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Business Update')).click();
    expect(element(by.css('app-businessupdate-preview img')[1])).not.toContain('null');

    expect(element(by.css('app-opportunity-pipeline textarea'))).toBeTruthy();
    element(by.css('app-opportunity-pipeline textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Opportunity Section')).click();

    expect(element(by.css('app-acheivement textarea'))).toBeTruthy();
    element(by.css('app-acheivement textarea')).sendKeys(sampleText);
    element(by.buttonText('Save Acheivement Section')).click();

    expect(element(by.css('app-businessupdate-preview img')[3])).not.toContain('null');

    // tslint:disable-next-line:max-line-length
    expect(element(by.xpath('/html/body/app-root/div[2]/div/div[3]/div/app-businessupdate-preview/div/div/div[4]/div/ul/li'))).not.toContain('null');


    // browser.sleep(5000);
  });
});
