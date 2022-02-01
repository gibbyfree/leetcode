import java.util.HashMap;

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        int[] output = new int[2];
        HashMap<Integer, Integer> s = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (s.containsKey(target - nums[i])) { // difference to target
                output[0] = i;
                output[1] = s.get(target - nums[i]);
            } else {
                s.put(nums[i], i);
            }
        }
        return output;
    }
}