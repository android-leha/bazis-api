/**
 * BaziScript(BS) API
 * Базис API
 * Bazis Platform API
 * Standart Bazis Library (STBL)
 * Помогает IDE найти функции.
 * В WebStorm/PHPStorm для упрощения работы отключите все другие JavaScript библиотеки
 *
 * @author Alexey Vishnyakov
 */


/**
 * Показывает модальное окно с текстом
 *
 * @param {string} msg  Текст
 */
var alert = function (msg) {};

/**
 * Показвает модальное окно с текстом и кнопками Да-Нет
 *
 * @param {string}      msg Текст
 * @return {boolean}        Ответ пользователя
 */
var confirm = function (msg) {return true;};

/**
 * Пространство имен для функций платформы Bazis
 *
 * @namespace
 */
var system = {};
/**
 * Включение другого BS скрипта
 *
 * @param {string} file
 */
system.require = function (file) {};

/**
 * Аналогично require. Разница не известна
 *
 * @param {string} file
 */
system.include = function (file) {};
/**
 * Вывод сообщения в консоль
 * @param {*} text - Данные для вывода
 */
system.log = function (text) {};

/**
 * Версия BS API
 */
system.apiVersion = 90;

/**
 * Проверяет существование файла
 *
 * @param {string} file
 * @return {boolean}
 */
system.fileExists = function (file) {return true;};

/**
 * Параметрический блок: блок на котором было вызванно редактирование. При первичном запуске скрипта неопределен.
 *
 * @type {object}
 */
var ParametricBlock = {
    Name: "",                   // Наименование.
    ArtPos: "",                 // Артикул.
    Owner: Block,               // Родитель объекта.
    Visible: false,             // Видимость объекта.
    Selected: false,            // Является ли объект выделенным.
    List: "",                   // Является ли объект структурным.
    AsList: "" ,                // Привести объект к структурному.
    AsPanel: "" ,               // Привести объект к типу панели.
    Position: "" ,              // Положение объекта.
    PositionX: "",              // Координата x.
    PositionY: "",              // Координата y.
    PositionZ: '',              // Координата z.
    SetDefaultTransform: "",    // Установить нулевые положение и ориентацию объекта.
    GSize: new NewVector,       // Размер модели (расстояние между GMax и GMin).
    GMin: new NewVector,        // Вершина габаритного параллелепипеда, наименее удаленная от начала роди­тельской системы координат.
    GMax: new NewVector,        // Вершина габаритного параллелепипеда, наиболее удаленная от начала роди­тельской системы координат.
    GabMin: new NewVector,      // Вершина габаритного параллелепипеда, наименее удаленная от начала гло­бальной системы координат.
    GabMax: new NewVector,      // Вершина габаритного параллелепипеда, наиболее удаленная от начала гло­бальной системы координат.
    Find: function (name) {},
    Add: function (block) {},
    Count: 0,
    Objects: []
};

/**
 * Текущий скрипт
 *
 * @namespace
 */
var Action = {
    Continue: function () {},
    Finish: function () {},
    Cancel: function () {},
    Hint: "",
    Properties: {
        Save: function () {},
        Load: function () {}
    }
};

/**
 * Активный материал
 *
 * @type {{Make: Function}}
 */
var ActiveMaterial = {
    /**
     * Создать материал по наименованию и толщине или ширине
     *
     * @param name - Имя
     * @param Thickness - Толщина
     * @param width - Ширина
     */
    Make: function (name, Thickness, width) {}
};

/**
 * Текущая модель
 *
 * @namespace
 */
var Model = {};

/**
 * Виды анимации
 * @type {{None: number, Custom: number, DoorLeft: number, DoorRight: number, DoorFlap: number, DoorLift: number, SDoorLeft: number, SdoorRight: number, Box: number, Support: number, Handle: number, Facade: number}}
 */
