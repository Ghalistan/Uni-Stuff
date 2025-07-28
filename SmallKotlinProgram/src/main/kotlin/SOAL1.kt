class SOAL1 {
    private val arrayMaxLength = 10000

    fun findOneCombo(array: Array<Int>) : Int {
        var oneCombo = 0

        if (array.size <= arrayMaxLength && checkArrayContent(array)) {
            for (arr in array) {
                when (arr) {
                    1 -> oneCombo++
                    0 -> oneCombo = 0
                    else -> continue
                }
            }
        }

        return oneCombo
    }

    private fun checkArrayContent(array: Array<Int>) : Boolean {
        for (arr in array) {
            if (arr != 0 && arr != 1) return false
        }

        return true
    }
}