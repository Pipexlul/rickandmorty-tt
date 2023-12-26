import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { expand, concatMap, toArray, takeWhile } from "rxjs/operators";
import {
  PaginatedResponse,
  Character,
} from "../interfaces/apiResponse.interface";

@Injectable({
  providedIn: "root",
})
class RickAndMortyService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = "https://rickandmortyapi.com/api/";

  get<T = unknown>(url: string): Observable<T> {
    const finalUrl = `${this.baseUrl}${url}`;

    return this.httpClient.get<T>(finalUrl);
  }

  getCharacters(maxPages: number = 2): Observable<Character[]> {
    let pageCounter = 0;

    const result = this.get<PaginatedResponse<Character>>("character").pipe(
      expand((response) => {
        pageCounter++;
        /* console.log(
          "pageCounter:",
          pageCounter,
          "maxPages:",
          maxPages,
          "response",
          response,
        ); */
        return pageCounter < maxPages && response.info.next
          ? this.get<PaginatedResponse<Character>>(
              response.info.next.replace(this.baseUrl, ""),
            )
          : of(null);
      }),
      takeWhile(() => pageCounter < maxPages),
      concatMap((response) => response?.results ?? []),
      toArray(),
    );

    console.log("result:", result);
    return result;
  }

  getCharacter(id: number): Observable<Character> {
    return this.get<Character>(`character/${id}`);
  }
}

export { RickAndMortyService };
