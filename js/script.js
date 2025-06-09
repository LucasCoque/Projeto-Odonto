// Aguarda o carregamento do DOM 
document.addEventListener('DOMContentLoaded', () => {
  // Inicia slick (se ainda usar)
  $('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  // Animação de texto .ml6 (caso use essa classe em outro lugar)
  let animationPlayed = false;
  const elementoMl6 = document.querySelector('.ml6');
  if (elementoMl6) {
    elementoMl6.addEventListener('mouseenter', () => {
      if (animationPlayed) return;
      animationPlayed = true;

      anime.timeline()
        .add({
          targets: '.ml6',
          opacity: [0, 1],
          duration: 800,
          easing: 'linear'
        })
        .add({
          targets: '.ml6 .letter',
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        }, '-=400')
        .add({
          targets: '.ml6',
          scale: [1, 1.05],
          duration: 500,
          easing: 'easeOutExpo'
        })
        .add({
          targets: '.ml6',
          scale: 1,
          duration: 300,
          easing: 'easeOutExpo'
        });
    });
  }

  // === CONFIRMAÇÃO DO FORMULÁRIO ===
  const form = document.getElementById('form-contato');
  const botaoEnviar = document.getElementById('botao-enviar');

  if (form && botaoEnviar) {
    form.addEventListener('submit', (evento) => {
      evento.preventDefault(); // impede envio / reload


      const spanConfirmacao = document.createElement('span');
      spanConfirmacao.id = 'span-confirmacao';
      spanConfirmacao.textContent = 'Mensagem enviada com sucesso!';


      spanConfirmacao.style.display = 'inline';
      spanConfirmacao.style.color = 'green';
      spanConfirmacao.style.fontWeight = 'bold';
      spanConfirmacao.style.marginLeft = '10px';


      botaoEnviar.insertAdjacentElement('afterend', spanConfirmacao);
      form.reset();
    });
  }

  //passa resumo
  $('.resumo').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});
//confirma



