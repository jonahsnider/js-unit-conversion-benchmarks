# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 10 Dec 2023 12:48:15 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1205-872 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `221`ns (111%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (181%)        | `412`ns (206%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (266%)        | `592`ns (296%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `632`ns (316%)        | `702`ns (351%)                 | `1,582,278`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,063`ns (532%)      | `1,163`ns (582%)               | `940,734`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,372`ns (686%)      | `1,503`ns (752%)               | `728,863`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (692%)      | `1,533`ns (767%)               | `723,066`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,677`ns (1,339%)    | `2,885`ns (1,443%)             | `373,552`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,751`ns (2,376%)    | `5,111`ns (2,556%)             | `210,482`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,447`ns (4,724%)    | `9,639`ns (4,820%)             | `105,854`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `873`ns (113%)                 | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,823`ns (4,127%)   | `38,559`ns (5,001%)            | `31,424`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,487`ns (5,122%)   | `39,999`ns (5,188%)            | `25,325`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (180%)        | `412`ns (205%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `462`ns (230%)        | `522`ns (260%)                 | `2,164,502`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (304%)        | `682`ns (339%)                 | `1,636,661`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (603%)      | `1,332`ns (663%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (643%)      | `1,464`ns (728%)               | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,463`ns (2,220%)    | `5,011`ns (2,493%)             | `224,065`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `231`ns (114%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (209%)        | `462`ns (229%)                 | `2,369,668`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `502`ns (249%)        | `552`ns (273%)                 | `1,992,032`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,383`ns (685%)      | `1,463`ns (724%)               | `723,066`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,804`ns (893%)      | `1,934`ns (957%)               | `554,324`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,983`ns (2,962%)    | `6,115`ns (3,027%)             | `167,140`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,843`ns (3,388%)    | `7,075`ns (3,502%)             | `146,135`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `652`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `672`ns (115%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `681`ns (117%)        | `762`ns (131%)                 | `1,468,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `301`ns (100%)        | `332`ns (110%)                 | `3,322,259`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (170%)        | `571`ns (190%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
