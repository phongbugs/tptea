'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _models = require('../../models');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var resolvers = {
  RootQuery: {
    fetchOrderSystemData: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, _ref3, mainCategories, categories, menus, modifiers;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all([_models.MainCategory.findAll(), _models.Category.findAll(), _models.Menu.findAll(), _models.Modifier.findAll()]);

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 4);
                mainCategories = _ref3[0];
                categories = _ref3[1];
                menus = _ref3[2];
                modifiers = _ref3[3];
                return _context.abrupt('return', {
                  mainCategories: mainCategories,
                  categories: categories,
                  menus: menus,
                  modifiers: modifiers
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchOrderSystemData() {
        return _ref.apply(this, arguments);
      }

      return fetchOrderSystemData;
    }()
  },
  RootMutation: {}
};
exports.default = resolvers;