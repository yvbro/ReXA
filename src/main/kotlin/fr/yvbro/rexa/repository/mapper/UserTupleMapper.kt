package fr.yvbro.rexa.repository.mapper

import org.jooq.Record
import org.jooq.RecordMapper
import org.springframework.stereotype.Component

import fr.yvbro.rexa.jooq.generated.Tables
import fr.yvbro.rexa.model.User

@Component
class UserTupleMapper : RecordMapper<Record, User> {
    override fun map(record: Record?): User {
        return User.Builder()
                .id(record?.get(Tables.USER.ID))
                .email(record?.get(Tables.USER.EMAIL))
                .password(record?.get(Tables.USER.PASSWORD))
                .authProvider(record?.get(Tables.USER.AUTH_PROVIDER))
                .enabled(record?.get(Tables.USER.ENABLED))
                .build()
    }
}
