import { IncomingMessage, ServerResponse } from "http";
import members from '../stubs/members.json'

export default defineEventHandler((event) => {
  return members
})
