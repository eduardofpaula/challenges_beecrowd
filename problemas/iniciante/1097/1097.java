class Main {
 
    public static void main(String[] args) throws Exception {

        for (int i = 1; i <= 9;) {
            for (int j = 7; j <= 15; j += 2) {
                for (int a = 0; a <= 2; a++) {
                    System.out.println("I=" + i + " J=" + (j - a));
                }
                i+=2;
            }
        }
    }
 
}