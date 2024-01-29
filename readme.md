# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 29 Jan 2024 01:38:14 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az773-638 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `182`ns (100%)        | `210`ns (115%)                 | `5,494,505`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (188%)        | `382`ns (210%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (292%)        | `601`ns (330%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `652`ns (358%)        | `722`ns (397%)                 | `1,533,742`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,144`ns (629%)      | `1,253`ns (688%)               | `874,126`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,342`ns (737%)      | `1,494`ns (821%)               | `745,156`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,404`ns (771%)      | `1,553`ns (853%)               | `712,251`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,777`ns (1,526%)    | `2,985`ns (1,640%)             | `360,101`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,691`ns (2,577%)    | `5,051`ns (2,775%)             | `213,174`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,631`ns (5,292%)    | `9,855`ns (5,415%)             | `103,831`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `872`ns (100%)        | `992`ns (114%)                 | `1,146,789`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,111`ns (3,682%)   | `38,975`ns (4,470%)            | `31,142`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,263`ns (4,503%)   | `40,031`ns (4,591%)            | `25,469`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (196%)        | `442`ns (221%)                 | `2,557,545`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `470`ns (235%)        | `541`ns (271%)                 | `2,127,660`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `572`ns (286%)        | `652`ns (326%)                 | `1,748,252`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,223`ns (612%)      | `1,372`ns (686%)               | `817,661`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (651%)      | `1,493`ns (747%)               | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,499`ns (2,250%)    | `5,111`ns (2,556%)             | `222,272`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (182%)        | `422`ns (201%)                 | `2,617,801`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `541`ns (258%)        | `582`ns (277%)                 | `1,848,429`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,364`ns (650%)      | `1,454`ns (692%)               | `733,138`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,844`ns (878%)      | `1,983`ns (944%)               | `542,299`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,903`ns (2,811%)    | `6,055`ns (2,883%)             | `169,405`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,703`ns (3,192%)    | `6,947`ns (3,308%)             | `149,187`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `653`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (103%)        | `672`ns (115%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `682`ns (117%)        | `771`ns (132%)                 | `1,466,276`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `330`ns (100%)        | `361`ns (109%)                 | `3,030,303`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (164%)        | `592`ns (179%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
