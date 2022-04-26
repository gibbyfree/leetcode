function maxArea(height: number[]): number {
  let output: number = 0;
  if (height == null || height.length < 2) {
    return output;
  }
  let left: number = 0;
  let right: number = height.length - 1;
  while (left < right) {
    output = Math.max(
      output,
      Math.min(height[right], height[left]) * (right - left)
    );
    height[left] < height[right] ? left++ : right--;
  }
  return output;
}
