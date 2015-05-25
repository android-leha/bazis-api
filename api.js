// Базис API
// Помогает IDE найти функции.

var system = {
    /**
     *
     * @param file
     */
    require: function (file) {},
    include: function (file) {},
    log: function (text) {},
    apiVersion: 90,
    fileExists: function (file) {}
};

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

var Action = {
    Finish: function () {},
    Cancel: function () {},
    Properties: {
        Save: function () {},
        Load: function () {}
    }
};

var ActiveMaterial = {
    Make: function (name, Thickness) {}
};

var Model;

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

var OpenFurniture = function () {};

var AddHorizPanel = function (xl, zl, x2, z2, y) {};

var AddVertPanel = function (z1, y1, z2, y2, x) {};

var AddFrontPanel = function (x1, y1, x2, y2, z) {};

/**
 *
 * @param name
 * @constructor
 */
var AddBlock = function (name) {};

/**
 * Набор элементов
 *
 * @type {{}}
 */
var Block = {};

var BeginParametricBlock = function (name) {};

var EndParametricBlock = function () {};

var DeleteNewObjects = function () {};
var DeleteObject = function (object) {};
var alert = function (message) {};

var SetCamera = function () {};

var Panel = {
    AddButt: function (material, elem) {}
};

/**
 * Класс вектор
 *
 * @param x
 * @param y
 * @param z
 * @constructor
 */
function NewVector (x, y, z) {
    return {x: x, y: y, z: z};
}

/**
 * Класс точка
 *
 * @param x
 * @param y
 * @returns {{x: *, y: *}}
 * @constructor
 */
function NewPoint (x, y) {
    return {x: x, y: y};
}

var ftoNone = 0;
var ftoHorizontal = 1;
var ftoVertical = 2;
