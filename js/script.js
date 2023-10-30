/* Função para a tela de Loading */
const textElement = document.getElementById("lEscrever");

if (textElement) {
    const text = textElement.innerText;
    textElement.innerText = "";

    let index = 0;

    function typeNextLetter() {
        if (index < text.length) {
            textElement.innerText += text.charAt(index);
            index++;
            setTimeout(typeNextLetter, 100);
        }
    }

    typeNextLetter();
}

$(function () {
    const btnMobileT = document.getElementById("btnMobileTble");
    const bxIconMenu = document.getElementById("btnMobileTble");
    const bxIconClose = document.getElementById("bxiconclose");

    /* Dando funcionalidade ao botão*/
    function toggleMenu(event) {
        const nav = document.getElementById("nav");

        if (nav.classList.contains("active")) {
            nav.classList.remove("active");
            bxIconMenu.className = "bx bx-menu";
            bxIconClose.style.display = "none";
            /* Fazendo o evento para os atributos ARIA compreensível para usuários com deficiências falso */
            event.currentTarget.setAttribute("aria-expanded", "Fechar Menu");
        } else {
            nav.classList.add("active");
            bxIconMenu.className = "bx bx-x";
            bxIconClose.style.display = "block";
            /* Fazendo o evento para os atributos ARIA compreensível para usuários com deficiências Verdade */
            event.currentTarget.setAttribute("aria-expanded", "Abrir Menu");
        }
    }

    if (btnMobileT) {
        btnMobileT.addEventListener("click", toggleMenu);
    }
});

/* 1º Primeiro script jquery  carousel-section*/
var $ = jQuery;

$(document).ready(function () {
    $(".as-slider").each(function () {
        var $this = $(this),
            currentSlide = 0,
            previousSlide = 0,
            slideNumber = $this.find(
                ".as-side-slider .swiper-slide:not(.swiper-slide-duplicate)"
            ).length,
            barHTML = "",
            forward,
            textContainer = $this.find(".as-changing-widget");

        for (var i = 0; i < slideNumber; i++) {
            barHTML += `<span class="dot"><span class="dot-number">${
                i + 1
            }</span></span>`;
        }

        $this.find(".as-bar .dot").remove();
        $this.find(".as-bar").append(barHTML);
        $this.find(".as-bar .dot").eq(0).addClass("active");

        textContainer.each(function () {
            var texts = $(this).find(".elementor-widget").eq(0);
            texts.addClass("currentUp");
            $(this).css("--h", texts.height() + "px");
        });

        setTimeout(function () {
            $this.addClass("loaded");

            if (
                $this.find(
                    ".as-side-slider .swiper-container-initialized, .as-side-slider .swiper-initialized"
                ).length
            ) {
                $this.find(".as-side-slider").addClass("loaded");
            }

            var init = setInterval(function () {
                if (
                    $this.find(
                        ".as-side-slider .swiper-container-initialized, .as-side-slider .swiper-initialized"
                    ).length
                ) {
                    $this.find(".as-side-slider").addClass("loaded");
                    clearInterval(init);
                }
            }, 50);
        }, 500);

        var bgs = JSON.parse(
                $this.attr("data-settings")
            ).background_slideshow_gallery,
            bgHTML = '<div class="as-slider-background">';

        if (bgs) {
            bgs.forEach(function (background) {
                bgHTML += `<img decoding="async" src="${background.url}"/>`;
            });
        }
        bgHTML += "</div>";

        $this.find(".as-slider-background").remove();
        $this.prepend(bgHTML);

        var backgrounds = $this.find(".as-slider-background img");

        backgrounds.eq(0).addClass("currentForward");

        setInterval(function () {
            currentSlide = $this
                .find(".as-side-slider .swiper-slide-active")
                .attr("data-swiper-slide-index");
            if (previousSlide != currentSlide) {
                if (previousSlide < currentSlide) {
                    forward = true;
                }
                if (previousSlide > currentSlide) {
                    forward = false;
                }
                if (previousSlide == slideNumber - 1 && currentSlide == 0) {
                    forward = true;
                }
                if (previousSlide == 0 && currentSlide == slideNumber - 1) {
                    forward = false;
                }
                textContainer.each(function () {
                    var texts = $(this).find(".elementor-widget");

                    $(this).css("--h", texts.eq(currentSlide).height() + "px");

                    texts.removeClass("prev next currentUp currentDown");
                    backgrounds.removeClass(
                        "prev currentBackward currentForward"
                    );

                    backgrounds.eq(previousSlide).addClass("prev");

                    if (forward) {
                        texts.eq(previousSlide).addClass("prev");
                        texts.eq(currentSlide).addClass("currentUp");

                        backgrounds.eq(currentSlide).addClass("currentForward");
                    } else {
                        texts.eq(previousSlide).addClass("next");
                        texts.eq(currentSlide).addClass("currentDown");

                        backgrounds
                            .eq(currentSlide)
                            .addClass("currentBackward");
                    }
                });

                $this.find(".as-bar .dot").removeClass("active");
                $this.find(".as-bar .dot").eq(currentSlide).addClass("active");
            }
            previousSlide = currentSlide;
        }, 500);

        $this.find(".as-bar .dot").on("click", function () {
            var index = $(this).index();

            $this
                .find(".as-side-slider .swiper-pagination-bullet")
                .eq(index)
                .trigger("click");
            $this
                .find(".as-side-slider .swiper-container")
                .trigger("mouseleave");
        });
        $this.find(".as-slider-left").on("click", function () {
            $this
                .find(".as-side-slider .elementor-swiper-button-prev")
                .trigger("click");
            $this
                .find(".as-side-slider .elementor-swiper")
                .trigger("mouseleave");
        });
        $this.find(".as-slider-right").on("click", function () {
            $this
                .find(".as-side-slider .elementor-swiper-button-next")
                .trigger("click");
            $this
                .find(".as-side-slider .elementor-swiper")
                .trigger("mouseleave");
        });
        $this
            .find(".as-slider-left a, .as-slider-right a")
            .on("click", function (e) {
                e.preventDefault();
            });
    });
});

