fun soal1() {
    val array1 = arrayOf(1, 1, 0, 1, 1, 1)
    val array2 = arrayOf(1, 0, 0, 1, 0, 1, 1)

    val soal1 = SOAL1()
    println(soal1.findOneCombo(array1))
    println(soal1.findOneCombo(array2))
}

fun soal2() {
    val word1 = mutableListOf('h', 'e', 'l', 'l', 'o')
    println(reverseString(word1))
}

fun soal3() {
    val firstBracket = "{[()]}"
    val secondBracket = "{[(])}"
    val thirdBracket = "{(([])[])[]}"

    println(balancedBrackets(firstBracket))
    println(balancedBrackets(secondBracket))
    println(balancedBrackets(thirdBracket))
}

fun main() {
    soal1()
    soal2()
    soal3()
}