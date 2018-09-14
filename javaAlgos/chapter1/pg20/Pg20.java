import java.util.ArrayList;

public class Pg20 {
    public void countdown(int num) {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        int count = 0;
        for(int i = num; i >=0; i--) {
            arr.add(i);
            count++;
        }
        System.out.println("The count is " + count + " and the new array is " + arr);
    }
    public static String printAndReturn(String a, String b) {
        System.out.println(a);
        return b;
    }
    public static int firstPlusLength(ArrayList<Integer> arr) {
        int sum = arr.get(0) + arr.size();
        return sum;
    }
    public static int valuesGreaterThanSecond(ArrayList<Integer> arr) {
        int count = 0;
        for(int i = 0; i < arr.size(); i++) {
            if(arr.get(i) > arr.get(1)) {
                System.out.println(arr.get(i));
                count++;
            }
        }
        return count;
    }
    public static ArrayList<Integer> genValGreaterThanSecond(ArrayList<Integer> arr) {
        ArrayList<Integer> arrNew = new ArrayList<Integer>();
        if(arr.size() < 2) {
            System.out.println("The given array has fewer than two elements");
            return arr;
        }
        for(int i = 0; i < arr.size(); i++) {
            if(arr.get(i) > arr.get(1)) {
                arrNew.add(arr.get(i));
            }
        }
        return arrNew;
    }
    public static ArrayList<Integer> thisLengthThatValue(int length, int value) {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        if(length == value) {
            System.out.println("Jinx");
        }
        for(int i = 1; i <= length; i++) {
            arr.add(value);
        }
        return arr;
    }
    public void fitTheFirstValue(ArrayList<Integer> arr) {
        if(arr.get(0) > arr.size()) {
            System.out.println("Too big!");
        }
        else if(arr.get(0) < arr.size()) {
            System.out.println("Too small!");
        }
        else {
            System.out.println("Just right!");
        }
    }
    public static double tempConversion(int temp, String scale) {
        double conversion = 0;
        if(scale == "C" || scale == "c") {
            conversion = (temp * 1.8 + 32);
        }
        else if(scale == "F" || scale == "f") {
            conversion = (temp - 32) * 5/9;
        }
        return conversion;
    }
}