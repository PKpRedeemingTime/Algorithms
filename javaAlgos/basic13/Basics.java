import java.util.ArrayList;

public class Basics {
    public void oneToTwoFiftyFive() {
        for(int i = 1; i < 256; i++) {
            System.out.println(i);
        }
    }
    public void oneToTwoFiftyFiveOdds() {
        for(int i = 1; i < 256; i = i+2) {
            System.out.println(i);
        }
    }
    public void printSum() {
        int sum = 0;
        for(int i = 0; i < 256; i++) {
            sum = sum + i;
            System.out.println("New number: " + i + " New sum: " + sum);
        }
    }
    public void iterateArray(ArrayList<Integer> arr) {
        for(int i = 0; i < arr.size(); i++) {
           System.out.println(arr.get(i)); 
        }
    }
    public void findMax(ArrayList<Integer> arr) {
        int max = arr.get(0);
        for(int i = 0; i < arr.size(); i++) {
            if(arr.get(i) > max) {
                max = arr.get(i);
            }
        }
        System.out.println(max);
    }
    public void findAvg(ArrayList<Integer> arr) {
        int sum = 0;
        int avg;
        for(int i = 0; i < arr.size(); i++) {
            sum = sum + arr.get(i);
        }
        avg = sum / arr.size();
        System.out.println(avg);
    }
    public void arrayWithOdds() {
        ArrayList<Integer> arr = new ArrayList<Integer>();
        for(int i = 1; i < 256; i = i+2) {
            arr.add(i);
        }
        System.out.println(arr);
    }
    public void greaterThanY(ArrayList<Integer> arr, int y) {
        int count = 0;
        for(int i = 0; i < arr.size(); i++) {
            if(arr.get(i) > y) {
                count++;
            }
        }
        System.out.println(count);
    }
    public void squareTheValues(ArrayList<Integer> arr) {
        for(int i = 0; i < arr.size(); i++) {
            arr.set(i,arr.get(i)*arr.get(i));
        }
        System.out.println(arr);
    }
    public void eliminateNegatives(ArrayList<Integer> arr2) {
        System.out.println(arr2);
        for(int i = 0; i < arr2.size(); i++) {
            if(arr2.get(i) < 0) {
                arr2.set(i,0);
            }
        }
        System.out.println(arr2);
    }
    public void maxMinAvg(ArrayList<Integer> arr2) {
        int max = arr2.get(0);
        int min = arr2.get(0);
        double sum = 0;
        double avg;
        for(int i = 0; i < arr2.size(); i++) {
            if(arr2.get(i) > max) {
                max = arr2.get(i);
            }
            if(arr2.get(i) < min) {
                min = arr2.get(i);
            }
            sum+=arr2.get(i);
        }
        avg = sum / arr2.size();
        System.out.println("Max is: " + max);
        System.out.println("Min is: " + min);
        System.out.println("Average is: " + avg);
    }
    public void shiftArray(ArrayList<Integer> arr) {
        for(int i = 0; i < arr.size()-1; i++) {
            arr.set(i,arr.get(i+1));
        }
        arr.set(arr.size()-1,0);
        System.out.println(arr);
    }
}