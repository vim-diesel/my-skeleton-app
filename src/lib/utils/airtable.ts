import { AIRTABLE_API_TOKEN } from "$env/static/private";
import Airtable from "airtable";

if (!AIRTABLE_API_TOKEN) {
  throw new Error("Did you forget to include your airtable token in .env?");
}

Airtable.configure({ apiKey: AIRTABLE_API_TOKEN });

export const base = Airtable.base("appTkoc4XtqaVyRtu");
