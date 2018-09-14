import java.util.ArrayList;

public class Pg25Test {
    public static void main(String[] args) {
	    Pg25 pg25 = new Pg25();
	    ArrayList<Integer> arr = new ArrayList<Integer>();
	    for(int i = 0; i < 7; i++) {
	    	arr.add(i);
	    }
	    int rem = 3;
	    System.out.println(pg25.lastFew(arr, rem));
    }
}