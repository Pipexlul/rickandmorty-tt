import { Character } from "./apiResponse.interface";

type CardDTO = Pick<
  Character,
  "id" | "name" | "image" | "species" | "gender" | "status"
>;

export { CardDTO };
