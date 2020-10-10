import java.util.LinkedList;

public class DataStructure {
    public static void main(String[] args){
        LinkedList<String> list = new LinkedList<String>();

        list.add("0");
        list.add("1");
        list.add("2");
        list.add("3");
        list.add(1, "7");

        System.out.println(list);
    }
}
