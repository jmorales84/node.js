fun main() {
    var edad: Int? = null

    while (edad == null || edad < 1 || edad > 99) {
        print("Ingresa tu edad (número entre 1 y 99): ")
        val input = readLine()

        // Verifica que sea número entero
        edad = input?.toIntOrNull()

        if (edad == null || edad < 0 || edad > 99) {
            println("Edad inválida, intenta de nuevo.")
        }
    }

    if (edad >= 18) {
        println("ACCESO AUTORIZADO")
    } else {
        println("ACCESO DENEGADO ")
    }
}
