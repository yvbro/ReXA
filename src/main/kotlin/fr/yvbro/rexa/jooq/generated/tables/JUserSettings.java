/*
 * This file is generated by jOOQ.
 */
package fr.yvbro.rexa.jooq.generated.tables;


import fr.yvbro.rexa.jooq.generated.JRexa;
import fr.yvbro.rexa.jooq.generated.Keys;
import fr.yvbro.rexa.jooq.generated.tables.records.JUserSettingsRecord;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row4;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class JUserSettings extends TableImpl<JUserSettingsRecord> {

    private static final long serialVersionUID = -1291274252;

    /**
     * The reference instance of <code>rexa.user_settings</code>
     */
    public static final JUserSettings USER_SETTINGS = new JUserSettings();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<JUserSettingsRecord> getRecordType() {
        return JUserSettingsRecord.class;
    }

    /**
     * The column <code>rexa.user_settings.user_id</code>.
     */
    public final TableField<JUserSettingsRecord, UUID> USER_ID = createField(DSL.name("user_id"), org.jooq.impl.SQLDataType.UUID.nullable(false), this, "");

    /**
     * The column <code>rexa.user_settings.xnat_username</code>.
     */
    public final TableField<JUserSettingsRecord, String> XNAT_USERNAME = createField(DSL.name("xnat_username"), org.jooq.impl.SQLDataType.VARCHAR.nullable(false), this, "");

    /**
     * The column <code>rexa.user_settings.xnat_password</code>.
     */
    public final TableField<JUserSettingsRecord, String> XNAT_PASSWORD = createField(DSL.name("xnat_password"), org.jooq.impl.SQLDataType.VARCHAR.nullable(false), this, "");

    /**
     * The column <code>rexa.user_settings.xnat_url</code>.
     */
    public final TableField<JUserSettingsRecord, String> XNAT_URL = createField(DSL.name("xnat_url"), org.jooq.impl.SQLDataType.VARCHAR.nullable(false), this, "");

    /**
     * Create a <code>rexa.user_settings</code> table reference
     */
    public JUserSettings() {
        this(DSL.name("user_settings"), null);
    }

    /**
     * Create an aliased <code>rexa.user_settings</code> table reference
     */
    public JUserSettings(String alias) {
        this(DSL.name(alias), USER_SETTINGS);
    }

    /**
     * Create an aliased <code>rexa.user_settings</code> table reference
     */
    public JUserSettings(Name alias) {
        this(alias, USER_SETTINGS);
    }

    private JUserSettings(Name alias, Table<JUserSettingsRecord> aliased) {
        this(alias, aliased, null);
    }

    private JUserSettings(Name alias, Table<JUserSettingsRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    public <O extends Record> JUserSettings(Table<O> child, ForeignKey<O, JUserSettingsRecord> key) {
        super(child, key, USER_SETTINGS);
    }

    @Override
    public Schema getSchema() {
        return JRexa.REXA;
    }

    @Override
    public UniqueKey<JUserSettingsRecord> getPrimaryKey() {
        return Keys.USER_SETTINGS_PKEY;
    }

    @Override
    public List<UniqueKey<JUserSettingsRecord>> getKeys() {
        return Arrays.<UniqueKey<JUserSettingsRecord>>asList(Keys.USER_SETTINGS_PKEY);
    }

    @Override
    public List<ForeignKey<JUserSettingsRecord, ?>> getReferences() {
        return Arrays.<ForeignKey<JUserSettingsRecord, ?>>asList(Keys.USER_SETTINGS__USER_SETTINGS_USER_ID_FKEY);
    }

    public JUser user() {
        return new JUser(this, Keys.USER_SETTINGS__USER_SETTINGS_USER_ID_FKEY);
    }

    @Override
    public JUserSettings as(String alias) {
        return new JUserSettings(DSL.name(alias), this);
    }

    @Override
    public JUserSettings as(Name alias) {
        return new JUserSettings(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public JUserSettings rename(String name) {
        return new JUserSettings(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public JUserSettings rename(Name name) {
        return new JUserSettings(name, null);
    }

    // -------------------------------------------------------------------------
    // Row4 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row4<UUID, String, String, String> fieldsRow() {
        return (Row4) super.fieldsRow();
    }
}
