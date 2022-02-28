import { IncomingMessage, ServerResponse } from "http";
import members from '../stubs/members.json'

export default (req: IncomingMessage, res: ServerResponse) => {
  return members
};
