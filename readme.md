# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 24 Jan 2024 10:16:26 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1245-599 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `190`ns (100%)        | `221`ns (116%)                 | `5,263,158`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (191%)        | `431`ns (227%)                 | `2,762,431`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (222%)        | `522`ns (275%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (317%)        | `713`ns (375%)                 | `1,661,130`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,033`ns (544%)      | `1,202`ns (633%)               | `968,054`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,252`ns (659%)      | `1,524`ns (802%)               | `798,722`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (669%)      | `1,534`ns (807%)               | `786,164`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,415`ns (1,271%)    | `2,837`ns (1,493%)             | `414,079`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,259`ns (2,242%)    | `5,023`ns (2,644%)             | `234,797`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,071`ns (4,774%)    | `9,631`ns (5,069%)             | `110,241`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `793`ns (100%)        | `942`ns (119%)                 | `1,261,034`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,951`ns (4,029%)   | `38,879`ns (4,903%)            | `31,298`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,935`ns (5,036%)   | `40,575`ns (5,117%)            | `25,041`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `220`ns (109%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (185%)        | `420`ns (209%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (254%)        | `563`ns (280%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (300%)        | `661`ns (329%)                 | `1,661,130`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,274`ns (634%)      | `1,382`ns (688%)               | `784,929`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (693%)      | `1,532`ns (762%)               | `717,875`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,751`ns (2,364%)    | `5,083`ns (2,529%)             | `210,482`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (171%)        | `411`ns (206%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `392`ns (196%)        | `491`ns (246%)                 | `2,551,020`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,194`ns (597%)      | `1,374`ns (687%)               | `837,521`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,513`ns (757%)      | `1,864`ns (932%)               | `660,939`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,703`ns (2,852%)    | `6,075`ns (3,038%)             | `175,346`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,895`ns (2,948%)    | `6,963`ns (3,482%)             | `169,635`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `633`ns (113%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `582`ns (104%)        | `651`ns (116%)                 | `1,718,213`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (116%)        | `743`ns (132%)                 | `1,533,742`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `302`ns (100%)        | `342`ns (113%)                 | `3,311,258`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (176%)        | `601`ns (199%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
