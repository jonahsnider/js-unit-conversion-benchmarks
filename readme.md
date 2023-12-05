# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 05 Dec 2023 01:39:57 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az658-429 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `212`ns (151%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `252`ns (180%)        | `442`ns (316%)                 | `3,968,254`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `271`ns (194%)        | `553`ns (395%)                 | `3,690,037`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `382`ns (273%)        | `671`ns (479%)                 | `2,617,801`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `550`ns (393%)        | `1,142`ns (816%)               | `1,818,182`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `733`ns (524%)        | `1,544`ns (1,103%)             | `1,364,256`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `762`ns (544%)        | `1,554`ns (1,110%)             | `1,312,336`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,504`ns (1,074%)    | `2,785`ns (1,989%)             | `664,894`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,937`ns (2,098%)    | `5,071`ns (3,622%)             | `340,483`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,191`ns (3,708%)    | `9,815`ns (7,011%)             | `192,641`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `722`ns (100%)        | `822`ns (114%)                 | `1,385,042`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,423`ns (4,352%)   | `38,399`ns (5,318%)            | `31,824`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,519`ns (5,474%)   | `40,159`ns (5,562%)            | `25,304`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (172%)        | `401`ns (191%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `492`ns (234%)        | `531`ns (253%)                 | `2,032,520`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (272%)        | `622`ns (296%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,244`ns (592%)      | `1,333`ns (635%)               | `803,859`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,393`ns (663%)      | `1,493`ns (711%)               | `717,875`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,763`ns (2,268%)    | `5,011`ns (2,386%)             | `209,952`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `250`ns (119%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (176%)        | `420`ns (200%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (225%)        | `542`ns (258%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,333`ns (635%)      | `1,442`ns (687%)               | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,664`ns (792%)      | `1,845`ns (879%)               | `600,962`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,851`ns (2,786%)    | `6,031`ns (2,872%)             | `170,911`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,543`ns (3,116%)    | `6,943`ns (3,306%)             | `152,835`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `652`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `672`ns (115%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (117%)        | `762`ns (131%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `321`ns (100%)        | `351`ns (109%)                 | `3,115,265`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (175%)        | `611`ns (190%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
