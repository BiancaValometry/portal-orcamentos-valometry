// Biblioteca de precos historicos de fornecedores, extraida das pastas de
// projetos (PROJETOS/2026 e COMERCIAL/PROPOSTAS COMERCIAIS/2026) em 2026-08-21.
// Dado sensivel (nomes de clientes e fornecedores, valores comerciais) -- este
// arquivo so deve ser importado no lado servidor (rotas /api), nunca em um
// componente "use client", para nao vazar no bundle publico do navegador.

export const PRECOS = [
    {
        "cliente":  "AC Camargo",
        "projeto":  "AC Camargo - Quanti Não-Clientes",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  10800.00,
        "escopo_resumo":  "700 respondentes a R$15,00/unidade + 1 programação de pesquisa (R$300,00). Cotação nº S02025, versão original de 27/07/2026.",
        "arquivo":  "AC CAMARGO_Painel TAP quanti 07.2026.pdf",
        "observacoes":  "Arquivo salvo na subpasta \u0027Old\u0027 — versão original da cotação S02025, superada pela revisão de 872 respondentes (ver PAINEL TAP - AC CAMARGO - Quanti.png)."
    },
    {
        "cliente":  "AC Camargo",
        "projeto":  "AC Camargo - Quanti Não-Clientes",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  13680.00,
        "escopo_resumo":  "Amostra ajustada de 700 para 872 respondentes (base Não-Clientes) a R$15,00/unidade, com 2 programações de pesquisa (link fornecedor + link cliente/base própria, R$300,00 cada).",
        "arquivo":  "PAINEL TAP - AC CAMARGO - Quanti.png",
        "observacoes":  "Revisão da cotação nº S02025 (27/07/2026, válida até 26/08/2026, vendedor Daniel Silva). Base Cliente/CRM A.C.Camargo (n=413) não entra nesta cotação — disparo e custo por conta do próprio cliente."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Tracking Quantitativo",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  64000.00,
        "escopo_resumo":  "1.000 respondentes por onda (vestibulandos, pais e mães, alunos/ex-alunos via base Afya, médicos em formação e formados), metodologia quantitativa online, programação até 20 minutos, com consistência e envio de banco de dados.",
        "arquivo":  "Comparativo de Orçamento_Quantitativo_On The GO vs Brazil Panels_AFYA.docx",
        "observacoes":  "Orçamento informal, negociado via WhatsApp e ainda não formalizado; perfis de alunos e ex-alunos dependem de listagem fornecida pela Afya. Documento de comparativo interno entre On The Go e Brazil Panels."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Tracking Quantitativo",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  245000.00,
        "escopo_resumo":  "Pesquisa quantitativa por onda (coleta híbrida online/CATI para médicos), 6 públicos (vestibulandos, pais e mães, alunos/ex-alunos Afya, médicos em formação e formados), com programação, gestão de incentivos e entrega em dashboard ou base bruta.",
        "arquivo":  "Proposta OTG-AC - Projeto Afya_v2.pdf",
        "observacoes":  "Condição especial: aprovando 2 ondas up-front, desconto de 5% (R$232.750,00/onda). Inclui até 3 meses de uso da plataforma OTG (renovação a partir de R$899/mês). O próprio PDF do fornecedor apresenta inconsistência: texto introdutório cita \u0027700 entrevistas por onda\u0027, mas a soma do detalhamento por público totaliza 1.000 — não esclarecido pelo fornecedor."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya Awareness - Tracking 2026",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  114200.00,
        "escopo_resumo":  "Tracking de Awareness 2026, 2.000 entrevistas por onda (9 públicos x 5 regiões). Onda 1 inclui programação do questionário (R$114.200,00); demais ondas com desconto (R$111.700,00 cada) por não exigirem nova programação.",
        "arquivo":  "2.000 respondentes_orçamento Brazil Panels_ AFYA_MAIO2026.pdf",
        "observacoes":  "Versão original da proposta (28/05/2026), pasta \u0027OLD\u0027 — substituída por revisão amostral de 2.200 entrevistas recebida em 10/06/2026 (ver arquivo jpeg). Conteúdo duplicado em \u00272.000 respondentes - proposta_brazil_panels_afya_awareness_05.2026.docx\u0027. Cenários: 2 ondas/ano = R$225.900,00; 4 ondas/ano = R$449.300,00. Número total de ondas e forma de pagamento não confirmados."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya Awareness - Tracking 2026",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  124600.00,
        "escopo_resumo":  "Revisão amostral do tracking de Awareness Afya para 2.200 entrevistas (10 públicos). Onda 1 R$124.600,00 (com programação); demais ondas R$122.000,00 cada (desconto de R$2.600,00 por onda).",
        "arquivo":  "Orçamento Brazil Panels - amostra de 2.200_última versão ATUALIZADA DA QUANTI.jpeg",
        "observacoes":  "Versão vigente/atualizada, revisão recebida em 10/06/2026 (proposta original de 28/05/2026). Cenários: 2 ondas = R$246.600,00 (economia R$2.600); 4 ondas = R$490.600,00 (economia R$7.800)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Pesquisa Quali",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  40040.25,
        "escopo_resumo":  "3 grupos qualitativos online (6 pessoas + 2 backups: vestibulandos, pais e alunos) + 3 díades (2 pessoas + 1 backup), incentivos para médicos e para vestibulandos/pais/alunos, moderação+análise+apresentação (6x) e transcrição+pré-análise (12x).",
        "arquivo":  "Orcamento_953_AC_Company_LTDA_ Completo.pdf",
        "observacoes":  "Orçamento formal nº953, emitido em 24/04/2026 via GestãoClick. Inclui escopo completo (recrutamento + incentivos + moderação + transcrição)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Pesquisa Quali",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  24560.25,
        "escopo_resumo":  "3 grupos qualitativos online (6 pessoas + 2 backups) + 3 díades (2 pessoas + 1 backup) com incentivos para médicos e para vestibulandos/pais/alunos — apenas recrutamento e incentivos, sem moderação/transcrição.",
        "arquivo":  "QUALI_ Recrutamento+ Incentivo_ANTARA_AFYA.pdf",
        "observacoes":  "Orçamento formal nº954 (24/04/2026), versão reduzida do orçamento nº953 — mesmo recrutamento, mas sem os itens de moderação/análise/apresentação e transcrição."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Pesquisa Quali (comparativo)",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara)",
        "valor_total_brl":  60672.75,
        "escopo_resumo":  "Estrutura de 12 grupos no total (3 grupos focais + 9 EPs), 51 participantes com backup, incluindo recrutamento, moderação/coordenação, incentivos e transcrição+pré-análise.",
        "arquivo":  "Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx",
        "observacoes":  "Documento de comparativo interno (pasta OLD), com escopo maior (12 grupos) do que as cotações formais nº953/954 (que cobrem apenas 3 grupos + 3 díades) — não é fatura formal do fornecedor."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Pesquisa Quali (comparativo)",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice (Andrea Lopes)",
        "valor_total_brl":  53380.00,
        "escopo_resumo":  "Mesma estrutura de 12 grupos (3 grupos focais + 9 EPs, 51 participantes) incluindo recrutamento, moderação/coordenação, relatórios/análises, incentivos e sala/infraestrutura/streaming.",
        "arquivo":  "Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx",
        "observacoes":  "Mesmo documento de comparativo interno citado acima (pasta OLD); valor informal para fins de comparação com Participe Pesquisas/Antara."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Pesquisa Quali",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice (Andrea Lopes)",
        "valor_total_brl":  null,
        "escopo_resumo":  "Tabela de preços unitários (elaboração de roteiro, moderação de grupo/EP online, relatórios, gravação/transcrição por IA, recrutamento e incentivos) para o projeto Afya, sem quantidades definidas.",
        "arquivo":  "ORÇAMENTO Qualy Vortice  Ana Couto.docx",
        "observacoes":  "Não foi possível calcular um valor total: o documento (pasta OLD) lista apenas preços unitários, sem quantidades/nº de grupos preenchidos. O total consolidado desta mesma fornecedora aparece em outro comparativo como R$53.380,00 (ver \u0027Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx\u0027)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Quanti (Painel TAP)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  8400.00,
        "escopo_resumo":  "700 entrevistas em 1 onda, distribuídas em 6 públicos (vestibulandos, pais e mães, alunos e ex-alunos Afya, médicos em formação e formados), a R$12,00 por entrevista.",
        "arquivo":  "Planilha_Orcamento_Afya_04.2026.xlsx",
        "observacoes":  "Valor extraído da aba \u0027📊 QUANTI – Onda Única\u0027 de planilha comparativa interna de fornecedores para Afya. A aba de cenários projeta (sem desconto informado): semestral (2 ondas/ano) R$16.800,00 e trimestral (4 ondas/ano) R$33.600,00. Demais fornecedores da planilha (Fornecedor 1, 2, 4, 5) não estavam preenchidos."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Social Listening",
        "frente":  "social_listening",
        "fornecedor":  "Polis Consulting (Brandwatch)",
        "valor_total_brl":  56000.00,
        "escopo_resumo":  "Acesso à plataforma Brandwatch Consumer Research por 40 dias (R$13.000,00) + relatório de inteligência com monitoramento e análise reputacional da Afya x 3 concorrentes: Share of Voice, análise de sentimento, mapa de temas, ranking de influenciadores e linha do tempo de picos (R$43.000,00). Pagamento único à vista.",
        "arquivo":  "Comparativo_Precos_Fornecedores_Afya_v2.xlsx",
        "observacoes":  "Existe opção alternativa da própria Polis com relatório automatizado (não elaborado por analista) cobrindo 4 marcas, com implementação/setup + 30 dias de acesso, por R$18.000,00; essa opção não inclui TikTok/YouTube salvo login da Afya/Ana Couto na plataforma."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Social Listening",
        "frente":  "social_listening",
        "fornecedor":  "ZYGON",
        "valor_total_brl":  10000.00,
        "escopo_resumo":  "Opção com apenas 1 marca própria, monitoramento social básico e relatório executivo.",
        "arquivo":  "Comparativo_Precos_Fornecedores_Afya_v2.xlsx",
        "observacoes":  "A planilha lista os valores da Zygon como \u0027individuais\u0027 (opções alternativas, não somáveis). Opção 2: R$20.000,00 para 1 marca + acompanhamento dos 3 concorrentes no relatório executivo — porém o Social Analytics contínuo cobre só 1 marca; para acompanhar os 3 concorrentes seriam necessárias +3 marcas a R$100,00/mês cada (~R$300,00/mês adicional)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Afya - Social Listening",
        "frente":  "social_listening",
        "fornecedor":  "Buzzmonitor",
        "valor_total_brl":  13250.00,
        "escopo_resumo":  "Setup da plataforma (implementação, configuração de perfis/termos de coleta, monitoramento ilimitado: X/Twitter 5.000 menções/mês e outras redes 45.000 menções/mês) por R$8.250,00 + mensalidade recorrente de R$5.000,00 (monitoramento, relacionamento/atendimento e social analytics para 1 marca própria, com IA, dashboards e alertas inclusos).",
        "arquivo":  "Comparativo_Precos_Fornecedores_Afya_v2.xlsx",
        "observacoes":  "Cobre 1 marca; acompanhar os 3 concorrentes da Afya no Social Analytics exigiria +3 marcas a R$100,00/mês cada (~+R$300,00/mês adicional). Total apresentado refere-se a setup + primeira mensalidade."
    },
    {
        "cliente":  "BQV Autocuidado e Beleza",
        "projeto":  "BQV Autocuidado e Beleza",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  20000.00,
        "escopo_resumo":  "Projeto em parceria com Brazil Panels, seguindo o mesmo modelo do projeto anterior (BQV Copa do Mundo). Custo real do projeto declarado em R$20.000,00.",
        "arquivo":  "orcamento_bqv_brazil_panels_v2.png",
        "observacoes":  "Do custo total, a Brazil Panels (parceira) assume R$11.100,00 e a Valometry paga R$8.900,00 (valor líquido). Não há detalhamento de amostra/metodologia nesta imagem."
    },
    {
        "cliente":  "BQV Copa do Mundo",
        "projeto":  "BQV Copa do Mundo",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  13700.00,
        "escopo_resumo":  "Pesquisa quantitativa nacional sobre Copa do Mundo, 1.200 entrevistas, público geral (praças nacionais), em parceria Brazil Panels + Ana Couto. Cronograma sugerido: programação 3 dias úteis, coleta 18 dias úteis, processamento 3 dias úteis.",
        "arquivo":  "COPA DO MUNDO_Orçamento Brazil Panels R$ 9.00,00_04.2026.pdf",
        "observacoes":  "R$13.700,00 é o investimento assumido pela Brazil Panels como parceira (não é cobrança direta a um cliente final); a Ana Couto assume adicionalmente R$9.000,00 (por extenso: \u0027nove mil reais\u0027) no mesmo documento. O nome do arquivo (\u0027R$9.00,00\u0027) contém provável erro de digitação, faltando um zero."
    },
    {
        "cliente":  "Caixa Consórcio",
        "projeto":  "Caixa Consórcio - Quali Vortice",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice (Andrea Lopes)",
        "valor_total_brl":  3600.00,
        "escopo_resumo":  "1 grupo focal online com 5 a 8 participantes (clientes ativos de Caixa Consórcio, qualquer segmento, sem filtro de sexo/classe/região), 2h de duração, incluindo recrutamento, agendamento e incentivo.",
        "arquivo":  "01- 2026 - CAIXA consórcio - R$3.600_Andrea Lopes.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Caixa Consórcio",
        "projeto":  "Consórcio Casas",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  20600.00,
        "escopo_resumo":  "400 entrevistas quantitativas, público 25-65 anos (Brasil), que contrataram ou pretendem contratar consórcio de imóveis nos últimos/próximos 4 anos; entrega em dashboard On The Go.",
        "arquivo":  "01-2026 - ORC - Caixa Consórcio - R$20.600_ON THE GO.pdf",
        "observacoes":  "Proposta considera possibilidade de disparo adicional em base própria do cliente (funcionários clientes de Caixa Consórcio) para amostra total de 800; a On The Go não se responsabiliza pela quantidade de completas vindas de base externa."
    },
    {
        "cliente":  "Caixa Consórcio",
        "projeto":  "Consórcio Casas",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  12400.00,
        "escopo_resumo":  "Ampliação de +400 novas entrevistas (clientes Caixa Consórcio), mantendo flexibilidade sociodemográfica, para o projeto Consórcio Casas já em campo; entrega em dashboard.",
        "arquivo":  "02 - 2026 - OCR - Caixa Consórcio - Adicional 400 casos - R$12.400_ON THE GO.pdf",
        "observacoes":  "Complemento ao orçamento de R$20.600,00 do mesmo fornecedor/projeto (código OTG: ana_adhoc_express_jan_2026_projetoconsóciocasas)."
    },
    {
        "cliente":  "Dufry",
        "projeto":  "Dufry Duty Free",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  13290.00,
        "escopo_resumo":  "Recrutamento para grupo online + teste de usabilidade + recepção (4 grupos de 5 pessoas + 1 backup, 24 posições ao todo) com incentivo individual e impostos.",
        "arquivo":  "02 -2026 - ORC - Dufry - Recrutamento Participe Pesquisas_R$13.290,00.pdf",
        "observacoes":  "Orçamento formal nº909 (28/01/2026), forma de pagamento por transferência bancária."
    },
    {
        "cliente":  "Gol",
        "projeto":  "Gol",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  30000.00,
        "escopo_resumo":  "6 grupos online com teste de usabilidade e recepção (6 pessoas + 2 backups, 48 posições) + 4 entrevistas em profundidade (recrutamento e incentivo de 1h), com incentivos e impostos incidentes.",
        "arquivo":  "04-2026 - Orçamento - R$30.000,00 -  Participe Pesquisas_Projeto Gol.pdf",
        "observacoes":  "Orçamento formal nº933 (24/03/2026) com desconto de 7,5% aplicado ao item de recrutamento dos grupos (subtotal de serviços R$30.012,00, total com desconto R$30.000,00)."
    },
    {
        "cliente":  "Gol",
        "projeto":  "Gol",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  17250.00,
        "escopo_resumo":  "3 grupos online com teste de usabilidade e recepção (6 pessoas + 2 backups, 24 posições) + 4 entrevistas em profundidade, com incentivos e impostos incidentes, sem desconto.",
        "arquivo":  "com 3 grupos - Orcamento_933_AC_Company_LTDA_ GOL_ Recutamento.pdf",
        "observacoes":  "Mesmo número de orçamento (nº933, 24/03/2026) que a versão de R$30.000,00, porém com escopo menor (3 grupos em vez de 6) — provável versão alternativa/anterior do mesmo número de cotação."
    },
    {
        "cliente":  "Gol",
        "projeto":  "Gol",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  27490.00,
        "escopo_resumo":  "3 grupos online com teste de usabilidade e recepção (6 pessoas + 2 backups) + 4 entrevistas em profundidade, incentivos e impostos, acrescido de moderação+análise (4x) e transcrição (8 horas).",
        "arquivo":  "Orcamento_934_AC_Company_LTDA_ Gol_ Recrutamento+ Moderação e Análise.pdf",
        "observacoes":  "Orçamento formal nº934 (24/03/2026) — mesma base de recrutamento do orçamento nº933 (versão 3 grupos), mas com escopo adicional de moderação, análise e transcrição."
    },
    {
        "cliente":  "HDI",
        "projeto":  "Tracking de Marca e AD Recall",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  120600.00,
        "escopo_resumo":  "Proposta consolidada para 3 pesquisas quanti via painel online: Tracking de Marca - Clientes Finais (2 ondas de 2.100 entrevistas, R$50.400), Tracking de Marca - Corretores (2 ondas de 1.080 entrevistas, R$54.000) e Ad Recall B2C (1 onda de 1.350 entrevistas, R$16.200). Programação inclusa sem custo; inclui coleta e controle de cotas.",
        "arquivo":  "Último Orçamento_Painel TAP_YELUM HDI_R$120.600,00_05.2026.docx",
        "observacoes":  "Pagamento em 2 parcelas (30/06/2026 e 30/07/2026); há menção secundária no documento a uma possível 3ª parcela em novembro/2026 referente a uma 2ª onda futura, mas o valor total oficial da proposta é R$120.600,00."
    },
    {
        "cliente":  "HDI",
        "projeto":  "DisasterCheck Yelum",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  61200.00,
        "escopo_resumo":  "Painel online: B2C HD Recall (750 entrevistas) + B2C HD Yelum (2.100 entrevistas), totalizando R$34.200 em B2C; mais B2B Corretores (1.080 entrevistas) por R$27.000. Programação sem custo.",
        "arquivo":  "HDI YELUM - Orçamento Painel TAP_Pesquisas Quantitativas R$61.200,00_04.2026.pdf",
        "observacoes":  "Orçamento válido para todas as ondas de 2026."
    },
    {
        "cliente":  "HDI",
        "projeto":  "DisasterCheck Yelum",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  28020.00,
        "escopo_resumo":  "Recrutamento para 6 grupos online (6 pessoas + 2 backups cada, 48 recrutamentos) com teste de usabilidade e recepção, mais incentivo individual e impostos.",
        "arquivo":  "HDI YELUM Análise de Territórios_Orcamento_Antara R$28.020,00_04.2026.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "HDI",
        "projeto":  "DisasterCheck Yelum",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  22950.00,
        "escopo_resumo":  "Recrutamento para 4 grupos online (8 pessoas + 2 backups cada, 40 recrutamentos) com teste de usabilidade e recepção, mais incentivo individual e impostos. Tema: Disaster Check - Novelas.",
        "arquivo":  "HDI YELUM Disaster Check – Novelas_Orçamento_Antara R$22.950,00_04.2026.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Natura",
        "projeto":  "Natura",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  11892.00,
        "escopo_resumo":  "Recrutamento para 4 grupos online (5 pessoas + 1 backup cada, 24 recrutamentos) com teste de usabilidade e recepção, mais incentivo individual e impostos. Tema: Natura Categorias.",
        "arquivo":  "01 - 2026 - OCR - Natura - R$11.892_PARTICIPE PESQUISAS.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Natura",
        "projeto":  "Natura",
        "frente":  "quali",
        "fornecedor":  "Andrea Lopes (Qualy Vortice)",
        "valor_total_brl":  10800.00,
        "escopo_resumo":  "Recrutamento + agendamento de 4 grupos focais online (6 pessoas cada, 5 participantes + backup): categorias Rosto+Maquiagem, Corpo, Cabelos e Perfumaria, mais incentivo adicional e impostos para 24 consumidores. Amostra 70% mulheres/30% homens, classes BC1, 50% consumidores preferenciais Natura e 50% da concorrência.",
        "arquivo":  "01-2026 - OCR - Natura - R$10.800_ANDREA LOPES.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Natura",
        "projeto":  "Natura",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  15450.00,
        "escopo_resumo":  "Pesquisa quantitativa via chatbot com 750 entrevistas nacionais sobre categoria de beleza (perfumaria, corpo, maquiagem, rosto, cabelos), 150 por categoria, comparando Natura x concorrentes. Inclui setup/programação, amostra do painel On The Go e acesso ao dashboard por 3 meses.",
        "arquivo":  "02 - 2026 - ORC - NATURA - R$15.450_ON THE GO.pdf",
        "observacoes":  "Proposta datada de 12/02/2026, validade de 15 dias."
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Nintendo",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  55658.00,
        "escopo_resumo":  "Pesquisa qualitativa multi-metodologia: 8 grupos online de 120 min (6+1 backup, 56 recrutamentos + incentivos), entrevistas em profundidade B2B (4 recrutamentos + incentivos), cliente oculto (2 recrutamentos + incentivos) e entrevista etnográfica/home invasion (8 recrutamentos, incentivo para anfitrião+1 amigo).",
        "arquivo":  "Orcamento_996_AC_Company_LTDA_Nintendo V5_ANTARA .pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Nintendo",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  19800.00,
        "escopo_resumo":  "Pesquisa quantitativa (\u0027Projeto Gamers\u0027) com 1.200 entrevistas nacionais via webchat sobre hábitos de jogo em console (jogadores e pais de jogadores menores de 16). Inclui setup/programação, amostra do painel On The Go e acesso a dashboard por 3 meses.",
        "arquivo":  "Proposta QUANTI - OTG+AC - Projeto Gamers .pdf",
        "observacoes":  "Valor de tabela era R$23.960,00, negociado para R$19.800,00 (valor usado aqui). Há item opcional de processamento de dados por R$4.000,00, não incluído no total."
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Nintendo",
        "frente":  "social_listening",
        "fornecedor":  "Zygon",
        "valor_total_brl":  17000.00,
        "escopo_resumo":  "Solução \u0027Zygon Pulse\u0027: social listening + netnografia + síntese estratégica. Plano Premium/Enterprise: 4 temas pesquisados, 3 marcas analisadas, 4 redes sociais + mar aberto, relatório executivo (10-15 páginas), dashboard de apoio e workshop de 1h. SLA de entrega D+20 dias úteis.",
        "arquivo":  "238-26_Ana Couto_Nintendo_Pulse - SL ZYGON.pdf",
        "observacoes":  "Proposta original de tabela era R$20.000,00; conforme e-mail da Zygon (arquivo \u0027E-mail ZYGON Adicional de desconto aplicado em cima da proposta_ de 20k para 17k_15%.pdf\u0027, 31/07/2026), foi aplicado desconto de 15%, fechando em R$17.000,00 (valor usado aqui)."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  13377.00,
        "escopo_resumo":  "Recrutamento para 12 entrevistas em profundidade (6 perfil clientes Terral + 6 perfil concorrência), mais incentivos e impostos.",
        "arquivo":  "Projeto Terral - QUALI - Participe Pesquisas - 03-2026.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  11300.00,
        "escopo_resumo":  "Amostra de 600 respondentes (R$18/unidade = R$10.800) mais programação de pesquisa (R$500).",
        "arquivo":  "Projeto Terral - QUANTI - Painel TAP - 03-2026.pdf",
        "observacoes":  "Conforme comparativo de fornecedores da Ana Couto, este orçamento NÃO inclui processamento, banco de dados nem controle de qualidade (escopo mais restrito que os demais fornecedores)."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  131500.00,
        "escopo_resumo":  "Pesquisa quantitativa híbrida (CATI + online) com compradores de apartamento Terral em Goiânia e DF, opção principal de 600 entrevistas (300/praça). Inclui programação, serviços amostrais, gestão de incentivos e entrega em dashboard ou base bruta.",
        "arquivo":  "Proposta OTG-AC - Projeto Terral.pdf",
        "observacoes":  "Proposta com 3 opções de tamanho de amostra: 600 entrevistas = R$131.500,00 (valor usado aqui); 300 entrevistas = R$68.800,00; 240 entrevistas = R$56.200,00."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  35900.00,
        "escopo_resumo":  "Opção A (Clientes Terral e Concorrentes): 600 entrevistas (300 por praça, Brasília + Goiânia/DF), via painel online. Inclui programação, coleta, controle de qualidade, consistência, banco de dados, processamento e encargos. Cronograma de 5 semanas.",
        "arquivo":  "Terral Brazil Panels.pdf",
        "observacoes":  "E-mail de 10/04/2026. Opção B (clientes + \u0027interessados\u0027) não foi orçada pelo fornecedor por inviabilidade sem listagem própria do cliente."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  31800.00,
        "escopo_resumo":  "Pesquisa quantitativa com 300 entrevistas (150 Brasília + 150 Goiânia/DF), presencial em campo com acompanhamento dia sim/dia não. Mesmo escopo completo (programação, coleta, controle de qualidade, banco de dados, processamento e encargos).",
        "arquivo":  "Brazil Panels (Quanti)_Orçamento Terral_06.2026.pdf",
        "observacoes":  "Proposta revisada e mais recente (23/06/2026), com amostra reduzida (300 em vez de 600) em relação ao orçamento anterior de abril (R$35.900,00 para 600 entrevistas). O mesmo conteúdo também está salvo como imagem (Brazil Panels (Quanti)_Orçamento Terral_06.2026.png) — tratado como o mesmo orçamento, não duplicado."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  2000.00,
        "escopo_resumo":  "Amostra apenas (sample only), 100% online no painel Toluna sem parceiros: 35 casos no máximo (15 Goiânia + 20 Brasília), perfil compradores de apartamento nos últimos 5 anos, 25+, classe AB.",
        "arquivo":  "Terral Toluna.pdf",
        "observacoes":  "Fornecedor declarou inviabilidade para o escopo completo desejado (600 entrevistas) por baixa incidência do perfil; valor de R$2.000,00 é o \u0027minimum fee\u0027 cobrado independentemente do volume coletado."
    },
    {
        "cliente":  "Terral",
        "projeto":  "Terral",
        "frente":  "quanti",
        "fornecedor":  "Netquest",
        "valor_total_brl":  null,
        "escopo_resumo":  "Tentativa de cotação para pesquisa quantitativa com compradores de apartamento Terral; fornecedor identificou viabilidade de apenas 110 casos (34 Goiânia + 76 Brasília) do total de 600 solicitados, sem perfilar moradores de apartamento.",
        "arquivo":  "Netquest TERRAL.pdf",
        "observacoes":  "Nenhum valor final foi cotado nesta troca de e-mails — a conversa ficou em validação de viabilidade/amostra reduzida, sem fechamento de preço. Fornecedor considerado inviável para o escopo completo."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  35583.00,
        "escopo_resumo":  "6 grupos qualitativos online (6 pessoas cada, com 1 backup) + 12 entrevistas em profundidade com médicos; inclui recrutamento e incentivo dos participantes.",
        "arquivo":  "ANTARA - Orçamento 914 Afya - útima atualização 6 grupos + 12 entrevistas .pdf",
        "observacoes":  "Documento é um \u0027Pedido\u0027 (nº 914, 17/07/2026), não um orçamento. Está na pasta Escolhidos, indicando ser a versão vencedora/atualizada com este fornecedor."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  21228.30,
        "escopo_resumo":  "3 grupos qualitativos online (6 pessoas cada, com backup) + 9 entrevistas em profundidade com médicos; recrutamento e incentivo.",
        "arquivo":  "Orcamento ANTARA_989_AC_Company_LTDA_Afya.pdf",
        "observacoes":  "Orçamento nº 989 (17/07/2026), pasta Escolhidos. Amostra menor que o Pedido 914 do mesmo fornecedor — parece ser um cenário alternativo/anterior."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Awareness Afya 2026",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  null,
        "escopo_resumo":  "Tracking de Awareness 2026, quanti, 2.000 entrevistas por onda (9 públicos x 5 regiões: vestibulandos, pais, 2ª graduação, médicos em formação/formados etc). Onda 1 (com programação) R$114.200,00; demais ondas R$111.700,00 (desconto de R$2.500,00/onda).",
        "arquivo":  "2.000 respondentes_orçamento Brazil Panels_ AFYA_MAIO2026.pdf",
        "observacoes":  "Valor total deixado null pois depende do número de ondas contratadas (não confirmado no documento). Cenários possíveis: 2 ondas = R$225.900,00; 4 ondas = R$449.300,00. Proposta original de 28/05/2026."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Awareness Afya 2026",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  null,
        "escopo_resumo":  "Revisão de amostra do mesmo tracking de Awareness, atualizada para 2.200 entrevistas/onda, 10 públicos. Onda 1 R$124.600,00; demais ondas R$122.000,00 (desconto de R$2.600,00/onda).",
        "arquivo":  "AMOSTRA ATUALIZADA QUANTI_PNG Orçamento Afya - Brazil Panels 2.200 respondentes.png",
        "observacoes":  "Revisão confirmada pelo fornecedor em 10/06/2026 (versão da proposta original de 28/05/2026). Está na pasta Escolhidos = versão vencedora. Cenários: 2 ondas = R$246.600,00; 4 ondas = R$490.600,00. Total deixado null por depender do nº de ondas."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  40040.25,
        "escopo_resumo":  "3 grupos focais online (6 pessoas + 2 backups: vestibulandos/pais/alunos) + 3 díades (2 pessoas + 1 backup); incentivos a médicos e a vestibulandos/pais/alunos; inclui moderação+análise+apresentação e transcrição+pré-análise.",
        "arquivo":  "Orcamento_953_AC_Company_LTDA_ Completo.pdf",
        "observacoes":  "Orçamento nº 953 (24/04/2026), versão \u0027Completa\u0027 — inclui moderação/análise/apresentação e transcrição, ausentes no Orçamento 954 (mesma amostra, mesmo fornecedor)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Reputação/Equity Afya",
        "frente":  "quanti",
        "fornecedor":  "On The Go (Jônatas H. S. dos Santos)",
        "valor_total_brl":  245000.00,
        "escopo_resumo":  "Quanti (metodologia híbrida CATI+online), ~1.000 entrevistas por onda: vestibulandos e pais/mães (recrutamento aberto), alunos e ex-alunos (base Afya), médicos em formação e formados. Entrega em Dashboard OTG ou base bruta.",
        "arquivo":  "Proposta OTG-AC - Projeto Afya_v2.pdf",
        "observacoes":  "Valor é POR ONDA, não total do projeto. Desconto de 5% (R$232.750,00/onda) se aprovadas 2 ondas up-front. Proposta datada 05/05/2026; o resumo do documento cita \u0027700 entrevistas por onda\u0027 mas a soma das bases detalhadas totaliza 1.000 (confirmado no comparativo em docx)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  24560.25,
        "escopo_resumo":  "3 grupos focais online (6 pessoas + 2 backups) + 3 díades (2 pessoas + 1 backup); incentivos a médicos e a vestibulandos/pais/alunos.",
        "arquivo":  "QUALI_ Recrutamento+ Incentivo_ANTARA_AFYA.pdf",
        "observacoes":  "Orçamento nº 954 (24/04/2026). Mesma amostra do Orçamento 953 (mesmo fornecedor), mas SEM moderação/análise/apresentação nem transcrição — versão mais enxuta."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Awareness Afya 2026",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  null,
        "escopo_resumo":  "Idêntico ao orçamento em PDF de mesmo nome: Tracking de Awareness 2026, 2.000 entrevistas/onda, Onda 1 R$114.200,00, demais ondas R$111.700,00.",
        "arquivo":  "2.000 respondentes - proposta_brazil_panels_afya_awareness_05.2026.docx",
        "observacoes":  "Arquivo com conteúdo duplicado do PDF \u00272.000 respondentes_orçamento Brazil Panels_ AFYA_MAIO2026.pdf\u0027. Total depende do nº de ondas (não confirmado)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara)",
        "valor_total_brl":  60672.75,
        "escopo_resumo":  "12 grupos no total (3 grupos focais de 8 pessoas + 9 EPs de 3 pessoas), 51 participantes com backup. Inclui recrutamento, moderação/coordenação, incentivos e transcrição+pré-análise.",
        "arquivo":  "Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx",
        "observacoes":  "Parte de comparativo interno entre 2 fornecedores (Participe Pesquisas/Antara vs Qualy Vortice/Andrea) para a mesma amostra."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice (Andrea Lopes)",
        "valor_total_brl":  53380.00,
        "escopo_resumo":  "Mesma estrutura de amostra do concorrente (12 grupos: 3 GF de 8 pessoas + 9 EPs de 3 pessoas, 51 participantes). Inclui recrutamento, moderação, relatórios/análises, incentivos e infraestrutura/streaming.",
        "arquivo":  "Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx",
        "observacoes":  "Ver também \u0027ORÇAMENTO Qualy Vortice Ana Couto.docx\u0027, com os preços unitários que compõem este total."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Reputação/Equity Afya",
        "frente":  "quanti",
        "fornecedor":  "On The Go (Jônatas H. S. dos Santos)",
        "valor_total_brl":  245000.00,
        "escopo_resumo":  "Quanti híbrido (online+CATI), 1.000 entrevistas por onda (6 públicos: vestibulandos, pais/mães, alunos/ex-alunos Afya, médicos em formação/formados). Entrega em Dashboard OTG ou base bruta.",
        "arquivo":  "Comparativo de Orçamento_Quantitativo_On The GO vs Brazil Panels_AFYA.docx",
        "observacoes":  "Mesmo fornecedor/valor de \u0027Proposta OTG-AC - Projeto Afya_v2.pdf\u0027, aqui com 1.000 respondentes/onda explícitos. Desconto de 5% (R$232.750,00/onda) se 2 ondas aprovadas up-front."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Tracking de Reputação/Equity Afya",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  64000.00,
        "escopo_resumo":  "Quanti online, 1.000 entrevistas por onda (mesma composição de públicos do orçamento OTG). Programação de questionário até 20 min, serviços amostrais/recrutamento e entrega do banco de dados.",
        "arquivo":  "Comparativo de Orçamento_Quantitativo_On The GO vs Brazil Panels_AFYA.docx",
        "observacoes":  "Orçamento informal, negociado via WhatsApp e AINDA NÃO FORMALIZADO. Custo por respondente R$64,00. Perfis de alunos/ex-alunos dependem de listagem fornecida pela Afya. Distinto da proposta formal do mesmo fornecedor para 2.000 entrevistas/onda (R$111.700-114.200/onda)."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Qualitativa Afya",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice (Andrea Lopes)",
        "valor_total_brl":  null,
        "escopo_resumo":  "Tabela de preços unitários da Qualy Vortice para o projeto quali Afya: elaboração de roteiro, moderação e relatório de grupos/EPs, organização/gravação/transcrição, recrutamento e incentivo (pais/alunos/ex-alunos e médicos).",
        "arquivo":  "ORÇAMENTO Qualy Vortice  Ana Couto.docx",
        "observacoes":  "Arquivo traz apenas valores unitários por item, sem total explícito no texto extraído. O total já calculado para este fornecedor/amostra (12 grupos, 51 participantes) é R$53.380,00, conforme \u0027Comparativo de Orçamentos_Qualitativo_Antara vs Andrea_AFYA.docx\u0027."
    },
    {
        "cliente":  "AFYA",
        "projeto":  "Pesquisa Quantitativa Afya (modelo interno)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  8400.00,
        "escopo_resumo":  "Quanti, 700 entrevistas por onda (6 públicos: vestibulandos, pais/mães, alunos/ex-alunos Afya, médicos em formação/formados), custo unitário de R$12,00/entrevista.",
        "arquivo":  "Planilha_Orcamento_Afya_04.2026.xlsx",
        "observacoes":  "Extraído da aba de comparação de orçamentos de uma planilha-modelo interna. Cenários de recorrência: semestral (2 ondas/ano) = R$16.800,00/ano; trimestral (4 ondas/ano) = R$33.600,00/ano. Escopo de amostra (700 entrevistas) difere dos outros orçamentos quanti da Afya (2.000/2.200/1.000 entrevistas)."
    },
    {
        "cliente":  "Avon",
        "projeto":  "Skincare Jovens BR+MX",
        "frente":  "quali",
        "fornecedor":  "MOB (recrutamento e pesquisa)",
        "valor_total_brl":  98330.75,
        "escopo_resumo":  "12 grupos focais (6 Brasil + 6 México, meninas de 13-17 anos e mães/responsáveis) + 10 diários mobile de rotina de skincare (5 Brasil + 5 México). Inclui recrutamento, agendamento, cachê e acompanhamento dos participantes.",
        "arquivo":  "[MOB] Quali_Grupos e Diários_BR+MX.pdf",
        "observacoes":  "Soma dos 4 itens de valor do orçamento: grupo online Brasil R$3.887,00 x6 = R$23.322,00; diário Brasil R$799,25 x5 = R$3.996,25; grupo online México R$10.177,50 x6 = R$61.065,00; diário México R$1.989,50 x5 = R$9.947,50. Pagamento em 2 parcelas (40%/60%)."
    },
    {
        "cliente":  "Avon",
        "projeto":  "Skincare Adolescentes BR e MX",
        "frente":  "quanti",
        "fornecedor":  "On The Go (Jônatas H. S. dos Santos)",
        "valor_total_brl":  28800.00,
        "escopo_resumo":  "Quanti, 800 entrevistas (400 Brasil + 400 México), meninas de 13-17 anos consumidoras de skincare/autocuidado, classes BC(BR)/ABC+C/C-(MX). Setup/programação BR+MX e serviços amostrais via painel OTG. Entrega em base bruta + Dashboard OTG (3 meses).",
        "arquivo":  "[OTG] Quanti_Avon_ BR-MX.pdf",
        "observacoes":  "Opcional (não incluso no total): processamento de dados em Excel/SPSS por R$3.900,00 por país. Proposta datada 26/06/2026."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  184269.75,
        "escopo_resumo":  "Coleta quanti combinada: Cenário quadrimestral (3 ondas, 2.000 respondentes/onda, R$20.412,50/onda) + Cenário mensal (12 ondas, 550 respondentes/onda com 150 de boost, R$10.252,69/onda).",
        "arquivo":  "comparativo_cacau_show_quanti_atualizado_final.png",
        "observacoes":  "Arquivo na pasta Old (versão superada). Valores estimados internamente pelo time, não confirmados pelo fornecedor (nota no próprio documento)."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Offerwise",
        "valor_total_brl":  160625.00,
        "escopo_resumo":  "Mesmos cenários do comparativo: quadrimestral (3 ondas, 2.000 resp/onda, R$23.750,00/onda) + mensal (12 ondas, 550 resp/onda, R$7.447,92/onda).",
        "arquivo":  "comparativo_cacau_show_quanti_atualizado_final.png",
        "observacoes":  "Arquivo na pasta Old (versão superada). Valores estimados internamente, não confirmados pelo fornecedor."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  149100.00,
        "escopo_resumo":  "Cenário quadrimestral (2.000 resp/onda, 3 ondas, CPI R$10,10, R$20.100,00/onda) + Cenário mensal (550 resp/onda, 12 ondas, CPI R$13,50, R$7.400,00/onda).",
        "arquivo":  "orcamento_quanti_brazil_panels.png",
        "observacoes":  "Pasta Old — versão anterior à confirmação final do fornecedor (ver arquivo v3, com valor CONFIRMADO)."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  74700.00,
        "escopo_resumo":  "Brand Tracking (quadrimestral, 3 ondas, 600 respondentes consumidores frequentes de chocolate, CPI R$14,83, R$8.900,00/onda) + Brand Pulse (mensal, 12 ondas, 150 respondentes/onda, CPI R$26,67, R$4.000,00/onda).",
        "arquivo":  "orcamento_quanti_brazil_panels_v3_QUANTI.png",
        "observacoes":  "Valor CONFIRMADO diretamente pelo fornecedor (nota no documento). Pasta Old — superado pela v4 (Brand Pulse passou de mensal/12 ondas para bimestral/6 ondas)."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  171128.00,
        "escopo_resumo":  "Cenário trimestral (4 ondas, 2.000 respondentes/onda, R$20.412,50/onda) + Cenário mensal (12 ondas, 400 respondentes/onda, R$7.456,50/onda).",
        "arquivo":  "Orçamento comparativo_Cacau Show_QUANTI.png",
        "observacoes":  "Pasta Old. Cenários e nº de respondentes diferentes de outro comparativo Toluna vs Offerwise no mesmo projeto (aqui trimestral/400resp; no outro, quadrimestral/550resp) — parece ser iteração anterior de escopo."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Offerwise",
        "valor_total_brl":  160000.00,
        "escopo_resumo":  "Cenário trimestral (4 ondas, 2.000 resp/onda, R$23.750,00/onda) + Cenário mensal (12 ondas, 400 resp/onda, R$5.416,67/onda).",
        "arquivo":  "Orçamento comparativo_Cacau Show_QUANTI.png",
        "observacoes":  "Pasta Old. Ver observação do registro Toluna do mesmo arquivo."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Monitoramento Quanti (Brand Tracking/Pulse) Cacau Show",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  53100.00,
        "escopo_resumo":  "Brand Tracking (quadrimestral, 3 ondas, 600 respondentes, R$8.900,00/onda) + Brand Pulse (agora BIMESTRAL — 6 ondas, mês sim/mês não, 150 respondentes/onda, R$4.400,00/onda).",
        "arquivo":  "orcamento_quanti_brazil_panels_v4_bimestral.png",
        "observacoes":  "Versão mais atual (fora da pasta Old). Fornecedor reduziu Brand Pulse de 12 ondas mensais para 6 bimestrais, cobrando R$400,00 a mais por onda; total combinado caiu de R$74.700,00 (v3) para R$53.100,00."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Zygon Pulse - Social Listening Cacau Show",
        "frente":  "social_listening",
        "fornecedor":  "Zygon (Ad\u0026Data Solutions)",
        "valor_total_brl":  25000.00,
        "escopo_resumo":  "Social listening + netnografia (Zygon Pulse, plano Premium/Enterprise): 4 temas pesquisados, 4 marcas analisadas, 4 redes sociais + mar aberto. Entregáveis: relatório executivo, dashboard de apoio, recomendações táticas e workshop estratégico.",
        "arquivo":  "orcamento_social_listening_zygon.png",
        "observacoes":  "Prazo de entrega D+20 dias úteis. Mesmo orçamento também descrito em detalhe no arquivo \u0027224-26_Ana Couto_Cacau Show_ Zygon Pulse.pdf\u0027."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Zygon Pulse - Social Listening Cacau Show",
        "frente":  "social_listening",
        "fornecedor":  "Zygon (Ad\u0026Data Solutions)",
        "valor_total_brl":  25000.00,
        "escopo_resumo":  "Metodologia Pulse (social listening + netnografia + síntese estratégica). Plano Premium/Enterprise: 4 marcas analisadas, 4 temas, 4 redes analisadas + mar aberto. Entregas: mapa de conversa/temas, análise de sentimento, personas culturais, análise de concorrência, recomendações acionáveis e relatório executivo + workshop de 1h. SLA D+20 dias úteis.",
        "arquivo":  "224-26_Ana Couto_Cacau Show_ Zygon Pulse.pdf",
        "observacoes":  "Deck de apresentação completo da Zygon; mesmo valor e escopo do resumo em PNG (orcamento_social_listening_zygon.png) — conteúdo duplicado."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Recrutamento Quali Cacau Show",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  32088.00,
        "escopo_resumo":  "Recrutamento + incentivo para 8 grupos focais, 7 participantes/grupo (56 no total incluindo backup): pais com filhos, Geração Z, Millennials e Geração X, classes AB e BC. R$573,00/participante (R$280 recrutamento + R$293 incentivo).",
        "arquivo":  "Orçamento comparativo_Cacau Show_QUALI.png",
        "observacoes":  "Comparativo interno entre 2 fornecedores para a mesma amostra (ver também Qualy Vortice, mesmo arquivo)."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Recrutamento Quali Cacau Show",
        "frente":  "quali",
        "fornecedor":  "Qualy Vortice",
        "valor_total_brl":  22400.00,
        "escopo_resumo":  "Mesma amostra do concorrente (8 grupos focais, 7 participantes/grupo, 56 no total): R$400,00/participante (R$200 recrutamento + R$200 incentivo).",
        "arquivo":  "Orçamento comparativo_Cacau Show_QUALI.png",
        "observacoes":  "Cerca de 30% mais barato que Participe Pesquisas para a mesma amostra, segundo o comparativo interno."
    },
    {
        "cliente":  "Cacau Show",
        "projeto":  "Desk Research Cacau Show",
        "frente":  "freelas",
        "fornecedor":  "Isadora Libório (freelancer)",
        "valor_total_brl":  3000.00,
        "escopo_resumo":  "Desk research, entrega em formato PPT, focado nos entregáveis sugeridos no briefing.",
        "arquivo":  "Orçamento_Desk Research_Isadora.png",
        "observacoes":  "Prestação de serviço por freelancer (não é agência/fornecedor formal). Prazo de 7 dias úteis."
    },
    {
        "cliente":  "Centauro",
        "projeto":  "Tracking de marca",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP (PTBR Soluções e Serviços LTDA)",
        "valor_total_brl":  15600.00,
        "escopo_resumo":  "Programação do questionário + disparo/coleta de dados via painel online, 1.200 entrevistas por onda com adultos 18+ compradores de artigo esportivo nos últimos 12 meses, Brasil geral (5 regiões), margem de erro ±2,8%. Não inclui relatório, dashboard, análises ou apresentações.",
        "arquivo":  "orcamento_quanti_centauro_tracking - Painel TAP.docx",
        "observacoes":  "Valor refere-se a 1 onda isolada. Fornecedor ofereceu pacotes multiondas com o mesmo valor unitário (sem desconto real): 2 ondas R$31.200, 4 ondas R$62.400, 6 ondas R$93.600. Cronograma 15 dias úteis, pagamento em 60 dias, tributos inclusos. Mesmos valores aparecem replicados no arquivo Comparativo_Centauro_PainelTAP.png (slide-resumo interno)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "MOB INC",
        "valor_total_brl":  6394.00,
        "escopo_resumo":  "Recrutamento, agendamento e incentivo para 8 entrevistas em profundidade online (2 por perfil x 4 perfis de consumidores de bebidas alcoólicas), R$799,25 por entrevista.",
        "arquivo":  "Cia Muller ANACOUTOMOB RCRTMNT_MOB INC.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "MOB INC",
        "valor_total_brl":  26220.00,
        "escopo_resumo":  "Recrutamento, agendamento e cachê para 8 grupos focais online (2 por perfil x 4 perfis), recrutando 6 consumidores por grupo para garantir de 4 a 6 participantes; R$3.277,50 por grupo.",
        "arquivo":  "Cia Muller ANACOUTOMOB RCRTMNT_MOB INC.pdf",
        "observacoes":  "Opção alternativa de recrutamento (6 pessoas/grupo) à cotação de 8 pessoas/grupo do mesmo fornecedor (ver outro registro)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "MOB INC",
        "valor_total_brl":  33488.00,
        "escopo_resumo":  "Recrutamento, agendamento e cachê para 8 grupos focais online (2 por perfil x 4 perfis), recrutando 8 consumidores por grupo para garantir de 6 a 8 participantes; R$4.186,00 por grupo.",
        "arquivo":  "Cia Muller ANACOUTOMOB RCRTMNT_MOB INC.pdf",
        "observacoes":  "Opção alternativa de recrutamento (8 pessoas/grupo) à cotação de 6 pessoas/grupo do mesmo fornecedor (ver outro registro)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "MOB INC",
        "valor_total_brl":  34000.00,
        "escopo_resumo":  "Moderação de 8 grupos focais e 8 entrevistas em profundidade online, mais elaboração de relatório consolidado com os achados da pesquisa (lote único).",
        "arquivo":  "Cia Muller ANACOUTOMOB RCRTMNT_MOB INC.pdf",
        "observacoes":  "Valor único não discriminado por grupo/entrevista individualmente."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  20600.00,
        "escopo_resumo":  "Pesquisa quantitativa via webchat/chatbot (Sample Express), 1.000 entrevistas, consumidores de bebidas alcoólicas 18-54 anos classes A-DE, 6 praças no Brasil, LOI 15min, entrega de base em Excel + Dashboard OnTheGo por 3 meses.",
        "arquivo":  "Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Processamento de dados adicional (SPSS/Excel) é opcional, custa R$4.000,00 à parte. Impostos inclusos (16,94%). Pasta \u0027Comparativo_Orcamentos_Cia_Muller.xlsx\u0027 também traz uma opção \u0027com processamento\u0027 somando R$24.600,00 (20.600 + 4.000)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "On The Go",
        "valor_total_brl":  53200.00,
        "escopo_resumo":  "Planejamento, recrutamento e incentivos para 8 grupos focais online (6 participantes/grupo + 1 backup), 4 perfis de consumidores, entrega via Dashboard Quali On The Go.",
        "arquivo":  "Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Moderação é opcional e cobrada à parte (R$1.500,00 por grupo)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "On The Go",
        "valor_total_brl":  10100.00,
        "escopo_resumo":  "Planejamento, recrutamento e incentivos para 8 entrevistas em profundidade online (2 por perfil x 4 perfis) com preferidores de cada perfil, entrega via Dashboard Quali On The Go.",
        "arquivo":  "Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Moderação é opcional e cobrada à parte (R$750,00 por entrevista)."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  20600.00,
        "escopo_resumo":  "Pesquisa quantitativa via webchat/chatbot (Sample Express), 1.000 entrevistas, mesmo escopo do registro equivalente na pasta atual.",
        "arquivo":  "Old/Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Arquivo salvo na subpasta \u0027Old\u0027; valor idêntico ao da proposta mais recente (mesma pasta principal), aparentemente versão duplicada/anterior."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "On The Go",
        "valor_total_brl":  45980.00,
        "escopo_resumo":  "Planejamento, recrutamento e incentivos para 8 grupos focais online, mesma estrutura de perfis da versão atual.",
        "arquivo":  "Old/Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Versão salva na subpasta \u0027Old\u0027 com valor diferente (mais baixo) da proposta mais recente do mesmo fornecedor (R$53.200,00) — provável versão anterior/superada."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "On The Go",
        "valor_total_brl":  48600.00,
        "escopo_resumo":  "Entrevistas em profundidade online, mesma estrutura de perfis da versão atual.",
        "arquivo":  "Old/Proposta QUANTI e QUALI - On the go - Projeto Cia Muller.pdf",
        "observacoes":  "Valor extraído com confiança do texto do PDF, mas o texto exibe \u002748 Entrevistas em Profundidade Online\u0027 enquanto a amostra-alvo definida no mesmo documento é de 8 EPs (2 por perfil x 4 perfis) — possível erro de digitação/OCR no arquivo original. Confirmar quantidade real com o fornecedor antes de usar este valor para decisão."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas (Antara Mendonça)",
        "valor_total_brl":  67844.00,
        "escopo_resumo":  "Recrutamento e execução completa de 8 grupos focais online (6 participantes + 1 backup) e 8 entrevistas em profundidade, incluindo incentivos, moderação, análise, apresentação e 24h de transcrição.",
        "arquivo":  "Orcamento_Antara_ QUALI - Cia Müller.pdf",
        "observacoes":  "Orçamento Nº 1003, emitido em 17/08/2026, com todos os itens (recrutamento, incentivo, moderação/análise/apresentação e transcrição) discriminados e somados no próprio documento."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  24060.00,
        "escopo_resumo":  "Pesquisa quantitativa 100% online no painel Toluna, 1.000 casos, homens e mulheres 18-54 anos classes ABCD consumidores de bebidas alcoólicas, 6 praças no Brasil (SP capital, interior SP, RJ, BH, Recife, POA), LOI 15min. Inclui programação, controle de campo e processamento de dados (sem relatório analítico).",
        "arquivo":  "Orçamento Toluna QUANTI_Cia Muller.pdf",
        "observacoes":  "Cotação enviada por e-mail (BID 5531431) em 18/08/2026. Minimum fee de R$2.000,00; validade de 90 dias."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  54920.00,
        "escopo_resumo":  "Mesmo escopo da opção anterior (1.000 casos, painel Toluna) acrescido de relatório analítico elaborado pela própria Toluna (10-12 dias úteis, se contratado).",
        "arquivo":  "Orçamento Toluna QUANTI_Cia Muller.pdf",
        "observacoes":  "Planilha comparativa interna observa que normalmente o time Valometry/Ana Couto é quem faz o relatório, então esta opção pode não ser necessária."
    },
    {
        "cliente":  "Cia Muller",
        "projeto":  "Arquitetura de Marca Corporativa - Cia Müller de Bebidas",
        "frente":  "social_listening",
        "fornecedor":  "Zygon (Ad\u0026Data Solutions)",
        "valor_total_brl":  40000.00,
        "escopo_resumo":  "Pacote Premium Enterprise da metodologia Zygon Pulse (social listening + netnografia): 8 temas pesquisados, 6 marcas analisadas, 4 redes analisadas (Instagram, TikTok, X, YouTube) + mar aberto/Reddit, com relatório executivo, recomendações táticas, workshop estratégico (1h) e dashboard de apoio. SLA de entrega em D+20 dias úteis.",
        "arquivo":  "Social Listening - ZYGON_Cia Muller.pdf",
        "observacoes":  null
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quali",
        "fornecedor":  "On The Go",
        "valor_total_brl":  69000.00,
        "escopo_resumo":  "5 grupos focais online (120min cada, 5-6 participantes/grupo, 30 participantes) + 3 blocos de entrevistas em profundidade (60min cada, 12 entrevistas), total 42 recrutamentos. Inclui recrutamento, incentivos, gestão operacional e Dashboard Quali On The Go.",
        "arquivo":  "quali_ON THE GO.png",
        "observacoes":  "Cotação informal recebida por mensagem em 07/08/2026, ainda não formalizada em proposta/PDF pelo fornecedor. Não está confirmado se moderação/condução das sessões está incluída."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quali",
        "fornecedor":  "Mob",
        "valor_total_brl":  68569.00,
        "escopo_resumo":  "Recrutamento (R$46.069 = R$30.820 grupos + R$15.249 EPs) e moderação via Okean (R$22.500 = R$9.000 grupos + R$13.500 EPs) para 5 grupos focais (30 recrutamentos) e 3 blocos de EPs (12 recrutamentos), total 42 recrutamentos. Sem relatório consolidado.",
        "arquivo":  "Foz_Iguacu__Fornecedores_QUALI.xlsx",
        "observacoes":  "Cronograma de 12 a 14 dias úteis para recrutar e agendar as metodologias. Pagamento em 2 parcelas (40% na aprovação, 60% em até 30 dias após entrega)."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quali",
        "fornecedor":  "Mob",
        "valor_total_brl":  75569.00,
        "escopo_resumo":  "Mesmo escopo do registro anterior (recrutamento + moderação para 42 recrutamentos em 5 grupos e 3 blocos de EPs), acrescido de relatório consolidado de achados da pesquisa.",
        "arquivo":  "Foz_Iguacu__Fornecedores_QUALI.xlsx",
        "observacoes":  "Relatório consolidado é opcional, custa +R$7.000,00 sobre a opção sem relatório."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  133000.00,
        "escopo_resumo":  "Pesquisa quantitativa com a população local de Foz do Iguaçu, 600 entrevistas garantidas, cotas de sexo/idade/classe flexíveis, coleta híbrida (digital/telefônico + promotores), entrega via Dashboard On The Go.",
        "arquivo":  "otg_regional.png",
        "observacoes":  "Cotação informal recebida por e-mail em 07/08/2026, ainda não formalizada em PDF. Valor unitário R$221,67/entrevista."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  88660.00,
        "escopo_resumo":  "Pesquisa quantitativa com a população local de Foz do Iguaçu, 600 casos garantidos, homens e mulheres 18+, todas as classes, LOI 20min, soft cotas de gênero/idade/classe. Recrutamento offline com envio de link para resposta online (painel Toluna sem penetração significativa em Foz).",
        "arquivo":  "toluna_regional.png",
        "observacoes":  "Cotação parcial recebida por e-mail em 07/08/2026 — cobre apenas a população local; o orçamento do bloco multipaís foi enviado separadamente (ver outros registros). Valor unitário R$147,77/entrevista."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Offerwise",
        "valor_total_brl":  25000.00,
        "escopo_resumo":  "Estimativa para pesquisa quantitativa com moradores de Foz (sem restrição de idade/gênero), painel online, LOI 20min sem perguntas abertas, custo fixo de R$4.000,00 (programação+processamento) + R$35,00 por entrevista completa, projetado para 600 casos.",
        "arquivo":  "offerwise_regional.png",
        "observacoes":  "Fornecedor NÃO garante volume (best effort, sem mínimo); os R$25.000,00 são uma estimativa da agência assumindo que as 600 entrevistas sejam de fato alcançadas, não é um compromisso do fornecedor. Cotação informal por e-mail em 07/08/2026."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  153670.00,
        "escopo_resumo":  "Cenário A do bloco multipaís: 800 entrevistas no Brasil (SP+PR+BA) + 300 entrevistas em cada um de 7 países (Paraguai, Argentina, Peru, Chile, Espanha, Reino Unido, França), total 2.900 entrevistas, LOI 10-15min, painel online, valores com impostos.",
        "arquivo":  "otg_multipais.png",
        "observacoes":  "Cotação informal por e-mail em 07/08/2026. Valor unitário R$52,99/entrevista."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "On The Go",
        "valor_total_brl":  111320.00,
        "escopo_resumo":  "Cenário B do bloco multipaís: 500 entrevistas no Brasil + 200 entrevistas em cada um dos 7 países, total 1.900 entrevistas, mesmo LOI e metodologia do Cenário A.",
        "arquivo":  "otg_multipais.png",
        "observacoes":  "Valor unitário R$58,59/entrevista, mais caro por entrevista que o Cenário A apesar do total menor."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  144476.00,
        "escopo_resumo":  "Cenário A do bloco multipaís: 800 entrevistas no Brasil + 300 entrevistas em cada um de 7 países (2.100 no exterior), total 2.900 entrevistas, LOI 20min, 100% online no painel Toluna + parceiros.",
        "arquivo":  "toluna_multipais.png",
        "observacoes":  "Cotação recebida por e-mail em 12/08/2026 (BID 5520999). Toluna não tem painel próprio no Paraguai (depende de painéis parceiros). Valor unitário R$49,82/entrevista."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Toluna",
        "valor_total_brl":  117633.00,
        "escopo_resumo":  "Cenário B do bloco multipaís: 800 entrevistas no Brasil + 200 entrevistas em cada um dos 7 países (1.400 no exterior), total 2.200 entrevistas, mesmo LOI e metodologia do Cenário A.",
        "arquivo":  "toluna_multipais.png",
        "observacoes":  "Valor unitário R$53,47/entrevista."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Offerwise",
        "valor_total_brl":  52150.00,
        "escopo_resumo":  "Opção 1 do bloco multipaís: 800 casos garantidos no Brasil (SP+PR+BA, 4 perfis) + meta de 50 casos por país nos 7 países do exterior (meta rotulada 700, não garantida), total-alvo 1.500 casos, LOI 20min.",
        "arquivo":  "offerwise_multipais.png",
        "observacoes":  "Amostra internacional é \u0027queda natural do painel\u0027 — sem garantia de atingir a totalidade solicitada. Cotação por e-mail em 07/08/2026."
    },
    {
        "cliente":  "Foz do Iguaçu",
        "projeto":  "Place Branding",
        "frente":  "quanti",
        "fornecedor":  "Offerwise",
        "valor_total_brl":  67900.00,
        "escopo_resumo":  "Opção 2 do bloco multipaís: mesmo esquema da Opção 1, com meta de 100 casos por país no exterior em vez de 50.",
        "arquivo":  "offerwise_multipais.png",
        "observacoes":  "Mesma ressalva de não garantia da amostra internacional."
    },
    {
        "cliente":  "Grupo Fleury",
        "projeto":  "Grupo Fleury",
        "frente":  "quali",
        "fornecedor":  "MOB",
        "valor_total_brl":  45080.00,
        "escopo_resumo":  "14 entrevistas em profundidade individuais com médicos (60-75 min cada, por videoconferência) + 7 grupos focais online com pacientes (90 min, 6 participantes por grupo, recrutando 7 para garantir presença), cobrindo as 14 regionais do grupo. Escopo de recrutamento, agendamento e cachê/incentivo.",
        "arquivo":  "Quali - MOB_Fleury.pdf",
        "observacoes":  "Valor = R$18.676,00 (14 entrevistas médicos, R$1.334,00 cada) + R$26.404,00 (7 grupos focais pacientes, R$3.772,00 cada). Pagamento 40% na aprovação + 60% em até 30 dias após entrega. Prazo de 12 dias para recrutar e agendar. Fornecedor não abriu breakdown de cachê por público. Confirmado também na planilha consolidada \u0027Quali e Quanti consolidado BP e MOB_Fleury.xlsx\u0027."
    },
    {
        "cliente":  "Grupo Fleury",
        "projeto":  "Grupo Fleury",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  495000.00,
        "escopo_resumo":  "2.250 entrevistas quantitativas (1.125 médicos + 1.125 pacientes), custo médio blended de R$220,00/entrevista (mais alto por causa dos incentivos pagos a médicos), cronograma sugerido de 8 semanas.",
        "arquivo":  "Quanti - BP_Fleury.png",
        "observacoes":  "Registro interno criado a partir de mensagem de WhatsApp recebida da Brazil Panels em 20/08/2026 — fornecedor não formalizou proposta em documento; confirmar/formalizar por escrito antes de aprovar. Também confirmado na planilha consolidada \u0027Quali e Quanti consolidado BP e MOB_Fleury.xlsx\u0027. Ponto de atenção: cronograma de 8 semanas pode ser apertado para o prazo geral do projeto."
    },
    {
        "cliente":  "HDI",
        "projeto":  "Yelum e HDI",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  221398.00,
        "escopo_resumo":  "3 pesquisas quantitativas consolidadas: Tracking de Marca Clientes Finais (2.111 respondentes/onda x2 ondas, painel online), Tracking de Marca Corretores (1.080 respondentes/onda x2 ondas, CATI) e Ad Recall (1.350 respondentes, onda única, painel online). Inclui equipe, gerenciamento, programação, coleta, controle de qualidade, consistência, banco de dados, codificação, processamento e encargos.",
        "arquivo":  "Orçamento Atualizado HDI Yellum_05.2026_BRAZIL PANELS_R$221.398.pdf",
        "observacoes":  "Pagamento em 2 parcelas (30/06/2026 e 30/07/2026). Desconto total de R$3.798,00 aplicado nas 2as ondas dos trackings. Proposta datada de 22/05/2026, contato Teresa Cristina/Brazil Panels."
    },
    {
        "cliente":  "HDI",
        "projeto":  "Yelum e HDI",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  120600.00,
        "escopo_resumo":  "Mesmo escopo consolidado de 3 pesquisas quanti: Tracking Clientes Finais (2.100/onda x2 ondas, painel online, R$12/respondente), Tracking Corretores (1.080/onda x2 ondas, CATI, R$25/respondente) e Ad Recall (1.350, onda única, painel online, R$12/respondente). Cobrança por respondente.",
        "arquivo":  "Último Orçamento_Painel TAP_YELUM HDI_R$120.600,00_05.2026.docx",
        "observacoes":  "IMPORTANTE: escopo NÃO inclui tabulação, análise nem relatório/dashboard — ficam a cargo do cliente ou terceiros (diferença relevante frente à proposta da Brazil Panels, que inclui tudo). Programação inclusa sem custo. Pagamento em 2 parcelas (30/06 e 30/07/2026)."
    },
    {
        "cliente":  "Intelbras",
        "projeto":  "Revendedores",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  71544.00,
        "escopo_resumo":  "8 grupos focais com revendedores Intelbras (6 participantes + 1 backup por grupo, 56 pessoas recrutadas) e 24 entrevistas em profundidade (com 1 backup cada, 48 pessoas recrutadas). Escopo limitado a recrutamento + pagamento de incentivo (moderação, transcrição, análise e relatório não inclusos).",
        "arquivo":  "orcamento_quali_intelbras_ Participe.docx",
        "observacoes":  "Versão original/base (compare com \u0027Opção 2\u0027, mais barata). Prazo total 20 dias úteis (10 recrutamento + 10 campo). Pagamento por depósito bancário, validade da proposta 90 dias. Proposta de 10/05/2026, contato Antara/Participe Pesquisas."
    },
    {
        "cliente":  "Intelbras",
        "projeto":  "Revendedores",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  51816.00,
        "escopo_resumo":  "Mesmo escopo de 8 grupos focais (56 pessoas recrutadas), mas com 24 entrevistas em profundidade sem backup adicional (24 pessoas recrutadas, em vez de 48). Recrutamento + pagamento de incentivo apenas.",
        "arquivo":  "orcamento_quali_intelbras_ Participe - Opção 2.docx",
        "observacoes":  "\u0027Opção 2\u0027 — alternativa mais barata que reduz o custo dos IDIs ao não recrutar backup extra para as entrevistas. Mesmas condições comerciais e data (10/05/2026) da outra versão (Participe Pesquisas)."
    },
    {
        "cliente":  "Intelbras",
        "projeto":  "Revendedores",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  108300.00,
        "escopo_resumo":  "1.580 entrevistas quantitativas com revendedores Intelbras (decisores/influenciadores de compra), questionário único, LOI de 20 minutos, metodologia CATI proposta pelo fornecedor para atender os 3 perfis de revendedor. Inclui programação, disparo/coleta e relatório/dashboard.",
        "arquivo":  "orcamento_quanti_intelbras_revendedores (1).docx",
        "observacoes":  "Prazo total 40 dias úteis (3 programação + 25 campo + 12 processamento/relatório). Pagamento 50% na aprovação e 50% após entrega. Validade da proposta 60 dias. Proposta de 12/05/2026, contato Teresa Meirelles/Brazil Panels."
    },
    {
        "cliente":  "Light",
        "projeto":  "Light Disaster Check",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  5120.00,
        "escopo_resumo":  "Coleta quanti para a pesquisa Light Disaster Check, n=320 (160 RJ Metropolitana confirmados + 160 estimados para Interior/Vale do Paraíba), custo unitário de R$16,00 por respondente.",
        "arquivo":  "Orçamento Light - Painel TAP.png",
        "observacoes":  "Valor parcialmente estimado — fornecedor não garante atingir os 160 respondentes do Vale do Paraíba; número real e valor final só serão confirmados em campo. Prazo informado de 15 dias úteis. Comunicado informalmente via WhatsApp, sujeito a confirmação em proposta/PO formal. Mesmo valor também aparece no comparativo \u0027Comparativo_Quanti_Light_3Fornecedores.png\u0027."
    },
    {
        "cliente":  "Light",
        "projeto":  "Light Disaster Check",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  6500.00,
        "escopo_resumo":  "Coleta quanti para Light Disaster Check, n=320 (2 regiões), custo médio estimado de R$20,31 por respondente, valor fechado para a amostra total.",
        "arquivo":  "Orçamento Brazil Panels - Light.png",
        "observacoes":  "Prazo estimado de ~15 dias úteis (3 dias de programação + 2 semanas de coleta + 2 dias de consistência/envio do banco de dados). Valor comunicado informalmente pelo fornecedor, sujeito a confirmação em proposta/PO formal. Mesmo valor também aparece no comparativo \u0027Comparativo_Quanti_Light_3Fornecedores.png\u0027."
    },
    {
        "cliente":  "Light",
        "projeto":  "Light Disaster Check",
        "frente":  "quanti",
        "fornecedor":  "Question Pro",
        "valor_total_brl":  6003.71,
        "escopo_resumo":  "Coleta quanti para Light Disaster Check, 320 respondentes via painel, cobrança de US$3,00 por respondente + US$200,00 de programação da pesquisa.",
        "arquivo":  "Custo_QuestionPro_Light.png",
        "observacoes":  "Valores originalmente em dólar (US$1.160,00 total) — conversão para R$ é referencial (câmbio USD/BRL de aprox. 5,18) e pode variar conforme o câmbio na data de fechamento. Prazo de 10 dias úteis (3 de programação + 7 de campo). Mesmo valor também aparece no comparativo \u0027Comparativo_Quanti_Light_3Fornecedores.png\u0027."
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Pesquisa Gamers Nintendo",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  19700.00,
        "escopo_resumo":  "Coleta quanti com n=1.200 jogadores de console ou pais/responsáveis de jogadores menores de 16 anos, prazo total de aproximadamente 20 dias úteis (programação + coleta + banco de dados).",
        "arquivo":  "Brazil Panels - QUANTI.png",
        "observacoes":  "Mesmo valor total (R$19.700,00) aparece em 3 versões anteriores na subpasta \u0027Old\u0027 (comparativo_nintendo_quanti_1200.png, comparativo_nintendo_quanti_brazil_panels.png, orcamento_nintendo_brazilpanels.png), com pequenas variações no detalhamento do prazo (20, 23 ou 24 dias úteis conforme a versão) — o valor total é idêntico em todas. Amostra mantida em n=1.200 (aumento para 2.200 foi descartado por falta de prazo de campo)."
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Pesquisa Gamers Nintendo",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  18000.00,
        "escopo_resumo":  "Coleta quanti com n=1.200 jogadores de console ou pais/responsáveis de jogadores menores de 16 anos, margem de erro ±2,8% (95% de confiança), custo unitário de R$15,00 por respondente.",
        "arquivo":  "Orçamento TAP(Quanti)_Nintendo_06.2026.pdf",
        "observacoes":  "Encontrado na subpasta \u0027Old\u0027 — possivelmente versão superada/não escolhida frente ao orçamento da Brazil Panels (R$19.700,00), que está na pasta atual. Pedido formal nº S01918 de 23/06/2026, prazo de 15 dias úteis, contato Daniel Silva/Painel TAP. Mesmo conteúdo duplicado em \u0027Orçamento TAP(Quanti)_Nintendo_06.2026.png\u0027."
    },
    {
        "cliente":  "Nintendo",
        "projeto":  "Nintendo",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  53169.60,
        "escopo_resumo":  "Pesquisa qualitativa com 158 participantes recrutados: 8 grupos focais online com consumidores (6 pessoas + 2 backups cada, 64 recrutados), 2 entrevistas em profundidade com compradores/gerentes de loja, 7 pessoas para comunidade online de diários (5 dias, 30 min/dia) e 6 pessoas para compra acompanhada. Inclui recrutamento e pagamento de incentivo com impostos.",
        "arquivo":  "Orçamento Antara(Quali)_Nintendo_06.2026.pdf",
        "observacoes":  "Orçamento nº 975 de 22/06/2026, contato Antara Mendonça/Participe Pesquisas. Pagamento por transferência bancária, vencimento 22/06/2026. Mesmo conteúdo duplicado em \u0027Orçamento Antara(Quali)_Nintendo_06.2026.png\u0027."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Recrutamento Quali 24 EPs (donos de escola e coordenadores pedagógicos, online)",
        "frente":  "quali",
        "fornecedor":  "Qualy Vórtice",
        "valor_total_brl":  14880.00,
        "escopo_resumo":  "Recrutamento e incentivo para 24 entrevistas em profundidade online (donos de escola e coordenadores pedagógicos), Sudeste + demais regiões.",
        "arquivo":  "Poliedro - Comparativo fornecedores_QUALI.png",
        "observacoes":  "Menor valor entre 3 fornecedores comparados. Valores e prazo (15 dias úteis) recebidos informalmente por WhatsApp, sem orçamento formal em PDF."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Recrutamento Quali 24 EPs (donos de escola e coordenadores pedagógicos, online)",
        "frente":  "quali",
        "fornecedor":  "Mob Inc",
        "valor_total_brl":  25944.00,
        "escopo_resumo":  "Recrutamento e incentivo para 24 entrevistas em profundidade online, valor fechado por entrevista (R$1.081,00).",
        "arquivo":  "Poliedro - orçamento MOBinc.pdf",
        "observacoes":  "Proposta formal (deck institucional com página de orçamento). Inclui planilha de acompanhamento, termos de confidencialidade, apoio na recepção e teste de conectividade. Pagamento 40% à vista + 60% em até 30 dias. Prazo 10-12 dias."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Recrutamento Quali 24 EPs (donos de escola e coordenadores pedagógicos, online)",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  28260.00,
        "escopo_resumo":  "Recrutamento com listagem (24 x R$590) + incentivo individual e impostos (24 x R$587,50) para entrevistas em profundidade.",
        "arquivo":  "Orçamento Poliedro - Participe pesquisas.pdf",
        "observacoes":  "Orçamento formal nº995 (GestãoClick), 29/07/2026. Maior valor dos 3 comparados. Exige base mínima de 720 contatos válidos. Pagamento único por transferência bancária. Prazo de recrutamento 12 dias úteis."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Amostra Presencial Quali 20 EPs (12 SP + 8 RJ)",
        "frente":  "quali",
        "fornecedor":  "Qualy Vórtice",
        "valor_total_brl":  15000.00,
        "escopo_resumo":  "Recrutamento (R$350/EP) e incentivo (R$400/EP) para 20 entrevistas presenciais, 12 em São Paulo e 8 no Rio de Janeiro.",
        "arquivo":  "Orçamento consolidado - POLIEDRO - Freelas + Quali.png",
        "observacoes":  "Recrutamento e incentivo já confirmados com a Qualy Vórtice para esta amostra presencial. Valores informados pelo fornecedor, sujeitos a confirmação final em proposta/PO."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Amostra Presencial Quali 20 EPs (12 SP + 8 RJ)",
        "frente":  "freelas",
        "fornecedor":  "Amanda (freelancer)",
        "valor_total_brl":  16000.00,
        "escopo_resumo":  "Coordenação e moderação das entrevistas presenciais em São Paulo.",
        "arquivo":  "Orçamento consolidado - POLIEDRO - Freelas + Quali.png",
        "observacoes":  "Opção alternativa a Isadora para a mesma função (coordenação/moderação SP) — os valores não se somam, escolhe-se apenas uma."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Amostra Presencial Quali 20 EPs (12 SP + 8 RJ)",
        "frente":  "freelas",
        "fornecedor":  "Isadora (freelancer)",
        "valor_total_brl":  12000.00,
        "escopo_resumo":  "Coordenação e moderação das entrevistas presenciais em São Paulo.",
        "arquivo":  "Orçamento consolidado - POLIEDRO - Freelas + Quali.png",
        "observacoes":  "Opção alternativa a Amanda para a mesma função (coordenação/moderação SP) — cenário mais barato do projeto."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Amostra Presencial Quali 20 EPs (12 SP + 8 RJ)",
        "frente":  "freelas",
        "fornecedor":  "Freelancer RJ - Opção 1",
        "valor_total_brl":  7000.00,
        "escopo_resumo":  "Moderação e análises das entrevistas presenciais no Rio de Janeiro.",
        "arquivo":  "Orçamento consolidado - POLIEDRO - Freelas + Quali.png",
        "observacoes":  "Nome do profissional não informado no documento (\u0027Opção 1\u0027). Valor \u0027até R$7.000\u0027; escolha entre Opção 1 e Opção 2 não impacta o orçamento (mesma estimativa)."
    },
    {
        "cliente":  "Poliedro",
        "projeto":  "Amostra Presencial Quali 20 EPs (12 SP + 8 RJ)",
        "frente":  "freelas",
        "fornecedor":  "Freelancer RJ - Opção 2",
        "valor_total_brl":  7000.00,
        "escopo_resumo":  "Moderação e análises das entrevistas presenciais no Rio de Janeiro.",
        "arquivo":  "Orçamento consolidado - POLIEDRO - Freelas + Quali.png",
        "observacoes":  "Nome do profissional não informado no documento (\u0027Opção 2\u0027). Alternativa à Opção 1, mesma estimativa de preço (até R$7.000)."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Grupos Focais - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Mob Inc",
        "valor_total_brl":  55384.00,
        "escopo_resumo":  "Recrutamento e agendamento (cachê incluso) de 14 grupos focais online com 6-8 participantes cada, 7 grupos em São Paulo e 7 em Salvador, 7 perfis distintos (Fashionistas, Exigentes, Antenados/Digitais AB, Digitais C, Racionais, Conectados-menores, Planejados/Práticos). Moderação e análise pela Valometry.",
        "arquivo":  "Orçamento Mob Inc_Renner.pdf",
        "observacoes":  "R$3.956,00 por grupo x 14 grupos. Pagamento 40% à vista + 60% em até 30 dias."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Grupos Focais - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  47040.00,
        "escopo_resumo":  "Recrutamento para 14 grupos online com 6 pessoas + 1 backup (98 recrutados) + teste de usabilidade e recepção; incentivo individual e impostos incluídos.",
        "arquivo":  "Orçamento Renner_Grupos - Participe Pesquisas.pdf",
        "observacoes":  "Orçamento formal nº986 (GestãoClick), 02/07/2026. Pagamento único por transferência bancária."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Grupos Focais - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Qualy Vórtice",
        "valor_total_brl":  39200.00,
        "escopo_resumo":  "Recrutamento + agendamento (R$200/pessoa) e pagamento de incentivos (R$200/pessoa) para 98 recrutados (14 grupos).",
        "arquivo":  "Comparativo_Quali_Renner_3Fornecedores.png",
        "observacoes":  "Menor valor entre os 3 fornecedores comparados para grupos focais. Prazo de recrutamento: 10 dias."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Home Invasion (Etnografia) - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Mob Inc",
        "valor_total_brl":  11992.00,
        "escopo_resumo":  "Recrutamento e agendamento (cachê incluso) de 12 entrevistas em profundidade (IDI) presenciais na residência do participante (90-120 min, com análise de armário), 6 em SP e 6 em Salvador, perfis Fashionistas/Antenados/Digitais C.",
        "arquivo":  "Orçamento Mob Inc_Renner.pdf",
        "observacoes":  "R$999,35 por Home Invasion x 12 entrevistas. Pagamento de incentivos aos participantes é responsabilidade do fornecedor."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Home Invasion (Etnografia) - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  14790.00,
        "escopo_resumo":  "Recrutamento para 14 entrevistas etnográficas + 3 backups (17 recrutados), incentivo individual e impostos inclusos.",
        "arquivo":  "Orçamento Renner_Etnográfica - Participe Pesquisas.pdf",
        "observacoes":  "Orçamento formal nº987 (GestãoClick), 02/07/2026. Maior valor dos 3 fornecedores para esta metodologia."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Home Invasion (Etnografia) - Pesquisa de Moda/Varejo",
        "frente":  "quali",
        "fornecedor":  "Qualy Vórtice",
        "valor_total_brl":  7200.00,
        "escopo_resumo":  "Recrutamento (R$300/pessoa) e incentivos (R$300/pessoa) para 12 IDIs de Home Invasion, perfis Fashionistas(4)/Antenados(4)/Digitais C(4), SP + Salvador.",
        "arquivo":  "Orçamento_Qualy_Renner_HomeInvasion.png",
        "observacoes":  "Menor valor entre os 3 fornecedores para esta metodologia."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Tracking de Clusters (Pesquisa Quanti)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  16800.00,
        "escopo_resumo":  "Coleta quanti online em painel próprio, amostra de 1.120 respondentes distribuídos em 6 clusters (Digitais, Racionais, Exigentes, Fashionistas, Planejados+Práticos, Antenados), R$15,00/respondente já com programação.",
        "arquivo":  "Orçamento Painel TAP_Renner.png",
        "observacoes":  "Menor valor entre os 3 fornecedores e prazo intermediário (15 dias úteis). Valor informado via WhatsApp, não formal."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Tracking de Clusters (Pesquisa Quanti)",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  21900.00,
        "escopo_resumo":  "Coleta quanti, amostra de 1.120 respondentes (6 clusters), custo médio estimado de R$19,55/respondente, valor fechado.",
        "arquivo":  "Orçamento Brazil Panels_Renner (1).png",
        "observacoes":  "Valor mais caro e prazo mais longo (~25 dias úteis) dos 3 fornecedores. Valor não formal, estimado (sem quebra por respondente)."
    },
    {
        "cliente":  "Renner",
        "projeto":  "Tracking de Clusters (Pesquisa Quanti)",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  18425.17,
        "escopo_resumo":  "Coleta de 1.120 respondentes (US$3,00/respondente) + programação (US$200), cobrança em dólar.",
        "arquivo":  "Custo_QuestionPro_Renner.png",
        "observacoes":  "Câmbio USD/BRL de R$5,1756 (cotação referencial de 01/07/2026); valor final em R$ sujeito a variação cambial na data do fechamento. Prazo mais rápido dos 3 (8 dias úteis)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Margarinas (Doriana/Delícia/Primor) - 3 ondas/ano",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  66870.82,
        "escopo_resumo":  "Programação + campo + gestão de projeto para tracking de marcas de margarinas: 600 entrevistas Brasil + 300 adicionais Nordeste por onda (900/onda), 3 ondas/ano, total 2.700 entrevistas, LOI 25min, painel online.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 1 da proposta consolidada Netquest (referência ACOUBR_295427, 29/05/2026). Valor com impostos inclusos. Escopo cobre apenas programação/campo; relatório e análises são da agência."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Seara - Proteínas (Seara/Seara Gourmet/Rezende) - 7 ondas",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  46142.39,
        "escopo_resumo":  "Programação + campo + gestão de projeto para tracking de marcas de proteínas, 250 entrevistas/onda (5 capitais), 7 ondas (Jun-Dez/2026), total 1.750 entrevistas, LOI 25min, painel online.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 2 da proposta consolidada Netquest. Valor com impostos inclusos."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação (perfil Seara/proteínas) - 1 onda isolada",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  7010.70,
        "escopo_resumo":  "Programação + campo para pós-teste de filmes (15s/30s), 150 entrevistas, painel online, LOI 20min.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 3 da proposta. A própria Netquest sinaliza incerteza se este perfil é Seara ou também cobriria Margarinas (a confirmar)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação (perfil Seara/proteínas) - pacote 10 ondas",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  42841.62,
        "escopo_resumo":  "Programação + campo para pacote anual de 10 pós-testes de comunicação, 150 entrevistas/onda, total 1.500 entrevistas.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 4. Economia de R$27.265,38 (~39%) frente a 10 ondas isoladas."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste com Facial Coding - 1 onda (a confirmar)",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  7010.70,
        "escopo_resumo":  "Pós-teste de comunicação com facial coding, 150 entrevistas, painel online.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 5 — a Netquest cotou o mesmo valor e descrição da Opção 3 (sem facial coding), gerando dúvida se facial coding está incluso sem custo, se faltou somar o adicional, ou se há ambiguidade de nomenclatura. Não confirmado."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste com Facial Coding - pacote 2 ondas",
        "frente":  "quanti",
        "fornecedor":  "Netquest Brasil",
        "valor_total_brl":  12410.13,
        "escopo_resumo":  "Pacote de 2 ondas de pós-teste de comunicação com facial coding, 150 entrevistas/onda, total 300 entrevistas.",
        "arquivo":  "ACOUBR_295427_V103_Netquest.pdf",
        "observacoes":  "Opção 6 da proposta consolidada."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Margarinas - 3 ondas/ano (pacote anual)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  37800.00,
        "escopo_resumo":  "Programação e disparo/coleta para tracking de margarinas, R$13.000/onda x 3 ondas.",
        "arquivo":  "Orç. Seara Margarinas_Painel Tap.pdf",
        "observacoes":  "Escopo apenas programação + coleta (relatório/análises pela agência)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pré-teste de Comunicação - Marcas Seara - pacote 2 ondas",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  3900.00,
        "escopo_resumo":  "Avaliação prévia de filmes (15s/30s) das marcas Seara, 150 entrevistas/onda, painel online, LOI 20min.",
        "arquivo":  "Orç. Seara Pré teste_Painel Tap.pdf",
        "observacoes":  "1 onda isolada custaria R$1.950,00; pacote de 2 ondas R$3.900,00 (sem desconto adicional pelo pacote, segundo o fornecedor)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação - Margarinas - pacote 2 ondas",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  3900.00,
        "escopo_resumo":  "Avaliação de filmes (15s/30s) das margarinas Doriana/Delícia/Primor, 150 entrevistas/onda, painel online.",
        "arquivo":  "Orç. Seara Pós teste Margarinas_Painel Tap.pdf",
        "observacoes":  "1 onda isolada R$1.950,00; pacote de 2 ondas R$3.900,00."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação - Marcas Seara - pacote 10 ondas",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  19500.00,
        "escopo_resumo":  "Avaliação de filmes (15s/30s) das marcas Seara, 150 entrevistas/onda, painel online, pacote anual de 10 testes.",
        "arquivo":  "Orç. Seara Pós teste Seara_Painel Tap.pdf",
        "observacoes":  "1 onda isolada R$1.950,00; pacote de 10 ondas R$19.500,00 (sem desconto adicional pelo pacote)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Seara - Proteínas - pacote 7 ondas (Jun-Dez/2026)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  22750.00,
        "escopo_resumo":  "Programação e coleta para tracking de proteínas Seara/Seara Gourmet/Rezende vs. concorrentes, 250 entrevistas/onda (5 capitais), 7 ondas.",
        "arquivo":  "Orç. Seara Tracking_Painel Tap.pdf",
        "observacoes":  "1 onda isolada R$3.250,00; pacote de 7 ondas R$22.750,00."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Brand Lift de Campanhas (Seara/Seara Gourmet/Delícia/Doriana) - Cenário 1 (4 campanhas)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  62400.00,
        "escopo_resumo":  "Medição de impacto de campanhas (expostos x controle), 1.200 entrevistas/campanha (600 expostos + 600 controle), 4 campanhas, 4.800 entrevistas totais.",
        "arquivo":  "Resumo_TAP_Brand Lift_SEARA.jpeg",
        "observacoes":  "O fornecedor apresentou subtotais divergentes por grupo; o valor aqui é o \u0027TOTAL CORRETO\u0027 recalculado pela agência a partir da soma correta das linhas (R$15.600 + R$31.200 + R$15.600). Cronograma total estimado: 26 dias úteis."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Brand Lift de Campanhas (Seara/Seara Gourmet/Delícia/Doriana) - Cenário 2 (7 campanhas)",
        "frente":  "quanti",
        "fornecedor":  "Painel TAP",
        "valor_total_brl":  109200.00,
        "escopo_resumo":  "Medição de impacto de campanhas (expostos x controle), 1.200 entrevistas/campanha, 7 campanhas, 8.400 entrevistas totais.",
        "arquivo":  "Resumo_TAP_Brand Lift_SEARA.jpeg",
        "observacoes":  "Mesma ressalva de recálculo do subtotal (R$31.200 + R$46.800 + R$31.200 = R$109.200). Condições: Pix, 60 dias, tributos inclusos, sem desconto por volume."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Margarinas - 3 ondas/ano (pacote anual)",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  45090.00,
        "escopo_resumo":  "Programação e disparo/coleta para tracking de margarinas, cobrança em dólar (USD 9.000 total: 3x USD 1.800 disparo Brasil + 3x USD 900 disparo NE + USD 300 programação).",
        "arquivo":  "Orç. Seara Margarinas_QuestionPro.pdf",
        "observacoes":  "Conversão USD/BRL a R$5,01 (cotação de 02/06/2026, conforme comparativo elaborado pela agência com os mesmos dados desta proposta). Valor sujeito a variação cambial e a impostos não inclusos na cotação original em USD."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pré-teste de Comunicação - Marcas Seara - pacote 2 ondas",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  4509.00,
        "escopo_resumo":  "Avaliação prévia de filmes (15s/30s) das marcas Seara, 150 entrevistas/onda, cobrança em dólar (USD 900 para 2 ondas).",
        "arquivo":  "Orç. Seara Pré teste_QuestionPro.pdf",
        "observacoes":  "1 onda isolada USD 825 (~R$4.133); pacote 2 ondas USD 900 (~R$4.509). Conversão a R$5,01/USD. Fornecedor não realiza facial code. Pagamento 30-60 dias, tributos não inclusos."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação - Margarinas - pacote 2 ondas",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  4509.00,
        "escopo_resumo":  "Avaliação de filmes (15s/30s) das margarinas Doriana/Delícia/Primor, 150 entrevistas/onda, cobrança em dólar (USD 900 para 2 ondas).",
        "arquivo":  "Orç. Seara Pós teste Margarina_QuestionPro.pdf",
        "observacoes":  "Conversão a R$5,01/USD. Tributos não inclusos, pagamento 30-60 dias."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Pós-teste de Comunicação - Marcas Seara - pacote 10 ondas",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  18787.50,
        "escopo_resumo":  "Avaliação de filmes (15s/30s) das marcas Seara, 150 entrevistas/onda, pacote anual de 10 testes, cobrança em dólar (USD 3.750).",
        "arquivo":  "Orç. Seara Pós teste Seara_QuestionPro.pdf",
        "observacoes":  "Conversão a R$5,01/USD. Economia informada pelo fornecedor de ~38,9% frente a 10 ondas isoladas (USD 7.010,70 x 10 vs. pacote)."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Tracking Seara - Proteínas - pacote 7 ondas (Jun-Dez/2026)",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  23421.75,
        "escopo_resumo":  "Programação e coleta para tracking de proteínas Seara/Seara Gourmet/Rezende vs. concorrentes, 250 entrevistas/onda, 7 ondas, cobrança em dólar (USD 4.675 para o pacote).",
        "arquivo":  "Orç. Seara Tracking_QuestionPro.pdf",
        "observacoes":  "Conversão a R$5,01/USD (equivalente ao valor \u0027por onda\u0027 de R$5.887 confirmado no comparativo da agência). Câmbio exato desta proposta específica (03/06/26) não constava no documento; usado câmbio de referência da mesma época/mesmo fornecedor."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Brand Lift de Campanhas (Seara/Seara Gourmet/Delícia/Doriana) - Cenário 1 (4 campanhas)",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  73794.00,
        "escopo_resumo":  "Medição de impacto de campanhas (expostos x controle), 1.200 entrevistas/campanha (600 expostos + 600 controle), 4 campanhas, 4.800 entrevistas totais, cobrança em dólar (USD 14.700).",
        "arquivo":  "Orç_Seara Brand Lift_QuestionPro.docx",
        "observacoes":  "Conversão a R$5,02/USD (03/06/2026), valor dado diretamente pelo comparativo da agência. Desconto disponível para contratação dos 2 cenários juntos e por volume."
    },
    {
        "cliente":  "Seara",
        "projeto":  "Brand Lift de Campanhas (Seara/Seara Gourmet/Delícia/Doriana) - Cenário 2 (7 campanhas)",
        "frente":  "quanti",
        "fornecedor":  "QuestionPro",
        "valor_total_brl":  85842.00,
        "escopo_resumo":  "Medição de impacto de campanhas (expostos x controle), 1.200 entrevistas/campanha, 7 campanhas, 8.400 entrevistas totais, cobrança em dólar (USD 17.100).",
        "arquivo":  "Orç_Seara Brand Lift_QuestionPro.docx",
        "observacoes":  "Conversão a R$5,02/USD (03/06/2026). Orçamento válido por 30 dias."
    },
    {
        "cliente":  "Unimed BH",
        "projeto":  "Unimed BH - Grupos Online + Teste de Usabilidade",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  38475.00,
        "escopo_resumo":  "Recrutamento para 6 grupos online com 6 pessoas + 3 backups (54 recrutados), incluindo teste de usabilidade, recepção, gravação (Zoom/Teams) e incentivo individual com impostos.",
        "arquivo":  "Orçamento_956_Participe Pesquisas Antara R$38.475,00_Unimede_BH_04.2026.pdf",
        "observacoes":  "Orçamento formal nº956 (GestãoClick), 29/04/2026. Prazo de recrutamento 10 dias úteis. Pagamento único por transferência bancária."
    },
    {
        "cliente":  "Zoho",
        "projeto":  "Zoho Middle Market - Recrutamento Quali",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  10300.00,
        "escopo_resumo":  "Recrutamento (8 x R$700) e incentivo individual com impostos (8 x R$587,50) para 8 entrevistas em profundidade.",
        "arquivo":  "ZOHO Pesquisa Quali_Orçamento Antara R$10.300,00_Recrutamento e incentivo_04.2026.pdf",
        "observacoes":  "Orçamento formal nº951 (GestãoClick), 20/04/2026. Escopo somente recrutamento + incentivo (sem moderação/gravação)."
    },
    {
        "cliente":  "Zoho",
        "projeto":  "Zoho Middle Market - Recrutamento Quali",
        "frente":  "quali",
        "fornecedor":  "Participe Pesquisas",
        "valor_total_brl":  19820.00,
        "escopo_resumo":  "Recrutamento, incentivo, moderação + análise + apresentação, transcrição e gravação para 8 entrevistas em profundidade.",
        "arquivo":  "ZOHO Pesquisa Quali_Orçamento Antara R$19.820,00 _Recrutamento, incentivo, moderação e gravação_04.2026.pdf",
        "observacoes":  "Orçamento formal nº950 (GestãoClick), 20/04/2026 — mesmo projeto do orçamento nº951, porém com escopo ampliado (inclui moderação, transcrição e gravação, que o orçamento nº951 não incluía)."
    },
    {
        "cliente":  "Zoho",
        "projeto":  "Zoho - Pesquisa Quanti B2B",
        "frente":  "quanti",
        "fornecedor":  "Brazil Panels",
        "valor_total_brl":  29800.00,
        "escopo_resumo":  "400 respondentes (200 da base Zoho Brasil + 200 de mercado), decisores/influenciadores B2B de software de gestão, clientes ativos da Zoho e usuários de concorrentes (Salesforce, HubSpot, Google Workspace, Zendesk), amostra Brasil.",
        "arquivo":  "ZOHO Pesquisa Quanti_Orçamento Brazil Panels R$29.800,00_04.2026.pdf",
        "observacoes":  "Orçamento informal por e-mail (Outlook), 20/04/2026, Claudio Vasques (Brazil Panels). Terá listagem do cliente. Cronograma sugerido de 5 semanas total."
    }
] as const;

export type PrecoItem = (typeof PRECOS)[number];
