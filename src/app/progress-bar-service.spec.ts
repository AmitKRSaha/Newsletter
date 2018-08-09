import { ProgressBarService } from './progress-bar.service';

describe('ProgressBarService', () => {
  let service: ProgressBarService;
  const mockMonth = new Array();
  beforeEach(() => {
    service = new ProgressBarService();
  });

  it('#additem should return current value when correct value passed', () => {
    const key = 'amit';
    const value = '27';

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when null value passed', () => {
    const key = 'amit';
    const value = '';

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when undefined value passed', () => {
    const key = 'amit';
    const value = undefined;

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when undefined key passed', () => {
    const key = undefined;
    const value = '27';

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when null key passed', () => {
    const key = '';
    const value = '27';

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when both null data passed', () => {
    const key = '';
    const value = '';

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#additem should not return current value when both null data passed', () => {
    const key = undefined;
    const value = undefined;

    service.additem(key , value);
    expect(service.newsletterContent[key]).toEqual(value);
  });

  it('#addBackgroundImage should return correct image path for correct value', () => {
    const imagepath = 'c:/fakepath';
    service.addBackgroundImage(imagepath);
    expect(service.backgroundImage[0]).toEqual(imagepath);
  });

  it('#addBackgroundImage should not return correct image path for incorrect value', () => {
    const imagepath = '';
    service.addBackgroundImage(imagepath);
    expect(service.backgroundImage[0]).toEqual(imagepath);
  });

  it('#addBackgroundImage should not return correct image path for incorrect value', () => {
    const imagepath = undefined;
    service.addBackgroundImage(imagepath);
    expect(service.backgroundImage[0]).toEqual(imagepath);
  });
});

