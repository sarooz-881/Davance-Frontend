public class RepeatedString {
    public static void main(String[] args) {
        int n = 5;
        String shortString = "abc";
        char[] keys = new char[n];

        for(int i = 0; i < n; i++) {
            keys[i] = shortString.charAt(i % shortString.length());
                }
        System.out.println(keys);
    }
}
