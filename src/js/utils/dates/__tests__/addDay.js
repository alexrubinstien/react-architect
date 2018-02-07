/* eslint-env jest */
import addDay from '../addDay';

const JAN_1_2018 = new Date(2018, 0, 1);
const JUNE_15_2018 = new Date(2018, 5, 15);

describe('addDay', () => {
  it('should return null for all invalid dates', () => {
    expect(addDay(undefined, 0)).toBe(null);
    expect(addDay(null, 0)).toBe(null);
    expect(addDay('12', 0)).toBe(null);
    expect(addDay(0, 0)).toBe(null);
    expect(addDay(new Date('23--33'), 0)).toBe(null);
  });

  it('should return a new date even if the amount is 0', () => {
    const result1 = addDay(JAN_1_2018, 0);
    const result2 = addDay(JUNE_15_2018, 0);
    expect(result1).toEqual(JAN_1_2018);
    expect(result1).not.toBe(JAN_1_2018);
    expect(result2).toEqual(JUNE_15_2018);
    expect(result2).not.toBe(JUNE_15_2018);
  });

  it('should correctly add days that are positive', () => {
    expect(addDay(JAN_1_2018, 1)).toEqual(new Date(2018, 0, 2));
    expect(addDay(JAN_1_2018, 30)).toEqual(new Date(2018, 0, 31));
    expect(addDay(JAN_1_2018, 31)).toEqual(new Date(2018, 1, 1));
    expect(addDay(JAN_1_2018, 100)).toEqual(new Date(2018, 3, 11));
    expect(addDay(JAN_1_2018, 365)).toEqual(new Date(2019, 0, 1));

    expect(addDay(JUNE_15_2018, 1)).toEqual(new Date(2018, 5, 16));
    expect(addDay(JUNE_15_2018, 30)).toEqual(new Date(2018, 6, 15));
    expect(addDay(JUNE_15_2018, 31)).toEqual(new Date(2018, 6, 16));
    expect(addDay(JUNE_15_2018, 100)).toEqual(new Date(2018, 8, 23));
    expect(addDay(JUNE_15_2018, 365)).toEqual(new Date(2019, 5, 15));
  });

  it('should correctly add days that are negative', () => {
    expect(addDay(JAN_1_2018, -1)).toEqual(new Date(2017, 11, 31));
    expect(addDay(JAN_1_2018, -30)).toEqual(new Date(2017, 11, 2));
    expect(addDay(JAN_1_2018, -31)).toEqual(new Date(2017, 10, 31));
    expect(addDay(JAN_1_2018, -100)).toEqual(new Date(2017, 8, 23));
    expect(addDay(JAN_1_2018, -365)).toEqual(new Date(2017, 0, 1));

    expect(addDay(JUNE_15_2018, -1)).toEqual(new Date(2018, 5, 14));
    expect(addDay(JUNE_15_2018, -30)).toEqual(new Date(2018, 4, 16));
    expect(addDay(JUNE_15_2018, -31)).toEqual(new Date(2018, 4, 15));
    expect(addDay(JUNE_15_2018, -100)).toEqual(new Date(2018, 2, 7));
    expect(addDay(JUNE_15_2018, -365)).toEqual(new Date(2017, 5, 15));
  });
});
