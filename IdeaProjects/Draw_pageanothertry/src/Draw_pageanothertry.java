import java.util.Scanner;

public class Draw_pageanothertry {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);

        int n, p;
        n = sc.nextInt();
        p = sc.nextInt();
        int count = 0;
        int counts = 0;
        int draw[] = new int[n];
        int front = 0, back=0;


        for(int i = 0; i<n; i++){
            draw[i] = sc.nextInt();
        }
        for(int i=draw.length-1; i>0; i--){
            count++;
            if(p == draw[i]-1){
                back = count/2;
                System.out.println("Minimum Number of Page Back" + back);
            } else {
                System.out.println("Not Found");
            }
        }
        for(int i= 0; i<draw.length-1;i++){
                counts++;
            if(p == draw[i]){
                 front = counts/2;
                System.out.println("Minimum Number of Page Front" + front);
            } else {
                System.out.println("Not Found");
            }
        }


            if(front<back){
                System.out.println("Front"+front);
            } else
            {
                System.out.println("Back"+back);
            }
    }

}
