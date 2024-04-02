short isPalindrome(int x) {
    char str[32];
    sprintf(str, "%d", x); 

    int left = 0;
    int right = strlen(str) - 1;

    while (left < right) {
        if (str[left] != str[right]) return 0;
        left++;
        right--;
    }

    return 1;
}