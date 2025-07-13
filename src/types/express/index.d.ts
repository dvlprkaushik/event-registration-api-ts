import type { UserType } from "../Event.types.ts";

declare global{
    namespace Express{
        interface Request{
            user?: UserType;
        }
    }
}