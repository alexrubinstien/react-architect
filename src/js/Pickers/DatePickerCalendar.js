import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CalendarMonth from './CalendarMonth';
import CalendarHeader from './CalendarHeader';

export default class DatePickerCalendar extends PureComponent {
  static propTypes = {
    previousIconChildren: PropTypes.node,
    previousIconClassName: PropTypes.string,
    onPreviousClick: PropTypes.func.isRequired,
    nextIconChildren: PropTypes.node,
    nextIconClassName: PropTypes.string,
    onNextClick: PropTypes.func.isRequired,
    onCalendarDateClick: PropTypes.func.isRequired,
    calendarDate: PropTypes.instanceOf(Date).isRequired,
    calendarTempDate: PropTypes.instanceOf(Date).isRequired,
    DateTimeFormat: PropTypes.func.isRequired,
    locales: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),

    /**
     * An optional className to apply to the title in calendar header.
     */
    titleClassName: PropTypes.string,

    /**
     * The DateTimeFormat options to apply to format the title in calendar header.
     */
    titleFormat: PropTypes.shape({
      era: PropTypes.oneOf(['narrow', 'short', 'long']),
      year: PropTypes.oneOf(['numeric', '2-digit']),
      month: PropTypes.oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
    }),

    /**
     * An optional className to apply to a weekday in calendar header.
     */
    weekdayClassName: PropTypes.string,

    /**
     * The DateTimeFormat option to apply to format a weekday in calendar header.
     */
    weekdayFormat: PropTypes.oneOf(['narrow', 'short', 'long']),
  };

  render() {
    const {
      previousIconChildren,
      previousIconClassName,
      onPreviousClick,
      nextIconChildren,
      nextIconClassName,
      onNextClick,
      calendarDate,
      calendarTempDate,
      onCalendarDateClick,
      DateTimeFormat,
      locales,
      minDate,
      maxDate,
      titleClassName,
      titleFormat,
      weekdayClassName,
      weekdayFormat,
    } = this.props;

    return (
      <section className="md-picker-content md-picker-content--calendar">
        <CalendarHeader
          date={calendarDate}
          minDate={minDate}
          maxDate={maxDate}
          DateTimeFormat={DateTimeFormat}
          locales={locales}
          onPreviousClick={onPreviousClick}
          previousIconChildren={previousIconChildren}
          previousIconClassName={previousIconClassName}
          onNextClick={onNextClick}
          nextIconChildren={nextIconChildren}
          nextIconClassName={nextIconClassName}
          titleClassName={titleClassName}
          titleFormat={titleFormat}
          weekdayClassName={weekdayClassName}
          weekdayFormat={weekdayFormat}
        />
        <CalendarMonth
          key={new DateTimeFormat(locales).format(calendarDate)}
          calendarDate={calendarDate}
          calendarTempDate={calendarTempDate}
          onCalendarDateClick={onCalendarDateClick}
          minDate={minDate}
          maxDate={maxDate}
          DateTimeFormat={DateTimeFormat}
          locales={locales}
        />
      </section>
    );
  }
}
