import { UtilityService } from './utility.service';

// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
  let service: UtilityService;
  const mockMonth = new Array();
  beforeEach(() => { service = new UtilityService();

    mockMonth[0] = 'Jan';
    mockMonth[1] = 'Feb';
    mockMonth[2] = 'March';
    mockMonth[3] = 'April';
    mockMonth[4] = 'May';
    mockMonth[5] = 'June';
    mockMonth[6] = 'July';
    mockMonth[7] = 'August';
    mockMonth[8] = 'September';
    mockMonth[9] = 'October';
    mockMonth[10] = 'November';
    mockMonth[11] = 'December';
  });

  it('#getMonthName should return current month name', () => {
    expect(service.getMonthName()).toBe(mockMonth[new Date().getMonth()]);
  });
});
