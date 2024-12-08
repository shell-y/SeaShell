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
datahora timestamp default current_timestamp,
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

insert into quiz(nome) values ('Quiz das Rotas');

insert into perguntas (pergunta) values
('Logo ao deixar sua vila, você encontra uma caverna escondida entre os corais. Parece antiga e repleta de histórias que as águas sussurram, mas o fundo do mar é vasto, e ainda há mais lugares para explorar.
'),
('Ao entrar, você se vê em uma caverna brilhante, iluminada por plantas bioluminescentes. No fundo, olhos curiosos te observam.'),
('Conforme se afasta do reino, você encontra um arco natural de pedras coberto por musgos brilhantes. Algo na estrutura parece mágico, e você percebe que pequenos peixes estão atravessando o arco e desaparecendo.'),
('Ao conversar com as criaturas, estas se revelam serem guardiãs de um antigo tesouro dos mares, mas para ganhá-lo, você primeiro deve derrotar o predador da caverna.'),
('Lá, você encontra baús fechados, mas também sinais de que um predador pode estar próximo.'),
('Os anciãos, sem dar explicações, apenas dizem para você ficar longe do arco. Um senhor maltrapilho que ali passava diz já ter entrado pelo portal há muito tempo atrás, e perguntou como estavam as criaturas. Antes de responder, um barulho te distrai, e você o perde de vista.'),
('Ao abrir, o baú faz barulho e atrai o predador, obrigando você a fugir rapidamente, perdendo um artefato importante no processo.');

create table opcoes(
fkperguntas int,
fkquiz int,
fktentativa int,
fkusuario int,
alternativa text,
constraint fkPO foreign key(fkperguntas) references perguntas(idpergunta),
constraint fkQO foreign key(fkquiz) references quiz(idquiz),
constraint fkTO foreign key(fktentativa) references tentativas(idtentativa),
constraint fkUO foreign key(fkusuario) references usuario(idusuario),
constraint pkPQTU primary key(fkperguntas,fkquiz,fktentativa,fkusuario)
);

select * from opcoes order by fktentativa;

