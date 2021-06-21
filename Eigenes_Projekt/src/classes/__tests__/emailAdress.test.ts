import { IsEmailAddress } from "../EmailAdress";

describe("This is a simple test", () => {
    test("Check the Mailaddress function", () => {
        console.log("test");
        expect(IsEmailAddress("calvinpro.de@t-online.de")).toBe(true);
    });
});


