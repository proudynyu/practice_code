import { assertEquals } from "std/assert/mod.ts"

import { User } from "./user.class.ts"
import { NotificationError } from "../notification/notification.error.ts";

Deno.test("User", async (t) => {

    await t.step("should throw an error if no ID was passed", () => {
        let errorThrow = false

        try {
            new User(undefined, "John Doe", "john@example.com")

        } catch (error) {
            errorThrow = true
            assertEquals(error instanceof NotificationError, true)
            assertEquals(error.message, "User: No ID was passed")
        }

        assertEquals(errorThrow, true)
    })

    await t.step("should throw an error if no Name was passed", () => {
        let errorThrow = false

        try {
            new User(1, "", "john@example.com")

        } catch (error) {
            errorThrow = true
            assertEquals(error instanceof NotificationError, true)
            assertEquals(error.message, "User: No Name was passed")
        }

        assertEquals(errorThrow, true)
    })

    await t.step("should throw an error if no Email was passed", () => {
        let errorThrow = false

        try {
            new User(1, "John Doe", "")

        } catch (error) {
            errorThrow = true
            assertEquals(error instanceof NotificationError, true)
            assertEquals(error.message, "User: No Email was passed")
        }

        assertEquals(errorThrow, true)
    })

    await t.step("should throw all errors if no information for the user is passed", () => {
        let errorThrow = false

        try {
            new User(undefined, "", "")
        } catch (error) {
            errorThrow = true
            assertEquals(error instanceof NotificationError, true)
            assertEquals(error.message, "User: No ID was passed, User: No Email was passed, User: No Name was passed")
        }

        assertEquals(errorThrow, true)
    })

})
