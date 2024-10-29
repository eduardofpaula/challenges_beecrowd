class Main {

    public static void main(String[] args) throws java.lang.Exception {
        int i = 1;
        int j = 7;
        for (int a = 0; a <= 9; a++) {
            System.out.println("I=" + i + " J=" + j);
            j--;
            if(j == 5){
                System.out.println("I=" + i + " J=" + j);
                i += 2;
                j = 7;
            }
        }
    }
}