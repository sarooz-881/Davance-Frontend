import java.util.Scanner;

public class Solverepeatstring {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.next();
        long n = sc.nextLong();
        long count = 0;

        char[] arr = new char[n];

        for(int i = 0;i<n;i++){
            arr[i] = s.charAt(i%s.length());
            if(arr[0]==arr[i]){
                count++;
            }
        }
        System.out.println(count);
    }
}

