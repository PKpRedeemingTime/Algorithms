import java.util.ArrayList;

public class Pg25 {
	public static ArrayList<Integer> lastFew(ArrayList<Integer> arr, int rem) {
		for(int i = 0; i < rem; i++) {
			arr.remove(i);
		}
		return arr;
	}
}