# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 06 May 2024 21:48:00 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1200-912 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (285%)        | `451`ns (347%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `521`ns (401%)        | `572`ns (440%)                 | `1,919,386`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (470%)        | `772`ns (594%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,172`ns (902%)      | `1,343`ns (1,033%)             | `853,242`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,443`ns (1,110%)    | `1,954`ns (1,503%)             | `693,001`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,483`ns (1,141%)    | `2,065`ns (1,588%)             | `674,309`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,715`ns (2,088%)    | `3,147`ns (2,421%)             | `368,324`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,719`ns (3,630%)    | `5,943`ns (4,572%)             | `211,909`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,383`ns (55,679%)  | `74,815`ns (57,550%)           | `13,815`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `862`ns (100%)        | `1,212`ns (141%)               | `1,160,093`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,111`ns (3,957%)   | `52,511`ns (6,092%)            | `29,316`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,543`ns (9,808%)   | `157,055`ns (18,220%)          | `11,828`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (238%)        | `340`ns (262%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (339%)        | `491`ns (378%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (393%)        | `551`ns (424%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,212`ns (932%)      | `1,312`ns (1,009%)             | `825,083`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,251`ns (3,270%)    | `4,431`ns (3,408%)             | `235,239`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,863`ns (28,356%)  | `37,439`ns (28,799%)           | `27,127`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `141`ns (117%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `280`ns (231%)        | `311`ns (257%)                 | `3,571,429`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (331%)        | `480`ns (397%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,242`ns (1,026%)    | `1,363`ns (1,126%)             | `805,153`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,543`ns (1,275%)    | `1,693`ns (1,399%)             | `648,088`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,031`ns (4,984%)    | `6,503`ns (5,374%)             | `165,810`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,575`ns (66,591%)  | `81,663`ns (67,490%)           | `12,411`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `571`ns (116%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (122%)        | `681`ns (139%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `231`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (247%)        | `572`ns (271%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
