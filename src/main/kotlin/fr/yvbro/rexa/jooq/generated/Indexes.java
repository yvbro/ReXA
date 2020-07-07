/*
 * This file is generated by jOOQ.
 */
package fr.yvbro.rexa.jooq.generated;


import fr.yvbro.rexa.jooq.generated.tables.JSchemaVersion;
import org.jooq.Index;
import org.jooq.OrderField;
import org.jooq.impl.Internal;


/**
 * A class modelling indexes of tables of the <code>rexa</code> schema.
 */
@SuppressWarnings({"all", "unchecked", "rawtypes"})
public class Indexes {

    // -------------------------------------------------------------------------
    // INDEX definitions
    // -------------------------------------------------------------------------

    public static final Index SCHEMA_VERSION_IR_IDX = Indexes0.SCHEMA_VERSION_IR_IDX;
    public static final Index SCHEMA_VERSION_S_IDX = Indexes0.SCHEMA_VERSION_S_IDX;
    public static final Index SCHEMA_VERSION_VR_IDX = Indexes0.SCHEMA_VERSION_VR_IDX;

    // -------------------------------------------------------------------------
    // [#1459] distribute members to avoid static initialisers > 64kb
    // -------------------------------------------------------------------------

    private static class Indexes0 {
        public static Index SCHEMA_VERSION_IR_IDX = Internal.createIndex("schema_version_ir_idx", JSchemaVersion.SCHEMA_VERSION, new OrderField[]{JSchemaVersion.SCHEMA_VERSION.INSTALLED_RANK}, false);
        public static Index SCHEMA_VERSION_S_IDX = Internal.createIndex("schema_version_s_idx", JSchemaVersion.SCHEMA_VERSION, new OrderField[]{JSchemaVersion.SCHEMA_VERSION.SUCCESS}, false);
        public static Index SCHEMA_VERSION_VR_IDX = Internal.createIndex("schema_version_vr_idx", JSchemaVersion.SCHEMA_VERSION, new OrderField[]{JSchemaVersion.SCHEMA_VERSION.VERSION_RANK}, false);
    }
}
