# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Aug 2024 11:56:11 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az1110-336 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `80`ns (114%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `351`ns (501%)        | `411`ns (587%)                 | `2,849,003`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (514%)        | `430`ns (614%)                 | `2,777,778`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (744%)        | `621`ns (887%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,062`ns (1,517%)    | `1,142`ns (1,631%)             | `941,620`/sec         |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,083`ns (1,547%)    | `1,202`ns (1,717%)             | `923,361`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,961%)    | `1,573`ns (2,247%)             | `728,332`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,455`ns (3,507%)    | `2,705`ns (3,864%)             | `407,332`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,431`ns (6,330%)    | `4,851`ns (6,930%)             | `225,683`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,999`ns (91,427%)  | `64,863`ns (92,661%)           | `15,625`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `751`ns (100%)        | `1,273`ns (170%)               | `1,331,558`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `29,535`ns (3,933%)   | `53,151`ns (7,077%)            | `33,858`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `76,479`ns (10,184%)  | `139,647`ns (18,595%)          | `13,075`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `100`ns (100%)        | `111`ns (111%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (281%)        | `370`ns (370%)                 | `3,558,719`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `361`ns (361%)        | `451`ns (451%)                 | `2,770,083`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `530`ns (530%)        | `621`ns (621%)                 | `1,886,792`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,093`ns (1,093%)    | `1,242`ns (1,242%)             | `914,913`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,419`ns (4,419%)    | `5,263`ns (5,263%)             | `226,296`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `32,895`ns (32,895%)  | `33,919`ns (33,919%)           | `30,400`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `81`ns (116%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `161`ns (230%)        | `351`ns (501%)                 | `6,211,180`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (287%)        | `321`ns (459%)                 | `4,975,124`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `841`ns (1,201%)      | `1,263`ns (1,804%)             | `1,189,061`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,483`ns (2,119%)    | `2,705`ns (3,864%)             | `674,309`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,547`ns (5,067%)    | `6,423`ns (9,176%)             | `281,928`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,039`ns (55,770%)  | `70,911`ns (101,301%)          | `25,615`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `350`ns (100%)        | `380`ns (109%)                 | `2,857,143`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `400`ns (114%)        | `431`ns (123%)                 | `2,500,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `501`ns (143%)        | `551`ns (157%)                 | `1,996,008`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `70`ns (100%)         | `71`ns (101%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `190`ns (271%)        | `200`ns (286%)                 | `5,263,158`/sec       |

<!-- endblock(results) -->
