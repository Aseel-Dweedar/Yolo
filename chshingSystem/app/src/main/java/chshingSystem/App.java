/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package chshingSystem;

import java.util.*;

public class App {

    public static void main(String[] args) {

        cachingByLinkedList();

        Queue<String> chaching = new LinkedList<>();


    }

    private static void cachingByLinkedList() {
        LinkedList<Persone> persons = new LinkedList<>();

        Persone aseel = new Persone("Aseel");
        Persone ruba = new Persone("Ruba");
        Persone ashar = new Persone("Ashar");
        Persone wisam = new Persone("Wisam");
        Persone ahmad = new Persone("Ahmad");

        persons.add(aseel);
        persons.add(ruba);
        persons.add(ashar);
        persons.add(wisam);
        persons.add(ahmad);

        System.out.println(persons);
        removeFromMid(persons, wisam);
        System.out.println("===============================================================");
        System.out.println(persons);
        System.out.println("===============================================================");
        addNew(persons, new Persone("Osama"));
        System.out.println(persons);
    }


    static LinkedList removeFromMid(LinkedList linkedList, Persone p) {
        linkedList.remove(p);
        linkedList.add(p);
        return linkedList;
    }

    static LinkedList addNew(LinkedList linkedList, Persone p) {
        linkedList.removeFirst();
        linkedList.addFirst(p);
        return linkedList;
    }

    static class Persone {
        private String name;

        public Persone(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return "Persone{" +
                    "name='" + name + '\'' +
                    '}';
        }
    }
}