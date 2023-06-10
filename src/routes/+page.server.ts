import { base } from "$lib/utils/airtable";

import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const res = base("Workshops").find(
    "recnjT4OZ3Dc2Hsa4",
    function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Retrieved", record.id);
    }
  );

  return { res };
}) satisfies PageLoad;
