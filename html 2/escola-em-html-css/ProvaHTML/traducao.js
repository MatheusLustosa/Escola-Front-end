document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    let isTranslated = false;

    const translations = {
        'Contato': 'Contact',
        'Currículo': 'Curriculum',
        'Corpo docente': 'Teaching Staff',
        'Eventos Escolares': 'School Events',
        'Recursos para os pais': 'Parent Resources',
        'Traduzir': 'Translate',
        'Últimas Notícias': 'Latest News',
        'Programas Acadêmicos': 'Academic Programs',
        'Equipes Esportivas': 'Sports Teams',
        'Clubes Estudantis': 'Student Clubs',
        'Enviar': 'Send',
        'Nome': 'Name',
        'Senioridade':'Seniority',
        'Matricula':'Registration',
        'Categoria':'Category',
        'Selecione':'Select',
        'Sobrenome': 'Surname',
        'Dados pessoais': 'Personal Data',
        'Principal': 'Home',
        'Email': 'Email',
        'Email: Complete as informações':'Email: Fill in the information',
        'Qual o assunto?': 'What is the subject?',
        'Matrícula': 'Enrollment',
        'Mensalidade': 'Monthly Fee',
        'Eventos': 'Events',
        'Biblioteca': 'Library',
        'Pós graduações': 'Postgraduate',
        'Especializações': 'Specializations',
        'Administrativo': 'Administrative',
        'Outra informação': 'Other information',
        'Missão': 'Mission',
        'Diretor Afonso Silva':'Director Afonso Silva',
        'Cordenadora Samara Helena':'Coordinator Samara Helena',
        'Professor Severino Pires':'Teacher Severino Pires',
        'Estimulação da linguagem oral e escrita através de histórias, canções e jogos.':'Stimulation of oral and written language through stories, songs and games.',
        'Introdução aos conceitos matemáticos, como números, formas e tamanhos, por meio de atividades lúdicas.':'Introduction to mathematical concepts, such as numbers, shapes and sizes, through playful activities',
        'Proporcionar um ambiente acolhedor e estimulante que promova o desenvolvimento integral das crianças, respeitando suas individualidades e cultivando valores de solidariedade, criatividade e curiosidade.':
        'Provide a welcoming and stimulating environment that promotes the holistic development of children, respecting their individuality and cultivating values of solidarity, creativity, and curiosity.',
        'Exploração do ambiente físico e natural, incentivando a curiosidade e a experimentação.':'Exploration of the physical and natural environment, encouraging curiosity and experimentation.',
        'Estímulo ao desenvolvimento motor grosso, através de brincadeiras ao ar livre, corridas, saltos e jogos de equilíbrio.':'Stimulating gross motor development, through outdoor games, running, jumping and balance games.',
        'Cultivo de valores como empatia, respeito e solidariedade, através de vivências cotidianas e exemplos positivos.':'Cultivation of values ​​such as empathy, respect and solidarity, through everyday experiences and positive examples.',
        'Visão': 'Vision',
        'Promoção da autonomia e da autoestima, incentivando a tomada de decisões e a resolução de conflitos de forma construtiva.':'Promotion of autonomy and self-esteem, encouraging decision-making and conflict resolution in a constructive way.',
        'Ser reconhecida como uma referência em educação infantil, destacando-se pelo compromisso com a excelência educativa e o cuidado com o bem-estar das crianças.':
        'To be recognized as a reference in early childhood education, standing out for our commitment to educational excellence and the well-being of children.',
        '1) Desenvolvimento Cognitivo:': '1) Cognitive Development:',
        '2) Desenvolvimento Socioemocional:': '2) Socioemotional Development:',
        '3) Desenvolvimento Motor:': '3) Motor Development:',
        'Estímulo à socialização e ao trabalho em equipe, através de atividades colaborativas e de integração.':
        'Encouragement of socialization and teamwork through collaborative and integrative activities.',
        'Promoção da coordenação motora fina, através de atividades como recorte, pintura, modelagem e montagem de quebra-cabeças.':
        'Promotion of fine motor coordination through activities such as cutting, painting, modeling, and assembling puzzles.',
        'O Programa Acadêmico Estudantil da Escola Start comemora um aumento notável no desempenho escolar dos alunos, refletindo o impacto positivo das iniciativas educativas implementadas. Sob a direção da coordenadora acadêmica, Professora Ana Oliveira, os estudantes demonstraram progresso significativo em suas notas e participação em sala de aula, evidenciando o compromisso da escola com a excelência acadêmica.':
        'The Start School Student Academic Program celebrates a notable increase in students\' academic performance, reflecting the positive impact of the educational initiatives implemented. Under the direction of the academic coordinator, Professor Ana Oliveira, students demonstrated significant progress in their grades and classroom participation, evidencing the school\'s commitment to academic excellence.',
        'A equipe de futebol da Escola Start alcançou uma vitória marcante no Campeonato Regional, vencendo por 3 a 0. Sob a liderança do capitão Ricardo Silva e orientação técnica do treinador Pedro Ramos, os jovens atletas demonstraram talento e dedicação, consolidando-se como uma força a ser reconhecida no cenário esportivo local.':
        'The School Start football team achieved a remarkable victory in the Regional Championship, winning 3-0. Under the leadership of captain Ricardo Silva and technical guidance from coach Pedro Ramos, the young athletes demonstrated talent and dedication, consolidating themselves as a force to be recognized in the local sports scene.',
        'Os jovens membros do Clube Estudantil Infantil de Leitura alcançaram uma conquista notável no âmbito literário. Sob a orientação da coordenadora do clube, Professora Carla Santos, os estudantes mergulharam em um mundo de livros e ideias, culminando em uma vitória histórica no concurso de leitura regional.':
        'The young members of the Children\'s Student Reading Club have achieved remarkable success in the literary field. Under the guidance of the club coordinator, Professor Carla Santos, the students immersed themselves in a world of books and ideas, culminating in a historic victory in the regional reading contest.',
        'Durante a infância e adolescência, é essencial adquirir habilidades que vão além das salas de aula. Aprender a trabalhar em equipe, a lidar com vitórias e derrotas, a ter disciplina e coragem, bem como a respeitar regras, são aspectos cruciais para o desenvolvimento integral dos jovens. Nossa convicção reside no investimento no esporte competitivo como uma ferramenta eficaz para promover tais valores. Ao oferecer um ambiente saudável e uma infraestrutura completa para a prática esportiva, estamos não apenas incentivando a atividade física, mas também cultivando cidadãos conscientes, capazes de contribuir de maneira positiva para a sociedade.':'During childhood and adolescence, it is essential to acquire skills that go beyond the classroom. Learning to work as a team, to deal with victories and defeats, to have discipline and courage, as well as to respect rules, are crucial aspects for the integral development of young people. Our conviction lies in investing in competitive sport as an effective tool to promote such values. By offering a healthy environment and a complete infrastructure for sports, we are not only encouraging physical activity, but also cultivating conscious citizens, capable of contributing positively to society.',
        'Nossa equipe de corrida, campeão do circuito estadual infantil':'Our racing team, champion of the childrens state circuit.',
        'Nossas crianças são 3º lugar estadual, e estamos sempre aceitando novos integrantes.':'Our children are 3rd in the state, and we are always accepting new members.',
        'Calendário de Provas':'Exam Calendar',
        'Comunicados e Avisos':'Announcements and Notices',
        'Importante: As matrículas para o próximo ano letivo estarão abertas a partir do dia 15 de maio. Não perca o prazo para garantir a vaga de seu filho na escola.':'Important: Registration for the next academic year will be open from May 15th. Dont miss the deadline to secure your childs place at school.',
        'Evento Cultural: No próximo sábado, dia 20 de abril, teremos uma apresentação especial dos alunos do ensino fundamental. Venha prestigiar e apoiar nossos talentosos estudantes!':'Cultural Event: Next Saturday, April 20th, we will have a special presentation by elementary school students. Come honor and support our talented students!',
        'Feriado Escolar: Lembramos aos pais e alunos que a escola estará fechada na próxima segunda-feira, dia 1º de maio, devido ao feriado do Dia do Trabalho. Retornaremos às atividades normais na terça-feira seguinte.':'School Holiday: We remind parents and students that the school will be closed next Monday, May 1st, due to the Labor Day holiday. We will return to normal activities the following Tuesday.',
    };

    const reverseTranslations = Object.fromEntries(
        Object.entries(translations).map(([key, value]) => [value, key])
    );

    const translateElements = () => {
        const elementsToTranslate = document.querySelectorAll('nav a, nav button, main h1, main h2, main p, main label, main legend, main button');

        elementsToTranslate.forEach(element => {
            const textContent = element.textContent.trim();
            if (isTranslated) {
                element.textContent = reverseTranslations[textContent] || textContent;
            } else {
                element.textContent = translations[textContent] || textContent;
            }
        });
    };

    translateButton.addEventListener('click', () => {
        isTranslated = !isTranslated;
        translateElements();
    });
});
