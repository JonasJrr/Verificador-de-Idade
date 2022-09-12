function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', './img/pexels-bebehomem.jpg')
            }else if (idade < 9){
                img.setAttribute('src', './img/pexels-criançahomem.jpg')
            }else if (idade < 16){
                img.setAttribute('src', './img/pexels-adolescentehomem.jpg')
            }else if (idade < 21){
                img.setAttribute('src', './img/pexels-jovemhomem.jpg')         
            }else if (idade < 30){
                img.setAttribute('src', './img/pexels-homemadultonovo.jpg')
            }else if (idade < 50){
                img.setAttribute('src', './img/pexels-homemadulto.jpg')
            }else if (idade < 70){
                img.setAttribute('src', './img/pexels-idosohomem.jpg')         
            } else {
                img.setAttribute('src', './img/pexels-homemidoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 3){
                img.setAttribute('src', './img/pexels-bebemulher.jpg')
            }else if (idade < 9){
                img.setAttribute('src', './img/pexels-criançamulher.jpg')
            }else if (idade < 16){
                img.setAttribute('src', './img/pexels-adolescentemulher.jpg')  
            }else if (idade < 21){
                img.setAttribute('src', './img/pexels-jovemmulher.jpg')
            }else if (idade < 30){
                img.setAttribute('src', './img/pexels-mulheradulta.jpg')           
            }else if (idade < 50){
                img.setAttribute('src', './img/pexels-mulheradultanova.jpg')
            }else if (idade < 70){
                img.setAttribute('src', './img/pexels-idosamulher.jpg')    
            } else {
                img.setAttribute('src', './img/pexels-mulheridosa.jpg')
            }
        }
        res.innerHTML = `Detectado  ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}