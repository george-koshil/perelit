export function areDatesEqualIgnoreTime(date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  return year1 === year2 && month1 === month2 && day1 === day2;
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) {
      return `${minutes} хв.`;
  } else if (minutes < 1440) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours} год. ${remainingMinutes} хв.`;
  } else {
      const years = Math.floor(minutes / 525600);
      const remainingMinutes = minutes % 525600;
      const days = Math.floor(remainingMinutes / 1440);
      const hours = Math.floor((remainingMinutes % 1440) / 60);
      return `${years} год. ${days} дн. ${hours} год. ${remainingMinutes % 60} хв.`;
  }
}

export function formatTime(timeString: string): string {
  const timeParts = timeString.match(/(\d+):(\d+)/);
  if (timeParts && timeParts.length === 3) {
      const hours = parseInt(timeParts[1], 10);
      const minutes = parseInt(timeParts[2], 10);
      const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      return `${formattedHours}:${formattedMinutes}`;
  } else {
      return "Invalid time format";
  }
}