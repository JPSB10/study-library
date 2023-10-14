import banner from "./banner.js"
import Artigo from "./artigo.js"

let b = new banner()
b.bannerGrande("Título","url(../img/roupe_mas_vermelha.jpg)","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat odit culpa saepe pariatur nostrum alias beatae assumenda eos quibusdam, eveniet accusamus, delectus possimus explicabo similique esse sapiente impedit perspiciatis. Architecto.","banner_01")

let a =new Artigo()
a.CriarNovoArtigo("Titulo1","Conteudo2","artigos_01")