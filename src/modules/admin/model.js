import { fetch, fetchData } from "../../utils/pg.js";

const log_in = `
    SELECT
        *
    FROM
        ADMINS
    WHERE
        user_name = $1 and user_password = crypt($2, user_password)
`;

export const login = (user_name, user_password) =>
  fetch(log_in, user_name, user_password);