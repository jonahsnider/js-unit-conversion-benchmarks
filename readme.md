# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 02 Dec 2023 01:52:37 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az975-565 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `191`ns (174%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `211`ns (192%)        | `391`ns (355%)                 | `4,739,336`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `292`ns (265%)        | `552`ns (502%)                 | `3,424,658`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `321`ns (292%)        | `682`ns (620%)                 | `3,115,265`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `481`ns (437%)        | `1,103`ns (1,003%)             | `2,079,002`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `661`ns (601%)        | `1,364`ns (1,240%)             | `1,512,859`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `672`ns (611%)        | `1,484`ns (1,349%)             | `1,488,095`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,192`ns (1,084%)    | `2,707`ns (2,461%)             | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,515`ns (2,286%)    | `4,883`ns (4,439%)             | `397,614`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,531`ns (4,119%)    | `9,583`ns (8,712%)             | `220,702`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `843`ns (109%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,615`ns (4,095%)   | `38,783`ns (5,024%)            | `31,631`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,191`ns (5,206%)   | `40,799`ns (5,285%)            | `24,881`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `191`ns (100%)        | `212`ns (111%)                 | `5,235,602`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (184%)        | `401`ns (210%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `472`ns (247%)        | `542`ns (284%)                 | `2,118,644`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (309%)        | `661`ns (346%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,232`ns (645%)      | `1,363`ns (714%)               | `811,688`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (677%)      | `1,482`ns (776%)               | `773,395`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,503`ns (2,358%)    | `4,951`ns (2,592%)             | `222,074`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `221`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `412`ns (205%)        | `461`ns (229%)                 | `2,427,184`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `500`ns (249%)        | `541`ns (269%)                 | `2,000,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (653%)      | `1,413`ns (703%)               | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,853`ns (922%)      | `2,035`ns (1,012%)             | `539,665`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,895`ns (2,933%)    | `6,055`ns (3,012%)             | `169,635`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,743`ns (3,355%)    | `7,087`ns (3,526%)             | `148,302`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `561`ns (100%)        | `622`ns (111%)                 | `1,782,531`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `602`ns (107%)        | `661`ns (118%)                 | `1,661,130`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `662`ns (118%)        | `743`ns (132%)                 | `1,510,574`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `331`ns (113%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (175%)        | `571`ns (196%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
