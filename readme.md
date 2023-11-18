# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 18 Nov 2023 10:18:20 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1249-127 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `101`ns (100%)        | `201`ns (199%)                 | `9,900,990`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (199%)        | `382`ns (378%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `231`ns (229%)        | `482`ns (477%)                 | `4,329,004`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `311`ns (308%)        | `632`ns (626%)                 | `3,215,434`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `471`ns (466%)        | `1,092`ns (1,081%)             | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `672`ns (665%)        | `1,514`ns (1,499%)             | `1,488,095`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `681`ns (674%)        | `1,424`ns (1,410%)             | `1,468,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,202`ns (1,190%)    | `2,797`ns (2,769%)             | `831,947`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,535`ns (2,510%)    | `4,891`ns (4,843%)             | `394,477`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,451`ns (4,407%)    | `9,703`ns (9,607%)             | `224,669`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `833`ns (100%)        | `921`ns (111%)                 | `1,200,480`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,503`ns (3,782%)   | `38,623`ns (4,637%)            | `31,743`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,935`ns (4,794%)   | `40,543`ns (4,867%)            | `25,041`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (179%)        | `401`ns (200%)                 | `2,777,778`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (224%)        | `492`ns (245%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `592`ns (295%)        | `642`ns (319%)                 | `1,689,189`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,262`ns (628%)      | `1,344`ns (669%)               | `792,393`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,323`ns (658%)      | `1,444`ns (718%)               | `755,858`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,691`ns (2,334%)    | `5,003`ns (2,489%)             | `213,174`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `212`ns (112%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `402`ns (212%)        | `471`ns (248%)                 | `2,487,562`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `442`ns (233%)        | `511`ns (269%)                 | `2,262,443`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,293`ns (681%)      | `1,433`ns (754%)               | `773,395`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,753`ns (923%)      | `2,014`ns (1,060%)             | `570,451`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,835`ns (3,071%)    | `6,123`ns (3,223%)             | `171,380`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,463`ns (3,402%)    | `7,255`ns (3,818%)             | `154,727`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `651`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `672`ns (115%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `683`ns (117%)        | `772`ns (133%)                 | `1,464,129`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `291`ns (100%)        | `312`ns (107%)                 | `3,436,426`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (176%)        | `562`ns (193%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
