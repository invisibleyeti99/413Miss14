﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MovieApi.Data;

#nullable disable

namespace MovieApi.Migrations
{
    [DbContext(typeof(JoelHiltonMovieCollectionContext))]
    [Migration("20230408050521_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.15");

            modelBuilder.Entity("MovieApi.Data.Movie", b =>
                {
                    b.Property<byte[]>("Category")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Director")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Edited")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("LentTo")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("MovieId")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Notes")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Rating")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Title")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Year")
                        .HasColumnType("BLOB");

                    b.ToTable("Movies");
                });
#pragma warning restore 612, 618
        }
    }
}
