# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 18 Dec 2023 04:09:19 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az575-193 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `231`ns (116%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (186%)        | `431`ns (215%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (220%)        | `502`ns (251%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (326%)        | `723`ns (362%)                 | `1,536,098`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,083`ns (542%)      | `1,202`ns (601%)               | `923,361`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,324`ns (662%)      | `1,492`ns (746%)               | `755,287`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,412`ns (706%)      | `1,544`ns (772%)               | `708,215`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,707`ns (1,354%)    | `2,925`ns (1,463%)             | `369,413`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,731`ns (2,366%)    | `5,131`ns (2,566%)             | `211,372`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,511`ns (4,756%)    | `9,847`ns (4,924%)             | `105,141`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `712`ns (100%)        | `862`ns (121%)                 | `1,404,494`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,631`ns (4,443%)   | `38,367`ns (5,389%)            | `31,615`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,711`ns (5,577%)   | `40,255`ns (5,654%)            | `25,182`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `221`ns (109%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (169%)        | `381`ns (189%)                 | `2,923,977`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `422`ns (209%)        | `462`ns (229%)                 | `2,369,668`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (288%)        | `621`ns (307%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,274`ns (631%)      | `1,362`ns (674%)               | `784,929`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (670%)      | `1,453`ns (719%)               | `739,098`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,671`ns (2,312%)    | `4,923`ns (2,437%)             | `214,087`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `202`ns (100%)        | `221`ns (109%)                 | `4,950,495`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `412`ns (204%)        | `471`ns (233%)                 | `2,427,184`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (223%)        | `512`ns (253%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,343`ns (665%)      | `1,444`ns (715%)               | `744,602`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,733`ns (858%)      | `1,983`ns (982%)               | `577,034`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,923`ns (2,932%)    | `6,115`ns (3,027%)             | `168,833`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,735`ns (3,334%)    | `7,227`ns (3,578%)             | `148,478`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `661`ns (114%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `603`ns (104%)        | `672`ns (115%)                 | `1,658,375`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (115%)        | `762`ns (131%)                 | `1,488,095`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `302`ns (100%)        | `340`ns (113%)                 | `3,311,258`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (170%)        | `582`ns (193%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
