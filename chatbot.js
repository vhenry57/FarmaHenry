// Preguntas y opciones: Rellena aquí tus preguntas y respuestas
const questions = [
    {
        question: "¿Qué tipo de medicamento buscas?",
        options: [
            "Analgesicos",
            "Antigripales",
            "Otro"
        ]
    },
    {
        question: "¿Tienes receta médica?",
        options: [
            "Sí, la tengo",
            "No, no la tengo",
            "Necesito ayuda"
        ]
    },
    // ... Agrega hasta 15 preguntas aquí (ejemplo de 3)
    {
        question: "¿Para quién es el medicamento?",
        options: [
            "Adulto",
            "Niño",
            "Persona mayor"
        ]
    },
    // Puedes continuar agregando preguntas...
];

// Puedes agregar hasta 15 preguntas, cada una con tres opciones.

let currentQuestion = 0;

function addMessage(text, sender = 'bot') {
    const chat = document.getElementById('chat-container');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = text;
    messageDiv.appendChild(bubble);
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight;
}

function showOptions(options) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleOption(opt);
        container.appendChild(btn);
    });
}

function handleOption(opt) {
    addMessage(opt, 'user');
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            addMessage(questions[currentQuestion].question, 'bot');
            showOptions(questions[currentQuestion].options);
        }, 500);
    } else {
        setTimeout(() => {
            addMessage("¡Gracias por usar FarmaBotHV! Si necesitas ayuda adicional, llama o acude a nuestro mostrador.", 'bot');
            document.getElementById('options-container').innerHTML = '';
        }, 500);
    }
}

window.onload = () => {
    addMessage("¡Hola! Soy FarmaBotHV, tu asistente nocturno. ¿En qué puedo ayudarte hoy?", 'bot');
    showOptions(questions[0].options);
};