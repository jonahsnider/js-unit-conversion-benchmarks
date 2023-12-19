# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 19 Dec 2023 13:42:53 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1429-529 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `231`ns (176%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `201`ns (153%)        | `380`ns (290%)                 | `4,975,124`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `242`ns (185%)        | `501`ns (382%)                 | `4,132,231`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `311`ns (237%)        | `632`ns (482%)                 | `3,215,434`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `491`ns (375%)        | `1,112`ns (849%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `652`ns (498%)        | `1,404`ns (1,072%)             | `1,533,742`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `662`ns (505%)        | `1,464`ns (1,118%)             | `1,510,574`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,223`ns (934%)      | `2,767`ns (2,112%)             | `817,661`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,617`ns (1,998%)    | `4,851`ns (3,703%)             | `382,117`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,511`ns (3,444%)    | `9,695`ns (7,401%)             | `221,680`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `782`ns (100%)        | `902`ns (115%)                 | `1,278,772`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,175`ns (4,114%)   | `39,295`ns (5,025%)            | `31,080`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,519`ns (5,054%)   | `40,159`ns (5,135%)            | `25,304`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (184%)        | `391`ns (205%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (241%)        | `511`ns (268%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (294%)        | `611`ns (320%)                 | `1,782,531`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,283`ns (672%)      | `1,374`ns (719%)               | `779,423`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,343`ns (703%)      | `1,452`ns (760%)               | `744,602`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,731`ns (2,477%)    | `4,951`ns (2,592%)             | `211,372`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `231`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `412`ns (204%)        | `472`ns (234%)                 | `2,427,184`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `522`ns (258%)        | `602`ns (298%)                 | `1,915,709`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,373`ns (680%)      | `1,522`ns (753%)               | `728,332`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,734`ns (858%)      | `2,004`ns (992%)               | `576,701`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,975`ns (2,958%)    | `6,283`ns (3,110%)             | `167,364`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,415`ns (3,176%)    | `7,135`ns (3,532%)             | `155,885`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `611`ns (100%)        | `681`ns (111%)                 | `1,636,661`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `631`ns (103%)        | `692`ns (113%)                 | `1,584,786`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `712`ns (117%)        | `783`ns (128%)                 | `1,404,494`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `321`ns (100%)        | `352`ns (110%)                 | `3,115,265`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `552`ns (172%)        | `611`ns (190%)                 | `1,811,594`/sec       |

<!-- endblock(results) -->
