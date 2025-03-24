// Sprache ändern
function changeLanguage() {
            const lang = document.getElementById("language-dropdown").value;
            const translations = {
                de: {
                    hometext: "Home",
                    aboutus: "Über uns",
                    contact: "Kontakt",
                    login: "Login",
                    heroText: "Finde deinen Schülerjob",
                    searchPlaceholder: "Jobtitel, Firma oder Ort",
                    searchButton: "Suche",
                    jobsHeading: "Aktuelle Jobangebote",
                    footerText: "&copy; 2025 Job-It. Alle Rechte vorbehalten."
                },
                en: {
                    hometext: "Home",
                    aboutus: "About us",
                    contact: "Contact",
                    login: "Login",
                    heroText: "Find your student job",
                    searchPlaceholder: "Job title, company or location",
                    searchButton: "Search",
                    jobsHeading: "Current job offers",
                    footerText: "&copy; 2025 Job-It. All rights reserved."
                },
                zh: {
                    hometext: "家",
                    aboutus: "关于我们",
                    contact: "接点",
                    login: "注册",
                    heroText: "寻找您的学生工作",
                    searchPlaceholder: "职位名称、公司或地点",
                    searchButton: "搜索",
                    jobsHeading: "最新的工作机会",
                    footerText: "&copy; 2025 Job-It. 版权所有。"
                }
            };
            document.getElementById("hometext").innerText = translations[lang].hometext;
            document.getElementById("aboutus").innerText = translations[lang].aboutus;
            document.getElementById("contact").innerText = translations[lang].contact;
            document.getElementById("login").innerText = translations[lang].login;
            document.getElementById("hero-text").innerText = translations[lang].heroText;
            document.getElementById("search").placeholder = translations[lang].searchPlaceholder;
            document.querySelector(".hero button").innerText = translations[lang].searchButton;
            document.getElementById("jobs-heading").innerText = translations[lang].jobsHeading;
            document.getElementById("footer-text").innerHTML = translations[lang].footerText;
            
}

