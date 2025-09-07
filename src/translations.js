export const translations = {
    fr: {
        titlePage: "César Aha",
        navigation: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact"
        },
        hero: {
            firstLine: "De l’idée au lancement et au-delà,",
            secondLine: "je donne vie à vos projets.",
            cta1: "Explorer les projets",
            cta2: "Contactez-moi"
        },
        about: {
            name: "César Hernandez",
            title: "À propos de moi",
            paragraph1: "Je suis docteur en Ingénierie Médicale, avec une expérience dans les projets de R&D liés à l'imagerie optique, au traitement d'images et au Deep Learning. Également, je fais du développement Web.",
            paragraph2: "Dans ma recherche, je m'intéresse particulièrement aux solutions d'IA appliquées à l'imagerie (bonus si c'est médical), en combinant des pratiques de code propre et d'optimisation. En tant que développeur web, j'aime créer et concevoir des applications et sites web avec un design centré sur l'utilisateur pour offrir des expériences numériques exceptionnelles, toujours adaptées aux besoins du client.",
            studiesTitle: "Formations",
            studies1: {
                heading: "Licence en Ingénierie Médicale",
                placeAndDate: "Sinaloa, Mexique | Sep 2014 - Jan 2018",
                details: "Axée sur le développement de prototypes en utilisant des compétences en électronique, mécanique et programmation."
            },
            studies2: {
                heading: "Doctorat en Ingénierie Médicale et Diplôme en R&D",
                placeAndDate: "Londres, Royaume-Uni | Oct 2019 - Avr 2025",
                details: "Développement de systèmes d'imagerie optique en utilisant des méthodes de reconstruction conventionnelles, des algorithmes d'optimisation et du Deep Learning."
            },
            experienceTitle: "Expériences professionnelles",
            experience1: {
                heading: "Chercheur en doctorat",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Avr 2025",
                details: "Imagerie optique, Deep Learning pour la reconstruction d'images avec Python, Tensorflow et Keras."
            },
            experience2: {
                heading: "Chargé de travaux pratiques",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Août 2023",
                details: "Enseignement et tutorat en Mathématiques, Physique, Électronique et programmation Python pour les étudiants de premier cycle."
            },
            experience3: {
                heading: "Ingénieur R&D",
                placeAndDate: "Tecnológico de Monterrey | Août 2017 - Jan 2018",
                details: "Développement d'un système de suivi oculaire en utilisant C# et VS Code."
            }
        },
        skills: {
            title: "Compétences",
            nameSection1: "Développement scientifique",
            nameSection2: "Bibliothèques (Python)",
            nameSection3: "Développement d'applications et web (Langages)",
            nameSection4: "Développement d'applications et web (Frameworks et autres outils)"
        },
        projects: {
            title: "Projets",
            project1: {
                heading: "Imagerie optique dans des milieux diffusants",
                details: "Modèles de Deep Learning pour la reconstruction d'objets derrière des milieux diffusants (thèse de doctorat)",
                description: "Turbides (ou diffusants) désignent les matériaux qui ne laissent pas passer la lumière, " +
                    "comme les substances opaques. Le principal défi de l’application des algorithmes de reconstruction " +
                    "d’images basés sur l’Apprentissage Profond est que chaque modèle est spécifique au milieu sur lequel " +
                    "il a été entraîné. Si le milieu change – même si l’objet reste le même – les performances du modèle " +
                    "diminuent considérablement.<br/> Ce problème devient encore plus complexe dans le cas de la peau humaine, " +
                    "qui est un milieu dynamique. Même lorsque les données d’entraînement proviennent d’une seule personne, " +
                    "les propriétés de la peau évoluent avec le temps, ce qui signifie que les conditions vues pendant " +
                    "l’entraînement ne sont pas stables.<br/> L’<strong>objectif</strong> de cette thèse était " +
                    "d’améliorer la <strong>généralisation des modèles d’imagerie basés sur l’Apprentissage Profond</strong> " +
                    "pour la <strong>reconstruction d’objets</strong> cachés derrière ou à l’intérieur de <strong>milieux diffusants</strong> " +
                    "dans des <strong>systèmes optiques</strong>. Pour ce faire, plusieurs architectures de réseaux et stratégies " +
                    "de paramétrisation ont été explorées.<br/> Les modèles présentés ici – Dense CNN et U-net – ont été entraînés " +
                    "à la fois avec des images de distribution d’intensité (appelées speckles) et avec des informations de Fourier " +
                    "des objets dérivées de ces speckles (en particulier l’autocorrélation et le spectre de Fourier).<br/> " +
                    "L’analyse complète et les résultats se trouvent dans la thèse publiée au lien suivant : " +
                    "<a href='https://qmro.qmul.ac.uk/xmlui/handle/123456789/105754' target='_blank' rel='noopener noreferrer'>" +
                    "PDF de la thèse – Queen Mary University of London</a>."
            },
            project2: {
                heading: "Site portfolio développé avec Svelte et Vite",
                details: "Site personnel créé avec Svelte dans VS Code, déployé via GitHub et hébergé sur Netlify",
                description: "Ce portfolio et mon site freelance, <a href='https://c-aha.com'>c-aha.com</a>, " +
                    "sont deux projets connectés mais distincts.<br/><br/>" +
                    "c-aha.com est le moyen le plus simple de me contacter " +
                    "pour des collaborations freelance. Il a été développé avec <strong>Svelte</strong>, " +
                    "en tirant parti de la réutilisabilité de ses composants et de sa configuration simple. " +
                    "Le site est déployé en continu sur <strong>Netlify</strong>, et se met automatiquement " +
                    "à jour après chaque push <strong>Git</strong>.<br/><br/>" +
                    "Ce portfolio a été développé avec <strong>React</strong>, l’un des frameworks JavaScript " +
                    "les plus utilisés. Sa structure reflète celle de mon projet Svelte, ce qui a rendu la transition " +
                    "entre les deux naturelle et efficace. J’ai décidé de séparer le portfolio du site freelance " +
                    "afin de présenter mes projets plus clairement, tout en gardant le contenu professionnel " +
                    "sur une page dédiée.<br/><br/>" +
                    "Ce portfolio est hébergé sur <strong>GitHub Pages</strong>, avec <strong>GitHub Actions</strong> " +
                    "assurant les déploiements automatisés après chaque push. Vous pouvez retrouver les deux dépôts " +
                    "sur mon <a href='https://github.com/cesaraha'>profil GitHub</a>."

            },
            project3: {
                heading: "Generateur IA d'exercices mathematiques",
                details: "Plateforme de génération de contenu mathématique, avec suivi des performances et exercices adaptatifs.",
                description: "Ce projet est un <strong>générateur d’opérations mathématiques</strong>. Dans un premier temps, " +
                    "il produit des exercices aléatoires à partir des opérations arithmétiques sélectionnées (addition, " +
                    "soustraction, multiplication et division). L’utilisateur choisit également le nombre d’exercices.<br/><br/>" +
                    "Après une première session, le modèle commence à apprendre des performances de l’utilisateur et adapte " +
                    "les exercices à son niveau ainsi qu’aux erreurs les plus fréquentes. Par exemple, si des erreurs surviennent " +
                    "dans des multiplications impliquant la table de 7, le modèle proposera davantage d’exercices similaires pour " +
                    "fournir de la pratique et aider l’utilisateur à surmonter cette difficulté. Si trop d’erreurs sont commises, " +
                    "le niveau diminue, et si tout est correct, le niveau augmente.<br/><br/>" +
                    "Cette application a été développée avec <strong>Svelte</strong> pour le frontend, <strong>FastAPI</strong> " +
                    "comme backend, <strong>Axios</strong> pour les relier, et <strong>Python</strong> pour l’agent d’apprentissage."

            },
            project4: {
                heading: "OCR pour documents scannés et images",
                details: "Algorithmes de reconnaissance optique de caractères pour images et documents numérisés",
                description: "Développement d'un algorithme capable de reconnaître les mots dans les documents scannés et les fichiers d'images pour une localisation et classification faciles."
            },
            project5: {
                heading: "Segmentation cellulaire dans des images de microscopie",
                details: "Algorithmes de traitement d'image pour la segmentation cellulaire dans des images de microscopie",
                description: "Développement d'algorithmes de traitement d'images pour la segmentation des cellules dans les images de microscopie à des fins de comptage et de classification."
            },
            project6: {
                heading: "Détection et suivi d'objets avec OpenCV",
                details: "Détection et suivi d'objets dans des vidéos à l'aide d'OpenCV et de Python",
                description: "Développement d'applications pour la détection et le suivi d'objets en utilisant OpenCV et Python. Entraîné avec les modèles YOLOv5 et YOLOv8."
            },
            project7: {
                heading: "Segmentation d'images médicales",
                details: "Visualisation, exploration et segmentation de coupes d'IRM",
                description: "Développement d'applications pour l'affichage, l'exploration et la segmentation de coupes IRM dans quatre modalités différentes."
            }
        },
        readMore: "Afficher plus",
        viewOnGithub: "Voir sur GitHub",
        footer: {
            contactTitle: "Contact",
            connectTitle: "Connect",
            rightsText: "César Aha. Tous droits réservés.",
            emailLabel: "Email",
            phoneLabel: "Téléphone"
        },
        contact: {
            title: "Contactez-moi!",
            description: "Je serais ravi d’avoir de vos nouvelles ! Que vous ayez une question, que vous souhaitiez discuter d’un projet ou simplement dire bonjour, n’hésitez pas à me contacter.",
            tags: {
                name: "Nom complet",
                email: "Email",
                phone: "Téléphone",
                optional: "(Optional)",
                service: "Service",
                specify: "Veuillez préciser",
                message: "Message"
            },
            dropdown: {
                option1: "Sélectionnez une option...",
                option2: "Projets R&D",
                option3: "Développement d'applications",
                option4: "Création des sites web",
                option5: "Cours particuliers",
                option6: "Autre"
            },
            placeholder: {
                name: "Entrez votre nom complet",
                email: "Entrez votre address email",
                phone: "Entrez votre numéro de téléphone",
                specify: "Veuillez fournir une description générale de votre demande",
                message: "Veuillez fournir une description détaillée de votre demande"
            },
            errors: {
                field: "Ce champ est requis",
                validEmail: "Veuillez entrer une address e-mail valide",
                service: "Veuillez sélectionner un service",
            },
            characters: "caractères",
            button: {
                always: "Envoyer",
                sending: "En train d'envoyer..."
            },
            submit: {
                success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
                error: "Désolé, une erreur est survenue lors de l’envoi de votre message. Veuillez réessayer."
            }
        }
    },
    en: {
        titlePage: "César Aha",
        navigation: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            firstLine: "From concept to launch and beyond,",
            secondLine: "I help your ideas come alive.",
            cta1: "Explore projects",
            cta2: "Get in touch"
        },
        about: {
            name: "César Hernandez",
            title: "A bit about me",
            paragraph1: "I am a doctor in Medical Engineering, with experience in R&D projects related to optical imaging, image processing and Deep Learning. I also do web development.",
            paragraph2: "In my research, I'm particularly interested in AI solutions applied to imaging (bonus points if it's medical), combining clean code practices and optimisation. As a web developer, I like to create and design web applications and sites with user-centered design to deliver exceptional digital experiences, always adapted to the client's needs.",
            studiesTitle: "Studies",
            studies1: {
                heading: "BS in Medical Engineering",
                placeAndDate: "Sinaloa, Mexico | Sep 2014 - Jan 2018",
                details: "Focused in the development of prototyping by using electronics, mechanics and programming skills."
            },
            studies2: {
                heading: "PhD in Medical Engineering and Diploma in R&D",
                placeAndDate: "London, United Kingdom | Oct 2019 - Apr 2025",
                details: "Development of optical imaging systems by using conventional reconstruction methods, optimisation algorithms and Deep Learning."
            },
            experienceTitle: "Professional Experiences",
            experience1: {
                heading: "PhD Researcher",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Apr 2025",
                details: "Optical imaging, Deep Learning for the reconstruction of images with Python, Tensorflow and Keras."
            },
            experience2: {
                heading: "Laboratory Demonstrator",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Aug 2023",
                details: "Teaching and tutoring for Math, Physics, Electronics and Python programming to undergraduate students."
            },
            experience3: {
                heading: "R&D Engineer",
                placeAndDate: "Tecnológico de Monterrey | Aug 2017 - Jan 2018",
                details: "Development of an eyetracking system by using C# and VS Code."
            }
        },
        skills: {
            title: "Skills",
            nameSection1: "Scientific Development",
            nameSection2: "Libraries (Python)",
            nameSection3: "App & web development (Languages)",
            nameSection4: "App & web development (Frameworks and other tools)"
        },
        projects: {
            title: "Projects",
            project1: {
                heading: "Optical imaging in scattering media",
                details: "Deep Learning models for the reconstruction of objects behind scattering media (PhD thesis)",
                description: "Turbid (or scattering) media refers to materials that do not allow light to pass through, " +
                    "such as opaque substances. The main challenge in applying Deep Learning-based image reconstruction " +
                    "algorithms is that each model is specific to the medium it was trained on. If the medium changes " +
                    "- even if the object remains the same - the model’s performance drops significantly.<br/><br/>" +
                    "This issue becomes more complex in the case of human skin, which is a dynamic medium. Even when " +
                    "training data is collected from a single person, the skin’s properties change over time, meaning the " +
                    "conditions seen during training are not stable.<br/><br/>" +
                    "The <strong>aim</strong> of this thesis was to improve the <strong>generalisation of Deep Learning-based imaging models</strong> for the <strong>" +
                    "reconstruction of objects</strong> hidden behind or within <strong>scattering media</strong> in <strong>" +
                    "optical systems</strong>. To address this, several network architectures and parameterisation strategies " +
                    "were explored.<br/><br/>" +
                    "The models presented here - Dense CNN and U-net - were trained using both intensity " +
                    "distribution images (known as speckles) and Fourier information of the objects derived from those " +
                    "speckles (specifically autocorrelation and Fourier spectrum data).<br/><br/>" +
                    "The full analysis and results can be found in the published thesis at the following link: " +
                    "<a href='https://qmro.qmul.ac.uk/xmlui/handle/123456789/105754' target='_blank' rel='noopener noreferrer'>" +
                    "Thesis PDF – Queen Mary University of London</a>."
            },
            project2: {
                heading: "Portfolio website using Svelte and Vite",
                details: "Personal website built using Svelte in VS Code, deployed by GitHub and hosted by Netlify",
                description: "This portfolio and my freelance website, <a href='https://c-aha.com'>c-aha.com</a>, " +
                    "are two connected but distinct projects.<br/><br/>" +
                    "c-aha.com is the easiest way to reach me for freelance collaborations. " +
                    "It was built with <strong>Svelte</strong>, leveraging its reusable components and simple " +
                    "configuration. The site is continuously deployed to <strong>Netlify</strong>, updating " +
                    "automatically after every <strong>Git</strong> push.<br/><br/>" +
                    "This portfolio was developed with <strong>React</strong>, one of the most widely used " +
                    "JavaScript frameworks. Its structure mirrors my Svelte project, making the transition " +
                    "between the two natural and efficient. I decided to separate the portfolio from the " +
                    "freelance site to present my projects clearly while keeping business-related content " +
                    "on a dedicated page.<br/><br/>" +
                    "This portfolio is hosted on <strong>GitHub Pages</strong> with <strong>GitHub Actions</strong> " +
                    "handling automated deployments on every push. You can find both repositories on my " +
                    "<a href='https://github.com/cesaraha'>GitHub profile</a>."

            },
            project3: {
                heading: "AI math generator",
                details: "Platform for practicing mathematical operations with performance tracker and adaptive exercises",
                description: "This project is a <strong>mathematical operations generator</strong>. At first, it produces " +
                    "random exercises from the selected arithmetic operations (addition, subtraction, multiplication, " +
                    "and division). The user also chooses the number of exercises.<br/><br/>" +
                    "After an initial session, the model begins learning from the user’s performance and adapts " +
                    "the exercises to their level and common mistakes. For example, if errors occur in multiplication " +
                    "exercises involving the table of 7, the model will provide more similar problems to give practice " +
                    "and help the user overcome that difficulty. If too many mistakes are made, the level decreases, " +
                    "and if everything is correct, the level increases.<br/><br/>" +
                    "This application was built using <strong>Svelte</strong> for the frontend, <strong>FastAPI</strong> " +
                    "as the backend, <strong>Axios</strong> to connect them, and <strong>Python</strong> for the learning agent."
            },
            project4: {
                heading: "OCR for scanned documents and images",
                details: "Optical Character Recognition algorithms for images and scanned documents",
                description: "Development of an algorithm capable of recognizing words in scanned documents and image files for easy location and classification."
            },
            project5: {
                heading: "Cell segmentation in microscopy images",
                details: "Image processing algorithms for cell segmentation in microscopy images",
                description: "Development of image processing algorithms for the segmentation of cells in microscopy images for counting and classification purposes."
            },
            project6: {
                heading: "Object detection and tracking with OpenCV",
                details: "Detection and tracking of objects in video data by using OpenCV and Python",
                description: "Development of applications for the detection and tracking of objects using OpenCV and Python. Trained with YOLOv5 and YOLOv8 models."
            },
            project7: {
                heading: "Medical imaging segmentation",
                details: "Visualization, exploration and segmentation of MRI slices",
                description: "Development of applications for the display, exploration and segmentation of MRI slices in four different modalities."
            }
        },
        readMore: "Read more",
        viewOnGithub: "View on GitHub",
        footer: {
            contactTitle: "Contact",
            connectTitle: "Connect",
            rightsText: "César Aha. All rights reserved.",
            emailLabel: "Email",
            phoneLabel: "Phone"
        },
        contact: {
            title: "Get in touch!",
            description: "I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.",
            tags: {
                name: "Full name",
                email: "Email",
                phone: "Phone number",
                optional: "(Optional)",
                service: "Service",
                specify: "Please specify",
                message: "Message"
            },
            dropdown: {
                option1: "Please select an option...",
                option2: "R&D projects",
                option3: "App development",
                option4: "Website creation",
                option5: "Private classes",
                option6: "Other"
            },
            placeholder: {
                name: "Enter your full name",
                email: "Enter your email address",
                phone: "Enter your phone number",
                specify: "Please provide a general description of your request",
                message: "Please provide a detailed description of your request"
            },
            errors: {
                field: "This field is required",
                validEmail: "Please enter a valid email address",
                service: "Please select a service",
            },
            characters: "characters",
            button: {
                always: "Send message",
                sending: "Sending..."
            },
            submit: {
                success: "Message sent successfully! I'll get back to you soon.",
                error: "Sorry, there was an error sending your message. Please try again."
            }
        }
    },
    sp: {
        titlePage: "César Aha",
        navigation: {
            home: "Inicio",
            about: "Acerca de",
            skills: "Habilidades",
            projects: "Projectos",
            contact: "Contacto"
        },
        hero: {
            firstLine: "Desde la idea hasta el lanzamiento y más allá,",
            secondLine: "le doy vida a tus projectos.",
            cta1: "Explorar projectos",
            cta2: "Contáctame"
        },
        about: {
            name: "César Hernandez",
            title: "Un poco acerca de mí",
            paragraph1: "Soy doctor en Ingeniería Biomédica, con experiencia en proyectos R&D ligados a la imagenología óptica, al procesamiento de imágenes y al aprentizaje profundo (Deep Learning). También me dedico al desarrollo web.",
            paragraph2: "En investigación, estoy particularmente interesado en soluciones de IA aplicadas a la imagenología (puntos extra si es médica), combinando buenas prácticas de codage y optimización. Como desarrollador web, me encanta crear y diseñar aplicaciones y sitios web con un diseñocentrado en el usuario para ofrecer experiencias tecnológicas excepcionales, siempre adaptadas a las necesidades del cliente.",
            studiesTitle: "Educación",
            studies1: {
                heading: "Licenciatura en Ingeniería Biomédica",
                placeAndDate: "Sinaloa, México | Sep 2014 - Ene 2018",
                details: "Enfocada en el desarrollo de prototipos utilizando habilidades de electrónica, mecánica y programación."
            },
            studies2: {
                heading: "Doctorado en Ingeniería Médica y Diploma en I+D",
                placeAndDate: "Londres, Reino Unido | Oct 2019 - Abr 2025",
                details: "Desarrollo de sistemas de imagenología óptica utilizando métodos de reconstrucción convencionales, algoritmos de optimización y Deep Learning."
            },
            experienceTitle: "Experiencias Profesionales",
            experience1: {
                heading: "Investigador de Doctorado",
                placeAndDate: "Queen Mary University of London | Oct 2019 - Abr 2025",
                details: "Imagenología óptica, Deep Learning para la reconstrucción de imágenes con Python, Tensorflow y Keras."
            },
            experience2: {
                heading: "Demostrador de Laboratorio",
                placeAndDate: "Queen Mary University of London | Sep 2021 - Ago 2023",
                details: "Enseñanza y tutoría en Matemáticas, Física, Electrónica y programación en Python para estudiantes de pregrado."
            },
            experience3: {
                heading: "Ingeniero de I+D",
                placeAndDate: "Tecnológico de Monterrey | Ago 2017 - Ene 2018",
                details: "Desarrollo de un sistema de seguimiento ocular utilizando C# y VS Code."
            }
        },
        skills: {
            title: "Habilidades",
            nameSection1: "Desarrollo científico",
            nameSection2: "Librerías (Python)",
            nameSection3: "Desarrollo de aplicaciones y web (Lenguajes)",
            nameSection4: "Desarrollo de aplicaciones y web (Frameworks y otras herramientas)"
        },
        projects: {
            title: "Projectos",
            project1: {
                heading: "Imagenología óptica en medios difusivos",
                details: "Modelos de Deep Learning para la reconstrucción de objetos detrás de medios difusivos (tesis doctoral)",
                description: "Los medios turbios (o dispersivos) se refieren a materiales que no permiten el paso de la luz, " +
                    "como las sustancias opacas. El principal desafío al aplicar algoritmos de reconstrucción de imágenes " +
                    "basados en Deep Learning es que cada modelo es específico del medio en el que fue entrenado. Si el medio cambia, " +
                    "incluso si el objeto sigue siendo el mismo, el rendimiento del modelo disminuye significativamente.<br/> " +
                    "Este problema se vuelve aún más complejo en el caso de la piel humana, que es un medio dinámico. Incluso " +
                    "cuando los datos de entrenamiento se recogen de una sola persona, las propiedades de la piel cambian con el tiempo, " +
                    "lo que significa que las condiciones vistas durante el entrenamiento no son estables.<br/> El <strong>objetivo</strong> " +
                    "de esta tesis fue mejorar la <strong>generalización de los modelos de imagen basados en Deep Learning</strong> " +
                    "para la <strong>reconstrucción de objetos</strong> ocultos detrás o dentro de <strong>medios dispersivos</strong> " +
                    "en <strong>sistemas ópticos</strong>. Para ello, se exploraron varias arquitecturas de redes y estrategias " +
                    "de parametrización.<br/> Los modelos presentados aquí – Dense CNN y U-net – fueron entrenados tanto con imágenes " +
                    "de distribución de intensidad (conocidas como speckles) como con información de Fourier de los objetos derivada " +
                    "de dichos speckles (específicamente autocorrelación y espectro de Fourier).<br/> El análisis completo y los resultados " +
                    "pueden encontrarse en la tesis publicada en el siguiente enlace: " +
                    "<a href='https://qmro.qmul.ac.uk/xmlui/handle/123456789/105754' target='_blank' rel='noopener noreferrer'>" +
                    "PDF de la tesis – Queen Mary University of London</a>."
            },
            project2: {
                heading: "Sitio web de portafolio usando Svelte y Vite",
                details: "Sitio web personal creado con Svelte en VS Code, desplegado mediante GitHub y alojado en Netlify",
                description: "Este portafolio y mi sitio freelance, <a href='https://c-aha.com'>c-aha.com</a>, " +
                    "son dos proyectos conectados pero distintos.<br/><br/>" +
                    "c-aha.com es la forma más sencilla de contactarme " +
                    "para colaboraciones freelance. Fue desarrollado con <strong>Svelte</strong>, aprovechando " +
                    "la reutilización de sus componentes y su configuración sencilla. El sitio se despliega " +
                    "de forma continua en <strong>Netlify</strong>, actualizándose automáticamente después " +
                    "de cada push <strong>Git</strong>.<br/><br/>" +
                    "Este portafolio fue desarrollado con <strong>React</strong>, uno de los frameworks de JavaScript " +
                    "más utilizados. Su estructura refleja la de mi proyecto en Svelte, lo que hizo que la transición " +
                    "entre ambos fuera natural y eficiente. Decidí separar el portafolio del sitio freelance para " +
                    "presentar mis proyectos de forma clara, manteniendo el contenido profesional en una página aparte.<br/><br/>" +
                    "Este portafolio está alojado en <strong>GitHub Pages</strong>, con <strong>GitHub Actions</strong> " +
                    "gestionando los despliegues automáticos tras cada push. Puedes encontrar ambos repositorios en mi " +
                    "<a href='https://github.com/cesaraha'>perfil de GitHub</a>."

            },
            project3: {
                heading: "Generador IA de operaciones matemáticas",
                details: "Plataforma para practicar operaciones matemáticas con seguimiento del rendimiento y ejercicios adaptativos",
                description: "Este proyecto es un <strong>generador de operaciones matemáticas</strong>. En un primer momento, " +
                    "produce ejercicios aleatorios de las operaciones aritméticas seleccionadas (suma, resta, multiplicación " +
                    "y división). El usuario también elige el número de ejercicios.<br/><br/>" +
                    "Después de una primera sesión, el modelo empieza a aprender del rendimiento del usuario y adapta los " +
                    "ejercicios a su nivel y a los errores más comunes. Por ejemplo, si se cometen errores en ejercicios de " +
                    "multiplicación con la tabla del 7, el modelo propondrá más ejercicios similares para dar práctica y ayudar " +
                    "al usuario a superar esa dificultad. Si se cometen demasiados errores, el nivel disminuirá, y si todo es " +
                    "correcto, el nivel aumentará.<br/><br/>" +
                    "Esta aplicación fue desarrollada con <strong>Svelte</strong> para el frontend, <strong>FastAPI</strong> " +
                    "como backend, <strong>Axios</strong> para enlazarlos, y <strong>Python</strong> para el agente de aprendizaje."

            },
            project4: {
                heading: "OCR en documentos escaneados e imágenes",
                details: "Algoritmos de reconocimiento óptico de caracteres para imágenes y documentos escaneados",
                description: "Desarrollo de algoritmos para el reconocimiento de texto en documentos escaneados y archivos de imagen para la localización y clasificación."
            },
            project5: {
                heading: "Segmentación celular en imágenes de microscopio",
                details: "Algoritmos de procesamiento de imágenes para la segmentación celular en imágenes de microscopía",
                description: "Desarrollo de algoritmos de procesamiento de imágenes para la segmentación de células en imágenes de microscopio para el conteo y clasificación."
            },
            project6: {
                heading: "Detección y seguimiento de objetos con OpenCV",
                details: "Detección y seguimiento de objetos en archivos de video utilizando OpenCV y Python",
                description: "Desarrollo de aplicaciones para la detección y el seguimiento de objetos con OpenCV y Python. Entrenamiento con modelos YOLOv5 y YOLOv8."
            },
            project7: {
                heading: "Segmentación de imágenes médicas",
                details: "Visualización, exploración y segmentación de cortes de RM",
                description: "Desarrollo de aplicaciones para la visualización, exploración y segmentación de cortes de IRM en cuatro modalidades diferentes."
            }
        },
        readMore: "Ver más",
        viewOnGithub: "Ver en GitHub",
        footer: {
            contactTitle: "Contacto",
            connectTitle: "Conectar",
            rightsText: "César Aha. Todos los derechos reservados.",
            emailLabel: "Email",
            phoneLabel: "Teléfono"
        },
        contact: {
            title: "Contáctame!",
            description: "¡Me encantaría leerte! Ya sea que tengas una pregunta, quieras hablar sobre un proyecto o simplemente saludar, no dudes en ponerte en contacto conmigo.",
            tags: {
                name: "Nombre completo",
                email: "E-mail",
                phone: "Número de teléfono",
                optional: "(Opcional)",
                service: "Servicio",
                specify: "Por favor especifica",
                message: "Mensaje"
            },
            dropdown: {
                option1: "Por favor elije una opción...",
                option2: "Proyectos I+D",
                option3: "Desarrollo de aplicaciones",
                option4: "Creación de sitions web",
                option5: "Cursos particulares",
                option6: "Otro"
            },
            placeholder: {
                name: "Ingresa tu nombre completo",
                email: "Ingresa tu e-mail",
                phone: "Ingresa tu número de teléfono",
                specify: "Por favor proporciona una descripción general de tu solicitud",
                message: "Por favor proporciona una descripción detallada de tu solicitud"
            },
            errors: {
                field: "Este campo es obligatorio",
                validEmail: "Por favor ingresa una dirección de correo electrónico válida",
                service: "Por favor elije un servicion"
            },
            characters: "caracteres",
            button: {
                always: "Enviar",
                sending: "Enviando..."
            },
            submit: {
                success: "¡Mensaje enviado! Te responderé pronto.",
                error: "Lo siento, ha habido un error al enviar tu mensaje. Por favor intenta de nuevo."
            }
        }
    }
};