# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 02 Feb 2024 04:46:42 GMT with Node.js v18.19.0 (V8 v10.2.154.26-node.28) on fv-az1152-416 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `180`ns (100%)        | `211`ns (117%)                 | `5,555,556`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `331`ns (184%)        | `402`ns (223%)                 | `3,021,148`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `482`ns (268%)        | `601`ns (334%)                 | `2,074,689`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (323%)        | `712`ns (396%)                 | `1,718,213`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `982`ns (546%)        | `1,173`ns (652%)               | `1,018,330`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,213`ns (674%)      | `1,563`ns (868%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (696%)      | `1,574`ns (874%)               | `798,085`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,395`ns (1,331%)    | `2,897`ns (1,609%)             | `417,537`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,131`ns (2,295%)    | `4,991`ns (2,773%)             | `242,072`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,919`ns (4,955%)    | `9,599`ns (5,333%)             | `112,120`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `803`ns (100%)        | `902`ns (112%)                 | `1,245,330`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,095`ns (3,997%)   | `39,007`ns (4,858%)            | `31,158`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,095`ns (4,993%)   | `40,703`ns (5,069%)            | `24,941`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `201`ns (111%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (183%)        | `382`ns (211%)                 | `3,012,048`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `432`ns (239%)        | `500`ns (276%)                 | `2,314,815`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (305%)        | `631`ns (349%)                 | `1,811,594`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (670%)      | `1,373`ns (759%)               | `824,402`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,233`ns (681%)      | `1,444`ns (798%)               | `811,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,331`ns (2,393%)    | `4,931`ns (2,724%)             | `230,894`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `231`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (201%)        | `471`ns (224%)                 | `2,369,668`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (210%)        | `502`ns (239%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,273`ns (606%)      | `1,353`ns (644%)               | `785,546`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,604`ns (764%)      | `1,783`ns (849%)               | `623,441`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,763`ns (2,744%)    | `5,951`ns (2,834%)             | `173,521`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,571`ns (3,129%)    | `6,907`ns (3,289%)             | `152,184`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `592`ns (100%)        | `662`ns (112%)                 | `1,689,189`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `621`ns (105%)        | `681`ns (115%)                 | `1,610,306`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `692`ns (117%)        | `772`ns (130%)                 | `1,445,087`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `310`ns (100%)        | `341`ns (110%)                 | `3,225,806`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (168%)        | `583`ns (188%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
