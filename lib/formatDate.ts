import { isDate } from "date-fns";

export function formatDate(date: Date) {
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${month}, ${year}`;
}

export function formatHora(date: Date | null): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',      // Display hour as two digits (e.g., 09, 14)
    minute: '2-digit',    // Display minute as two digits (e.g., 05, 30)
    second: '2-digit',    // Display second as two digits (e.g., 01, 59)
    hour12: false         // Use 24-hour format (e.g., 14:30:00)
    // hour12: true       // Use 12-hour format with AM/PM (e.g., 02:30:00 PM)
  };

  // You can specify a locale, e.g., 'en-US', 'es-ES', 'fr-FR'
  // If no locale is provided, the user's default locale is used.
  if(isDate(date)){
  return date.toLocaleTimeString('es-ES', options);
  }else{
    return "";
  }
}