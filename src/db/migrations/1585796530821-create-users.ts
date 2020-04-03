import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1585796530821 implements MigrationInterface {
    private table = new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true, // Auto-increment
                generationStrategy: 'increment',
            },
            {
                name: 'firstName',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'lastName',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'cityLive',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'birthDay',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamptz',
                isNullable: false,
                default: 'now()',
            },
        ],
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
    }
}
