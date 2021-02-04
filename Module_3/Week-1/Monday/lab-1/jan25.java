class Main {
  public static void main(String[] args) {
    int small = 150;
    int large = 20;
    switch(small * large) {
      case 99:
        System.out.println("They pay 100 dollars then they take 99");
        break;
      case 300:
        System.out.println("This is sparta");
        break;
      default:
        System.out.println("hey. I am the default case");
    }
  }
  public static void callAnotherMethod() {
    multiply(12, 20);
  }
  public static void multiply(int num, int secondNum) {
    System.out.println(num * secondNum);
  }
  public static void greet(String nameOfPerson) {
    System.out.println("Hello " + nameOfPerson);
  }
  public static String add(int x, int y) {
    return String.format("Your number is -> %d", x + y);
  }
}