var AnimationType = {
    None: 0,
    Custom: 1,
    DoorLeft: 2,
    DoorRight: 3,
    DoorFlap: 4,
    DoorLift: 5,
    SDoorLeft: 6,
    SdoorRight: 7,
    Box: 8,
    Support: 9,
    Handle: 10,
    Facade: 11
};

/**
 * Фурнитура
 * @typedef Furniture
 * @type {object}
 * @property {function} Mount - Монтировать к двум панелям
 * @property {function} Mount1 - Монтировать к одной панели
 */
var Furniture;
/**
 * Открыть фурнитуру
 *
 * @function OpenFurniture
 * @param {string}  file    Имя файла
 * @returns {Furniture}
 */
var OpenFurniture = function (file) {};

/**
 * Материал
 * @typedef Material
 * @property {string} Name - Имя материала
 * @property {number} Thickness - Толщина материала
 * @property {Function} SetActive - Сделать материал активным
 */
var Material;

/**
 * Материал кромки
 * @typedef ButtMaterial
 */
var ButtMaterial;

/**
 * Создать горизонтальную панель
 *
 * @constructs Panel
 * {number} @param x1
 * {number} @param z1
 * {number} @param x2
 * {number} @param z2
 * {number} @param y
 */
var AddHorizPanel = function (x1, z1, x2, z2, y) {};

/**
 * Создать вертикальную панель
 *
 * @constructs Panel
 * {number} @param z1
 * {number} @param y1
 * {number} @param z2
 * {number} @param y2
 * {number} @param x
 */
var AddVertPanel = function (z1, y1, z2, y2, x) {};

/**
 * Создать фронтальную панель
 *
 * @constructs Panel
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {number} z
 */
var AddFrontPanel = function (x1, y1, x2, y2, z) {};

/**
 * @constructs Block
 * @param name
 */
var AddBlock = function (name) {};

/**
 * Набор элементов
 *
 * @type {{}}
 */
var Block = {};

/**
 *
 * @param name
 * @constructs Block
 */
var BeginParametricBlock = function (name) {};

var EndParametricBlock = function () {};

var DeleteNewObjects = function () {};
var DeleteObject = function (object) {};

var SetCamera = function () {};

/**
 *
 * @type {{AddButt: Function}}
 */
var Panel = {
    AddButt: function (material, elem) {},
    Thickness: 0,
    Position: {},
    GabMin: {},
    GabMax: {},
    GMin: {},
    GMax: {},
    GSize: {},
    Build: function () {},
    /**
     * @param {string} name - Имя паза
     * @return Cut
     */
    AddCut: function (name) {}
};

/**
 * @type {{}}
 */
var Cut = {
    Name: "", // Имя паза.
    Sign: "", // Обозначение паза.
    Trajectory: {}, // Траектория паза.
    Contour: {}, // Профиль паза.
};

/**
 * Тип вектора - точки в трехмерном пространстве
 *
 * @typedef Vector
 * @property {number} x     Координата X
 * @property {number} y     Координата Y
 * @property {number} z     Координата Z
 */
var Vector = {x: 0, y: 0, z: 0};

/**
 * Создание нового вектора
 *
 * @param {number} x     Координата X
 * @param {number} y     Координата Y
 * @param {number} z     Координата Z
 * @returns {Vector}
 */
function NewVector (x, y, z) {};

/**
 * Точка в двухмерном пространстве
 *
 * @typedef {} Point
 * @property {number} x     Координата X
 * @property {number} y     Координата Y
 */

/**
 * Создание новой точки
 *
 * @param {number} x     Координата X
 * @param {number} y     Координата Y
 * @returns {Point}
 */
function NewPoint (x, y) {}

/**
 * @type {number}
 */
var ftoNone = 0;

/**
 * @type {number}
 */
var ftoHorizontal = 1;

/**
 * @type {number}
 */
var ftoVertical = 2;

/**
 * Создает новую кнопку на панеле
 *
 * @param name
 * @construct Button
 */
function NewButtonInput (name) {}
