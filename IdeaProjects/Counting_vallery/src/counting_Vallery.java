import java.util.Scanner;

public class counting_Vallery {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int valley = 0;
        int count = 0;
        char[] steps = new char[n];

        for(int i=0; i<n;i++){
            steps[i] = sc.next().charAt(0);
        }

        for(int i = 0; i<n; i++){
            if(steps[i]=='D'){
                count++;
            } else  if(steps[i]=='U'){
                count--;
            }

            if(count == 0 && steps[i] == 'U'){
                valley++;
            }

        }
        System.out.println(valley);
    }
}
