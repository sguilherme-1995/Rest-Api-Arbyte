const { table } = require("../database");

const tablename = "users"
const columnName = "salt"

exports.up = function(knex) {
    return knex.schema.table(tablename, (table) => {
        table.string(columnName)
    })
};

exports.down = function(knex) {
    return knex.schema.table(tablename, (table) => {
        table.dropColumn(columnName)
    })
};
