package fr.yvbro.rexa.controller.output

data class UserDto(val email: String?, val roles: List<String>, val enabled: Boolean?, var authProvider: String?)
