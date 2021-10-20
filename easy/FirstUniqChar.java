import java.util.Map;
import java.util.HashMap;

public class FirstUniqChar {
    public int firstUniqChar(String s) {
        Map<Character, Integer> charFreq = new HashMap<Character, Integer>();
        char[] arr = s.toCharArray();
        
        for (char c : arr) {
            if (charFreq.containsKey(c)) {
                int i = charFreq.get(c);
                charFreq.put(c, i + 1);
            } else {
                charFreq.put(c, 1);
            }
        }
        
        for (int i = 0; i < arr.length; i++) {
            if (charFreq.get(arr[i]) == 1) {
                return i;
            } 
        }
        
        return -1;
    }
}
