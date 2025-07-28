fun balancedBrackets(brackets: String) : String {
    val stack = mutableListOf<Char>()

    for (char in brackets) {
        if (char in arrayOf('(', '{', '[')) {
            stack.add(char)
        } else {
            if (stack.isEmpty()) {
                return "NO"
            }

            when (stack.removeAt(stack.lastIndex)) {
                '(' -> if (char != ')') return "NO"
                '{' -> if (char != '}') return "NO"
                '[' -> if (char != ']') return "NO"
            }
        }
    }
    return "YES"
}