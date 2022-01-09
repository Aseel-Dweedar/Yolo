/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package leetcode;

import java.util.Arrays;
import java.util.HashMap;

public class App {

    public static void main(String[] args) {
        int[] arr1 = {4,5,6,7,0,2,1,3};
        int[] arr2 = {0,1,2};
//        System.out.println(restoreString("codeleet",arr1 ));
//        System.out.println(restoreString("abc",arr2 ));
//        System.out.println(Arrays.toString(twoSum(arr2 , 1)));
//        System.out.println(Arrays.toString(twoSum(arr1 , 8)));
        int[] arr3 = {1,3};
        int[] arr4 = {2};
        int[] arr5 = {1,2};
        int[] arr6 = {3,4};
//        System.out.println(findMedianSortedArrays(arr3,arr4));
//        System.out.println(findMedianSortedArrays(arr5,arr6));
        int[] arr7 = {1,1,2};
        int[] arr8 = {0,0,1,1,1,2,2,3,3,4};
//        System.out.println(removeDuplicates(arr7));
//        System.out.println(removeDuplicates(arr8));
        int[] arr9 = {3,2,2,3};
        int[] arr10 = {0,1,2,2,3,0,4,2};
        System.out.println(removeElement(arr9,3));
        System.out.println(removeElement(arr10,2));
    }

    public static String restoreString (String s, int[] indices) {
        char[] arr = new char[indices.length];
        for (int i = 0; i < indices.length; i++) {
            arr[indices[i] ] = s.charAt(i);
        }
        return new String(arr);
    }

    public static int[] twoSum(int[] nums, int target) {
        int[] arr = new int[2];
//        for (int i = 0; i <= nums.length; i++) {
//            for (int j = i+1; j < nums.length; j++) {
//                if (nums[i] + nums[j] == target){
//                    arr[0] = i;
//                    arr[1] = j;
//                    return arr;
//                }
//            }
//        }
        HashMap<Integer,Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(target-nums[i])) {
                map.put(nums[i] , i);
            } else {
                arr[0] = map.get(target-nums[i]);
                    arr[1] = i;
            }
        }
        return arr;
    }

    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] arr = new int[nums1.length+nums2.length];
        int index1 = 0 ;
        int index2 = 0 ;
        for (int i = 0; i < nums1.length+nums2.length; i++) {
            if (index1 >= nums1.length ) {
                arr[i] = nums2[index2];
                index2++;
            } else if (index2 >= nums2.length) {
                arr[i] = nums1[index1];
                index1 ++;
            } else {
                if (nums1[index1] < nums2[index2]) {
                    arr[i] = nums1[index1];
                    index1 ++;
                } else {
                    arr[i] = nums2[index2];
                    index2++;
                }
            }
        }
        if (arr.length % 2 == 0 ) {
            double midPoint = (float) (arr[arr.length/2] + arr[arr.length/2 -1])/2;
            return midPoint;
        } else {
            return  (arr[(int) Math.floor(arr.length/2)]);
        }
    }

    public static int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int sum = 0;
        for (int i = 0; i < seats.length; i++) {
            sum += Math.abs(students[i] - seats[i]);
        }
        return sum;
    }

    public static int removeDuplicates(int[] nums) {
        int idx = 1 ;
        for (int i = 1; i < nums.length; i++) {

            if (nums[i] != nums[i-1]){
                nums[idx] = nums[i];
                idx++;
            }
        }
        return idx;
    }

    public static int removeElement(int[] nums, int val) {
        int idx = 0 ;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val){
                nums[idx] = nums[i];
                idx++;
            }
        }
        return idx;
    }


}
