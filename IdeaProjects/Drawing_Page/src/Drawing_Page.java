import java.util.Scanner;

public class Drawing_Page {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n, p, front, back,mediem;

        n=sc.nextInt();
        p=sc.nextInt();

        front = p/2;
        back = n/2 - p/2;
        if(front<back){
            if(n==p){
                System.out.println(0);
            }
            else
            {
                System.out.println(front);
            }
        } else {

            if(n==p){
                System.out.println(0);
            }
            else
            {
                System.out.println(back);
            }
        }
      }

    }

