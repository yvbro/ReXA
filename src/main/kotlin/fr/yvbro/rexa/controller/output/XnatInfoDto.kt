package fr.yvbro.rexa.controller.output

import fr.yvbro.rexa.model.Assessor
import fr.yvbro.rexa.model.Scan

data class XnatInfoDto(
        var projectId: String,
        var numberOfScan: Int,
        var numberOfSession: Int,
        var numberOfSubject: Int,
        var scans: List<ScanDto>,
        var assessors: List<AssessorDto>
)
