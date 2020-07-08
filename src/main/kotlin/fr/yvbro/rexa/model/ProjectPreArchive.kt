package fr.yvbro.rexa.model

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonProperty
import java.util.*

@JsonInclude(JsonInclude.Include.NON_EMPTY)
data class ProjectPreArchive(
        var subject: String,
        var project: String,
        @JsonProperty("name")
        var session: String,
        @JsonProperty("scan_date")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss.SSS")
        var scanDate: Date,
        @JsonProperty("lastmod")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss.SSS")
        var updloadDate: Date,
        var status: String)
