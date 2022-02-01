class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        HashSet<List<Integer>> output = new HashSet<List<Integer>>();
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
        }
        for (int i = 0; i < nums.length; i++) {
            int a = nums[i];
            for (int j = i + 1; j < nums.length; j++) {
                int b = nums[j];
                int target = 0 - a - b;
                if (map.containsKey(target) && map.get(target) > j) { // have not seen this target yet
                    List<Integer> triplet = new ArrayList<Integer>();
                    triplet.add(a);
                    triplet.add(b);
                    triplet.add(target);
                    output.add(triplet);
                }
            }
        }
        return new ArrayList(output);
    }
}