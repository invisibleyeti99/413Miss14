using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MovieApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    MovieId = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Category = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Title = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Year = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Director = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Rating = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Edited = table.Column<byte[]>(type: "BLOB", nullable: true),
                    LentTo = table.Column<byte[]>(type: "BLOB", nullable: true),
                    Notes = table.Column<byte[]>(type: "BLOB", nullable: true)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