// Jobauflistung
const jobs = [
    {
        title: "Rasenmähen",
        Arbeitgeber: "Marianne Ulrich",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Tom Ahlers",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Justin Bieber",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Hannah Schmitz",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Jean Baptiste Grenouille",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Michael Berg",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Kristina Buchholz",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Gerald Wazza",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Jan Kuhlmann",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Frederikus Martinus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Yunus Jameelus",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Yeezus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Viktor Janot",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Heinz Ketchup",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Stefan Hipp",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Witali Masch",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Horst Mohrfeldt",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Hans-Peter Conradin",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Johan Klapp",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Johannes Groffmann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Doreen Lerche",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Jörg Knoll",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Klaudia Althaus",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Friederike Krohn",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Dieter Zavelberg",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Benjamin Mann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Christina Martin",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Herbert Grabosch",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Niklas Steiner",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Herta Herb",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Ben Görke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Inge Kampen",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Kirsten Reiß",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Lucas Höhle",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Josephine Hirtz",
        location: "München",
    },
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Ullrich Björkman",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nathalie Kuschel",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Kirsten Löhlein",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Rita Baumgarten",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Hendrik Weidenhaupt",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Olga Ohlig",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Holger Höll",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nico Nagel",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Heinz Häußler",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Verena Röhrs",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Felicitas Egger",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Sebastian Paschke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Ulrieke Van den Hout",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Marianne Ulrich",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Tom Ahlers",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Justin Bieber",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Hannah Schmitz",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Jean Baptiste Grenouille",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Michael Berg",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Kristina Buchholz",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Gerald Wazza",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Jan Kuhlmann",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Frederikus Martinus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Yunus Jameelus",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Yeezus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Viktor Janot",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Heinz Ketchup",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Stefan Hipp",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Witali Masch",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Horst Mohrfeldt",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Hans-Peter Conradin",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Johan Klapp",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Johannes Groffmann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Doreen Lerche",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Jörg Knoll",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Klaudia Althaus",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Friederike Krohn",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Dieter Zavelberg",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Benjamin Mann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Christina Martin",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Herbert Grabosch",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Niklas Steiner",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Herta Herb",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Ben Görke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Inge Kampen",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Kirsten Reiß",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Lucas Höhle",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Josephine Hirtz",
        location: "München",
    },
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Ullrich Björkman",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nathalie Kuschel",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Kirsten Löhlein",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Rita Baumgarten",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Hendrik Weidenhaupt",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Olga Ohlig",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Holger Höll",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nico Nagel",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Heinz Häußler",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Verena Röhrs",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Felicitas Egger",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Sebastian Paschke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Ulrieke Van den Hout",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Marianne Ulrich",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Tom Ahlers",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Justin Bieber",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Hannah Schmitz",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Jean Baptiste Grenouille",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Michael Berg",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Kristina Buchholz",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Gerald Wazza",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Jan Kuhlmann",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Frederikus Martinus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Yunus Jameelus",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Yeezus",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Viktor Janot",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Heinz Ketchup",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Stefan Hipp",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Witali Masch",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Horst Mohrfeldt",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Hans-Peter Conradin",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Johan Klapp",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Johannes Groffmann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Doreen Lerche",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Jörg Knoll",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Klaudia Althaus",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Friederike Krohn",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Dieter Zavelberg",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Benjamin Mann",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Christina Martin",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Herbert Grabosch",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Niklas Steiner",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Herta Herb",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Ben Görke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Inge Kampen",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Kirsten Reiß",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Lucas Höhle",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Josephine Hirtz",
        location: "München",
    },
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Ullrich Björkman",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nathalie Kuschel",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Kirsten Löhlein",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Rita Baumgarten",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Hendrik Weidenhaupt",
        location: "Hamburg",
    },
    {
        title: "Rasenmähen",
        Arbeitgeber: "Olga Ohlig",
        location: "Berlin",
    },
    {
        title: "Nachhilfe",
        Arbeitgeber: "Holger Höll",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Nico Nagel",
        location: "München",
    }
    ,
    {
        title: "Pflanzen gießen",
        Arbeitgeber: "Heinz Häußler",
        location: "Hamburg",
    },
    {
        title: "Einkaufen",
        Arbeitgeber: "Verena Röhrs",
        location: "München",
    },
    {
        title: "Putzen",
        Arbeitgeber: "Felicitas Egger",
        location: "Hamburg",
    },
    {
        title: "Babysitten",
        Arbeitgeber: "Sebastian Paschke",
        location: "München",
    },
    {
        title: "Mit Hund gehen",
        Arbeitgeber: "Ulrieke Van den Hout",
        location: "Hamburg",
    },
];

// Zum shufflen der Jobs beim reloaden
const shuffledjobs = jobs.sort((a,b,)=> 0.5 - Math.random());

// Darstellung der Angebote
function loadJobs() {
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Leeren der Jobliste

    shuffledjobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.Arbeitgeber}</p>
            <p>${job.location}</p>
        `;

        jobList.appendChild(jobCard);
    })
}
// Jobsuche
function searchJobs() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery) ||
        job.Arbeitgeber.toLowerCase().includes(searchQuery) ||
        job.location.toLowerCase().includes(searchQuery)
    );
    
    const jobList = document.getElementById("job-list");
    jobList.innerHTML = ""; // Leeren der Jobliste

    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");

            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p>${job.Arbeitgeber}</p>
                <p>${job.location}</p>
            `;

            jobList.appendChild(jobCard);
        });
    } else {
        jobList.innerHTML = "<p>Keine Jobs gefunden.</p>";
    }
}

// Laden der Jobs
loadJobs();

// Login
function login() {
    var Username = document.getElementById("username");
    var password = document.getElementById("password");
    const conditions = [
        Username.innerText = admin,
        password.innerText = password,
    ]
    if (conditions.indexOf(false) === -1) {File.open(jobithomeloggedin)}
}