public class Pg16 {
    public void printNeg52to1066() {
        for(int i = -52; i < 1067; i++) {
            System.out.println(i);
        }
    }
    public void dontWorry() {
        int count = 0;
        String beCheerful = "good morning!";
        for(int i = 0; i < 98; i++) {
            System.out.println(beCheerful);
            count++;
        }
        System.out.println(count);
    }
    public void multOf3() {
        for(int i = -300; i < 1; i++) {
            if(i%3 == 0) {
                if(i != -6 && i != -3) {
                    System.out.println(i);
                }
            }
        }
    }
    public void printWhile() {
        int i = 2000;
        while(i < 5281) {
            System.out.println(i);
            i++;
        }
    }
    public void birthday(int day) {
        if(day == 12) {
            System.out.println("How did you know?");
        }
        else {
            System.out.println("Just another day...");
        }
    }
    public void leapYear(int year) {
        if(year%4 == 0) {
            if(year%100 == 0 && year % 400 != 0) {
                System.out.println("Not a leap year.");
            }
            else {
                System.out.println("Leap Year!");
            }
        }
        else {
            System.out.println("Not a leap year.");
        }
    }
    public void printAndCount() {
        int count = 0;
        for(int i = 512; i < 4097; i++) {
            if(i%5 == 0) {
                count++;
                System.out.println(i);
            }
        }
        System.out.println(count);
    }
    public void multOf6() {
        int i = 0;
        while(i < 60001) {
            if(i % 6 == 0) {
                System.out.println(i);
            }
            i++;
        }
    }
    public void massCounting() {
        for(int i = 1; i <= 100; i++) {
            if(i % 5 == 0 && i % 10 != 0) {
                System.out.println("Mass");
            }
            else if(i % 10 == 0) {
                System.out.println("MassLight");
            }
            else {
                System.out.println(i);
            }
        }
    }
    public void finalCountdown(int mult, int beg, int end, int except) {
        for(int i = beg; i <= end; i++) {
            if(i % mult == 0 && i != except) {
                System.out.println(i);
            }
        }
    }
}