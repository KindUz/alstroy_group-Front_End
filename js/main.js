const content = document.querySelectorAll('.benefits__types');
var elements = Array.from(content);
const screen_first = document.querySelector('.benefits__type-first');
const screen_second = document.querySelector('.benefits__type-second');
const screen_third = document.querySelector('.benefits__type-third');
const screen_fourth = document.querySelector('.benefits__type-fourth');
const screen_fifth = document.querySelector('.benefits__type-fifth');
const screen_sixth = document.querySelector('.benefits__type-sixth');
const screen_seven = document.querySelector('.benefits__type-seventh');
const screen_eight = document.querySelector('.benefits__type-eight');
const screen_nine = document.querySelector('.benefits__type-nine');
const screen_ten = document.querySelector('.benefits__type-ten');
const title = document.querySelector('.main__title');
const desc = document.querySelector('.description');

console.log(content);

screen_first.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Изготовление";
    desc.innerHTML = "Изготавливаем светопрозрачные конструкции из экологичных материалов. Применяем специально разработанные конструктивные системы, а остекление производим травмобезопасными стеклопакетами";
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_second.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Установка";
    console.log(desc);
    desc.innerHTML = "Строим конструкции под ключ совершенно любого вида размера и вида. Лично обсуждаем идею с заказчиком и выносим общее решение";
    screen_first.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_third.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Соблюдение требований";
    desc.innerHTML = "Наша команда работает по ГОСТ РФ. Наша главная обязанность - качество конструкции, которую мы устанавливаем";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_fourth.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Выполнение";
    desc.innerHTML = "Мы обладаем многолетним опытом работы в строительной сфере и гарантируем своим клиентам оптимальные варианты решения, обеспечивая тем самым безупречное качество услуг и оптимальные сроки.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_fifth.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "3D визуализация";
    desc.innerHTML = "3D-визуализация даёт очень реалистичную картинку, благодаря чему готовящиеся или уже сделанные проекты представляются клиентам в максимально наглядном виде.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_sixth.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Учет требований";
    desc.innerHTML = "Мы учтем все детали и особенности объекта, включая планировку, освещение, цветовые решения и выбор мебели.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_seven.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Производство расчетов";
    desc.innerHTML = "Мы учтем все пожелания заказчика и будем исходить из ориентировочной суммы.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_eight.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Уточнение стоимости";
    desc.innerHTML = "Современная методическая и сметно-нормативная база позволяет довольно точно определять стоимость строительства на всех стадиях разработки предпроектной и проектно-сметной документации.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_nine.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Партнерство";
    desc.innerHTML = "Предлагая фурнитуру на льготных условиях, обладая солидными складскими запасами, мы устанавливаем цены намного ниже конкурентов.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
    screen_ten.classList.remove("toggle");
})

screen_ten.addEventListener("click", function ()  {
    this.classList.add("toggle");
    title.innerHTML = "Наши работники";
    desc.innerHTML = "Наш штат состоит только из профессионалов, чья единственная цель - сделать свою работу максимально эффективно.";
    screen_first.classList.remove("toggle");
    screen_second.classList.remove("toggle");
    screen_third.classList.remove("toggle");
    screen_fourth.classList.remove("toggle");
    screen_fifth.classList.remove("toggle");
    screen_sixth.classList.remove("toggle");
    screen_seven.classList.remove("toggle");
    screen_nine.classList.remove("toggle");
    screen_eight.classList.remove("toggle");
})

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            top: 20,
            behavior: 'smooth',
            block: 'start'
        })
    })
}