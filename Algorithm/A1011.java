import java.util.*;

public class A1011 {
    public static void main(String[] args){
        LinkedList<Integer> list1 = new LinkedList<Integer>();
        Queue<Integer> list2 = new LinkedList<Integer>();
        Stack<Integer> list3 = new Stack<Integer>();

        list1.add(1);
        list1.add(2);
        list1.add(3);
        list1.add(4);
        list1.add(5);

        System.out.println(list1); //1, 2, 3, 4, 5

        list1.remove();
        System.out.println(list1); //2, 3, 4, 5

        list2.offer(10);
        list2.offer(20);
        list2.offer(30);
        list2.offer(40);
        list2.offer(50);

        System.out.println(list2); //10 ,20,30 ,40 ,50
        
        list2.poll();

        System.out.println(list2); //20,30 ,40 ,50


        list3.push(100);
        list3.push(200);
        list3.push(300);

        System.out.println(list3); //100, 200, 300

        list3.pop();
        System.out.println(list3); //100, 200
    }
}
