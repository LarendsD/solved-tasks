const angleInMinute = 6;
const angleInHour = 30;
const angleInHourMinute = 0.5;

export default (hour, minute) => {
  const hourAngle = hour * angleInHour;
  const minuteAngle = minute * angleInMinute;
  const hourAngleInMinute = angleInHourMinute * minute;
  return Math.abs(hourAngle - minuteAngle + hourAngleInMinute);
};
