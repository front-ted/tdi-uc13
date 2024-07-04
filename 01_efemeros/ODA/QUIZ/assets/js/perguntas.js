var estruturageral = {
    mensagemfinal: {
        positiva: {
            texto: [
                "Parabéns, você concluiu com sucesso o quiz.", "Se quiser, você pode recomeçar clicando no botão abaixo."
            ],

        },
        negativa: {
            texto: [
                "Foi por pouco!",
                "É sempre uma boa ideia revisar o material e tentar novamente.",
                "Para recomeçar, basta clicar ou tocar no botão abaixo."
            ],

        }

    },
    introducao: {
        texto: [
            "Sejam bem-vindos ao <em>quiz</em> efêmero.",
            "Antes de começar, lembre-se de ler cuidadosamente cada pergunta e escolher a opção que você acredita ser a correta. Após responder, você receberá <em>feedbacks</em> positivos para acertos e construtivos para erros, de modo a ajudar no seu aprendizado.",
            "Sem mais delongas, boa sorte e aproveite o <em>quiz</em>!"
        ],
        // imagem: {
        //     src: "",
        //     title: "",
        //     alt:"",
        //     fonte: ""
        // },
    },
    config: {
        acertos_para_vitoria: 7,
        globalType: "quiz"
    }
}


var lista_feedbacks_genericos = {

    positivo: ["Muito bem! Você acertou", "É isso mesmo, você está certo."],
    negativo: ["Quase lá! Mas não é esta a resposta correta.", "<em>Oops</em>, não é bem isso."]

}


