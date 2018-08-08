import { AppPage } from './app.po';

describe('workspace-project App', () => {
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
    expect(page.getBrainteaserAndHealthtipsParagraphText()).toEqual('Brain Teaser and Health Tips');
  });

  it('should display brain teaser answer section message', () => {
    page.navigateToBrainteaserAnswer();
    expect(page.getBrainteaserAnswerParagraphText()).toEqual('Brain Teaser Answer');
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
