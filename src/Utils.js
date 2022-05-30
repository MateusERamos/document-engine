class Utils {
  static number2words(n) {
    const num =
      "zero um dois três quatro cinco seis sete oito nove dez onze doze treze quatorze quinze dezesseis dezessete dezoito dezenove".split(
        " "
      );
    const tens = "vinte trinta quarenta sessenta setenta oitenta noventa".split(
      " "
    );
    if (n < 20) return num[n];
    const digit = n % 10;
    if (n < 100) return tens[~~(n / 10) - 2] + (digit ? "-" + num[digit] : "");
    if (n < 1000)
      return (
        num[~~(n / 100)] +
        " hundred" +
        (n % 100 == 0 ? "" : " and " + number2words(n % 100))
      );
    return (
      number2words(~~(n / 1000)) +
      " thousand" +
      (n % 1000 != 0 ? " " + number2words(n % 1000) : "")
    );
  }
}
