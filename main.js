const link_social_media = {
  github: 'iser-dev',
  youtube: '/channel/UCHowvrlTqMWEyr3Z0WDVvOw',
  facebook: 'thiagoiser',
  instagram: 'iser_wolf',
  twitter: '@iserrib'
}
//criacao do objeto para manipular os dados

function change_social_media_link() {
  for (let li of social_links.children) {
    //obtendo o filhos da UL
    const social = li.getAttribute('class')
    //obtendo a classe
    li.children[0].href = `https://${social}.com/${link_social_media[social]}`
    //alterando o link de cada filho
    //alert(li.children[0].href)
  }
}
change_social_media_link()

function get_user_info_github(){
const url = `https://api.github.com/users/${link_social_media.github}`;
fetch(url).then (response => response.json()).then(data => {
  
  user_name.textContent = data.name
  user_bio.textContent = data.bio
  link_github.href = data.html_url
  name_github.textContent = data.name
  img_pessoal.src = data.avatar_url
  icon_image.href = data.avatar_url
})
}
get_user_info_github()