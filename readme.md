# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 26 Jan 2024 06:15:59 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1113-789 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `200`ns (180%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `230`ns (207%)        | `500`ns (450%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `240`ns (216%)        | `392`ns (353%)                 | `4,166,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `372`ns (335%)        | `682`ns (614%)                 | `2,688,172`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `531`ns (478%)        | `1,142`ns (1,029%)             | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `672`ns (605%)        | `1,363`ns (1,228%)             | `1,488,095`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `712`ns (641%)        | `1,443`ns (1,300%)             | `1,404,494`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,272`ns (1,146%)    | `2,787`ns (2,511%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,605`ns (2,347%)    | `4,863`ns (4,381%)             | `383,877`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,579`ns (4,125%)    | `9,583`ns (8,633%)             | `218,388`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `913`ns (118%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,903`ns (4,133%)   | `38,623`ns (5,003%)            | `31,345`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (5,194%)   | `40,863`ns (5,293%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `210`ns (110%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (190%)        | `421`ns (220%)                 | `2,762,431`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (247%)        | `531`ns (278%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (294%)        | `633`ns (331%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (635%)      | `1,332`ns (697%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (697%)      | `1,523`ns (797%)               | `750,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,523`ns (2,368%)    | `4,971`ns (2,603%)             | `221,092`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `221`ns (100%)        | `251`ns (114%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `411`ns (186%)        | `462`ns (209%)                 | `2,433,090`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (204%)        | `511`ns (231%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,303`ns (590%)      | `1,404`ns (635%)               | `767,460`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,774`ns (803%)      | `1,985`ns (898%)               | `563,698`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,983`ns (2,707%)    | `6,183`ns (2,798%)             | `167,140`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,795`ns (3,075%)    | `7,155`ns (3,238%)             | `147,167`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `572`ns (100%)        | `652`ns (114%)                 | `1,748,252`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `601`ns (105%)        | `671`ns (117%)                 | `1,663,894`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (117%)        | `763`ns (133%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `311`ns (100%)        | `342`ns (110%)                 | `3,215,434`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (174%)        | `602`ns (194%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
