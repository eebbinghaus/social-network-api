const dateFormatter = (d) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    const currentMonth = months[d.getMonth()];
    const currentYear = d.getFullYear();
    const currentDay = d.getDate();
    const currentHour =
      d.getHours() > 12 ? Math.floor(d.getHours() - 12) : d.getHours();
    if (currentHour === 0) {
      currentHour = 12;
    }
    const currentMinute = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    const periodOfDay = d.getHours() >= 12 ? "pm" : "am";
    return `${currentMonth} ${currentDay}, ${currentYear} at ${currentHour}:${currentMinute} ${periodOfDay}`;
  };

  module.exports = { dateFormatter }