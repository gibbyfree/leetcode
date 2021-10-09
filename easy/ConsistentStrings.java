package easy;

import java.util.HashSet;
import java.util.Set;

class ConsistentStrings {
    public int countConsistentStrings(String allowed, String[] words) {
        // Transfer to set for faster access
        Set<Character> allowedSet = new HashSet<>();
        for (char c : allowed.toCharArray()) {
            allowedSet.add(c);
        }

        // Count consistent strings
        int consistentStrings = 0;
        for (String s : words) {
            for (char c : s.toCharArray()) {
                if (!allowedSet.contains(c)) {
                    consistentStrings--;
                    break;
                }
            }
            consistentStrings++;
        }

        return consistentStrings;
    }
}