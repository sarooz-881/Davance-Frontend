import java.util.Scanner;

public class Jumping_clouds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int count = 0;
        int s;
        int[] c = new int[n];
        for (int i = 0; i < n; i++) {
            s = sc.nextInt();
            c[i]=s;
        }

        for(int i=0;i<n-1;i++, count++){
            if(c[i+2]<n && c[i+2]==0)
                i++;
        }
        System.out.println(count);
        }

//
//        for (int strTemp : c){
//            System.out.println(strTemp);
//        }
    }




