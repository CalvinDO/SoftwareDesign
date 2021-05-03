
class Test {
    private static instance: Test;

    public lol(): string {
        return "";
    }
    static getInstance(): Test{
        return this.instance;
    }
}

export default Test.getInstance();