export default (nums, shift) => nums.slice(Math.abs(shift)) + nums.slice(0, Math.abs(shift));
