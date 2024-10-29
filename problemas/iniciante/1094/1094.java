import java.util.Locale;
import java.util.Scanner;

class Main {
    public static void main(String[] args) throws java.lang.Exception {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] testes = new int[n];
        char[] sapo = new char[n];
        char[] coelho = new char[n];
        char[] rato = new char[n];
        int totalAll = 0;
        int totalCoelho = 0;
        int totalSapo = 0;
        int totalRato = 0;

        for (int i = 0; i < n; i++) {
            testes[i] = sc.nextInt();
            char type = sc.next().charAt(0);
            if (type == 'S') {
                sapo[i] = type;
                totalSapo += testes[i];
            } else if (type == 'R') {
                rato[i] = type;
                totalRato += testes[i];
            } else {
                coelho[i] = type;
                totalCoelho += testes[i];
            }
            totalAll += testes[i];
        }

        double percentCoelho = ((double) totalCoelho / totalAll) * 100;
        double percentRato = ((double) totalRato / totalAll) * 100;
        double percentSapo = ((double) totalSapo / totalAll) * 100;

        System.out.println("Total: " + totalAll + " cobaias");
        System.out.println("Total de coelhos: " + totalCoelho);
        System.out.println("Total de ratos: " + totalRato);
        System.out.println("Total de sapos: " + totalSapo);
        System.out.printf("Percentual de coelhos: %.2f %%\n", percentCoelho);
        System.out.printf("Percentual de ratos: %.2f %%\n", percentRato);
        System.out.printf("Percentual de sapos: %.2f %%\n", percentSapo);
        sc.close();
    }
}