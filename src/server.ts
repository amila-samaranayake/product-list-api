import app from "./app";
import { PORT } from "./constants/api.constants";
import logger from "./logger";

app.listen(PORT, () =>  logger.info(`Listening on port ${PORT}`));