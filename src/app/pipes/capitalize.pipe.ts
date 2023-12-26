import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize",
  standalone: true,
})
class CapitalizePipe implements PipeTransform {
  transform(value: string, onlyFirstWord: boolean = false): string {
    value = value.toLowerCase();

    if (onlyFirstWord) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
}

export { CapitalizePipe };
