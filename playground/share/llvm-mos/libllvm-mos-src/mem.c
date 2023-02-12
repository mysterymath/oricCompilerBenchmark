void *memchr(const void *s, int c, unsigned int n) {
  const char *sc;
  char ch;
  for (sc = (const char *)s, ch = (char)c; n; sc++, n--)
    if (*sc == ch)
      return (void *)sc;
  return 0;
}

int memcmp(const void *s1, const void *s2, unsigned int n) {
  const char *a, *b;
  for (a = s1, b = s2; n; ++a, ++b, --n)
    if (*a != *b)
      return *a - *b;
  return 0;
}

void *memcpy(void *dest, const void *src, unsigned int count) {
  char *d;
  const char *s;
  for (d = dest, s = src; count; d++, s++, --count)
    *d = *s;
  return dest;
}

void __memset(char *ptr, char value, unsigned int num) {
  for (; num; ptr++, num--)
    *ptr = value;
}

void *memset(void *ptr, int value, unsigned int num) {
  __memset((char *)ptr, (char)value, num);
  return ptr;
}

void *memmove(void *dest, const void *src, unsigned int num) {
  unsigned int udest = (unsigned int)dest;
  unsigned int usrc = (unsigned int)src;
  if (udest <= usrc)
    return memcpy(dest, src, num);

  // Don't add -1 to dest or src; this is undefined behavior.
  if (!num)
    return dest;
  char *d = dest + num - 1;
  const char *s = src + num - 1;

  while (1) {
    *d = *s;
    // Don't decrement d or s past the beginning of the object; this is
    // undefined behavior.
    if (!--num)
      return dest;
    --d, --s;
  }
  return dest;
}
