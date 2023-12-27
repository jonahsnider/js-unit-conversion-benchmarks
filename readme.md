# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Dec 2023 02:06:13 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az888-535 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `112`ns (100%)        | `201`ns (179%)                 | `8,928,571`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `220`ns (196%)        | `411`ns (367%)                 | `4,545,455`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `252`ns (225%)        | `461`ns (412%)                 | `3,968,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `331`ns (296%)        | `661`ns (590%)                 | `3,021,148`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `521`ns (465%)        | `1,142`ns (1,020%)             | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `691`ns (617%)        | `1,484`ns (1,325%)             | `1,447,178`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `721`ns (644%)        | `1,504`ns (1,343%)             | `1,386,963`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,283`ns (1,146%)    | `2,835`ns (2,531%)             | `779,423`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,685`ns (2,397%)    | `5,051`ns (4,510%)             | `372,439`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,511`ns (4,028%)    | `9,559`ns (8,535%)             | `221,680`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `762`ns (100%)        | `902`ns (118%)                 | `1,312,336`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,759`ns (4,168%)   | `38,495`ns (5,052%)            | `31,487`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,391`ns (5,169%)   | `39,999`ns (5,249%)            | `25,387`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `360`ns (171%)        | `401`ns (191%)                 | `2,777,778`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (229%)        | `531`ns (253%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (277%)        | `632`ns (301%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,294`ns (616%)      | `1,383`ns (659%)               | `772,798`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (644%)      | `1,454`ns (692%)               | `739,645`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,683`ns (2,230%)    | `4,923`ns (2,344%)             | `213,538`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `222`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (186%)        | `441`ns (221%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `460`ns (230%)        | `522`ns (261%)                 | `2,173,913`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,274`ns (637%)      | `1,394`ns (697%)               | `784,929`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,673`ns (837%)      | `1,884`ns (942%)               | `597,729`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,963`ns (2,982%)    | `6,195`ns (3,098%)             | `167,701`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,455`ns (3,228%)    | `6,927`ns (3,464%)             | `154,919`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `591`ns (100%)        | `661`ns (112%)                 | `1,692,047`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `621`ns (105%)        | `691`ns (117%)                 | `1,610,306`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `702`ns (119%)        | `791`ns (134%)                 | `1,424,501`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (173%)        | `572`ns (190%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
