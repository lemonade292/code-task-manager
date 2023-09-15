interface IEXDate {
  fmt(format: DateFormat): string;
  unfmt(): string;
}

const INVALID_DATE = "Invalid Date";

export type DateFormat =
  | "DD/MM/YYYY"
  | "DD/MM/YYYY - HH:mm"
  | "DD"
  | "MM"
  | "YYYY";

/**
 * EXDate extends Date class with additional methods. "EX" stands for "extended".
 */
export class EXDate implements IEXDate {
  protected date: Date;

  constructor(ISODate: string) {
    this.date = new Date(ISODate);

    if (String(this.date) === INVALID_DATE) {
      throw new Error("Invalid Date");
    }
  }

  public fmt(format: DateFormat): string {
    const day = this.pad(this.date.getDate());
    const month = this.pad(this.date.getMonth() + 1);
    const year = this.date.getFullYear();

    const hours = this.pad(this.date.getHours());
    const minutes = this.pad(this.date.getMinutes());

    switch (format) {
      case "DD":
        return day;
      case "MM":
        return month;
      case "YYYY":
        return year.toString();
      case "DD/MM/YYYY":
        return `${day}/${month}/${year}`;
      case "DD/MM/YYYY - HH:mm":
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
      default:
        return "";
    }
  }

  private pad(number: number): string {
    const numberStr = number.toString();

    if (numberStr.length === 1) {
      return `0${numberStr}`;
    }

    return numberStr;
  }

  public unfmt(): string {
    return this.date.toISOString();
  }
}