var perguntas = [{

        titulo: "Exposições temporárias e feiras",
        type: "quiz",
        pergunta: {
            texto: "Qual das alternativas a seguir melhor descreve o principal propósito das exposições temporárias e feiras?"
        },
        respostas: [{
                ordem: "a",
                validacao: true,
                texto: "Reunir indivíduos, empresas e entidades para apresentar e impulsionar produtos, serviços, ideias ou conceitos específicos durante um intervalo temporal restrito.",
            },
            {
                ordem: "b",
                validacao: false,
                texto: "Oferecer cursos e treinamentos para profissionais de diversas áreas, visando ao desenvolvimento de habilidades técnicas e comportamentais.",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Promover eventos de entretenimento e lazer para o público em geral, com atividades recreativas e shows ao vivo.",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Organizar encontros culturais e artísticos, com apresentações de música, dança e teatro.",
            },



        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns! Sua resposta está correta!"
            },
            negativo: {
                texto: "<em>Oops</em>! Esta não é a resposta correta! Revise o material sobre tipologias para verificar qual é a melhor opção."
            }
        }
    },
    {

        titulo: "<i>Stands</i>/estandes",
        type: "dragindrop",
        pergunta: {
            texto: "Qual dos espaços a seguir não pode ser caracterizado como um stand/estande?"
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao1-img1.jpg",
                    title: "estandes grupo duratex gtm cenografia",
                    alt: "estandes grupo duratex gtm cenografia",
                    fonte: "Fonte:https://www.archdaily.com.br/br/892729/estandes-grupo-duratex-gtm-cenografia. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao1-img2.jpg",
                    title: "stand deca hydra gtm cenografia",
                    alt: "stand deca hydra gtm cenografia",
                    fonte: "Fonte:https://www.archdaily.com.br/br/892729/estandes-grupo-duratex-gtm-cenografia. Acesso em: 24 maio 2024."
                }

            },
            {
                ordem: "c",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao1-img3.jpg",
                    title: "stand deca hydra gtm cenografia",
                    alt: "stand deca hydra gtm cenografia",
                    fonte: "Fonte:https://www.archdaily.com.br/br/867511/stand-deca-hydra-gtm-cenografia. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "d",
                validacao: true,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao1-img4.jpg",
                    title: "banheiro publico komaeyu schemata nagasaka",
                    alt: "banheiro publico komaeyu schemata nagasaka",
                    fonte: "Fonte:https://www.archdaily.com.br/br/1004051/banheiro-publico-komaeyu-schemata-architects-plus-jo-nagasaka. Acesso em: 24 maio 2024."
                }
            },

        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns, este espaço não tem características efêmeras, logo, não é um stand/estande!"
            },
            negativo: {
                texto: "Esse espaço tem as características de um stand/estande. Revise o material sobre tipologias para verificar qual é a melhor opção! "
            }

        }
    },
    {
        titulo: "Eventos temporários",
        // type: "dragindrop",
        pergunta: {
            texto: "Para qual dos ambientes a seguir seria difícil fazer um projeto para evento temporário?"
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "Estádio de futebol",
            },
            {
                ordem: "b",
                validacao: true,
                texto: "Hospital",
            },
            {
                ordem: "c",
                validacao: false,
                texto: "Parque",
            },
            {
                ordem: "d",
                validacao: false,
                texto: "Galpão industrial abandonado",
            },



        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns! Você identificou corretamente a resposta. Um hospital não é apropriado para um evento temporário por sua falta de espaço e por não poder reunir grandes públicos."
            },
            negativo: {
                texto: "Este local é apropriado para fazer um evento temporário, portanto esta resposta não é a correta. Revise o material sobre tipologias para verificar qual é a melhor opção."
            }
        }
    },
    {
        titulo: "Instalações artísticas e intervenções urbanas",
        type: "dragindrop",
        pergunta: {
            texto: "Qual das imagens a seguir não tem características de uma instalação artística ou intervenção urbana?"
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao4-img1.jpg",
                    title: "fora de temporada pavilhão-kosmos architektur-and design",
                    alt: "fora de temporada pavilhão-kosmos architektur-and design",
                    fonte: "Fonte:https://www.archdaily.com/1016144/off-season-pavilion-kosmos-architektur-and-design. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao4-img2.jpg",
                    title: "pavilhão hiyoshi jorge almazan mais universidade keio studiolab",
                    alt: "pavilhão hiyoshi jorge almazan mais universidade keio studiolab",
                    fonte: "Fonte:https://www.archdaily.com/1012160/hiyoshi-pavilion-jorge-almazan-plus-keio-university-studiolab. Acesso em: 24 maio 2024. "
                }
            },
            {
                ordem: "c",
                validacao: true,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao4-img3.jpg",
                    title: "vista interna casa irina biletska",
                    alt: "vista interna casa irina biletska",
                    fonte: "Fonte:https://www.archdaily.com/1016649/ava-house-irina-biletska. Acesso em: 24 maio 2024. "
                }
            },
            {

                ordem: "d",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao4-img4.jpg",
                    title: "pavilhão de oficinas milos jokic e ana sabanovic",
                    alt: "pavilhão de oficinas milos jokic e ana sabanovic",
                    fonte: "Fonte:https://www.archdaily.com/970085/shatra-workshop-pavilion-milos-jokic-plus-ana-sabanovic-plus-nikola-abramovic-plus-luka-vujovic. Acesso em: 24 maio 2024. "
                }
            },
        ],
        feedbacks: {

            positivo: {
                texto: "Parabéns! Você identificou corretamente o espaço que não representa uma instalação artística ou intervenção urbana."
            },
            negativo: {
                texto: "Este espaço representa bem uma instalação artística ou intervenção urbana e você deve encontrar o espaço que não representa. Revise o material sobre tipologias para verificar qual é a melhor opção."
            }
        }
    },
    {

        titulo: "Mobiliário",
        // type: "quiz",
        pergunta: {
            texto: "Qual é a principal característica que um mobiliário efêmero deve ter?"
        },
        respostas: [{

                ordem: "a",
                validacao: false,
                texto: "Ser esteticamente agradável e harmonizar com a decoração permanente do local.",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Ser durável e feito de materiais de alta qualidade para uso prolongado.",
            },
            {

                ordem: "c",
                validacao: true,
                texto: "Ser fácil de montar, desmontar e transportar de um local para outro.",
            },
            {

                ordem: "d",
                validacao: false,
                texto: "Ser personalizado para cada evento, com designs exclusivos e únicos.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: `Parabéns, sua resposta está correta. `
            },
            negativo: {
                texto: "<em>Oops</em>! Esta não é a resposta correta! Revise o material sobre tipologias para verificar qual é a melhor opção."
            }

        }
    },
    {
        titulo: "Cenografias",
        type: "dragindrop",
        pergunta: {
            texto: "Qual dos projetos a seguir apresenta um projeto de cenografia?"
        },
        respostas: [{
                ordem: "a",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao6-img1.jpg",
                    title: "hotel michelberger",
                    alt: "hotel michelberger",
                    fonte: "Fonte:https://www.archdaily.com.br/br/886617/hotel-michelberger-quarto-304-sigurd-larsen. Acesso em: 24 maio 2024. "
                }
            },
            {
                ordem: "b",
                validacao: true,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao6-img2.jpg",
                    title: "as fadas espetáculo de dança paulo vieitas",
                    alt: "as fadas espetáculo de dança paulo vieitas",
                    fonte: "Fonte:https://www.archdaily.com.br/br/912379/as-fadas-espetaculo-de-danca-paulo-vieitas. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "c",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao6-img3.jpg",
                    title: "museu nacional da marinha snohetta",
                    alt: "museu nacional da marinha snohetta",
                    fonte: "Fonte:https://www.archdaily.com.br/br/886617/hotel-michelberger-quarto-304-sigurd-larsen. Acesso em: 24 maio 2024. "
                }
            },
            {
                ordem: "d",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao6-img4.jpg",
                    title: "apartamento galeria lez arquitetura",
                    alt: "apartamento galeria lez arquitetura",
                    fonte: "Fonte:https://www.archdaily.com.br/br/1007116/apartamento-galeria-lez-arquitetura. Acesso em: 24 maio 2024. "
                }
            },

        ],
        feedbacks: {

            positivo: {
                texto: `Parabéns! Você identificou corretamente o espaço que contém um projeto de cenografia. `
            },
            negativo: {
                texto: "<em>Oops</em>! Esta não é a resposta correta. Revise o material sobre tipologias para verificar qual é a melhor opção. "
            }
        }
    },
    {
        titulo: "Espaços emergenciais",
        type: "quiz",
        pergunta: {
            texto: "Qual é a principal característica que um espaço emergencial deve ter?"
        },
        respostas: [{

                ordem: "a",
                validacao: false,
                texto: "Ter uma decoração sofisticada para garantir conforto aos usuários.",
            },
            {

                ordem: "b",
                validacao: false,
                texto: "Ser localizado em áreas de risco para facilitar o acesso às vítimas.",
            },
            {

                ordem: "c",
                validacao: false,
                texto: "Não atender normas de segurança e acessibilidade, pois deve ser feito muito rapidamente.",
            },
            {

                ordem: "d",
                validacao: true,
                texto: "Ser projetado para fornecer rapidamente cuidados de saúde, abrigo temporário e serviços essenciais.",
            },
        ],
        feedbacks: {

            positivo: {
                texto: `Parabéns, sua resposta está correta. `
            },
            negativo: {
                texto: "<em>Oops</em>! Esta não é a resposta correta! Revise o material sobre tipologias para verificar qual é a melhor opção."
            }

        }
    },
    {
        titulo: "Pop-up stores e espaços comerciais temporários",
        type: "dragindrop",
        pergunta: {
            texto: "Qual das lojas a seguir tem as características mais próximas a uma pop-up store?"
        },
        respostas: [{
                ordem: "a",
                validacao: true,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao7-img1.jpg",
                    title: "bar temporario noturno fala atelie",
                    alt: "bar temporario noturno fala atelier",
                    fonte: "Fonte:https://www.archdaily.com.br/br/764259/bar-temporario-noturno-fala-atelier. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "b",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao7-img2.jpg",
                    title: "loja calico club",
                    alt: "loja calico club",
                    fonte: "Fonte:https://www.archdaily.com.br/br/1008220/loja-calico-club-barde-plus-vanvoltt. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "c",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao7-img3.jpg",
                    title: "escritório da loja pageone aio",
                    alt: "escritório da loja pageone aio",
                    fonte: "Fonte:https://www.archdaily.com.br/br/991852/pageone-store-office-aio. Acesso em: 24 maio 2024."
                }
            },
            {
                ordem: "d",
                validacao: false,
                texto: "&nbsp;",
                imagem: {
                    src: "../assets/img/questao7-img4.jpg",
                    title: "sorveteria brando solar",
                    alt: "sorveteria brando solar",
                    fonte: "Fonte:https://www.archdaily.com.br/br/990206/sorveteria-brando-solar. Acesso em: 24 maio 2024."
                }
            },



        ],
        feedbacks: {

            positivo: {
                texto: `Parabéns! Você identificou corretamente uma pop-up store. `
            },
            negativo: {
                texto: "Esta loja não tem as características de uma pop-up store. Revise o material sobre tipologias para verificar qual é a melhor opção. "
            }

        }
    },
]