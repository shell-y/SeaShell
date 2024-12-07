create database seashell;
use seashell;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
usuario char(8),
senha char(8)
);

create table quiz(
idquiz int primary key auto_increment,
nome varchar(45)
);

create table tentativas(
idtentativa int auto_increment,
fkusuario int,
fkquiz int,
datahora datetime,
perfila int,
perfilb int,
perfilc boolean,
constraint fkUsuarioTentativa foreign key(fkusuario) references usuario(idusuario),
constraint fkQuizTentativa foreign key(fkquiz) references quiz(idquiz),
constraint pkComposta primary key(idtentativa,fkusuario,fkquiz)
)auto_increment=100;

create table perguntas(
idpergunta int primary key auto_increment,
pergunta text);

select * from usuario;
