# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 27 Dec 2023 15:47:01 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az891-833 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `210`ns (175%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `220`ns (183%)        | `432`ns (360%)                 | `4,545,455`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `251`ns (209%)        | `541`ns (451%)                 | `3,984,064`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `351`ns (293%)        | `702`ns (585%)                 | `2,849,003`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `502`ns (418%)        | `1,184`ns (987%)               | `1,992,032`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `652`ns (543%)        | `1,372`ns (1,143%)             | `1,533,742`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `672`ns (560%)        | `1,493`ns (1,244%)             | `1,488,095`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,272`ns (1,060%)    | `2,865`ns (2,388%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,637`ns (2,198%)    | `4,951`ns (4,126%)             | `379,219`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,639`ns (3,866%)    | `9,639`ns (8,033%)             | `215,564`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `682`ns (100%)        | `803`ns (118%)                 | `1,466,276`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,391`ns (4,603%)   | `38,015`ns (5,574%)            | `31,856`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,423`ns (5,780%)   | `40,031`ns (5,870%)            | `25,366`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `220`ns (109%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (175%)        | `401`ns (200%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `462`ns (230%)        | `511`ns (254%)                 | `2,164,502`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (290%)        | `641`ns (319%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,233`ns (613%)      | `1,333`ns (663%)               | `811,030`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (643%)      | `1,433`ns (713%)               | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,651`ns (2,314%)    | `4,963`ns (2,469%)             | `215,008`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `212`ns (100%)        | `232`ns (109%)                 | `4,716,981`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `420`ns (198%)        | `462`ns (218%)                 | `2,380,952`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `480`ns (226%)        | `541`ns (255%)                 | `2,083,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,352`ns (638%)      | `1,474`ns (695%)               | `739,645`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,803`ns (850%)      | `2,004`ns (945%)               | `554,631`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,935`ns (2,800%)    | `6,135`ns (2,894%)             | `168,492`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,703`ns (3,162%)    | `7,095`ns (3,347%)             | `149,187`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `591`ns (100%)        | `652`ns (110%)                 | `1,692,047`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (103%)        | `671`ns (114%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `693`ns (117%)        | `772`ns (131%)                 | `1,443,001`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `312`ns (100%)        | `351`ns (113%)                 | `3,205,128`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `532`ns (171%)        | `591`ns (189%)                 | `1,879,699`/sec       |

<!-- endblock(results) -->
