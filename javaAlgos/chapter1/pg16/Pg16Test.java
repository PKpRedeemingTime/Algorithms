public class Pg16Test {
    public static void main(String[] args) {
        Pg16 pg16 = new Pg16();
        // pg16.printNeg52to1066();
        // pg16.dontWorry();
        // pg16.multOf3();
        // pg16.printWhile();
        // int day = 13;
        // pg16.birthday(day);
        // int year = 800;
        // pg16.leapYear(year);
        // pg16.printAndCount();
        // pg16.multOf6();
        // pg16.massCounting();
        int mult = 3;
        int beg = 5;
        int end = 17;
        int except = 9;
        pg16.finalCountdown(mult, beg, end, except);
    }
}