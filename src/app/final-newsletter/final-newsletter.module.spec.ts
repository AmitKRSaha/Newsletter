import { FinalNewsletterModule } from './final-newsletter.module';

describe('FinalNewsletterModule', () => {
  let finalNewsletterModule: FinalNewsletterModule;

  beforeEach(() => {
    finalNewsletterModule = new FinalNewsletterModule();
  });

  it('should create an instance', () => {
    expect(finalNewsletterModule).toBeTruthy();
  });
});
