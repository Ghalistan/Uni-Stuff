# SmallKotlinProgram
Answering some logical problems, run <b>Main</b> function on `main.kt` for all answers.<br>

# Soal 1
Given a binary array, find the maximum number of consecutive 1s in this array. <br>
<b>Example</b><br>
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Input: [1,0,0,1,0,1,1]
Output: 2
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 2.
```

## Notes

1. The input array will only contain 0 and 1
2. The length of input array is a positive integer and will not exceed 10.000


# Soal 2
Write a function that reverses a string using a recursive function. Input of function using char[] or array of character<br>
<b>Example</b><br>
```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

## Notes
1. You can’t using default function reserve
2. You can’t using looping for reserve function
3. only can use recursive for solved

# Soal 3
Write function to find Balanced Brackets. Bracket is considered to be any one of the following characters: ( , ) , { , } , [ , or ]. Check brackets matched pairs between opening bracket and close bracket with return string YES or NO.<br>
<b>Example</b><br>
```
Input: { [ ( ) ] }
Output: YES


Explanation: every bracket it’s balance, between opening bracket and close bracket:
opening : { it’s balance with }
opening : [ it’s balance with ]
opening : ( it’s balance with }
```
```
Input: { [ ( ] ) }
Output: NO


Explanation: The string { [ ( ] ) } is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [ ( ] ).
```
```
Input: { ( ( [ ] ) [ ] ) [ ] }
Output: YES

Explanation: every bracket it’s balance, between opening bracket and close bracket, although the structure of bracket irregular
```
