char* removeDigit(char* number, char digit) {
    char* max;
    max = strdup("0");

  for (int i = 0; number[i] != '\0'; i++) {
    if (number[i] == digit) {
      char candidate[100];
      strncpy(candidate, number, i);
      candidate[i] = '\0';
      strcat(candidate, number + i + 1);

      if (atoi(max) < atoi(candidate)) {
        max = strdup(candidate);
      }
      
    }
  }

  return max;
}