$(window).on("resize", function () {
    $(".as-slider").each(function () {
        var textContainer = $(this).find(".as-changing-widget");

        textContainer.each(function () {
            var texts = $(this).find(
                ".elementor-widget.currentUp, .elementor-widget.currentDown"
            );

            $(this).css("--h", texts.height() + "px");
        });
    });
});

/* 3º Parte, (WordPress) É usado para configurar dados de localização para suportar diferentes idiomas e direções de texto carousel-section */
wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });

/* */
var ElementorProFrontendConfig = {
    shareButtonsNetworks: {
        facebook: { title: "Facebook", has_counter: true },
        twitter: { title: "Twitter" },
        linkedin: { title: "LinkedIn", has_counter: true },
        pinterest: { title: "Pinterest", has_counter: true },
        reddit: { title: "Reddit", has_counter: true },
        vk: { title: "VK", has_counter: true },
        odnoklassniki: { title: "OK", has_counter: true },
        tumblr: { title: "Tumblr" },
        digg: { title: "Digg" },
        skype: { title: "Skype" },
        stumbleupon: { title: "StumbleUpon", has_counter: true },
        mix: { title: "Mix" },
        telegram: { title: "Telegram" },
        pocket: { title: "Pocket", has_counter: true },
        xing: { title: "XING", has_counter: true },
        whatsapp: { title: "WhatsApp" },
        email: { title: "Email" },
        print: { title: "Print" },
    },
    facebook_sdk: { lang: "en_US", app_id: "" },
    lottie: {
        defaultAnimationUrl: "https://example.com/default.json",
    },
};

/*------------------------------------- footer -------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    let li = document.querySelectorAll(".faq-Text li");

    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", (e) => {
            let clickedLi;
            if (e.target.classList.contains("question-arrow")) {
                clickedLi = e.target.parentElement;
            } else {
                clickedLi = e.target.parentElement.parentElement;
            }
            clickedLi.classList.toggle("showAnswe");
        });
    }
});
