fun reverseString(word: MutableList<Char>) : List<Char> {
    if (word.isEmpty()) return word

    val newWord = word.removeAt(0)
    return reverseString(word) + newWord
}