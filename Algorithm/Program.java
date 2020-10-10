import java.util.Queue;
import java.util.LinkedList;


public class Program{
    public static void main(String[] args){
        System.out.println("hello world");

        Queue<String> q = new LinkedList<String>();
        q.offer("java");
        q.offer("algorithm");

        System.out.println(q.peek());
        System.out.println(q.poll());

        System.out.println(q.peek());

    }
}