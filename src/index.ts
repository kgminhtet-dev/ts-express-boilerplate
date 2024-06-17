import dotenv from "dotenv";
import app from "./app";
import logger from "./logger";

dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
