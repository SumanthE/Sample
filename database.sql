create database Project2;
use Project2;
create table UserDetails(
    email varchar(255),
    password varchar(255)
    );
create table Registration(
    Email varchar(250),
    Fullname varchar(250),
    DOB varchar(250),
    StreetNo varchar(250),
    StreetName varchar(250),
    City varchar(250),
    Province varchar(250),
    Country varchar(250),
    PostalCode varchar(250)

);

create table MovieReviews(
moviename varchar(255),
moviereview varchar(255)
);

create table TvShowReviews(
tvshowname varchar(255),
tvshowreview varchar(255)
);

create table GameReviews(
gamename varchar(255),
gamereview varchar(255)
);
