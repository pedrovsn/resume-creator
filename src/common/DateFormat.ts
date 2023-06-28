class DateFormat {
  formatMonthYear (date?: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      year: 'numeric'
    }

    if (date != null) {
      return new Date(date).toLocaleDateString('en-US', options)
    } else {
      return ''
    }
  }
}

export default DateFormat
