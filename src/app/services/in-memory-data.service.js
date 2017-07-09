"use strict";
var sensor_test_1 = require("../sensor-test");
var sensor_test_2 = require("../sensor-test");
var sensor_test_3 = require("../sensor-test");
var InMemoryService = (function () {
    function InMemoryService() {
    }
    InMemoryService.prototype.createDb = function () {
        return {
            temperaturas: sensor_test_1.createTestTemperature(),
            peltierOn: sensor_test_2.peltierOn(),
            peltierOff: sensor_test_3.peltierOff()
        };
    };
    return InMemoryService;
}());
exports.InMemoryService = InMemoryService;
//# sourceMappingURL=in-memory-data.service.js.map