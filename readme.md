# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 24 Apr 2024 09:54:18 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1245-16 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (231%)        | `340`ns (262%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `430`ns (331%)        | `481`ns (370%)                 | `2,325,581`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (501%)        | `701`ns (539%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,202`ns (925%)      | `1,252`ns (963%)               | `831,947`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (1,041%)    | `1,473`ns (1,133%)             | `739,098`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,403`ns (1,079%)    | `1,472`ns (1,132%)             | `712,758`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,805`ns (2,158%)    | `2,927`ns (2,252%)             | `356,506`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (3,615%)    | `4,871`ns (3,747%)             | `212,811`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,639`ns (55,876%)  | `73,151`ns (56,270%)           | `13,767`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `951`ns (100%)        | `1,153`ns (121%)               | `1,051,525`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,519`ns (3,314%)   | `40,415`ns (4,250%)            | `31,727`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,351`ns (8,870%)   | `86,143`ns (9,058%)            | `11,855`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (229%)        | `391`ns (279%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (344%)        | `561`ns (401%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (401%)        | `691`ns (494%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,363`ns (974%)      | `1,794`ns (1,281%)             | `733,676`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,639`ns (3,314%)    | `5,763`ns (4,116%)             | `215,564`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,215`ns (26,582%)  | `38,847`ns (27,748%)           | `26,871`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (269%)        | `391`ns (301%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (362%)        | `521`ns (401%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,473`ns (1,133%)    | `1,583`ns (1,218%)             | `678,887`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,874`ns (1,442%)    | `2,055`ns (1,581%)             | `533,618`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,803`ns (5,233%)    | `7,255`ns (5,581%)             | `146,994`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,831`ns (62,178%)  | `81,407`ns (62,621%)           | `12,371`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `561`ns (114%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `571`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (122%)        | `691`ns (141%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `581`ns (264%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
