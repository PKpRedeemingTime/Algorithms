import java.util.ArrayList;

public class BasicsTest {
    public static void main(String[] args) {
        Basics basics = new Basics();
        basics.oneToTwoFiftyFive();
        basics.oneToTwoFiftyFiveOdds();
        basics.printSum();
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 1; i < 6; i++) {
            arr.add(i);
        }
        basics.iterateArray(arr);
        basics.findMax(arr);
        basics.findAvg(arr);
        basics.arrayWithOdds();
        int y = 2;
        basics.greaterThanY(arr, y);
        basics.squareTheValues(arr);
        ArrayList<Integer> arr2 = new ArrayList<Integer>();
        arr2.add(1);
        arr2.add(-2);
        arr2.add(3);
        arr2.add(-4);
        arr2.add(5);
        basics.eliminateNegatives(arr2);
        basics.maxMinAvg(arr2);
        basics.shiftArray(arr);
    }
}
