import javax.swing.*;
import java.util.Scanner;

public class Repeated_String {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long count = 0;
        int n = sc.nextInt();
        char[] chars = new char[n];

        for(int i = 0; i<n; i++){
           char c = sc.next().charAt(0);
            chars[i] = c;
            if(chars[0] == chars[i]){
                count++;
            }
        }
        System.out.println(count);

    }
}