# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 20 Feb 2024 15:27:56 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1532-751 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `121`ns (110%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (309%)        | `371`ns (337%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (474%)        | `581`ns (528%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (592%)        | `711`ns (646%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (1,029%)    | `1,203`ns (1,094%)             | `883,392`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,333`ns (1,212%)    | `1,433`ns (1,303%)             | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (1,229%)    | `1,483`ns (1,348%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,705`ns (2,459%)    | `2,855`ns (2,595%)             | `369,686`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,599`ns (4,181%)    | `4,839`ns (4,399%)             | `217,439`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,767`ns (66,152%)  | `73,663`ns (66,966%)           | `13,742`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `802`ns (100%)        | `1,062`ns (132%)               | `1,246,883`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,015`ns (4,241%)   | `51,487`ns (6,420%)            | `29,399`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,967`ns (10,470%)  | `154,623`ns (19,280%)          | `11,909`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (224%)        | `331`ns (255%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (324%)        | `471`ns (362%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (432%)        | `611`ns (470%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,273`ns (979%)      | `1,373`ns (1,056%)             | `785,546`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,719`ns (3,630%)    | `4,911`ns (3,778%)             | `211,909`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,991`ns (28,455%)  | `37,663`ns (28,972%)           | `27,034`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (278%)        | `440`ns (338%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (385%)        | `570`ns (438%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,362`ns (1,048%)    | `1,553`ns (1,195%)             | `734,214`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,713`ns (1,318%)    | `2,305`ns (1,773%)             | `583,771`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,923`ns (5,325%)    | `8,439`ns (6,492%)             | `144,446`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,831`ns (62,178%)  | `82,111`ns (63,162%)           | `12,371`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `581`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `651`ns (135%)        | `722`ns (150%)                 | `1,536,098`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `251`ns (114%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (254%)        | `621`ns (281%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
